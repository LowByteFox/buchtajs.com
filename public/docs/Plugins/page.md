# Buchta's built-in plugins

<br>

# Livereload

<br>

### Plugin that allows livereloading on file change
### This plugin also includes an API

<br>

### Livereload plugin exteds `Buchta` object with `livereload` object
### Livereload works with every built-in plugin

<br>

## Livereload object, API included
<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>buchta.livereload = { 
    clients: Array, // Clients connected to buchta
    onUpdate: Array, // List of functions that will be executed after file updates 
    // 'f' is function parameter that will later be executed on file update
    registerOnUpdate: function(f: (file: string) => void) 
}</code></pre>

<br>
<br>

# Svelte

<br>

### Plugin for svelte support

<br>

# Svelte Plugin Interface
<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>buchtaSvelteConf {
    ssr: boolean; // tell the plugin if it should use SSR ( optional )
}</code></pre>

<br>

# Svelte Website Template

### Do not rewrite the comments, you'll break the plugin!

<div class="docs-notebook mt-5">
    <div class="notebook-top">
        <div class="notebook-top-active">templates/svelte.html</div>
    </div>
    <div class="notebook-parts">
        <div>
            <pre class="html bg-black rounded-md mt-5 bg-opacity-40">
<code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- html --&gt;
&lt;/body&gt;
&lt;!-- code --&gt;
&lt;/html&gt;</code></pre>
        </div>
    </div>
</div>


<br>

<br>
<br>

# Preact

<br>

### Plugin for preact support
### This plugin adds support for jsx, tsx is optional

<br>

# Preact Plugin Interface
<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>buchtaPreactConf {
    ssr: boolean; // tell the plugin if it should use SSR ( optional )
    tsx: boolean; // tell the plugin to also include tsx ( optional )
}</code></pre>

<br>

# Preact Website Template

### Do not rewrite the comments, you'll break the plugin!

<div class="docs-notebook mt-5">
    <div class="notebook-top">
        <div class="notebook-top-active">templates/preact.html</div>
    </div>
    <div class="notebook-parts">
        <div>
            <pre class="html bg-black rounded-md mt-5 bg-opacity-40">
<code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- html --&gt;
&lt;/body&gt;
&lt;script type="module"&gt;
&lt;!-- code --&gt;
&lt;/script&gt;
&lt;/html&gt;</code></pre>
        </div>
    </div>
</div>

<br>

<br>

# Markdown

<br>

### Plugin for markdown support


<br>