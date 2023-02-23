<script>
    import DocsPage from "./DocsPage.svelte";

    const route = buchtaRoute();
    export let hide = true;
</script>

<div class={"mr-8 w-full lg:w-[15%] md:border-r-2 lg:block font-bold " + (hide ? "hidden" : "")}>
    <h2 class="mb-5 mr-5"><a href="/docs/">Get started</a></h2>
    <!-- svelte-ignore missing-declaration -->
    <div class="overscroll-auto overflow-auto">
    {#each getDocsTree as file}
        {#if !file.includes("[page]")}
        <DocsPage name={file.slice(5)} route={route} />
        {/if}
    {/each}
    </div>
</div>