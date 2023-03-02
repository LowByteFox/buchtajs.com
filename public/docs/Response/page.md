# BuchtaResponse

<br>

## Class that represents response object given to handler

<br>
<div class="info-badge">
    Some methods support method chaining, indicated by return type `BuchtaResponse`
</div>
<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// ...
app.get("/api/dog", (req: BuchtaRequest, res: BuchtaResponse) => {
    res.send(getRandomDog()).setHeader("Content-Type", "image/png");
})
// ...</code></pre>
<br>

<br>

# Headers

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Set header for response
BuchtaResponse.setHeader(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">name</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">value</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">BuchtaResponse</div>
    </div>
</div>

<br>

# Sending Text Json and Files

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Send plain text
BuchtaResponse.send(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">body</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">BuchtaResponse</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Send json object
BuchtaResponse.sendJson(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">json</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Any</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">BuchtaResponse</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Send file
BuchtaResponse.sendFile(...);</code></pre>

<br>

<div class="warning-badge">
    If you used this method, methods like `send` and `sendJson` won't have an effect!
</div>

<br>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">filePath</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">BuchtaResponse</div>
    </div>
</div>

<br>

# Redirecting

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Redirect user to a route
BuchtaResponse.redirectTo(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">path</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">BuchtaResponse</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Returns `true` if redirect target was set, otherwise `false
BuchtaResponse.canRedirect();</code></pre>

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

# Setting Status

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Set status code for a response
BuchtaResponse.setStatus(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">statusCode</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Number</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">BuchtaResponse</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Set status message for a response
BuchtaResponse.setStatusText(...);</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Params</div>
        <div class="p-2.5 docs-list-base w-[50%]">Type</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">setStatusText</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">String</div>
    </div>
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">BuchtaResponse</div>
    </div>
</div>

<br>

# Response Constructing

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Construct `Response` for redirecting
BuchtaResponse.buildRedirect();</code></pre>

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
        <div class="p-2.5 docs-list-base w-[50%]">Response</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Construct `Response` for client
BuchtaResponse.buildResponse();</code></pre>

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
        <div class="p-2.5 docs-list-base w-[50%]">Response</div>
    </div>
</div>

<br>