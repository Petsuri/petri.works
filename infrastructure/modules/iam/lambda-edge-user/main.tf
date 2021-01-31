data "aws_iam_policy_document" "document" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com", "edgelambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "lambda_edge_user_role" {
  name               = "${var.environment}-lambda-edge-user-role"
  assume_role_policy = data.aws_iam_policy_document.document.json
}

data "aws_iam_policy_document" "lambda_edge_logs" {
  statement {
    effect = "Allow"
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]
    resources = ["*"]
  }
}

resource "aws_iam_role_policy" "log_policy" {
  name = "${var.environment}-lambda-edge-log-policy"
  role = aws_iam_role.lambda_edge_user_role.id

  policy = data.aws_iam_policy_document.lambda_edge_logs.json
}
