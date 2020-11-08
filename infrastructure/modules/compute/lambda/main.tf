locals {
  ten_seconds = 10000
}

resource "aws_lambda_function" "lambda" {

  function_name = var.name
  handler       = var.handler
  runtime       = var.runtime
  role          = var.iam_user_arn
  s3_bucket     = var.s3_bucket
  s3_key        = var.s3_key
  tags = {
    Environment = var.environment
  }
}
resource "aws_lambda_permission" "api_gateway_permission" {
  function_name = aws_lambda_function.lambda.function_name
  statement_id  = "AllowExecutionFromApiGatewayBase"
  action        = "lambda:InvokeFunction"
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${var.api_gateway_execution_arn}/*/${var.http_route}"
}


resource "aws_apigatewayv2_integration" "integration" {
  api_id           = var.api_gateway_id
  integration_type = "AWS_PROXY"

  connection_type        = "INTERNET"
  passthrough_behavior   = "WHEN_NO_MATCH"
  integration_method     = "POST"
  integration_uri        = aws_lambda_function.lambda.invoke_arn
  payload_format_version = "2.0"
  timeout_milliseconds   = local.ten_seconds
}

resource "aws_apigatewayv2_route" "route" {
  api_id    = var.api_gateway_id
  route_key = "${var.http_method} ${var.http_route}"
  target    = "integrations/${aws_apigatewayv2_integration.integration.id}"
}
