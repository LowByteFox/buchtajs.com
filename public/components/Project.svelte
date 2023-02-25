<script>
    export let name;
    export let description;
    export let cover;
    export let url;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => window.location.href = url} class="flex flex-col text-center bg-black backdrop-blur-md bg-opacity-30 drop-shadow-md hover:scale-105 transition-transform p-5 gap-2.5 rounded-lg cursor-pointer">
    <img src={cover} alt="Website Cover" class="object-scale-down">
    <h2 class="text-white font-bold">{ name }</h2>
    <h3 class="text-white">{ description }</h3>
</div>