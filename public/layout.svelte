<script>
    import Navbar from "./components/Navbar.svelte";
    import Footer from "./components/Footer.svelte";
    import Foob from "./components/Foob.svelte";

    import { onMount } from "svelte";

    const hljs = require("highlight.js/lib/common");

    let fubuki = false;
    let ookami = false;

    onMount(() => {
        document.querySelectorAll("pre code").forEach((el) => {
            hljs.highlightElement(el);
        });

        const query = buchtaRoute().query;

        if (query.has("enable")) {
            try {
                const data = JSON.parse(query.get("enable"));
                if (data instanceof Array) {
                    for (const emoji of data) {
                        switch (emoji) {
                            case "🌲":
                                ookami = true;
                                break;
                            case "🌽":
                                fubuki = true;
                                break;
                        }
                    }
                } else if (typeof data == "string") {
                    switch (data) {
                        case "🌲":
                            ookami = true;
                            break;
                        case "🌽":
                            fubuki = true;
                            break;
                    }
                }
            } catch (e) {}
        }
    })
</script>

<main class={"" + (ookami == true ? "bg-[url(/ookami_mio.png)] bg-no-repeat bg-fixed bg-opacity-25" : "")}>
    <div>
        <Navbar />
        <slot />
    </div>
    <Footer ookami={ookami} />
    <div id="foob">
        {#if fubuki}
            <Foob />
        {/if}
    </div>
</main>

<style>
    main:not(#foob) {
        display: flex;
        flex-direction: column;
    }

    div:not(#foob) {
        min-height: calc(100vh - 96px);
        width: 100vw;
    }
</style>
