<script>
    import { fade } from 'svelte/transition';

    import Sidebar from "./Sidebar.svelte";

    let showSidebar = false;
    let showDrawer = false;
    if (typeof window != "undefined") {
        if (window.location.href.includes("/docs/")) {
            showSidebar = true;
        }
    }
</script>

<nav class="flex flex-row md:pl-36 md:pr-36 gap-5 h-12 items-center bg-black backdrop-blur-md bg-opacity-30 drop-shadow-lg fixed w-screen text-md p-2 z-10 text-white">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img on:click={() => window.location.href = "/"} class="cursor-pointer" src="/buchta.webp" alt="Icon" width="32" height="32">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => window.location.href = "/"} class="font-bold cursor-pointer hover:text-secondary">Buchta</div>

    <div class="flex-grow"></div>

    <div class="flex-row gap-5 font-bold hidden lg:flex">
        <a href="/" class="hover:text-secondary cursor-pointer">Home</a>
        <a href="/#getStarted" class="hover:text-secondary cursor-pointer">Get Started</a>
        <!-- <a class="hover:text-secondary">Blog</a> -->
        <a class="hover:text-secondary" href="/docs/">Docs</a>
        <a class="hover:text-secondary" href="/showroom/">Showroom</a>
        <div class="border border-white"></div>
        <a class="hover:text-secondary" href="https://github.com/Fire-The-Fox/buchta">Github</a>
        <!-- <a class="hover:text-secondary">Discord</a> -->
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img on:click={() => showDrawer = true} class="lg:hidden white-svg" src="/icons/bars.svg" alt="" width="32" height="32">
    {#if showDrawer}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div in:fade={{ duration: 250}} out:fade={{ duration: 250}} on:click={() => showDrawer = false} class="fixed top-0 left-0 w-screen h-screen bg-black backdrop-blur-md bg-opacity-70 p-5 overscroll-auto overflow-auto">
        <div class="flex flex-col text-center mb-5 font-bold">
            <a href="/" class="hover:text-secondary cursor-pointer">Home</a>
            <a href="/#getStarted" class="hover:text-secondary cursor-pointer">Get Started</a>
            <!-- <a class="hover:text-secondary">Blog</a> -->
            <a class="hover:text-secondary" href="/docs/">Docs</a>
            <a class="hover:text-secondary" href="/showroom/">Showroom</a>
            <div class="border border-white w-[50%] m-auto"></div>
            <a class="hover:text-secondary" href="https://github.com/Fire-The-Fox/buchta">Github</a>
            <!-- <a class="hover:text-secondary">Discord</a> -->
        </div>
        {#if showSidebar}
            <!-- svelte-ignore missing-declaration -->
            <Sidebar hide={false} />
        {/if}
    </div>
    {/if}
</nav>