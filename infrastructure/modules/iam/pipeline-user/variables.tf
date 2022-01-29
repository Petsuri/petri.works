variable "environment" {
  type        = string
  description = "Environment where pipeline user is created"
}

variable "s3_bucket_arns" {
  type        = list(string)
  description = "List of s3 bucket arns to given deployment access"
}

variable "cloudfront_arns" {
  type        = list(string)
  description = "Arn of Cloudfront distributions creating cache invalidation is allowed"
}
