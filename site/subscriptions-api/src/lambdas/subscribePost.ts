import { APIGatewayProxyEvent, APIGatewayProxyHandler, Context } from 'aws-lambda';
import {
  validateSchema,
  NewSubscriptionSchema,
  NewSubscriptionRequest,
} from '@petriworks/api-contracts';
import { noContent, validationError } from '../results';
import { defaultClient } from '@petriworks/storage-dynamodb';
import { dynamoDbSubscriptionRepository, SubscriptionService } from '@petriworks/subscriptions';
import { EmailAddress, Name } from '@petriworks/common';

export const subscribePostHandler = async (
  subscriptionService: SubscriptionService,
  event: APIGatewayProxyEvent,
  _context: Context
) => {
  const result = await validateSchema<NewSubscriptionRequest>(event.body, NewSubscriptionSchema);
  if (result.ok) {
    const subscription = {
      name: new Name(result.value.name),
      email: new EmailAddress(result.value.email),
    };
    const subscriptionResult = await subscriptionService.subscribe(subscription);
    if (subscriptionResult.ok) {
      return noContent();
    }

    return validationError([{ field: '', message: subscriptionResult.error }]);
  }

  return validationError(result.error);
};

export const handler: APIGatewayProxyHandler = subscribePostHandler.bind(
  null,
  new SubscriptionService(
    dynamoDbSubscriptionRepository(
      defaultClient(process.env.DYNAMODB_REGION as string, process.env.DYNAMODB_ENDPOINT as string)
    )
  )
);
