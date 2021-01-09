import { EmailAddress, Option, Result, Unit } from "@petriworks/common";

import { Subscription } from "./Subscription";

export interface SubscriptionRepository {
  find(email: EmailAddress): Promise<Result<Option<Subscription>, string>>;
  save(subsription: Subscription): Promise<Result<Unit, string>>;
}
