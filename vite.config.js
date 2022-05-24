import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import ViteComponents from 'vite-plugin-components'
import Layouts from 'vite-plugin-vue-layouts'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    plugins: [vue(), Pages(), Layouts(), ViteComponents()],
})
