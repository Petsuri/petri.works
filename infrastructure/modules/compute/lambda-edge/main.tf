resource "aws_lambda_function" "lambda" {

  function_name = var.name
  handler       = var.handler
  runtime       = var.runtime
  role          = var.iam_user_arn
  s3_bucket     = var.s3_bucket
  s3_key        = var.s3_key
  publish       = true
  tags = {
    Environment = var.environment
  }
}
