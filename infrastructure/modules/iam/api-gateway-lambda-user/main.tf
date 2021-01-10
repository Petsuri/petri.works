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

data "aws_iam_policy_document" "dynamodb" {
  statement {
    effect = "Allow"
    actions = [
      "dynamodb:Get*",
      "dynamodb:Delete*",
      "dynamodb:PutItem",
      "dynamodb:Scan",
    ]

    resources = var.dynamodb_arns
  }
}

resource "aws_iam_role_policy" "api_gateway_dynamodb_access_policy" {
  name = "${var.environment}-api-gateway-dynamodb-policy"
  role = aws_iam_role.api_gateway_lambda_role.id

  policy = data.aws_iam_policy_document.dynamodb.json
}
