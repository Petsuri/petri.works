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
}

resource "aws_apigatewayv2_domain_name" "gateway_domain_name" {
  domain_name = var.api_domain
  domain_name_configuration {
    certificate_arn = var.api_domain_certificate_arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

resource "aws_apigatewayv2_authorizer" "admin_gateway_authorizer" {
  api_id           = aws_apigatewayv2_api.gateway.id
  authorizer_type  = "JWT"
  identity_sources = ["$request.header.Authorization"]
  name             = "${var.api_domain}-admin-authorizer"

  jwt_configuration {
    audience = [var.cognito_admin_user_pool_client_id]
    issuer   = "https://${var.cognito_admin_user_pool_endpoint}"
  }
}
