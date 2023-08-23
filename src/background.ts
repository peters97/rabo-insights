chrome.action.onClicked.addListener((tab) => {
    if (!tab.id) {
        return;
    }
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: huts
    });
});

const huts = () => {
    const data = {
        'Eigen rekening': 0,
        'Sparen & beleggen': 0,
        'Hobby’s & vrije tijd': 0,
        'Boodschappen': 0,
        'Uit eten & drinken': 0,
        'Vakantie': 0,
        'Sport': 0,
        'Kleding & sieraden': 0,
        'Verzorging & gezondheid': 0,
        'Vervoer': 0,
        'Cadeaus': 0,
        'Goede doelen': 0,
        'Internet, TV & bellen': 0,
        'Huishouden & elektronica': 0,
        'Tuin & dier': 0,
        'Onderwijs': 0,
        'Kinderopvang': 0,
        'Zak- & kleedgeld': 0,
        'Verzekeringen': 0,
        'Energie & water': 0,
        'Klussen & onderhoud': 0,
        'Salaris': 0,
        'Uitkering': 0,
        'Pensioen': 0,
        'Stufi': 0,
        'Alimentatie': 0,
        'Huur': 0,
        'Hypotheek': 0,
        'Belastingen': 0,
        'Toeslagen': 0,
        'Creditcard': 0,
        'Lenen': 0,
        'Contanten': 0,
        'Bankkosten': 0,
        'Betaalverzoeken': 0,
        'Overig': 0,

    }

    document.querySelectorAll('feature-overview-list-item')?.forEach((expenseItem) => {
        const categoryName = expenseItem.querySelector<HTMLElement>('.category-overview--list-item-category-description');
        const amount = expenseItem.querySelector<HTMLElement>('.category-overview--list-item-amount')?.shadowRoot?.querySelector<HTMLElement>('.sfc-output-money__nominal')

        if (!categoryName || !amount) {
            return;
        }

        // @ts-ignore
        data[categoryName.innerText] = parseInt(amount.innerText.replace('.', ''))
    })

    console.log(data);


}




