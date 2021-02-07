output "invoke_arn" {
  value = module.s3_bucket_lamda.invoke_arn
}

output "route_key" {
  value = aws_apigatewayv2_route.route.route_key
}

output "lambda_arn" {
  value = module.s3_bucket_lamda.arn
}
