variable "environment" {
  type        = string
  description = "Environment where route53 is deployed"
}

variable "domain" {
  type        = string
  description = "Name of domain that will be used for public site"
}

variable "api_domain" {
  type        = string
  description = "Name of domain that is used for API"
}

variable "admin_domain" {
  type        = string
  description = "Name of admin domain that is used for admin site"
}
