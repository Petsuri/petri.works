import {
  EmailAddress,
  failure,
  Name,
  none,
  Option,
  Result,
  some,
  success,
  Unit,
  unit,
} from '@petriworks/common';
import { DynamoDbClient } from '@petriworks/storage-dynamodb';
import { Subscription } from './Subscription';
import { SubscriptionRepository } from './SubscriptionRepository';

const TableName = 'subscriptions';

const findSubscription = async (
  client: DynamoDbClient,
  email: EmailAddress
): Promise<Result<Option<Subscription>, string>> => {
  const result = await client.scanItems({
    TableName: TableName,
    FilterExpression: 'email = :email',
    ExpressionAttributeValues: { ':email': email.email },
  });
  if (!result.ok) {
    return failure(result.error.message);
  }

  if (!result.value.isSome) {
    return success(none());
  }

  const first = result.value.value[0];
  return success(
    some({
      name: new Name(first['name'] as string),
      email: new EmailAddress(first['email'] as string),
    })
  );
};

const saveSubscription = async (
  client: DynamoDbClient,
  subscription: Subscription
): Promise<Result<Unit, string>> => {
  const result = await client.put({
    TableName: TableName,
    Item: { email: subscription.email.email, name: subscription.name.name },
  });
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
