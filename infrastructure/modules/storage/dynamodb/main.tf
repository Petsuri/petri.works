resource "aws_dynamodb_table" "dynamodb_table" {
  name         = var.table_name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = var.hash_key
  range_key    = var.range_key

  dynamic "attribute" {
    for_each = var.attributes

    content {
      name = attribute.name
      type = attribute.type
    }
  }

  ttl {
    attribute_name = "TimeToExist"
    enabled        = false
  }

  # global_secondary_index {
  #   name               = "GameTitleIndex"
  #   hash_key           = "GameTitle"
  #   range_key          = "TopScore"
  #   write_capacity     = 10
  #   read_capacity      = 10
  #   projection_type    = "INCLUDE"
  #   non_key_attributes = ["UserId"]
  # }

  tags = {
    Environment = var.environment
  }
}
