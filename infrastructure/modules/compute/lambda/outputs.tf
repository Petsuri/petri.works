output "invoke_arn" {
  value = aws_lambda_function.lambda.invoke_arn
}

output "route_key" {
  value = aws_apigatewayv2_route.route.route_key
}
