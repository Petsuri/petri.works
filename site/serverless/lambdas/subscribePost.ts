import { APIGatewayProxyHandler } from "aws-lambda";
import {
  validateSchema,
  NewSubscriptionSchema,
  NewSubscriptionRequest,
} from "@petriworks/api-contracts";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const result = await validateSchema<NewSubscriptionRequest>(event.body, NewSubscriptionSchema);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello from petri.works. Testing pipeline!!",
      },
      null,
      2
    ),
  };
};
