<script>
    import Project from "../components/Project.svelte";
    import Layout from "../layout.svelte";

</script>

<Layout>
    <main class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 w-[95%] md:w-[85%] m-auto mt-16">
        <!-- svelte-ignore missing-declaration -->
        {#each projects as project}
        <Project name={project.name} description={project.description} cover={project.cover} url={project.url} />
        {/each}
    </main>
</Layout>