variable "environment" {
  type        = string
  description = "Environment where Lambda is deployed"
}

variable "name" {
  type        = string
  description = "Name of Lambda function"
}

variable "handler" {
  type        = string
  description = "Entrypoint for Lambda function"
}

variable "runtime" {
  type        = string
  description = "Runtime that is used for Lambda"
  default     = "nodejs12.x"
}

variable "iam_user_arn" {
  type        = string
  description = "IAM role attached to the Lambda Function. This governs both who / what can invoke your Lambda Function, as well as what resources our Lambda Function has access to."
}

variable "s3_bucket" {
  type        = string
  description = "The S3 bucket location containing the function's deployment package"
}

variable "s3_key" {
  type        = string
  description = "The S3 key of an object containing the function's deployment package"
}

variable "http_method" {
  type        = string
  description = "HTTP method"
}

variable "http_route" {
  type        = string
  description = "Route for lambda. For example /reviews"
}

variable "api_gateway_id" {
  type        = string
  description = "ID of used API gateway"
}

variable "api_gateway_execution_arn" {
  type        = string
  description = "Execution arn of API gateway that invokes lambda"
}
