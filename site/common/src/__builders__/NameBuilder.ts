import { Name } from '../Name';

export class NameBuilder {
  private _name: string;

  public constructor() {
    this._name = 'Petri Works';
  }

  public withName(value: string): NameBuilder {
    this._name = value;
    return this;
  }

  public build(): Name {
    return new Name(this._name);
  }
}
