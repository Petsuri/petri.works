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

module "route53" {
  source                    = "../../networking/route53"
  domain                    = var.domain
  environment               = var.environment
  alias_domain              = module.cloudfront.domain_name
  alias_host_zone_id        = module.cloudfront.hosted_zone_id
  domain_validation_options = module.acm_certificate.domain_validation_options
}

module "acm_cert_validation" {
  source                  = "../../networking/acm-certificate-validation"
  certificate_arn         = module.acm_certificate.acm_certificate_arn
  validation_record_fqdns = module.route53.cert_validation_record_fqdns
}
