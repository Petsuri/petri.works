import { DynamoDbError } from '../DynamoDbClient';

export class DynamoDbErrorBuilder {
  private _message: string = 'message';
  private _code: string = 'code';

  public withMessage(value: string): DynamoDbErrorBuilder {
    this._message = value;
    return this;
  }

  public withCode(value: string): DynamoDbErrorBuilder {
    this._code = value;
    return this;
  }

  public build(): DynamoDbError {
    return {
      code: this._code,
      message: this._message,
    };
  }
}
