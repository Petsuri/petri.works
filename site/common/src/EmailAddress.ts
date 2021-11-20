export class EmailAddress {
  private readonly _email: string;

  public constructor(email: string) {
    if (!EmailAddress.isValid(email)) {
      throw new Error(`Invalid email address: ${email}`);
    }

    this._email = email;
  }

  public static isValid(email: string | null | undefined): boolean {
    if (!email) {
      return false;
    }

    const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/;
    return emailPattern.test(email.toLowerCase());
  }

  public get email(): string {
    return this._email;
  }
}
