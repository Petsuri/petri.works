import { AttributeMap, DocumentClient, ItemList } from "aws-sdk/clients/dynamodb";
import { failure, none, Option, Result, some, success, unit, Unit } from "@petriworks/common";

export type DynamoDbError = {
  readonly message: string,
  readonly code: string,
};

export interface DynamoDbClient {
  put(item: DocumentClient.PutItemInput): Promise<Result<Unit, DynamoDbError>>;
  scanItems(item: DocumentClient.ScanInput): Promise<Result<Option<ItemList>, DynamoDbError>>;
}

const putItem = async (client: DocumentClient, item: DocumentClient.PutItemInput): Promise<Result<Unit, DynamoDbError>> => {
  const request = client.put(item);
  return await request.promise().then(_ => {
    return success(unit());
  }).catch(value => {
    return failure({ message: value.message, code: value.code });
  });
};

const scanItems = async (client: DocumentClient, item: DocumentClient.ScanInput): Promise<Result<Option<ItemList>, DynamoDbError>> => {
  const request = client.scan(item);
  return await request.promise().then(object => {
    if (object.Items && 0 < object.Items.length) {
      return success(some(object.Items));
    }
    return success(none());
  }).catch(value => {
    return failure({ message: value.message, code: value.code });
  })
}

export const create = (client: DocumentClient): DynamoDbClient => {
  return {
    put: putItem.bind(null, client),
    scanItems: scanItems.bind(null, client),
  };
};
