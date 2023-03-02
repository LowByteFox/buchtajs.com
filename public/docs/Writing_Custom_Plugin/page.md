# Writing Custom Plugin

<br>

<div class="info-badge">
    Please, read the tutorial carefully, don't skip to the last part otherwise you may not understand how to write a plugin
</div>

<br>

## Whether you like or dislike tailwindcss, we are writing plugin for one!

<br>

### Before we can start, make sure you have buchta project already created and tailwindcss installed and setuped

### to start thing off, we will run buchta cli to generate the boilerplate for us

<pre class="language-shell bg-black rounded-md mt-5 bg-opacity-40">
<code>$ bun run buchta add plugin tailwind</code></pre>
<br>

### now, plugins directory should appear with file 'tailwind.ts' and it should look like this

<br>

<div class="docs-notebook">
    <div class="notebook-top">
        <div class="notebook-top-active">plugins/tailwind.ts</div>
    </div>
    <div class="notebook-parts">
        <div>
            <pre class="javascript bg-black rounded-md mt-5 bg-opacity-40"><code>import { Buchta, BuchtaCLI } from "buchta";
<br>
export function tailwind() {
    return function (this: Buchta | BuchtaCLI) {
<br>
    }
}</code></pre>
        </div>
    </div>
</div>

<br>

### This creates function in factory like fashion

<br>

# Creating config for the plugin

<br>

### First, we should create an interface

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40"><code>TailwindConfig {
    input: string;
    output: string;
}</code></pre>

<br>

### And put it above `export function ...` but under imports

### Now define config as paramter to the factory function

<pre class="diff bg-black rounded-md mt-5 bg-opacity-40"><code>- export function tailwind() {
+ export function tailwind(config: TailwindConfig) {</code></pre>

<br>

# Plugin Logic

<br>

### First we want to check wether the object that executed the plugin is our server
### And not the CLI

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40"><code>if (this instanceof Buchta) {}</code></pre>

### Now let's use livereload plugin api!

<br>

<div class="warning-badge">
    We need to check whether livereload plugin is active or not!
</div>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40"><code>if (this.livereload) {
    this.livereload.registerOnUpdate((file: string) => {
        run();
    })
}
run(); // Function is missing!</code></pre>

<br>

# Implementing `run` function

<br>

### Because tailwindcss doesn't have any JS API, `Bun` got our back
### `Bun` contains method `spawnSync` which is ideal for us

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40"><code>const run = () => Bun.spawnSync(["bun", "run", "--bun", "tailwindcss", "-i", config.input, "-o", config.output]);</code></pre>

<br>

### Put the function under our factory function

### How to use the plugin? Import our factory function into your config file, and call it under `plugins` field of config

<br>

<div class="warning-badge">
    Make sure you call the function after livereload!
</div>

<br>

# Final Result

<br>

<div class="docs-notebook">
    <div class="notebook-top">
        <div class="notebook-top-active">plugins/tailwind.ts</div>
        <div>buchta.config.ts</div>
    </div>
    <div class="notebook-parts">
        <div>
            <pre class="javascript bg-black rounded-md mt-5 bg-opacity-40"><code>import { Buchta, BuchtaCLI } from "buchta";
<br>
interface TailwindConfig {
    input: string;
    output: string;
}
<br>
export function tailwind(config: TailwindConfig) {
    const run = () => Bun.spawnSync(["bun", "run", "--bun", "tailwindcss", "-i", config.input, "-o", config.output]);
<br>
    return function (this: Buchta | BuchtaCLI) {
        if (this instanceof Buchta) {
            if (this.livereload) {
                this.livereload.registerOnUpdate((file: string) => {
                    run();
                })
            }
            run();
        }
    }
}</code></pre>
        </div>
        <div>
        <pre class="javascript bg-black rounded-md mt-5 bg-opacity-40"><code>import { livereload } from 'buchta/plugins/livereload.js';
import { tailwind } from "./plugins/tailwind.js";
<br>
export default {
    port: 3000,
    // @ts-ignore yes there is import.meta.dir
    rootDirectory: import.meta.dir,
<br>
    // As you can see, here we are calling our factory function
    plugins: [livereload(), tailwind({input: "./input.css", output: "./static/tailwind.css"})]
}</code></pre>
        </div>
    </div>
</div>

<br>