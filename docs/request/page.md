# BuchtaRequest

<br>

## Class that represents request object given to handlers

<br>

# Fields

<div class="info-badge mt-3 mb-3">
    BuchtaRequest adds 3 additional fields to the Request object. Request documentation can be found <a class="underline" href="https://developer.mozilla.org/en-US/docs/Web/API/Request">here</a>.
</div>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// A Map that contains params parsed from the route
BuchtaRequest.params</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">Map&lt;String, String&gt;</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// An `URLSearchParams` objet, containing query parsed from the route
BuchtaRequest.query</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">URLSearchParams</div>
    </div>
</div>

<br>

<pre class="javascript bg-black rounded-md mt-5 bg-opacity-40">
<code>// String that contains the original route source
BuchtaRequest.originalRoute</code></pre>

<div class="mt-2.5 mb-2.5">
    <div class="flex flex-row border items-center border-black">
        <div class="docs-list-base">Type</div>
        <div class="p-2.5 docs-list-base w-[50%]">String</div>
    </div>
</div>
