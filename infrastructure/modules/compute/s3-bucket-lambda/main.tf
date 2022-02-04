locals {
  base_path            = "../../.."
  path_to_module       = "${local.base_path}/${var.module_path}"
  path_to_build_folder = "${local.base_path}/${var.package_path}"
  path_to_zip          = "${local.base_path}/.artifacts/${var.s3_bucket_key}"
}

resource "null_resource" "build_lambda" {
  provisioner "local-exec" {
    working_dir = local.path_to_build_folder
    command     = var.module_build_command
  }
}

data "archive_file" "lambda_archive" {
  depends_on  = [null_resource.build_lambda]
  type        = "zip"
  source_dir  = local.path_to_build_folder
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

  dynamic "environment" {
    for_each = length(keys(var.environment_variables)) == 0 ? [] : [true]
    content {
      variables = var.environment_variables
    }
  }
}
