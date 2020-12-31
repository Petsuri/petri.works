import { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
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
