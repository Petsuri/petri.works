variable "environment" {
  type        = string
  description = "Environment where route53 is deployed"
}

variable "dynamodb_arns" {
  type        = list(string)
  description = "DynamoDB arn that user can access"
}
