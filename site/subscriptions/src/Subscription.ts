import { Name, EmailAddress } from "@petriworks/common"

export type Subscription = {
  readonly name: Name,
  readonly email: EmailAddress,
}