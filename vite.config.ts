import { resolve } from "path";
import { defineConfig } from "vite";
import { chromeExtension } from "vite-plugin-chrome-extension";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    build: {
        watch: {
            include: 'src/*.ts',
        },
        rollupOptions: {
            input: "src/manifest.json"
        }
    },
    plugins: [
        chromeExtension(),
    ],
})
