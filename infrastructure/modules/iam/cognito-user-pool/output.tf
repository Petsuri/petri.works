output "domain_route53_alias_name" {
  value = aws_cognito_user_pool_domain.cognito_domain.cloudfront_distribution_arn
}
