import { DocumentClient, PutItemInput } from "aws-sdk/clients/dynamodb";
import { failure, Result, success, unit, Unit } from "@petriworks/common";

export default class DynamoDbClient {
  private _client: DocumentClient;

  public constructor(client: DocumentClient) {
    this._client = client;
    // this._client = new DocumentClient({
    //     region: region,
    //     endpoint: endpoint
    // });
  }

  public async put(item: PutItemInput): Promise<Result<Unit, string>> {
    const request = this._client.put(item);
    return await request.promise().then((value) => {
      if (value.$response.error) {
        return failure(value.$response.error.message);
      }

      return success(unit());
    });
  }
}
