module "lambda" {
  source = "../api-gateway-integration-lambda"

  for_each = var.lambdas

  name                 = each.value.name
  handler              = each.value.handler
  http_method          = each.value.http_method
  http_route           = each.value.http_route
  module_path          = each.value.module_path
  module_build_command = each.value.module_build_command
  package_path         = each.value.package_path
  authorizer_id        = each.value.authorizer_id
  authorization_scopes = each.value.authorization_scopes
  s3_bucket_key        = "${each.value.name}.zip"

  environment               = var.environment
  iam_user_arn              = var.iam_user_arn
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
