# Getting Started
<br>

## To simply create buchta app, you need to make sure you have bun installed 
### Then, create project using buchta's CLI

<pre class="language-shell bg-black rounded mt-5 bg-opacity-40">
<code>$ bun x buchta init {project-name}</code></pre>
<h3 class="pt-2">Change into project directory</h3>

<pre class="language-shell bg-black rounded-md mt-5 bg-opacity-40">
<code>$ cd {project-name}</code></pre>
<h3 class="pt-2">Install dependencies and start buchta server</h3>

<pre class="language-shell bg-black rounded-md mt-5 bg-opacity-40">
<code>$ bun install && bun run buchta serve</code></pre>
<br>

### Depending on the template, `buchta.config.ts` will be configured

<div class="succsess-badge mt-3 mb-3">
And you're done! Now you can work on your application
</div>

# Advanced

<br>

## Writing your own server

<br>

<div class="docs-notebook">
    <div class="notebook-top">
        <div class="notebook-top-active">index.ts</div>
    </div>
    <div class="notebook-parts">
        <div>
            <pre class="javascript bg-black rounded-md mt-5 bg-opacity-40"><code>import { Buchta, BuchtaRequest, BuchtaResponse } from "buchta";

const app = new Buchta();

app.get("/api/hello/", (req: BuchtaRequest, res: BuchtaResponse) => {
    res.send("Hello, World!");
})

app.run();
</code></pre>
        </div>
    </div>
</div>
<br>

### And now run it

<pre class="language-shell bg-black rounded-md mt-5 bg-opacity-40">
<code>$ bun index.ts</code></pre>
<br>

<div class="info-badge mt-3 mb-3">
Nice 👏 you have created own buchta server with custom route at /api/hello/
</div>

<div class="info-badge mt-3 mb-3">
For more examples and API reference, please look at <a class="underline" href="/docs/Buchta/">Buchta</a>
</div>

<!-- bun x buchta init {project-name} -->
<!-- cd {project-name} -->
<!-- bun install && bun run buchta serve -->
<!-- import { Buchta, BuchtaRequest, BuchtaResponse } from "buchta";

const app = new Buchta();

app.get("/api/hello/", (req: BuchtaRequest, res: BuchtaResponse) => {
    res.send("Hello, World!");
})

app.run(); -->
<!-- bun index.ts -->