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
        <h1 class="mt-4 ml-1 font-bold">Full Stack Framework Powered By Bun</h1>
        <div class="flex flex-row, justify-between">
            <div class="flex-grow mt-12">
                {#each features as feature}
                <div class="flex flex-row items-center h-16 gap-5">
                    <div class="w-14 flex justify-center">
                        <img class="h-12 white-svg" src={feature[1]} alt="" />
                    </div>
                    <h2 class="font-bold text-white">{feature[0]}</h2>
                </div>
                {/each}
            </div>

            <img
                class="w-[35%]"
                src="https://raw.githubusercontent.com/Fire-The-Fox/buchta/develop/buchta.png"
                alt="Logo"
            />
        </div>
    </div>
</div>
