import { some, success, unit } from '@petriworks/common';
import { EmailAddressBuilder } from '@petriworks/common';
import { none } from '@petriworks/common';
import { failure } from '@petriworks/common';
import { DynamoDbErrorBuilder } from '@petriworks/storage-dynamodb';
import { DynamoDbClientStubBuilder } from '@petriworks/storage-dynamodb';
import { DynamoDbSubscriptionRepositoryBuilder } from '../__builders__/DynamoDbSubscriptionRepositoryBuilder';
import { SubscriptionBuilder } from '../__builders__/SubscriptionBuilder';

describe('DynamoDbSubscriptionRepository', () => {
  describe('find', () => {
    it('should scan items with given email', async () => {
      const client = new DynamoDbClientStubBuilder().build();
      const sut = new DynamoDbSubscriptionRepositoryBuilder().withClient(client).build();

      await sut.find(new EmailAddressBuilder().withEmail('scan@petri.works').build());

      expect(client.scanItems).toHaveBeenCalledWith({
        TableName: 'subscriptions',
        FilterExpression: 'email = :email',
        ExpressionAttributeValues: { ':email': 'scan@petri.works' },
      });
    });

    it('should return failure if unable to scan items', async () => {
      const client = new DynamoDbClientStubBuilder()
        .withScan(failure(new DynamoDbErrorBuilder().withMessage('xxx').build()))
        .build();
      const sut = new DynamoDbSubscriptionRepositoryBuilder().withClient(client).build();

      const actual = await sut.find(new EmailAddressBuilder().build());

      const expected = failure('xxx');
      expect(actual).toStrictEqual(expected);
    });

    it('should return success none if items not found', async () => {
      const client = new DynamoDbClientStubBuilder().withScan(success(none())).build();
      const sut = new DynamoDbSubscriptionRepositoryBuilder().withClient(client).build();

      const actual = await sut.find(new EmailAddressBuilder().build());

      const expected = success(none());
      expect(actual).toStrictEqual(expected);
    });

    it('should return first found email from array', async () => {
      const client = new DynamoDbClientStubBuilder()
        .withScan(
          success(
            some([
              { name: 'first', email: 'first@petri.works' } as { [key: string]: any },
              { name: 'second', email: 'second@petri.works' },
            ])
          )
        )
        .build();
      const sut = new DynamoDbSubscriptionRepositoryBuilder().withClient(client).build();

      const actual = await sut.find(new EmailAddressBuilder().build());

      const expected = success(
        some(
          new SubscriptionBuilder()
            .withNameValue('first')
            .withEmailValue('first@petri.works')
            .build()
        )
      );
      expect(actual).toStrictEqual(expected);
    });
  });
  describe('save', () => {
    it('should save subscription with correct values', async () => {
      const subscription = new SubscriptionBuilder()
        .withNameValue('save')
        .withEmailValue('save@petri.works')
        .build();
      const client = new DynamoDbClientStubBuilder().build();
      const sut = new DynamoDbSubscriptionRepositoryBuilder().withClient(client).build();

      await sut.save(subscription);

      expect(client.put).toHaveBeenCalledWith({
        TableName: 'subscriptions',
        Item: { email: 'save@petri.works', name: 'save' },
      });
    });

    it('should return success when subscription is saved correctly', async () => {
      const client = new DynamoDbClientStubBuilder().withPut(success(unit())).build();
      const sut = new DynamoDbSubscriptionRepositoryBuilder().withClient(client).build();

      const actual = await sut.save(new SubscriptionBuilder().build());

      const expected = success(unit());
      expect(actual).toStrictEqual(expected);
    });

    it('should return error message when subscription is not saved', async () => {
      const client = new DynamoDbClientStubBuilder()
        .withPut(failure(new DynamoDbErrorBuilder().withMessage('xXXx').build()))
        .build();
      const sut = new DynamoDbSubscriptionRepositoryBuilder().withClient(client).build();

      const actual = await sut.save(new SubscriptionBuilder().build());

      const expected = failure('xXXx');
      expect(actual).toStrictEqual(expected);
    });
  });
});
