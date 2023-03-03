# Routing Through FileSystem

<br>

### Files that are used for routing have similar name `METHOD.server.ts`

### METHOD is specific identicator which HTTP method does the route support

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base w-[100%]">HTTP Method</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[100%] border-r border-black bg-primary-hover">GET</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[100%] border-r border-black bg-primary-hover">POST</div>
    </div>
    <div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[100%] border-r border-black bg-primary-hover">PUT</div>
    </div><div class="flex flex-row border items-center border-black">
        <div class="font-bold p-2.5 w-[100%] border-r border-black bg-primary-hover">DELETE</div>
    </div>
</div>

<br>

### Let's create simple `Hello World` API
### Just so we don't bother with manual creation, we should use CLI!

<pre class="language-shell bg-black rounded-md mt-5 bg-opacity-40">
<code>$ bunx buchta add api api/hello_world/</code></pre>
<br>

### Then select `get` HTTP method and `no` to middleware

<br>

### The file should look like this

<br>

<div class="docs-notebook">
    <div class="notebook-top">
        <div class="notebook-top-active">public/api/hello_world/get.server.ts</div>
    </div>
    <div class="notebook-parts">
        <div>
            <pre class="javascript bg-black rounded-md mt-5 bg-opacity-40"><code>import { BuchtaRequest, BuchtaResponse } from "buchta";
<br>
export default function(req: BuchtaRequest, res: BuchtaResponse) {
    // TODO: what will be executed by the server
}
</code></pre>
        </div>
    </div>
</div>

<br>

### Time to remove the comment and sent Hello World back

<pre class="diff bg-black rounded-md mt-5 bg-opacity-40"><code>- // TODO: what will be executed by the server
+ res.send("Hello, World\n");</code></pre>

<br>

### Now start the server and run this command

<pre class="language-shell bg-black rounded-md mt-5 bg-opacity-40"><code>$ curl localhost:3000/api/hello_world/</code></pre>

<br>

### The output should look like this

<br>

`Hello, World`

<br>