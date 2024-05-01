import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
    }
};

export default config;