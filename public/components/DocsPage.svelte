<script>
    import { onMount } from "svelte";
    
    export let name;
    export let route;

    let parseHeaders = false;

    onMount(() => {
        if (route && route.params) {
            if (route.params.get("page") == name) {
                parseHeaders = true;
            }
        }
    });
</script>

{#if !parseHeaders}
    <a class="text-xl hover:text-secondary" href={"/docs/" + name + "/"}>{name.replaceAll("_", " ")}</a>
{:else}
    <div class="text-xl hover:text-secondary">{name.replaceAll("_", " ")}</div>
    <ul class="text-xl overflow-visible overscroll-auto">
        {#each document.querySelectorAll(".code-part h1") as tag}
            <li class="ml-5 list-disc font-bold hover:text-secondary">
                <a href={"#" + tag.innerText.toLowerCase().replaceAll(" ", "-")}
                    >{tag.innerText}</a
                >
            </li>
        {/each}
    </ul>
{/if}
