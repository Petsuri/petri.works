data "aws_iam_policy_document" "document" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["apigateway.amazonaws.com"]
    }
  }

  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }

}

resource "aws_iam_role" "api_gateway_lambda_role" {
  name               = "${var.environment}-api-gateway-lambda-policy"
  assume_role_policy = data.aws_iam_policy_document.document.json
}
