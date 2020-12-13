variable "environment" {
  type        = string
  description = "Environment where DynamoDB is deployed"
}

variable "table_name" {
  type        = string
  description = "Name of table to be created"
}

variable "hash_key" {
  type        = string
  description = "The attribute to use as the hash (partition) key"
}

variable "range_key" {
  type        = string
  description = "The attribute to use as the rage (sort) key"
  default     = null
}

variable "attributes" {
  type = map(object({
    name = string,
    type = string,
  }))
  description = "DynamoDB table attributes"

}
