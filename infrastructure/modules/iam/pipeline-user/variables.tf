variable "environment" {
  type        = string
  description = "Environment where pipeline user is created"
}

variable "s3_bucket_arns" {
  type        = list(string)
  description = "List of s3 bucket arns to given deployment access"
}

variable "cloudfront_arn" {
  type        = string
  description = "Arn of Cloudfront distribution creating cache invalidation is allowed"
}
