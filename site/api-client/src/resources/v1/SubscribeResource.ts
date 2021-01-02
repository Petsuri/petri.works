import { ApiResourceBase } from "../ApiResourceBase";
import { NewSubscriptionRequest } from "@petriworks/api-contracts";

export class SubscribeResource extends ApiResourceBase {

  public constructor(values: NewSubscriptionRequest) {
    super("POST", "v1/subscribe", values);
  }
}