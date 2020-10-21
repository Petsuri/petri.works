provider "aws" {
  region = "us-east-1"
  alias  = "acm_required_region"
}

resource "aws_acm_certificate" "cert" {
  provider          = aws.acm_required_region
  domain_name       = var.domain
  validation_method = "DNS"

  tags = {
    Environment = var.environment
  }

  lifecycle {
    create_before_destroy = true
  }
}
