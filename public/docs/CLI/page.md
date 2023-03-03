# BuchtaCLI

<br>

### Class that represents entire buchta's CLI

<br>

# Enums
<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>BuchtaQuestionType { YES_OR_NO, TEXT_INPUT, SELECT }</code></pre>

<br>

# Interfaces
<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>BuchtaProjectOption { 
    pretty: string; // text displayed in the console
    value: string; // value specified by user - will be set by the CLI ( do not set! )
    type: BuchtaQuestionType; // Type of question
    selectData: string[]; // if select was used, user will have to choose one of these ( optional but set when required! )
}</code></pre>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>BuchtaPluginTemplate { 
    filename: string; // name of the template file for plugin, `svelte.html` for example
    content: string; // default code for the plugin template file
}</code></pre>

<br>

# Project Templates

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Get project template options
BuchtaCLI.getTemplateOptions(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border-black items-center border">
        <div class="docs-list-base">Params</div>
        <div class="docs-list-base p-2.5">Type</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="docs-list-base p-2.5 w-[50%]">Map&lt;string, BuchtaProjectOption&gt;</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Set project template options
BuchtaCLI.setTemplateOptions(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border-black items-center border">
        <div class="docs-list-base">Params</div>
        <div class="docs-list-base p-2.5">Type</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">options</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Map&lt;string, BuchtaProjectOption&gt;</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="docs-list-base p-2.5 w-[50%]">void</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Get callback that will be executed after the project creation finished
BuchtaCLI.getTemplateCallback(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border-black items-center border">
        <div class="docs-list-base">Params</div>
        <div class="docs-list-base p-2.5">Type</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="docs-list-base p-2.5 w-[50%]">Function - (opts: Map&lt;string, BuchtaProjectOption&gt;) => void</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Set callback that will be executed after the project creation finished
BuchtaCLI.setTemplateCallback(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border-black items-center border">
        <div class="docs-list-base">Params</div>
        <div class="docs-list-base p-2.5">Type</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">callback</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Function - (opts: Map&lt;string, BuchtaProjectOption&gt;) => void</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="docs-list-base p-2.5 w-[50%]">void</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Create custom project template
BuchtaCLI.setProjectTemplate(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border-black items-center border">
        <div class="docs-list-base">Params</div>
        <div class="docs-list-base p-2.5">Type</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">path</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">content</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="docs-list-base p-2.5 w-[50%]">void</div>
    </div>
</div>

<br>

# Plugin Templates

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Get code of template for plugin
BuchtaCLI.getPluginTemplate(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border-black items-center border">
        <div class="docs-list-base">Params</div>
        <div class="docs-list-base p-2.5">Type</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="docs-list-base p-2.5 w-[50%]">BuchtaPluginTemplate</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Set code of template for plugin
BuchtaCLI.setPluginTemplate(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border-black items-center border">
        <div class="docs-list-base">Params</div>
        <div class="docs-list-base p-2.5">Type</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">options</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">BuchtaPluginTemplate</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="docs-list-base p-2.5 w-[50%]">void</div>
    </div>
</div>

<br>