<script>
    import { fade } from 'svelte/transition';

    import Sidebar from "./Sidebar.svelte";

    export let route;

    let showSidebar = false;
    let showDrawer = false;
    if (typeof window != "undefined") {
        if (window.location.href.includes("/docs/")) {
            showSidebar = true;
        }
    }
</script>

<nav class="flex flex-row md:pl-36 md:pr-36 gap-5 h-12 items-center bg-white backdrop-blur-md bg-opacity-30 drop-shadow-lg fixed w-screen text-md p-2 z-10">
    <img src="/buchta.png" alt="Icon" width="32">
    <div class="font-bold">Buchta</div>

    <div class="flex-grow"></div>

    <div class="flex-row gap-5 font-bold hidden md:flex">
        <a href="/#getStarted" class="hover:text-[#004E7B] cursor-pointer">Get Started</a>
        <!-- <a class="hover:text-[#004E7B]">Blog</a> -->
        <a class="hover:text-[#004E7B]" href="/docs/">Docs</a>
        <!-- <a class="hover:text-[#004E7B]">Showroom</a> -->
        <div class="border border-black"></div>
        <a class="hover:text-[#004E7B]" href="https://github.com/Fire-The-Fox/buchta">Github</a>
        <!-- <a class="hover:text-[#004E7B]">Discord</a> -->
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img on:click={() => showDrawer = true} class="h-8 md:hidden" src="/icons/bars.svg" alt="">
    {#if showDrawer}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div in:fade={{ duration: 250}} out:fade={{ duration: 250}} on:click={() => showDrawer = false} class="fixed top-0 left-0 w-screen h-screen bg-white backdrop-blur-md bg-opacity-30 p-5">
        <div class="flex flex-col text-center mb-5">
            <a href="/#getStarted" class="hover:text-[#004E7B] cursor-pointer text-xl">Get Started</a>
            <!-- <a class="hover:text-[#004E7B] text-lg">Blog</a> -->
            <a class="hover:text-[#004E7B] text-xl" href="/docs/">Docs</a>
            <!-- <a class="hover:text-[#004E7B] text-xl">Showroom</a> -->
            <div class="border border-black w-[50%] m-auto"></div>
            <a class="hover:text-[#004E7B] text-xl" href="https://github.com/Fire-The-Fox/buchta">Github</a>
            <!-- <a class="hover:text-[#004E7B] text-xl">Discord</a> -->
        </div>
        {#if showSidebar}
            <!-- svelte-ignore missing-declaration -->
            <Sidebar route={route} hide={false} />
        {/if}
    </div>
    {/if}
</nav>