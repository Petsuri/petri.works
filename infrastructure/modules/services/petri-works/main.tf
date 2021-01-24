locals {
  serverless_package_name             = "petri-works.zip"
  admin_auth_domain                   = "auth-${var.admin_domain}"
  fixed_cognito_route53_alias_zone_id = "Z2FDTNDATAQYW2"
}

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

module "admin_cloudfront" {
  source              = "../../networking/cloudfront"
  domain              = var.admin_domain
  environment         = var.environment
  acm_certificate_arn = module.acm_certificate.acm_certificate_arn
}

module "api_gateway" {
  source                     = "../../networking/api-gateway"
  domain                     = var.domain
  api_domain                 = var.api_domain
  environment                = var.environment
  api_domain_certificate_arn = module.acm_certificate.acm_certificate_arn
}


module "admin_cognito_user_pool" {
  source               = "../../iam/cognito-user-pool"
  name                 = "admin site users"
  domain               = local.admin_auth_domain
  acm_certificate_arn  = module.acm_certificate.acm_certificate_arn
  environment          = var.environment
  callback_urls        = ["https://${var.domain}/"]
  default_redirect_uri = "https://${var.domain}/"
  logout_urls          = ["https://${var.domain}/logout"]
}


module "route53" {
  source                    = "../../networking/route53"
  domain                    = var.domain
  api_domain                = var.api_domain
  environment               = var.environment
  alias_api_domain          = module.api_gateway.domain_name
  alias_api_host_zone_id    = module.api_gateway.hosted_zone_id
  domain_validation_options = module.acm_certificate.domain_validation_options
  site_domains = {
    1 = {
      domain             = var.domain,
      alias_domain       = module.cloudfront.domain_name,
      alias_host_zone_id = module.cloudfront.hosted_zone_id,
    },
    2 = {
      domain             = var.admin_domain,
      alias_domain       = module.admin_cloudfront.domain_name,
      alias_host_zone_id = module.admin_cloudfront.hosted_zone_id,
    },
    3 = {
      domain             = local.admin_auth_domain
      alias_domain       = module.admin_cognito_user_pool.domain_route53_alias_name
      alias_host_zone_id = local.fixed_cognito_route53_alias_zone_id
    }
  }
}

module "acm_cert_validation" {
  source                  = "../../networking/acm-certificate-validation"
  certificate_arn         = module.acm_certificate.acm_certificate_arn
  validation_record_fqdns = module.route53.cert_validation_record_fqdns
}

module "s3_serverless_distribution" {
  source            = "../../storage/s3"
  environment       = var.environment
  bucket_name       = "${var.domain}-serverless-static-files"
  purpose_of_bucket = "Bucket for ${var.domain} -serverless static files"
}

module "github_secret_s3_serverless_bucket_name" {
  source       = "../../github/secrets"
  secret_name  = "AWS_S3_SERVERLESS_BUCKET_NAME"
  secret_value = module.s3_serverless_distribution.bucket_name
}

module "github_secret_s3_serverless_bucket_key" {
  source       = "../../github/secrets"
  secret_name  = "AWS_S3_SERVERLESS_BUCKET_KEY"
  secret_value = local.serverless_package_name

}

module "iam_pipeline" {
  source         = "../../iam/pipeline-user"
  environment    = var.environment
  s3_bucket_arns = [module.cloudfront.cloudfront_s3_bucket_arn, module.s3_serverless_distribution.bucket_arn]
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

module "dynamodb_table_subscriptions" {
  source      = "../../storage/dynamodb"
  environment = var.environment
  table_name  = "subscriptions"
  hash_key    = "email"
  range_key   = "name"
  attributes = {
    1 = {
      name = "email",
      type = "S"
    },
    2 = {
      name = "name",
      type = "S"
    }
  }
}

module "iam_api_gateway_lambda" {
  source        = "../../iam/api-gateway-lambda-user"
  environment   = var.environment
  dynamodb_arns = [module.dynamodb_table_subscriptions.arn]
}

module "api_gate_way_lambdas" {
  source                            = "../../compute/api-gateway-lambdas"
  environment                       = var.environment
  iam_user_arn                      = module.iam_api_gateway_lambda.iam_user_arn
  s3_bucket                         = module.s3_serverless_distribution.bucket_name
  s3_key                            = local.serverless_package_name
  api_gateway_id                    = module.api_gateway.gateway_id
  api_gateway_custom_domain_name_id = module.api_gateway.custom_domain_id
  api_gateway_execution_arn         = module.api_gateway.execution_arn
  lambdas = {
    1 = {
      name        = "subscribe",
      handler     = "src/lambdas/subscribePost.handler",
      http_method = "POST",
      http_route  = "/subscribe"
    },
  }
}
