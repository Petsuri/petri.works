resource "aws_s3_bucket" "bucket" {
  bucket = var.bucket_name
  acl    = var.bucket_acl

  tags = {
    Name        = var.purpose_of_bucket
    Environment = var.environment
  }
}

data "aws_iam_policy_document" "s3_policy_document" {
  statement {
    actions   = var.allowed_actions
    resources = ["${aws_s3_bucket.bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = var.bucket_policy_identifier
    }
  }
}

resource "aws_s3_bucket_policy" "s3_policy" {
  bucket = aws_s3_bucket.bucket.id
  policy = data.aws_iam_policy_document.s3_policy_document.json
}
