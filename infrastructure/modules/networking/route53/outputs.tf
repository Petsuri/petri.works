output "cert_validation_record_fqdns" {
  value = [for record in aws_route53_record.cert_records : record.fqdn]
}
