resource "aws_apigatewayv2_stage" "stage" {
  api_id      = var.api_gateway_id
  name        = var.name
  auto_deploy = false

  dynamic "route_settings" {
    for_each = var.route_keys

    content {
      route_key              = route_settings.value
      throttling_burst_limit = 5000
      throttling_rate_limit  = 10000
    }
  }
}
