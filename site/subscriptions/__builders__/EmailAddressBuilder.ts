import EmailAddress from '../EmailAddress';

export default class EmailAddressBuilder {
    private _email: string;

    public constructor() {
        this._email = 'xxx@petri.works';
    }

    public withEmail(value: string): EmailAddressBuilder {
        this._email = value;
        return this;
    }

    public build(): EmailAddress {
        return new EmailAddress(this._email);
    }

}
