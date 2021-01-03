import { APIGatewayProxyHandler } from "aws-lambda";
import { match } from "@petriworks/common";
import {
  validateSchema,
  NewSubscriptionSchema,
  NewSubscriptionRequest,
} from "@petriworks/api-contracts";
import { noContent, validationError } from "../results";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const result = await validateSchema<NewSubscriptionRequest>(event.body, NewSubscriptionSchema);
  return match(
    result,
    (_) => {
      return noContent();
    },
    (errors) => {
      return validationError(errors);
    }
  );

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
