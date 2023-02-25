<script>
    import { parse } from "marked";
    import Layout from "./:page/layout.svelte";
    
    const getMk = async () => {
        const req = await fetch("./page.md");
        return Promise.resolve(parse(await req.text()));
    }
</script>

<Layout>
{#await getMk()}
<div></div>
{:then code}
{@html code}
{/await}
</Layout>