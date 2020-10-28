variable "environment" {
  type        = string
  description = "Environment where route53 is deployed"
}

variable "api_domain" {
  type        = string
  description = "Name of API domain for which API gateway is created"
}

variable "api_domain_certificate_arn" {
  type        = string
  description = "The ARN of the AWS Certificate Manager certificate that you wish to use with API gateway"
}
