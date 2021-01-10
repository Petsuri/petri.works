import { Result, Option, Unit, success, none, unit } from "@petriworks/common";
import { Subscription } from "../Subscription";
import { SubscriptionRepository } from "../SubscriptionRepository";

export class SubscriptionRepositoryStubBuilder {
  private _find: Promise<Result<Option<Subscription>, string>> = Promise.resolve(success(none()));
  private _save: Promise<Result<Unit, string>> = Promise.resolve(success(unit()));

  public withFind(value: Result<Option<Subscription>, string>): SubscriptionRepositoryStubBuilder {
    this._find = Promise.resolve(value);
    return this;
  }

  public withSave(value: Result<Unit, string>): SubscriptionRepositoryStubBuilder {
    this._save = Promise.resolve(value);
    return this;
  }

  public build(): SubscriptionRepository {
    return {
      find: jest.fn().mockReturnValue(this._find),
      save: jest.fn().mockReturnValue(this._save),
    };
  }
}
