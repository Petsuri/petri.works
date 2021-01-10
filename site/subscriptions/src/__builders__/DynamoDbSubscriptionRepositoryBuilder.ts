import { DynamoDbClientStubBuilder } from "@petriworks/storage-dynamodb";
import { DynamoDbClient } from "@petriworks/storage-dynamodb";
import { dynamoDbSubscriptionRepository } from "../DynamoDbSubscriptionRepository";
import { SubscriptionRepository } from "../SubscriptionRepository";

export class DynamoDbSubscriptionRepositoryBuilder {
  private _client: DynamoDbClient = new DynamoDbClientStubBuilder().build();

  public withClient(value: DynamoDbClient): DynamoDbSubscriptionRepositoryBuilder {
    this._client = value;
    return this;
  }

  public build(): SubscriptionRepository {
    return dynamoDbSubscriptionRepository(this._client);
  }
}
