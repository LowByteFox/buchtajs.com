# Buchta

<br>

## Class that represents the entire application and its API

<br>

# Routing

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Add callback function for route
Buchta.get(...);
// or
Buchta.post(...);
// or
Buchta.put(...);
// or
Buchta.delete(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border-black items-center border">
        <div class="docs-list-base">Params</div>
        <div class="docs-list-base p-2.5">Type</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">path</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">handler</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Function - (req: BuchtaRequest, res: BuchtaResponse) => void</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">data</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Any</div>
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
<code>// Append Subrouter paths to the router itself
Buchta.use(...);
</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border-black items-center border">
        <div class="docs-list-base">Params</div>
        <div class="docs-list-base p-2.5">Type</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">path</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">router</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">BuchtaSubrouter</div>
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

# Middleware

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Add callback function for route that will be executed before/after route handling
Buchta.addBefore(...);
// or
Buchta.addAfter(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black  bg-primary-hover">route</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">method</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">callback</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Function - (req: BuchtaRequest, res: BuchtaResponse) => void</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">force</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Boolean</div>
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

# After Routing

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Add a callback that will get executed after the route has been registered
Buchta.assignAfterRouting(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">callback</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Function</div>
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

# Custom Extension Handling

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Add a callback that will get executed when FS routing detects specified extension
Buchta.assignExtHandler(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">ext</div>
        <div class="p-2.5 border-black  bg-primary-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">callback</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Function</div>
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

# Templates

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Get template code that can be used for plugin
Buchta.getTemplate(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">string</div>
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
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">string</div>
    </div>
</div>

<br>

# Plugins

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Adds plugin made for Buchta
Buchta.mixInto(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">plugin</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Function</div>
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

# WebSocket

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Add function that will be trigerred when client connects to websocket server
Buchta.wsOnOpen(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">func</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Function - (ws: WebSocket) => void</div>
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
<code>// Add function that will be trigerred when websockets recieves message
Buchta.wsOnMessage(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">func</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Function - (ws: WebSocket, msg: string) => void</div>
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
<code>// Add function that will be trigerred when client disconnects to websocket server
Buchta.wsOnClose(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">func</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Function - (ws: WebSocket) => void</div>
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

# Run and Build

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Run the server
Buchta.run(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">serverPort</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Number - 3000 is default</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">func</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Function - optional</div>
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
<code>// Build the project
Buchta.build(...);</code></pre>

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

# Project Root and Server Port

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Returns path to the root of the project
Buchta.getRoot();</code></pre>

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
        <div class="p-2.5 docs-list-base w-[50%]">String</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Returns port used for server
Buchta.getPort();</code></pre>

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
        <div class="p-2.5 docs-list-base w-[50%]">Number</div>
    </div>
</div>

<br>