export class Locale {
    readonly locale: string;
    readonly name: string;

    public static finnish = (): Locale => 
        new Locale('fi', 'Suomi');

    public static english = (): Locale => 
    new Locale('en', 'English');

    constructor(theLocale: string, theName: string) 
    {
        this.locale = theLocale;
        this.name = theName;
    }
}