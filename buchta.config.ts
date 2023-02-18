import { svelte } from "buchta/plugins/svelte.js";
import { livereload } from 'buchta/plugins/livereload.js';
import { tailwind } from "./plugins/tailwind.js";

export default {
    port: 3000,
    // @ts-ignore yes there is import.meta.dir
    rootDirectory: import.meta.dir,

    plugins: [svelte({ssr: true}), livereload(), tailwind({input: "./input.css", output: "./static/tailwind.css"})]
}