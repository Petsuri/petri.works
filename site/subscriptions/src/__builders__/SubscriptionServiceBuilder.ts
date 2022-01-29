import { SubscriptionRepository } from '../SubscriptionRepository';
import { SubscriptionService } from '../SubscriptionService';
import { SubscriptionRepositoryStubBuilder } from './SubscriptionRepositoryStubBuilder';

export class SubscriptionServiceBuilder {
  private _repository: SubscriptionRepository = new SubscriptionRepositoryStubBuilder().build();

  public withRepository(value: SubscriptionRepository): SubscriptionServiceBuilder {
    this._repository = value;
    return this;
  }

  public build(): SubscriptionService {
    return new SubscriptionService(this._repository);
  }
}
