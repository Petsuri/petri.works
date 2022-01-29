import { failure, Result, success, unit, Unit } from '@petriworks/common';
import { Subscription } from './Subscription';
import { SubscriptionRepository } from './SubscriptionRepository';

export class SubscriptionService {
  private readonly _repository: SubscriptionRepository;

  public constructor(repository: SubscriptionRepository) {
    this._repository = repository;
  }

  public async subscribe(subscription: Subscription): Promise<Result<Unit, string>> {
    const exists = await this._repository.find(subscription.email);
    if (!exists.ok) {
      return failure(exists.error);
    }

    if (exists.value.isSome) {
      return success(unit());
    }

    const result = await this._repository.save(subscription);
    if (result.ok) {
      return success(unit());
    }

    return failure(result.error);
  }
}
