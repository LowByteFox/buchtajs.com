<script>
    import Confetti from "./components/Confetti.svelte";
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
    <div class="top-0 fixed left-0 z-50" id="confetti" >
        <!-- <Confetti x={[0, 10]} y={[0, 0.1]} delay={[0, 5000]} duration=5000 amount=250 fallDistance="100vh" /> -->
    </div>
    <div id="foob">
        {#if fubuki}
            <Foob />
        {/if}
    </div>
</main>

<style>
    main:not(#confetti):not(#foob) {
        display: flex;
        flex-direction: column;
    }

    div:not(#confetti):not(#foob) {
        min-height: calc(100vh - 96px);
        width: 100vw;
    }
</style>
