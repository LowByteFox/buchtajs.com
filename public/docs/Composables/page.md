# What Are Composables?

<br>

### Composables allow you to add variables to your page that will first be executed by the server

<br>

# Composable Creation

<pre class="language-shell bg-black rounded-md mt-5 bg-opacity-40">
<code>$ bunx buchta add composable bun_version</code></pre>
<br>

### This will create file bun_version.ts in composables directory
### For some pages `bun_version` variable will be set
### Time to add it a value

<br>

<pre class="diff bg-black rounded-md mt-5 bg-opacity-40"><code>- return "bun_version"
+ return Bun.version;</code></pre>

<br>

### Now, start the server and the variable should be available on some pages

<br>