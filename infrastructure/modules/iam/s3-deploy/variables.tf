variable "environment" {
  type        = string
  description = "Environment where route53 is deployed"
}

variable "s3_bucket_arn" {
  type        = string
  description = "Arn of s3 bucket to given deployment access"
}
