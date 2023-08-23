import { createApp } from "vue";
import popup from './component/popup.vue';

createApp(popup).mount('#app');


const dataField = document.querySelector<HTMLTextAreaElement>('.js-data-field');


document.querySelector('.js-export-insights-button')?.addEventListener('click', () => {
    if (!dataField) {
        return;
    }

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (!tabs[0].id ) {
            return;
        }

        chrome.tabs.sendMessage(tabs[0].id, {execute: 'getData'}, (data?: Record<string, number>) => {
            if (!data) {
                return;
            }

            const rows: string[] = [];
            Object.keys(data).forEach((category) => {
                rows.push(`"${category}";"${data[category]}"`);
            })

            dataField.value = rows.join("\r\n")



            // Select the text field
            dataField.select();
            dataField.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text inside the text field
            navigator.clipboard.writeText(dataField.value);
        });
    });
})

