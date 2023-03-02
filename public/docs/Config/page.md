# Buchta's config

<br>

### Config file takes big role in behavior of both the Server and CLI

<br>

# Example

<br>

### Sample config that extends buchta with svelte support with SSR enabled
### And livereload enabled, so when file updates, your page will reload

<div class="docs-notebook mt-5">
    <div class="notebook-top">
        <div class="notebook-top-active">buchta.config.ts</div>
    </div>
    <div class="notebook-parts">
        <div>
            <pre class="typescript bg-black rounded-md mt-5 bg-opacity-40"><code>import { svelte } from "buchta/plugins/svelte.js";
import { livereload } from 'buchta/plugins/livereload.js';
<br>
export default {
    port: 3000,
    // @ts-ignore yes there is import.meta.dir
    rootDirectory: import.meta.dir,
<br>
    plugins: [svelte({ssr: true}), livereload()]
}</code></pre>
        </div>
    </div>
</div>

<br>
<br>

# Supported Fields

### Buchta config contains these fields

<pre class="typescript bg-black rounded-md mt-5 bg-opacity-40"><code>buchtaConfig {
    port: number; // Port on which will the dev server start
    rootDirectory: string; // Path where the entire project is located

    plugins: any[]; // Array of plugin functions created in factory like fashion
}</code></pre>

<br>