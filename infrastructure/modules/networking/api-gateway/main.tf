resource "aws_apigatewayv2_api" "gateway" {
  name                         = "${var.api_domain}-api-gateway"
  protocol_type                = "HTTP"
  disable_execute_api_endpoint = true
  version                      = 1

  cors_configuration {
    allow_methods = [
      "OPTIONS",
      "HEAD",
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE"
    ]
    allow_origins = ["https://${var.domain}"]
    allow_headers = [
      "Authorization",
      "Content-Type",
      "X-Amz-Date",
      "X-Amz-Security-Token",
      "X-Api-Key"
    ]
  }

  tags = {
    Environment = var.environment
  }
}

resource "aws_apigatewayv2_domain_name" "gateway_domain_name" {
  domain_name = var.api_domain
  domain_name_configuration {
    certificate_arn = var.api_domain_certificate_arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }

  tags = {
    Environment = var.environment
  }
}

# resource "aws_apigatewayv2_integration" "cors_preflight" {
#   api_id             = aws_apigatewayv2_api.gateway.id
#   integration_type   = "MOCK"
#   integration_method = "OPTIONS"
# }

# resource "aws_apigatewayv2_route" "example" {
#   api_id    = aws_apigatewayv2_api.example.id
#   route_key = "{cors+}"
# }
