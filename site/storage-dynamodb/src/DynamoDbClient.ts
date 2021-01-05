import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { failure, Result, success, unit, Unit } from "@petriworks/common";

export type DynamoDbError = {
  message: string,
  code: string,
};

export interface DynamoDbClient {
  put(item: DocumentClient.PutItemInput): Promise<Result<Unit, DynamoDbError>>;
}

const putItem = async (client: DocumentClient, item: DocumentClient.PutItemInput): Promise<Result<Unit, DynamoDbError>> => {
  const request = client.put(item);
  return await request.promise().then(_ => {
    return success(unit());
  }).catch(value => {
    return failure({ message: value.message, code: value.code });
  });
};

export const create = (client: DocumentClient): DynamoDbClient => {
  return {
    put: putItem.bind(null, client)
  };
};
