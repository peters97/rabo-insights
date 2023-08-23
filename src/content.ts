import {Insights} from "@/src/util/insights.ts";

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (!message.execute || message.execute !== 'getData') {
        return;
    }

    sendResponse(Insights.getData());

    return true;
});

