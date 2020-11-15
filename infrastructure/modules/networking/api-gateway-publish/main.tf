resource "aws_apigatewayv2_stage" "stage" {
  api_id      = var.api_gateway_id
  name        = var.name
  auto_deploy = true

  dynamic "route_settings" {
    for_each = var.route_keys

    content {
      route_key              = route_settings.value
      throttling_burst_limit = 5000
      throttling_rate_limit  = 10000
    }
  }
}

resource "aws_apigatewayv2_api_mapping" "custom_domain" {
  api_id          = var.api_gateway_id
  domain_name     = var.api_gateway_domain_name_id
  stage           = aws_apigatewayv2_stage.stage.id
  api_mapping_key = var.name
}
