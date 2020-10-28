output "domain_name" {
  value = aws_apigatewayv2_domain_name.gateway_domain_name.domain_name_configuration[0].target_domain_name
}

output "hosted_zone_id" {
  value = aws_apigatewayv2_domain_name.gateway_domain_name.domain_name_configuration[0].hosted_zone_id
}
