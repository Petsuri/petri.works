import { DocumentClient, PutItemInput } from "aws-sdk/clients/dynamodb";
import { failure, Result, success, unit, Unit } from "@petriworks/common";

export type DynamoDbError = {
  message: string,
  code: string,
};

export interface DynamoDbClient {
  put(item: PutItemInput): Promise<Result<Unit, DynamoDbError>>;
}

const putItem = async (client: DocumentClient, item: PutItemInput): Promise<Result<Unit, DynamoDbError>> => {
  const request = client.put(item);
  return await request.promise().then((value) => {
    if (value.$response.error) {
      return failure({ message: value.$response.error.message, code: value.$response.error.code });
    }

    return success(unit());
  });
};

export const create = (client: DocumentClient): DynamoDbClient => {
  return {
    put: putItem.bind(null, client)
  };
};
