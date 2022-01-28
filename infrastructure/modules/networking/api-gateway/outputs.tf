output "domain_name" {
  value = aws_apigatewayv2_domain_name.gateway_domain_name.domain_name_configuration[0].target_domain_name
}

output "hosted_zone_id" {
  value = aws_apigatewayv2_domain_name.gateway_domain_name.domain_name_configuration[0].hosted_zone_id
}

output "gateway_id" {
  value = aws_apigatewayv2_api.gateway.id
}

output "execution_arn" {
  value = aws_apigatewayv2_api.gateway.execution_arn
}

output "custom_domain_id" {
  value = aws_apigatewayv2_domain_name.gateway_domain_name.id
}

output "api_gateway_admin_authorizer_id" {
  value = aws_apigatewayv2_authorizer.admin_gateway_authorizer.id
}
