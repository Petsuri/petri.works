variable "name" {
  type        = string
  description = "Name of Cognito user pool"
}

variable "environment" {
  type        = string
  description = "Environment where cognito user pool is created"
}

variable "domain" {
  type        = string
  description = "Domain for which user pools is applied"
}

variable "acm_certificate_arn" {
  type        = string
  description = "The ARN of the AWS Certificate Manager certificate that you wish to use with this domain"
}
