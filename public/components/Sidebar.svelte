<script>
    import DocsPage from "./DocsPage.svelte";

    const route = buchtaRoute();
    export let hide = true;
</script>

<div class={"mr-8 w-full lg:w-[20%] lg:border-r-2 lg:block font-bold " + (hide ? "hidden" : "")}>
    <h2 class="mb-5 mr-5 hover:text-secondary"><a href="/docs/">Get started</a></h2>
    <!-- svelte-ignore missing-declaration -->
    <div class="flex flex-col overscroll-auto overflow-auto mr-5">
    {#each getDocsTree as file}
        {#if !file.includes("[page]")}
        <DocsPage name={file.slice(5)} route={route} />
        {/if}
    {/each}
    </div>
</div>