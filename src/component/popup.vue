<script setup lang="ts">

import {nextTick, ref} from "vue";
import {InsightsData} from "@/src/util/insights-data.ts";

const textArea = ref<HTMLTextAreaElement|null>(null);
const data = ref('')
const exportType = ref('label_value')

const exportClicked = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (!tabs[0].id) {
            return;
        }

        chrome.tabs.sendMessage(<number>tabs[0].id, {execute: 'getData'}, (insights?: InsightsData) => {
            if (!insights) {
                return;
            }

            data.value = formatData(insights, exportType.value === 'values_only')

            nextTick(() => {
                textArea.value?.select();
                textArea.value?.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(textArea.value?.value);
            })
        });
    });

    const formatData = (insights: InsightsData, valuesOnly: boolean): string => {
        if (valuesOnly) {
            return Object.values(insights).join("\r\n");
        }

        return (Object.keys(insights) as Array<keyof InsightsData>).map((category) => {
            return (`"${category}";"${insights[category]}"`);
        }).join("\r\n")
    }
}
</script>

<template>
    <select v-model="exportType">
        <option value="label_value">Labels and values</option>
        <option value="values_only">Values only</option>
    </select>
    <button @click="exportClicked">Copy insights to clipboard</button>

    <textarea ref="textArea" v-model="data"></textarea>
</template>

<style scoped>
</style>
