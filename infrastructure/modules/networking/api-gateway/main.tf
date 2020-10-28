resource "aws_apigatewayv2_api" "gateway" {
  name                         = "${var.api_domain}-api-gateway"
  protocol_type                = "HTTP"
  disable_execute_api_endpoint = true
  version                      = 1

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
