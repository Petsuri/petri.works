variable "certificate_arn" {
  type        = string
  description = "Certificate resource arn"
}

variable "validation_record_fqdns" {
  description = "List of FQDNs that implement the validation"
}
