module "lambda" {
  source = "../lambda"

  for_each = var.lambdas

  name        = each.value.name
  handler     = each.value.handler
  http_method = each.value.http_method
  http_route  = each.value.http_route

  environment               = var.environment
  iam_user_arn              = var.iam_user_arn
  s3_bucket                 = var.s3_bucket
  s3_key                    = var.s3_key
  api_gateway_id            = var.api_gateway_id
  api_gateway_execution_arn = var.api_gateway_execution_arn
}


module "api_gateway_publish" {
  source                     = "../../networking/api-gateway-publish"
  name                       = "v1"
  api_gateway_id             = var.api_gateway_id
  api_gateway_domain_name_id = var.api_gateway_custom_domain_name_id
  route_keys                 = values(module.lambda)[*].route_key
}

module "github_secret_lambda_names" {
  source       = "../../github/secrets"
  secret_name  = "AWS_LAMBDA_NAMES"
  secret_value = join(" ", values(module.lambda)[*].lambda_arn)
}
