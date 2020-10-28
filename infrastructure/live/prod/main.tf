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

provider "aws" {
  region = "us-east-1"
  alias  = "acm_required_region"
}

module "petri-works" {
  source      = "../../modules/services/petri-works"
  domain      = "petri.works"
  api_domain  = "api.petri.works"
  environment = "production"
  providers = {
    aws                     = aws
    aws.acm_required_region = aws.acm_required_region
  }
}
