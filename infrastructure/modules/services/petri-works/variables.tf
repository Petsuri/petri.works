variable "environment" {
  type        = string
  description = "Environment where route53 is deployed"
}

variable "domain" {
  type        = string
  description = "Name of domain for which zone is created"
}

variable "api_domain" {
  type        = string
  description = "Name of domain for which zone is created"
}
