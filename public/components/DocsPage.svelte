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
    <a class="text-xl" href={"/docs/" + name + "/"}>{name}</a>
{:else}
    <div class="text-xl">{name}</div>
    <ul class="text-xl overflow-visible overscroll-auto">
        {#each document.querySelectorAll(".code-part h1") as tag}
            <li class="ml-5 list-disc font-bold">
                <a href={"#" + tag.innerText.toLowerCase().replaceAll(" ", "-")}
                    >{tag.innerText}</a
                >
            </li>
        {/each}
    </ul>
{/if}
