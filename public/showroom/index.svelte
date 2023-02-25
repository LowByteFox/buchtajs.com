<script>
    import Project from "../components/Project.svelte";
    import Layout from "../layout.svelte";

</script>

<Layout>
    <main class="w-[95%] md:w-[85%] m-auto mt-16 mb-5">
        <h1 class="font-bold text-white mb-5">List of websites made using Buchta</h1>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
            <!-- svelte-ignore missing-declaration -->
            {#each projects as project}
            <Project name={project.name} description={project.description} cover={project.cover} url={project.url} />
            {/each}
        </div>
    </main>
</Layout>