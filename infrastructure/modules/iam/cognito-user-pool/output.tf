output "domain_route53_alias_name" {
  value = aws_cognito_user_pool_domain.cognito_domain.cloudfront_distribution_arn
}

output "endpoint" {
  value = aws_cognito_user_pool.cognito.endpoint
}

output "app_client_id" {
  value = aws_cognito_user_pool_client.cognito_client.id
}