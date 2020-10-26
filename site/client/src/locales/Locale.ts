export class Locale {
  private static readonly Finnish = new Locale("fi", "Suomi");
  private static readonly English = new Locale("en", "English");

  readonly locale: string;
  readonly name: string;

  private constructor(theLocale: string, theName: string) {
    this.locale = theLocale;
    this.name = theName;
  }



  public static finnish = (): Locale => Locale.Finnish;
  public static english = (): Locale => Locale.English;

  public static supported = () => [Locale.Finnish, Locale.English];

  public static find(locale: string): Locale {
    const found = this.supported().find(item => item.locale === locale);
    if (found) {
      return found;
    }

    return this.finnish();
  }
}
