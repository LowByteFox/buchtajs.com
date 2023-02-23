# Buchta

### Class that represents the entire application and its API

<br>

# After Routing

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Add a callback that will get executed after the route has been registered
Buchta.assignAfterRouting(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
    <div class="flex flex-row border items-center border-blue-400">
        <div class="font-bold p-2.5 w-[50%] border-r border-blue-400">callback</div>
        <div class="p-2.5">Function</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">void</div>
    </div>
</div>

<br>

# Custom Extension Handling

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Add a callback that will get executed when FS routing detects specified extension
Buchta.assignExtHandler(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
    <div class="flex flex-row border items-center border-blue-400">
        <div class="font-bold p-2.5 w-[50%] border-r border-blue-400">ext</div>
        <div class="p-2.5 border-blue-400">String</div>
    </div>
    <div class="flex flex-row border items-center border-blue-400">
        <div class="font-bold p-2.5 w-[50%] border-r border-blue-400">callback</div>
        <div class="p-2.5">Function</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">void</div>
    </div>
</div>

<br>

# Templates

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Get template code that can be used for plugin
Buchta.getTemplate(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
    <div class="flex flex-row border items-center border-blue-400">
        <div class="font-bold p-2.5 w-[50%] border-r border-blue-400">name</div>
        <div class="p-2.5">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">string</div>
    </div>
</div>

<br>

# Default File Name
<div class="info-badge mt-2.5 mb-2.5">
In version 0.4.X this was possible to change, now only index
</div>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Returns fileName used for / routing: /index.html -> / ( index )
Buchta.getDefaultFileName();</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">string</div>
    </div>
</div>

<br>

# Plugins

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Adds plugin made for Buchta
Buchta.mixInto(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
    <div class="flex flex-row border items-center border-blue-400">
        <div class="font-bold p-2.5 w-[50%] border-r border-blue-400">plugin</div>
        <div class="p-2.5">Function</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">void</div>
    </div>
</div>

<br>

# WebSocket

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Add function that will be trigerred when client connects to websocket server
Buchta.wsOnOpen(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
    <div class="flex flex-row border items-center border-blue-400">
        <div class="font-bold p-2.5 w-[50%] border-r border-blue-400">func</div>
        <div class="p-2.5">Function - (ws: WebSocket) => void</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">void</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Add function that will be trigerred when websockets recieves message
Buchta.wsOnMessage(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
    <div class="flex flex-row border items-center border-blue-400">
        <div class="font-bold p-2.5 w-[50%] border-r border-blue-400">func</div>
        <div class="p-2.5">Function - (ws: WebSocket, msg: string) => void</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">void</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Add function that will be trigerred when client disconnects to websocket server
Buchta.wsOnClose(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
    <div class="flex flex-row border items-center border-blue-400">
        <div class="font-bold p-2.5 w-[50%] border-r border-blue-400">func</div>
        <div class="p-2.5">Function - (ws: WebSocket) => void</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">void</div>
    </div>
</div>

<br>

# Run and Build

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Run the server
Buchta.run(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
    <div class="flex flex-row border items-center border-blue-400">
        <div class="font-bold p-2.5 w-[50%] border-r border-blue-400">serverPort</div>
        <div class="p-2.5">Number - 3000 is default</div>
    </div>
    <div class="flex flex-row border items-center border-blue-400">
        <div class="font-bold p-2.5 w-[50%] border-r border-blue-400">func</div>
        <div class="p-2.5">Function - optional</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">void</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Build the project
Buchta.build(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">void</div>
    </div>
</div>

<br>

# Project Root and Server Port

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Returns path to the root of the project
Buchta.getRoot();</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">String</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Returns port used for server
Buchta.getPort();</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5">Type</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-blue-400">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5">Number</div>
    </div>
</div>

<br>