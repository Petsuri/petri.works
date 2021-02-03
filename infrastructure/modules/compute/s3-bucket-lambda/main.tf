locals {
  base_path      = "../../.."
  path_to_folder = "${local.base_path}/${var.package_path}"
  path_to_zip    = "${local.base_path}/.artifacts/${var.s3_bucket_key}"
}

data "archive_file" "lambda_archive" {
  type        = "zip"
  source_dir  = local.path_to_folder
  output_path = local.path_to_zip
}


module "lambda_s3_bucket" {
  source                = "../../storage/s3"
  bucket_name           = var.s3_bucket_name
  purpose_of_bucket     = var.purpose_of_bucket
  environment           = var.environment
  is_versioning_enabled = true
}

resource "aws_s3_bucket_object" "object" {
  bucket = module.lambda_s3_bucket.bucket_name
  key    = var.s3_bucket_key
  source = data.archive_file.lambda_archive.output_path

  etag = data.archive_file.lambda_archive.output_md5
}

resource "aws_lambda_function" "lambda" {

  function_name     = var.name
  handler           = var.handler
  runtime           = var.runtime
  role              = var.iam_user_arn
  s3_bucket         = module.lambda_s3_bucket.bucket_name
  s3_key            = var.s3_bucket_key
  s3_object_version = aws_s3_bucket_object.object.version_id
  publish           = true
  tags = {
    Environment = var.environment
  }
}
