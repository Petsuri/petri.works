import { AttributeMap, DocumentClient } from "aws-sdk/clients/dynamodb";
import { failure, none, Option, Result, some, success, unit, Unit } from "@petriworks/common";

export type DynamoDbError = {
  message: string,
  code: string,
};

export interface DynamoDbClient {
  put(item: DocumentClient.PutItemInput): Promise<Result<Unit, DynamoDbError>>;
  get(item: DocumentClient.GetItemInput): Promise<Result<Option<AttributeMap>, DynamoDbError>>;
}

const putItem = async (client: DocumentClient, item: DocumentClient.PutItemInput): Promise<Result<Unit, DynamoDbError>> => {
  const request = client.put(item);
  return await request.promise().then(_ => {
    return success(unit());
  }).catch(value => {
    return failure({ message: value.message, code: value.code });
  });
};

const getItem = async (client: DocumentClient, item: DocumentClient.GetItemInput): Promise<Result<Option<AttributeMap>, DynamoDbError>> => {
  const request = client.get(item);
  return await request.promise().then(object => {
    if (object.Item !== undefined) {
      return success(some(object.Item));
    }
    return success(none());
  }).catch(value => {
    return failure({ message: value.message, code: value.code });
  })
}

export const create = (client: DocumentClient): DynamoDbClient => {
  return {
    put: putItem.bind(null, client),
    get: getItem.bind(null, client),
  };
};
