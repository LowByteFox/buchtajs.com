<script>
    import { parse } from "marked";
    import Layout from "./:page/layout.svelte";

    let html;

    const getMk = async () => {
        const req = await fetch("./page.md");
        return Promise.resolve(parse(await req.text()));
    }
</script>

<!-- svelte-ignore missing-declaration -->
{#await getMk()}
<h1>Please wait</h1>
{:then code}
<Layout route={buchtaRoute()} htmlCode={code} />
{/await}