variable "environment" {
  type        = string
  description = "Environment where route53 is deployed"
}

variable "domain" {
  type        = string
  description = "Name of domain for which zone is created"
}

variable "alias_domain" {
  type        = string
  description = "Alias domain used for route53 record"
}

variable "alias_host_zone_id" {
  type        = string
  description = "Alias host zone id used for route53 record"
}

variable "domain_validation_options" {
  description = "Domain validation options used for records"
}

variable "api_domain" {
  type        = string
  description = "Name of API domain for which record is added"
}

variable "alias_api_domain" {
  type        = string
  description = "Alias API domain used for route53 record"
}

variable "alias_api_host_zone_id" {
  type        = string
  description = "Alias API host zone id used for route53 record"
}
