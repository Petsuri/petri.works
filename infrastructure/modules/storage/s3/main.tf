locals {
  isPolicyAddedToBucket = length(var.bucket_policy_identifier) == 0 ? 0 : 1
}

resource "aws_s3_bucket" "bucket" {
  bucket = var.bucket_name
  acl    = var.bucket_acl

  versioning {
    enabled = var.is_versioning_enabled
  }

  tags = {
    Name        = var.purpose_of_bucket
    Environment = var.environment
  }
}

resource "aws_s3_bucket_public_access_block" "block_public_access" {
  bucket = aws_s3_bucket.bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

data "aws_iam_policy_document" "s3_policy_document" {
  count = local.isPolicyAddedToBucket

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
  count = local.isPolicyAddedToBucket

  bucket = aws_s3_bucket.bucket.id
  policy = data.aws_iam_policy_document.s3_policy_document[count.index].json
}
