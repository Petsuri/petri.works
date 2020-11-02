module "acm_certificate" {
  source      = "../../networking/acm-certificate"
  domain      = var.domain
  environment = var.environment
}

module "cloudfront" {
  source              = "../../networking/cloudfront"
  domain              = var.domain
  environment         = var.environment
  acm_certificate_arn = module.acm_certificate.acm_certificate_arn
}

module "api_gateway" {
  source                     = "../../networking/api-gateway"
  api_domain                 = var.api_domain
  environment                = var.environment
  api_domain_certificate_arn = module.acm_certificate.acm_certificate_arn
}

module "route53" {
  source                    = "../../networking/route53"
  domain                    = var.domain
  api_domain                = var.api_domain
  environment               = var.environment
  alias_domain              = module.cloudfront.domain_name
  alias_host_zone_id        = module.cloudfront.hosted_zone_id
  alias_api_domain          = module.api_gateway.domain_name
  alias_api_host_zone_id    = module.api_gateway.hosted_zone_id
  domain_validation_options = module.acm_certificate.domain_validation_options
}

module "acm_cert_validation" {
  source                  = "../../networking/acm-certificate-validation"
  certificate_arn         = module.acm_certificate.acm_certificate_arn
  validation_record_fqdns = module.route53.cert_validation_record_fqdns
}

module "iam_pipeline" {
  source         = "../../iam/pipeline-user"
  environment    = var.environment
  s3_bucket_arn  = module.cloudfront.cloudfront_s3_bucket_arn
  cloudfront_arn = module.cloudfront.cloudfront_arn
}

module "github_secret_access_key_id" {
  source       = "../../github/secrets"
  secret_name  = "AWS_ACCESS_KEY_ID"
  secret_value = module.iam_pipeline.iam_access_key_id
}

module "github_secret_access_key_secret" {
  source       = "../../github/secrets"
  secret_name  = "AWS_SECRET_ACCESS_KEY"
  secret_value = module.iam_pipeline.iam_access_key_secret
}

module "github_secret_cloudfront_distribution_id" {
  source       = "../../github/secrets"
  secret_name  = "CLOUDFRONT_DISTRIBUTION_ID"
  secret_value = module.cloudfront.cloudfront_distribution_id
}

module "iam_api_gateway_lambda" {
  source      = "../../iam/api-gateway-lambda-user"
  environment = var.environment
}

module "lambda_test" {
  source                    = "../../compute/lambda"
  environment               = var.environment
  name                      = "test"
  handler                   = "lambdas/helloworld.handler"
  iam_user_arn              = module.iam_api_gateway_lambda.iam_user_arn
  s3_bucket                 = "helloworld-dev-serverlessdeploymentbucket-16n7e449fb731"
  s3_key                    = "serverless/helloworld/dev/1604260102880-2020-11-01T19:48:22.880Z/helloworld.zip"
  http_method               = "GET"
  http_route                = "/hello"
  api_gateway_id            = module.api_gateway.gateway_id
  api_gateway_execution_arn = module.api_gateway.execution_arn
}

module "lambda_test_v2" {
  source                    = "../../compute/lambda"
  environment               = var.environment
  name                      = "test_v2"
  handler                   = "lambdas/helloworld.handler"
  iam_user_arn              = module.iam_api_gateway_lambda.iam_user_arn
  s3_bucket                 = "helloworld-dev-serverlessdeploymentbucket-16n7e449fb731"
  s3_key                    = "serverless/helloworld/dev/1604260102880-2020-11-01T19:48:22.880Z/helloworld.zip"
  http_method               = "GET"
  http_route                = "/hello/test"
  api_gateway_id            = module.api_gateway.gateway_id
  api_gateway_execution_arn = module.api_gateway.execution_arn
}

module "api_gateway_publish" {
  source                     = "../../networking/api-gateway-publish"
  name                       = "v1"
  api_gateway_id             = module.api_gateway.gateway_id
  api_gateway_domain_name_id = module.api_gateway.custom_domain_id
  route_keys                 = [module.lambda_test.route_key, module.lambda_test_v2.route_key]
}
