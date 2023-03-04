# Middleware in Buchta

<br>

### Buchta on every route can have 2 middleware
### `Before` and `After`

<br>

### `Before` middleware will run before the route handling
### `After` middleware will run after the route handling

<br>

### Middleware can be added using 2 methods
### 1. Middleware directory
### 2. FS Routing

<br>

### Middleware in `middleware` directory will be set to every HTTP method

<br>

# Middleware creation

<br>

<pre class="language-shell bg-black rounded-md mt-5 bg-opacity-40">
<code>$ bunx buchta add middleware test/</code></pre>
<br>

<br>

### This will create file `middleware/test/middleware.ts`

<br>

### Content of the file is

<pre class="javascript bg-black rounded-md bg-opacity-40"><code>import { BuchtaRequest, BuchtaResponse } from "buchta";
<br>
export function before(req: BuchtaRequest, res: BuchtaResponse) {
    // TODO: what will happen before the handler
}
<br>
export function after(req: BuchtaRequest, res: BuchtaResponse) {
    // TODO: what will happen after the handler
}</code></pre>

<br>

### And once again, stuff put under before function will get executed before route handling
### And after function will get executed after the route
### You can also make the request redirect the user to some other page
### And thus the handling will stop

<br>