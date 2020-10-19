module "cloudfront" {
  source      = "../../networking/cloudfront"
  domain      = var.domain
  environment = var.environment
}

module "route53" {
  source             = "../../networking/route53"
  domain             = var.domain
  environment        = var.environment
  alias_domain       = module.cloudfront.domain_name
  alias_host_zone_id = module.cloudfront.hosted_zone_id
}
