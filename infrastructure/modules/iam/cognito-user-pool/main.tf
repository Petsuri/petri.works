locals {
  thirty_days      = 30
  https_domain_uri = "https://${var.domain}/"
}

resource "aws_cognito_user_pool" "cognito" {
  name = var.name

  username_attributes      = ["email"]
  auto_verified_attributes = ["email"]
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
      email_message = "Here '{username}' is your password for ${var.domain}: '{####}'"
      sms_message   = "Here '{username}' is your password for ${var.domain}: '{####}'"
    }
  }

  mfa_configuration = "OPTIONAL"
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

resource "aws_cognito_user_pool_client" "cognito_client" {
  name                                 = "${var.name}-client"
  user_pool_id                         = aws_cognito_user_pool.cognito.id
  allowed_oauth_flows                  = ["code"]
  allowed_oauth_flows_user_pool_client = true
  generate_secret                      = false

  callback_urls        = var.callback_urls
  default_redirect_uri = var.default_redirect_uri
  logout_urls          = var.logout_urls

  refresh_token_validity        = local.thirty_days
  prevent_user_existence_errors = "ENABLED"
  read_attributes               = ["email"]
  allowed_oauth_scopes          = concat(["email", "openid"], aws_cognito_resource_server.cognito_resource_server.scope_identifiers)
  explicit_auth_flows           = ["ALLOW_REFRESH_TOKEN_AUTH", "ALLOW_USER_PASSWORD_AUTH"]
  supported_identity_providers  = ["COGNITO"]
  write_attributes              = []
}

resource "aws_cognito_resource_server" "cognito_resource_server" {
  identifier = var.scope_prefix
  name       = "Resource server for user pool ${aws_cognito_user_pool.cognito.name}"
  dynamic "scope" {
    for_each = var.scopes

    content {
      scope_name        = scope.value.name
      scope_description = scope.value.description
    }
  }

  user_pool_id = aws_cognito_user_pool.cognito.id
}
