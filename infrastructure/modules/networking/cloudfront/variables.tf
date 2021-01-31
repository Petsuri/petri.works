variable "environment" {
  type        = string
  description = "Environment where route53 is deployed"
}

variable "domain" {
  type        = string
  description = "Name of domain for which zone is created"
}

variable "acm_certificate_arn" {
  type        = string
  description = "The ARN of the AWS Certificate Manager certificate that you wish to use with this distribution"
}

variable "security_headers_lambda_arn" {
  type        = string
  description = "The ARN of the lambda@edge that will set security headers for the response"
}
