import { resolve } from "path";
import { defineConfig } from "vite";
import { chromeExtension } from "vite-plugin-chrome-extension";
import vuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname),
        },
    },
    build: {
        minify: false,
        watch: {
            include: 'src/*.ts',
        },
        rollupOptions: {
            input: "src/manifest.json"
        }
    },
    plugins: [
        vuePlugin(),
        chromeExtension(),
    ],
})
