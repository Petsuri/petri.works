variable "secret_name" {
  type        = string
  description = "Name of secret to be stored"
}

variable "secret_value" {
  type        = string
  description = "Value of secret to be stored"
  sensitive   = true
}
