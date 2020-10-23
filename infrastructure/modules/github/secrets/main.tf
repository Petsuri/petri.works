resource "github_actions_secret" "secret" {
  repository      = "petri.works"
  secret_name     = var.secret_name
  plaintext_value = var.secret_name
}
