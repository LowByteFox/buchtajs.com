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

# Adding Middleware

<br>

### Every FS defined route can have middleware written in 2 ways
### 1. Define global for every HTTP method one in `middleware` directory
### 2. Define middleware for current route

<br>

### You can edit or create new one API route
### Don't forget to type `yes` when using the CLI

### If you decided to continue working in current file, just add these few lines

<pre class="diff bg-black rounded-md mt-5 bg-opacity-40"><code>+
+export function before(req: BuchtaRequest, res: BuchtaResponse) {
+    // TODO: what will happen before the handler
+}
+
+export function after(req: BuchtaRequest, res: BuchtaResponse) {
+    // TODO: what will happen after the handler
+}
+</code></pre>

### Lets say we want to print to the console request headers
### We should edit the before function which will get executed
### Before the route handler itself
### This is ideal when you want to redirect in certaint conditions

<pre class="diff bg-black rounded-md mt-5 bg-opacity-40"><code>- // TODO: what will happen before the handler
+ console.log(req.headers.toJSON());</code></pre>

### And we also want to add custom header to response after the handler

<pre class="diff bg-black rounded-md mt-5 bg-opacity-40"><code>- // TODO: what will happen after the handler
+ res.setHeader("Hello", "World");</code></pre>

<br>

### Now restart the server and run this command

<pre class="language-shell bg-black rounded-md mt-5 bg-opacity-40"><code>$ curl -i localhost:3000/api/hello_world/</code></pre>
<br>

### The output of curl should look like this

<br>

<pre>
HTTP/1.1 200 OK
Hello: World
content-type: text/plain;charset=utf-8
Date: Sat, 04 Mar 2023 07:30:20 GMT
Content-Length: 13

Hello, World
</pre>

<br>

### But Buchta should also output

<br>

<pre>
{
  host: "localhost:3000",
  "user-agent": "curl/7.88.1",
  accept: "*/*"
}
</pre>

<br>

# Final Result

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
    res.send("Hello, World\n");
}
<br>
export function before(req: BuchtaRequest, res: BuchtaResponse) {
    console.log(req.headers.toJSON());
}
<br>
export function after(req: BuchtaRequest, res: BuchtaResponse) {
    res.setHeader("Hello", "World");
}</code></pre>
        </div>
    </div>
</div>

<br>
