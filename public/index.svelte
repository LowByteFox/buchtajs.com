<script>
    import { onMount } from "svelte";
    import Banner from "./components/Banner.svelte";
    import Carousel from "./components/Carousel.svelte";
    import CarouselPage from "./components/CarouselPage.svelte";
    import Faq from "./components/Faq.svelte";
    import Layout from "./layout.svelte";
</script>

<Layout>
    <Banner />
    <main class="w-[95%] md:w-[85%] m-auto mt-64 mb-12 text-white">
        <h2 class="font-bold mb-4" id="getStarted">&nbsp;</h2>
        <h2 class="font-bold mb-4 text-3xl">Getting Started</h2>
        <h2>Create simple project</h2>
        <pre
            class="language-shell bg-black rounded-md backdrop-blur-md bg-opacity-30 mt-5"><code
                >{`$ bun x buchta init <project-name>`}</code
            ></pre>
        <h2 class="pt-2">Change into project directory</h2>
        <pre
            class="language-shell bg-black rounded-md backdrop-blur-md bg-opacity-30 mt-5"><code
                >{`$ cd <project-name>`}</code
            ></pre>
        <h2 class="pt-2">Install dependencies and start buchta</h2>
        <pre
            class="language-shell bg-black rounded-md backdrop-blur-md bg-opacity-30 mt-5"><code
                >{`$ bun install && bun run buchta serve`}</code
            ></pre>
        <h2 class="pt-2 font-bold">That's it!</h2>
        <h2 class="mt-24 font-bold text-3xl">What is Buchta?</h2>
        <h2 class="mt-2 pb-12">Buchta is a full-stack web framework that lets you create web applications. Buchta is pretty boring, just plain HTML, CSS, js/ts, but when you add a few of its plugins, you'll for sure have fun. Buchta currently supports Svelte, Preact, and Markdown. Buchta is complex on the inside but simple on the outside allowing users and developers creating their plugins to have an easy time.</h2>

        <Carousel>
            <CarouselPage iconName="speed.svg" title="Fast">
                <div class="flex flex-col items-center">
                    <h2 class="mt-4 font-bold">Buchta focuses on performance and reliability</h2>
                    <h2>Most of it is being achieved using bun</h2>
                </div>
            </CarouselPage>
            <CarouselPage iconName="server.svg" title="SSR Support">
                <div class="flex flex-col items-center">
                    <h2 class="mt-4 font-bold">Buchta supports SSR</h2>
                    <h2>Current plugins that support SSR are markdown, svelte and preact</h2>
                </div>
            </CarouselPage>
            <CarouselPage iconName="archive.svg" title="Custom Bundler">
                <div class="flex flex-col items-center">
                    <h2 class="mt-4 font-bold">Buchta doesn't use module bundlers like Vite, Webpack, Rollup.</h2>
                    <h2>Instead, Buchta uses bundler shipped with bun! This decreases dependencies and improves speed</h2>
                </div>
            </CarouselPage>
            <CarouselPage iconName="plug.svg" title="Extendable">
                <div class="flex flex-col items-center">
                    <h2 class="mt-4 font-bold">You can write your own plugins</h2>
                    <h2>Buchta supports custom plugins to extend its functionality</h2>
                </div>
            </CarouselPage>
        </Carousel>
        <Faq />
    </main>
</Layout>
