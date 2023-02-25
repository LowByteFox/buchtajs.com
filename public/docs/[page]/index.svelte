<script>
    import { parse } from "marked";
    import Layout from "./layout.svelte";

    const getMk = async () => {
        const req = await fetch("./page.md");
        return Promise.resolve(parse(await req.text()));
    }
</script>

<!-- svelte-ignore missing-declaration -->
<Layout>
{#await getMk()}
<div></div>
{:then code}
{@html code}
{/await}
</Layout>