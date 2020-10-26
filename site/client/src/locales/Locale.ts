export class Locale {
    private static readonly Finnish = new Locale('fi', 'Suomi');
    private static readonly English = new Locale('en', 'English');

    readonly locale: string;
    readonly name: string;

    public static finnish = (): Locale => Locale.Finnish;

    public static english = (): Locale => Locale.English;

    private constructor(theLocale: string, theName: string) {
        this.locale = theLocale;
        this.name = theName;
    }
}