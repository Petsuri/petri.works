locals {
  ten_seconds = 10000
}

data "aws_region" "current" {}

module "s3_bucket_lamda" {
  source = "../s3-bucket-lambda"

  name                  = var.name
  handler               = var.handler
  package_path          = var.package_path
  runtime               = var.runtime
  iam_user_arn          = var.iam_user_arn
  s3_bucket_name        = "${var.name}-static-files"
  s3_bucket_key         = var.s3_bucket_key
  purpose_of_bucket     = "Static files for ${var.name} lambda"
  environment           = var.environment
  environment_variables = { DYNAMODB_REGION = data.aws_region.current.name }
}

resource "aws_lambda_permission" "api_gateway_permission" {
  function_name = module.s3_bucket_lamda.function_name
  statement_id  = "AllowExecutionFromApiGatewayBase"
  action        = "lambda:InvokeFunction"
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${var.api_gateway_execution_arn}/*/*"
}


resource "aws_apigatewayv2_integration" "integration" {
  api_id           = var.api_gateway_id
  integration_type = "AWS_PROXY"

  connection_type        = "INTERNET"
  passthrough_behavior   = "WHEN_NO_MATCH"
  integration_method     = "POST"
  integration_uri        = module.s3_bucket_lamda.invoke_arn
  payload_format_version = "2.0"
  timeout_milliseconds   = local.ten_seconds
}

resource "aws_apigatewayv2_route" "route" {
  api_id    = var.api_gateway_id
  route_key = "${var.http_method} ${var.http_route}"
  target    = "integrations/${aws_apigatewayv2_integration.integration.id}"
  authorization_scopes = var.authorization_scopes
}
