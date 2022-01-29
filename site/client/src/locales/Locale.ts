export class Locale {
  private static readonly Finnish = new Locale('fi', 'Suomi');
  private static readonly English = new Locale('en', 'English');

  public readonly shortCode: string;
  public readonly name: string;

  private constructor(theShortCode: string, theName: string) {
    this.shortCode = theShortCode;
    this.name = theName;
  }

  public static finnish = (): Locale => Locale.Finnish;
  public static english = (): Locale => Locale.English;

  public static supported = () => [Locale.Finnish, Locale.English];

  public static find(shortCode: string): Locale {
    const found = this.supported().find((item) => item.shortCode === shortCode);
    if (found) {
      return found;
    }

    return this.english();
  }
}
