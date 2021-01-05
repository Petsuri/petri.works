import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { create, DynamoDbClient } from "./DynamoDbClient";

export const defaultClient = (region: string, endpoint: string): DynamoDbClient => {
  return create(
    new DocumentClient({
      region: region, endpoint: endpoint,
      accessKeyId: 'MOCK_ACCESS_KEY_ID',  // needed if you don't have aws credentials at all in env
      secretAccessKey: 'MOCK_SECRET_ACCESS_KEY' // needed if you don't have aws credentials at all in env
    })
  );
}