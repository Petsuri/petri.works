variable "environment" {
  type        = string
  description = "Environment where route53 is deployed"
}

variable "domain" {
  type        = string
  description = "Name of domain for client"
}

variable "api_domain" {
  type        = string
  description = "Name of API domain for which API gateway is created"
}

variable "api_domain_certificate_arn" {
  type        = string
  description = "The ARN of the AWS Certificate Manager certificate that you wish to use with API gateway"
}

variable "cognito_admin_user_pool_endpoint" {
  type        = string
  description = "Cognito user pool base domain for API gateway to authorize admin API resoure usage"
}

variable "cognito_admin_user_pool_client_id" {
  type = string
  description = "Cognito user pool app client id for API gateway to authorize admin API resoure usage"
}