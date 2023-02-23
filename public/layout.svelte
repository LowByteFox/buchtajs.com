<script>
    import Confetti from "./components/Confetti.svelte";
    import Navbar from "./components/Navbar.svelte";
    import Footer from "./components/Footer.svelte";
    import { onMount } from "svelte";

    const hljs = require("highlight.js/lib/common");

    onMount(() => {
        document.querySelectorAll("pre code").forEach((el) => {
            hljs.highlightElement(el);
        });
    })
</script>

<main>
    <div>
        <Navbar />
        <slot />
    </div>
    <Footer />
    <div class="top-0 fixed left-0 Z-50" id="confetti" >
        <!-- <Confetti x={[0, 10]} y={[0, 0.1]} delay={[0, 5000]} duration=5000 amount=250 fallDistance="100vh" /> -->
    </div>
</main>

<style>
    main:not(#confetti) {
        display: flex;
        flex-direction: column;
    }

    div:not(#confetti) {
        min-height: calc(100vh - 96px);
        width: 100vw;
    }
    
</style>
