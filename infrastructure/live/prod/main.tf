terraform {
  backend "remote" {
    organization = "petri-works"

    workspaces {
      name = "petri-works-global"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

module "petri-works" {
  source       = "../../modules/services/petri-works"
  domain       = "petri.works"
  api_domain   = "api.petri.works"
  admin_domain = "admin.petri.works"
  environment  = "production"
}
