<script>
    import { onMount } from "svelte";

    const hljs = require("highlight.js/lib/common");

	export let name;
    export let route;

    let parseHeaders = false;

    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    onMount(() => {
        waitForElm(".code-part > *:not(div)").then(() => {
            document.querySelectorAll("pre code").forEach((el) => {
                hljs.highlightElement(el);
            });

            if (route && route.params) {
                if (route.params.get("page") == name) {
                    parseHeaders = true;
                }
            }
        });
    })
</script>

{#if !parseHeaders}
<a class="text-xl" href={"/docs/" + name + "/"}>{name}</a>
{:else}
<div class="text-xl">{name}</div>
<ul class="text-xl overflow-visible overscroll-auto">
    {#each document.querySelectorAll(".code-part h1") as tag}
    <li class="ml-5 list-disc font-bold"><a href={"#" + tag.innerText.toLowerCase().replaceAll(" ", "-")}>{ tag.innerText }</a></li>
    {/each}
</ul>
{/if}