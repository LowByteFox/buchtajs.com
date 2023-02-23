<script>
    import { parse } from "marked";
    import Layout from "./:page/layout.svelte";
    import { default as MainLayout } from "../layout.svelte";

    const getMk = async () => {
        const req = await fetch("./page.md");
        return Promise.resolve(parse(await req.text()));
    }
</script>

<!-- svelte-ignore missing-declaration -->
{#await getMk()}
<MainLayout />
{:then code}
<Layout htmlCode={code} />
{/await}