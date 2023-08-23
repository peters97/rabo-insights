<script setup lang="ts">

import {nextTick, ref} from "vue";

const textArea = ref<HTMLTextAreaElement|null>(null);
const data = ref('')

const exportClicked = () => {

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        if (!tabs[0].id) {
            return;
        }

        chrome.tabs.sendMessage(tabs[0].id, {execute: 'getData'}, (insights?: Record<string, number>) => {
            if (!insights) {
                return;
            }

            const rows: string[] = [];
            Object.keys(insights).forEach((category) => {
                rows.push(`"${category}";"${insights[category]}"`);
            })

            data.value = rows.join("\r\n")


            nextTick(() => {
                textArea.value?.select();
                textArea.value?.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(textArea.value?.value);
            })
        });
    });
}
</script>

<template>
    <button @click="exportClicked">Copy insights to clipboard</button>

    <textarea ref="textArea" v-model="data"></textarea>
</template>
