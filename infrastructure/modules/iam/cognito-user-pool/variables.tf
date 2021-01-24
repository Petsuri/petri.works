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
  description = "Domain for login"
}

variable "acm_certificate_arn" {
  type        = string
  description = "The ARN of the AWS Certificate Manager certificate that you wish to use with this domain"
}

variable "callback_urls" {
  type        = list(string)
  description = "List of callback urls for user pool client"
}

variable "default_redirect_uri" {
  type        = string
  description = "Default redirect uri for login"
}

variable "logout_urls" {
  type        = list(string)
  description = "List of logout urls for the user pool client"
}
