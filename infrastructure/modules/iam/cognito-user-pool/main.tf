resource "aws_cognito_user_pool" "cognito" {
  name = var.name

  username_attributes = ["email"]
  username_configuration {
    case_sensitive = false
  }

  schema {
    name                     = "email"
    attribute_data_type      = "String"
    developer_only_attribute = false
    mutable                  = true
    required                 = true

    string_attribute_constraints {
      min_length = 5
      max_length = 100
    }
  }

  admin_create_user_config {
    allow_admin_create_user_only = true
    invite_message_template {
      email_subject = "Password for ${var.domain}"
      email_message = "Here '{username}' is your password for ${var.domain}: '{####}"
      sms_message   = "Here '{username}' is your password for ${var.domain}: '{####}"
    }
  }

  mfa_configuration = "ON"
  software_token_mfa_configuration {
    enabled = true
  }

  device_configuration {
    challenge_required_on_new_device      = true
    device_only_remembered_on_user_prompt = true
  }

  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }

  email_configuration {
    email_sending_account = "COGNITO_DEFAULT"
  }

  verification_message_template {
    default_email_option  = "CONFIRM_WITH_LINK"
    email_subject_by_link = "Confirm your email"
    email_message_by_link = "Confirm you email by opening: {##Click Here##}"
  }

  password_policy {
    minimum_length    = 8
    require_lowercase = true
    require_numbers   = true
    require_symbols   = true
    require_uppercase = true

    temporary_password_validity_days = 7
  }

  tags = {
    Environment = var.environment
  }
}

resource "aws_cognito_user_pool_domain" "cognito_domain" {
  domain          = var.domain
  certificate_arn = var.acm_certificate_arn
  user_pool_id    = aws_cognito_user_pool.cognito.id
}
