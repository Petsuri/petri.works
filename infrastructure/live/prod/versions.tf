terraform {
  required_version = "= 0.14.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    github = {
      source  = "hashicorp/github"
      version = "~> 3.1.0"
    }
  }
}
