chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (!message.execute || message.execute !== 'getData') {
        return;
    }

    console.log(message, _sender, sendResponse)

    sendResponse(getData());

    return true;
});



const getData = () => {
    const items = document.querySelectorAll('feature-overview-list-item');

    if (!items) {
        return null;
    }

    const data = {
        'Salaris': 0,
        'Uitkering': 0,
        'Pensioen': 0,
        'Toeslagen': 0,
        'Eigen rekening': 0,
        'Sparen & beleggen': 0,
        'Betaalverzoeken': 0,
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
        'Stufi': 0,
        'Alimentatie': 0,
        'Huur': 0,
        'Hypotheek': 0,
        'Belastingen': 0,
        'Creditcard': 0,
        'Lenen': 0,
        'Contanten': 0,
        'Bankkosten': 0,
        'Overig': 0,
    }

    items.forEach((expenseItem) => {
        const categoryName = expenseItem.querySelector<HTMLElement>('.category-overview--list-item-category-description');
        const amount = expenseItem.querySelector<HTMLElement>('.category-overview--list-item-amount')?.shadowRoot?.querySelector<HTMLElement>('.sfc-output-money__nominal')

        if (!categoryName || !amount) {
            return;
        }

        // @ts-ignore
        data[categoryName.innerText] = parseInt(amount.innerText.replace('.', ''))
    })

    if (!Object.values(data).some((value) => value !== 0)) {
        return null;
    }

    return data;
}
