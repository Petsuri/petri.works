provider "aws" {
  alias = "acm_required_region"
}

module "acm_certificate" {
  source      = "../../networking/acm-certificate"
  domain      = var.domain
  environment = var.environment

  providers = {
    aws = aws.acm_required_region
  }
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

  providers = {
    aws = aws.acm_required_region
  }
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

  providers = {
    aws = aws.acm_required_region
  }
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
