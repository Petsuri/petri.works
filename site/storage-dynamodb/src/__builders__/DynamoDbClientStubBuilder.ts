import { none, Option, Result, success, unit, Unit } from '@petriworks/common';
import { ItemList } from 'aws-sdk/clients/dynamodb';
import { DynamoDbClient, DynamoDbError } from '../DynamoDbClient';

export class DynamoDbClientStubBuilder {
  private _put: Promise<Result<Unit, DynamoDbError>> = Promise.resolve(success(unit()));
  private _scanItems: Promise<Result<Option<ItemList>, DynamoDbError>> = Promise.resolve(
    success(none())
  );

  public withPut(value: Result<Unit, DynamoDbError>): DynamoDbClientStubBuilder {
    this._put = Promise.resolve(value);
    return this;
  }

  public withScan(value: Result<Option<ItemList>, DynamoDbError>): DynamoDbClientStubBuilder {
    this._scanItems = Promise.resolve(value);
    return this;
  }

  public build(): DynamoDbClient {
    return {
      put: jest.fn().mockReturnValue(this._put),
      scanItems: jest.fn().mockReturnValue(this._scanItems),
    };
  }
}
