resource "aws_route53_zone" "domain" {
  name = var.domain
  tags = {
    Environment = var.environment
  }
}

resource "aws_route53_record" "ns" {
  allow_overwrite = true
  name            = var.domain
  ttl             = 30
  type            = "NS"
  zone_id         = aws_route53_zone.domain.zone_id

  records = [
    "ns-1532.awsdns-63.org.",
    "ns-100.awsdns-12.com.",
    "ns-1763.awsdns-28.co.uk.",
    "ns-686.awsdns-21.net.",
  ]
}


resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.domain.zone_id
  name    = var.domain
  type    = "A"

  alias {
    name                   = var.alias_domain
    zone_id                = var.alias_host_zone_id
    evaluate_target_health = true
  }
}
