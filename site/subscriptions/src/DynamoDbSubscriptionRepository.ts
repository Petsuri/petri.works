import { EmailAddress, failure, Name, none, Option, Result, some, success, Unit, unit } from "@petriworks/common";
import { DynamoDbClient } from "@petriworks/storage-dynamodb";
import { Subscription } from "./Subscription";
import { SubscriptionRepository } from "./SubscriptionRepository";

const TableName = "subscriptions";

const findSubscription = async (client: DynamoDbClient, email: EmailAddress): Promise<Result<Option<Subscription>, string>> => {

  const result = await client.get({ TableName: TableName, Key: { email: email.email } });
  if (!result.ok) {
    return failure(result.error.message);
  }

  if (!result.value.isSome) {
    return success(none());
  }

  return success(some({
    name: new Name(result.value.value["name"].S as string),
    email: new EmailAddress(result.value.value["email"].S as string),
  }));
}

const saveSubscription = async (client: DynamoDbClient, subscription: Subscription): Promise<Result<Unit, string>> => {
  const result = await client.put({ TableName: TableName, Item: { email: subscription.email.email, name: subscription.name } });
  if (result.ok) {
    return success(unit());
  }
  return failure(result.error.message);
};

export const dynamoDbSubscriptionRepository = (client: DynamoDbClient): SubscriptionRepository => {
  return {
    find: findSubscription.bind(null, client),
    save: saveSubscription.bind(null, client),
  };
};