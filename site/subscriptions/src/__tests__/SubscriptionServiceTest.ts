import { failure } from '@petriworks/common';
import { some, success, unit, EmailAddressBuilder } from '@petriworks/common';
import { SubscriptionBuilder } from '../__builders__/SubscriptionBuilder';
import { SubscriptionRepositoryStubBuilder } from '../__builders__/SubscriptionRepositoryStubBuilder';
import { SubscriptionServiceBuilder } from '../__builders__/SubscriptionServiceBuilder';

describe('SubscriptionService', () => {
  describe('subscribe', () => {
    it('should return success with unit when subscription exists', async () => {
      const repository = new SubscriptionRepositoryStubBuilder()
        .withFind(success(some(new SubscriptionBuilder().build())))
        .build();
      const sut = new SubscriptionServiceBuilder().withRepository(repository).build();

      const actual = await sut.subscribe(new SubscriptionBuilder().build());

      const expected = success(unit());
      expect(actual).toStrictEqual(expected);
    });

    it('should call find with correct email', async () => {
      const expectedEmail = new EmailAddressBuilder().withEmail('xxx@petri.works').build();
      const repository = new SubscriptionRepositoryStubBuilder().build();
      const sut = new SubscriptionServiceBuilder().withRepository(repository).build();

      await sut.subscribe(new SubscriptionBuilder().withEmail(expectedEmail).build());

      expect(repository.find).toBeCalledWith(expectedEmail);
    });

    it("should return failure if can't find email", async () => {
      const repository = new SubscriptionRepositoryStubBuilder().withFind(failure('error')).build();
      const sut = new SubscriptionServiceBuilder().withRepository(repository).build();

      const actual = await sut.subscribe(new SubscriptionBuilder().build());

      const expected = failure('error');
      expect(actual).toStrictEqual(expected);
    });

    it('should save subscription correctly', async () => {
      const expectedSubscriptions = new SubscriptionBuilder()
        .withNameValue('Petri')
        .withEmailValue('works@petri.works')
        .build();
      const repository = new SubscriptionRepositoryStubBuilder().build();
      const sut = new SubscriptionServiceBuilder().withRepository(repository).build();

      await sut.subscribe(expectedSubscriptions);

      expect(repository.save).toHaveBeenCalledTimes(1);
      expect(repository.save).toBeCalledWith(expectedSubscriptions);
    });

    it('should return success after saving successfully', async () => {
      const repository = new SubscriptionRepositoryStubBuilder().withSave(success(unit())).build();
      const sut = new SubscriptionServiceBuilder().withRepository(repository).build();

      const actual = await sut.subscribe(new SubscriptionBuilder().build());

      const expected = success(unit());
      expect(actual).toStrictEqual(expected);
    });

    it('should return failure after saving is not successful', async () => {
      const repository = new SubscriptionRepositoryStubBuilder().withSave(failure('yYy')).build();
      const sut = new SubscriptionServiceBuilder().withRepository(repository).build();

      const actual = await sut.subscribe(new SubscriptionBuilder().build());

      const expected = failure('yYy');
      expect(actual).toStrictEqual(expected);
    });
  });
});
