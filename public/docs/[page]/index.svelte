<script>
    import { parse } from "marked";
    import Layout from "./layout.svelte";

    const getMk = async () => {
        const req = await fetch("./page.md");
        return Promise.resolve(parse(await req.text()));
    }
</script>

<!-- svelte-ignore missing-declaration -->
{#await getMk()}
<h1 class="text-cblack">Please wait...</h1>
{:then code}
<Layout html={code}>
</Layout>
{/await}