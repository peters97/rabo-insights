export class InsightsData {
    public 'Salaris': number = 0;
    public 'Uitkering': number = 0;
    public 'Pensioen': number = 0;
    public 'Toeslagen': number = 0;
    public 'Eigen rekening': number = 0;
    public 'Sparen & beleggen': number = 0;
    public 'Betaalverzoeken': number = 0;
    public 'Hobby’s & vrije tijd': number = 0;
    public 'Boodschappen': number = 0;
    public 'Uit eten & drinken': number = 0;
    public 'Vakantie': number = 0;
    public 'Sport': number = 0;
    public 'Kleding & sieraden': number = 0;
    public 'Verzorging & gezondheid': number = 0;
    public 'Vervoer': number = 0;
    public 'Cadeaus': number = 0;
    public 'Goede doelen': number = 0;
    public 'Internet, TV & bellen': number = 0;
    public 'Huishouden & elektronica': number = 0;
    public 'Tuin & dier': number = 0;
    public 'Onderwijs': number = 0;
    public 'Kinderopvang': number = 0;
    public 'Zak- & kleedgeld': number = 0;
    public 'Verzekeringen': number = 0;
    public 'Energie & water': number = 0;
    public 'Klussen & onderhoud': number = 0;
    public 'Stufi': number = 0;
    public 'Alimentatie': number = 0;
    public 'Huur': number = 0;
    public 'Hypotheek': number = 0;
    public 'Belastingen': number = 0;
    public 'Creditcard': number = 0;
    public 'Lenen': number = 0;
    public 'Contanten': number = 0;
    public 'Bankkosten': number = 0;
    public 'Overig': number = 0;

    public hasValues(): boolean {
        return Object.values(this).some((value) => value !== 0);
    }
}
