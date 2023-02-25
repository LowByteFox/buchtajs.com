# BuchtaBundler

<br>

## Class that wraps around Bun's bundler

<br>

# Files

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Tell bundler to include this file - usage is not recommended
BuchtaBundler.addFile(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-cblack-hover">path</div>
        <div class="p-2.5 bg-cblack-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">void</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Tell bundler to also include this file as custom file
BuchtaBundler.addCustomFile(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-cblack-hover">route</div>
        <div class="p-2.5 bg-cblack-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-cblack-hover">path</div>
        <div class="p-2.5 bg-cblack-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-cblack-hover">content</div>
        <div class="p-2.5 bg-cblack-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">void</div>
    </div>
</div>

<br>

# File Patching

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Tell the bundler what it should do after the file was bundled and with fixed imports
BuchtaBundler.addPatch(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-cblack-hover">route</div>
        <div class="p-2.5 bg-cblack-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-cblack-hover">patch</div>
        <div class="p-2.5 bg-cblack-hover w-[50%]">Function - (route: string, content: string) => void</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">void</div>
    </div>
</div>

<br>

# Preparation, Bundling and Building

<div class="warning-badge mt-3">
    Using these methods is not recommended, you'll break stuff if you use them!
</div>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Prepares fs root for bundler
BuchtaBundler.prepare();</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">void</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Creates the Bundle
BuchtaBundler.bundle();</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">Boolean</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// This function will bundle everything
BuchtaBundler.build(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-cblack-hover">server</div>
        <div class="p-2.5 bg-cblack-hover w-[50%]">Buchta</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-cblack-hover">quiet</div>
        <div class="p-2.5 bg-cblack-hover w-[50%]">Boolean</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">Boolean</div>
    </div>
</div>

<br>