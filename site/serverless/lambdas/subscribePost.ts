import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import {
  validateSchema,
  NewSubscriptionSchema,
  NewSubscriptionRequest,
} from "@petriworks/api-contracts";
import { noContent, validationError } from "../src/results";
import { defaultClient } from "@petriworks/storage-dynamodb";

export const handler: APIGatewayProxyHandler = async (event, _context) => {

  return validationError([{ field: process.env.DYNAMODB_REGION as string, message: process.env.DYNAMODB_ENDPOINT as string }]);

  // const result = await validateSchema<NewSubscriptionRequest>(event.body, NewSubscriptionSchema);
  // if (result.ok) {
  //   return await createSubscription(result.value);
  // }

  // return validationError(result.error);
};

// const createSubscription = async (request: NewSubscriptionRequest): Promise<APIGatewayProxyResult> => {

//   const client = defaultClient(process.env.DYNAMODB_REGION as string, process.env.DYNAMODB_ENDPOINT as string);
//   const result = await client.put({ TableName: "subscriptions", Item: { email: request.email, name: request.name } });
//   if (result.ok) {
//     return noContent();
//   }

//   return validationError([{ field: "", message: result.error.message }]);
// } 