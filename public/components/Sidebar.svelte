<script>
    import DocsPage from "./DocsPage.svelte";

    const route = buchtaRoute();
    export let hide = true;
</script>

<div class={"mr-8 w-full md:w-[15%] md:border-r-2 md:block " + (hide ? "hidden" : "")}>
    <h2 class="mb-5 mr-5"><a href="/docs/">Get started</a></h2>
    <!-- svelte-ignore missing-declaration -->
    {#each getDocsTree as file}
        {#if !file.includes("[page]")}
        <DocsPage name={file.slice(5)} route={route} />
        {/if}
    {/each}
</div>