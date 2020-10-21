output "acm_certificate_arn" {
  value = aws_acm_certificate.cert.arn
}

output "domain_validation_options" {
  value = aws_acm_certificate.cert.domain_validation_options
}

output "domain_name" {
  value = aws_acm_certificate.cert.domain_name
}
