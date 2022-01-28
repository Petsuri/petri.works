terraform {
  required_version = "=1.1.4"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.63.0"
    }
    github = {
      source  = "integrations/github"
      version = "~> 4.3.1"
    }
  }
}
