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

variable "authorization_scopes" {
  type        = set(string)
  description = "Scope(s) that API resource requires. If empty, resource will be public."
}

variable "authorizer_id" {
  type        = string
  description = "Authorizer id that is used to verify scope access"
}

variable "runtime" {
  type        = string
  description = "Runtime that is used for Lambda"
  default     = "nodejs12.x"
}

variable "environment_variables" {
  description = "A map that defines environment variables for the Lambda Function."
  type        = map(string)
  default     = {}
}

variable "iam_user_arn" {
  type        = string
  description = "IAM role attached to the Lambda Function. This governs both who / what can invoke your Lambda Function, as well as what resources our Lambda Function has access to."
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

variable "package_path" {
  type        = string
  description = "Path to Javascript package"
}

variable "s3_bucket_key" {
  type        = string
  description = "The S3 key of an object containing the function's deployment package"
}

variable "module_path" {
  type = string
  description = "Path where module is located"
}

variable "module_build_command" {
  type = string
  description = "Command that is used to build the module"
}