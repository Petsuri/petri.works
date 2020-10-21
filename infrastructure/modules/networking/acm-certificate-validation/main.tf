provider "aws" {
  region = "us-east-1"
  alias  = "acm_required_region"
}


resource "aws_acm_certificate_validation" "cert_validation" {
  provider                = aws.acm_required_region
  certificate_arn         = var.certificate_arn
  validation_record_fqdns = var.validation_record_fqdns
}
