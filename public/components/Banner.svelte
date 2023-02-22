<script>
    const features = [
        ["Powerful", "/icons/speed.svg"],
        ["Lightweight", "/icons/feather.svg"],
        ["Extendable", "/icons/plug.svg"],
        ["SSR Support", "/icons/server.svg"],
        ["Markdown Support", "/icons/mkdown.svg"],
        ["Svelte Support", "/icons/js.svg"],
        ["Preact Support", "/icons/react.svg"],
        ["And Much More", "/icons/list.svg"]
    ];
</script>

<div class="pt-24 w-[85%] m-auto justify-between items-center">
    <div class="flex-grow">
        <h1 class="text-[500%] mt-12 font-bold text-white">Buchta</h1>
        <h2 class="mt-4 ml-1 font-bold text-3xl">Full-Stack Framework Powered By Bun</h2>
        <div class="flex flex-row, justify-between">
            <div class="mt-12">
                {#each features as feature}
                <div class="flex flex-row items-center h-16 gap-5">
                    <div class="w-14 flex justify-center">
                        <img class="h-12 white-svg" src={feature[1]} alt="" width="48" height="48" />
                    </div>
                    <h2 class="font-bold text-white">{feature[0]}</h2>
                </div>
                {/each}
                <button on:click={() => window.location = "#getStarted"} class="p-5 bg-black rounded-md text-white font-bold backdrop-blur-md bg-opacity-30 drop-shadow-lg w-auto"><h3 class="m-0 p-0">Lets get started!</h3></button>
            </div>

            <img
                class="h-[580px] object-scale-down hidden lg:block"
                src="/buchta.webp"
                alt="Logo"
                height="580"
                width="580"
            />
        </div>
    </div>
</div>
