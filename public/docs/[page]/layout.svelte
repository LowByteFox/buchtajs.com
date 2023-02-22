<script>
    import Sidebar from "../../components/Sidebar.svelte";
    import Layout from "../../layout.svelte";

    export let route;
    export let htmlCode;
</script>

<Layout route={route}>
    <div class="flex flex-row w-[95%] md:w-[85%] m-auto mt-16 text-white bg-white backdrop-blur-md bg-opacity-30 drop-shadow-lg rounded-md p-5 docs-page">
        <Sidebar route={route} />
        <div class="overflow-x-auto code-part w-full">
            {@html htmlCode}
        </div>
    </div>
</Layout>

<style :global>
    .docs-page {
        min-height: calc(100vh - 96px * 2);
    }

    :global(h1) {
        font-weight: bold;
    }
</style>