# BuchtaSubrouter

<br>

## Class that can simplify deep routing

<br>
<div class="info-badge">
    Some methods support method chaining, indicated by return type `BuchtaSubrouter`
</div>

<br>

# Example

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>import { Buchta, BuchtaRequest, BuchtaResponse, BuchtaSubrouter } from "buchta";

// The {} manually sets empty config
const app = new Buchta({});
const router = new BuchtaSubrouter();

// Registering route /bun and /post
router.get("/bun", (req: BuchtaRequest, res: BuchtaResponse) => {
    res.send(`I am subroute handler at ${req.url}\n`);
}).post("/post", (req: BuchtaRequest, res: BuchtaResponse) => {
    res.send("Post\n");
});

// Buchta's router will register both routes at /api/bun and /api/post
router.putInto(app, "/api");
// Does the same thing but at /api2/bun and /api2/post
app.use("/api2", router);

app.run();
</code></pre>

<br>

# Routing

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Add callback function for route
BuchtaSubrouter.get(...);
// or
BuchtaSubrouter.post(...);
// or
BuchtaSubrouter.put(...);
// or
BuchtaSubrouter.delete(...);</code></pre>

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
</div>

### Returns

<div class="mt-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="docs-list-base p-2.5 w-[50%]">BuchtaSubrouter</div>
    </div>
</div>

<br>

# Append To Buchta

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// Append routes into Buchta
BuchtaSubrouter.putInto(...);
</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border-black items-center border">
        <div class="docs-list-base">Params</div>
        <div class="docs-list-base p-2.5">Type</div>
    </div>
    <div class="flex flex-row border-black items-center border">
        <div class="font-bold p-2.5 w-[50%] border-r border-black bg-primary-hover">app</div>
        <div class="p-2.5 bg-primary-hover w-[50%]">Buchta</div>
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
        <div class="docs-list-base p-2.5 w-[50%]">BuchtaSubrouter</div>
    </div>
</div>

<br>