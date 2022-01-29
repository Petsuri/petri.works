import { Name, NameBuilder, EmailAddress, EmailAddressBuilder } from '@petriworks/common';
import { Subscription } from '../Subscription';

export class SubscriptionBuilder {
  private _name: Name = new NameBuilder().build();
  private _email: EmailAddress = new EmailAddressBuilder().build();

  public withNameValue(value: string): SubscriptionBuilder {
    return this.withName(new NameBuilder().withName(value).build());
  }

  public withName(value: Name): SubscriptionBuilder {
    this._name = value;
    return this;
  }

  public withEmailValue(value: string): SubscriptionBuilder {
    return this.withEmail(new EmailAddressBuilder().withEmail(value).build());
  }

  public withEmail(value: EmailAddress): SubscriptionBuilder {
    this._email = value;
    return this;
  }

  public build(): Subscription {
    return { name: this._name, email: this._email };
  }
}
