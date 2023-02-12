<script>
    import Banner from "./components/Banner.svelte";
    import Navbar from "./components/Navbar.svelte";

    const hljs = require('highlight.js/lib/common');

    if (typeof document != "undefined") {
        document.addEventListener('DOMContentLoaded', (event) => {
            document.querySelectorAll('pre code').forEach((el) => {
                hljs.highlightElement(el);
            });
        });
    }
</script>

<div class="page">
    <Navbar />
    <Banner />
</div>

<style>
    .page {
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    }
</style>