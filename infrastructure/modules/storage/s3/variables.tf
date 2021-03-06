variable "environment" {
  type        = string
  description = "Environment where route53 is deployed"
}

variable "bucket_name" {
  type        = string
  description = "Name of bucket"
}

variable "purpose_of_bucket" {
  type        = string
  description = "In what way is bucket going to be used"
}

variable "allowed_actions" {
  type        = list(string)
  description = "Actions that are allowed for bucket"
  default     = []
}

variable "bucket_policy_identifier" {
  type        = list(string)
  description = "List of identifiers for principals"
  default     = []
}

variable "bucket_acl" {
  type        = string
  description = "ACL used for the bucket"
  default     = "private"
}

variable "is_versioning_enabled" {
  type        = bool
  description = " Enable versioning. Once you version-enable a bucket, it can never return to an unversioned state. You can, however, suspend versioning on that bucket."
  default     = false
}
