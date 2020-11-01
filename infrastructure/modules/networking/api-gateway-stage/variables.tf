
variable "api_gateway_id" {
  type        = string
  description = "ID of used API gateway"
}

variable "route_keys" {
  type        = list(string)
  description = "Routes which are added for the stage"
}

variable "name" {
  type        = string
  description = "Name of stage"
}
