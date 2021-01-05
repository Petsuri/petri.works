import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { create, DynamoDbClient } from "./DynamoDbClient";

export const defaultClient = (region: string, endpoint: string): DynamoDbClient => {
  return create(
    new DocumentClient({ region: region, endpoint: endpoint })
  );
}