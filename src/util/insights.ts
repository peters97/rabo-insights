import {InsightsData} from "@/src/util/insights-data.ts";

export class Insights {
    public static getData(): InsightsData | null {
        const items = document.querySelectorAll('feature-overview-list-item');

        if (!items) {
            return null;
        }

        const data = new InsightsData();

        items.forEach((expenseItem) => {
            const categoryName = expenseItem.querySelector<HTMLElement>('.category-overview--list-item-category-description');
            const amount = expenseItem.querySelector<HTMLElement>('.category-overview--list-item-amount')?.shadowRoot?.querySelector<HTMLElement>('.sfc-output-money__nominal')

            if (!categoryName || !amount) {
                return;
            }

            // @ts-ignore
            data[categoryName.innerText] = parseInt(amount.innerText.replace('.', ''))
        })

        if (!data.hasValues()) {
            return null;
        }

        return data;
    }
}
