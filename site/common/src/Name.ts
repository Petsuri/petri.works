export class Name {
  public static readonly MaxLength: number = 50;
  public static readonly MinLenght: number = 1;

  private readonly _name: string;

  public constructor(name: string) {
    if (!Name.isValid(name)) {
      throw new Error(
        `Invalid name: ${name}. Name length must be between ${Name.MinLenght} and ${Name.MaxLength} characters`
      );
    }

    this._name = name;
  }

  public static isValid(email: string | null | undefined): boolean {
    if (!email) {
      return false;
    }

    return this.MinLenght <= email.length && email.length <= this.MaxLength;
  }

  public get name(): string {
    return this._name;
  }
}
