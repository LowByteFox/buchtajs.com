<script>
    export let ookami = false;
</script>

<footer class="flex flex-col justify-center h-24 items-center w-screen text-md p-2">
    <!-- svelte-ignore missing-declaration -->
    <h3>Built with Buchta v{ buchtaVersion } and Bun v{ bunVersion }</h3>
    {#if ookami}
        <h4>Color scheme inspired by <a class="text-secondary" href="https://hololive.hololivepro.com/en/talents/ookami-mio/" target="_blank" rel="noreferrer">Ookami Mio</a></h4>
    {/if}
</footer>

<style>
    footer {
        background-color: black;
        margin-top: auto;
    }

    footer > * {
        color: white;
    }
</style>