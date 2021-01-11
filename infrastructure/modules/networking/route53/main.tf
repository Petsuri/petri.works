resource "aws_route53_zone" "domain" {
  name = var.domain
  tags = {
    Environment = var.environment
  }
}

resource "aws_route53_record" "www_ipv4" {
  for_each = var.site_domains

  zone_id = aws_route53_zone.domain.zone_id
  name    = each.value.domain
  type    = "A"

  alias {
    name                   = each.value.alias_domain
    zone_id                = each.value.alias_host_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_ipv6" {
  for_each = var.site_domains

  zone_id = aws_route53_zone.domain.zone_id
  name    = each.value.domain
  type    = "AAAA"

  alias {
    name                   = each.value.alias_domain
    zone_id                = each.value.alias_host_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "http_api_ipv4" {
  zone_id = aws_route53_zone.domain.zone_id
  type    = "A"
  name    = var.api_domain

  alias {
    name                   = var.alias_api_domain
    zone_id                = var.alias_api_host_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "cert_records" {
  for_each = {
    for dvo in var.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 300
  type            = each.value.type
  zone_id         = aws_route53_zone.domain.zone_id
}
