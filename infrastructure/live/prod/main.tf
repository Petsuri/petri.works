terraform {
  backend "remote" {
    organization = "petri-works"

    workspaces {
      name = "petri-works-global"
    }
  }
}

provider "aws" {
  region = "eu-north-1"
}

module "petri-works" {
  source      = "../../modules/services/petri-works"
  domain      = "petri.works"
  environment = "production"
}
