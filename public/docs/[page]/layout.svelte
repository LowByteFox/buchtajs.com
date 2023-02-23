<script>
    import { onMount } from "svelte";
    import Sidebar from "../../components/Sidebar.svelte";
    import Layout from "../../layout.svelte";

    export let htmlCode;

    onMount(() => {
        document.querySelectorAll(".docs-notebook").forEach(notebook => {
            const tabs = notebook.querySelectorAll(".notebook-top > *");
            const parts = notebook.querySelectorAll(".notebook-parts > *");
            const partsEl = notebook.querySelector(".notebook-parts");
            partsEl.innerHTML = "";
            partsEl.appendChild(parts[0]);

            const size = Math.min(tabs.length, parts.length);

            for (let i = 0; i < size; i++) {
                tabs[i].addEventListener("click", () => {
                    tabs.forEach(tab => tab.classList.remove("notebook-top-active"))
                    tabs[i].classList.add("notebook-top-active");
                    partsEl.innerHTML = "";
                    partsEl.appendChild(parts[i]);
                });
            }
        });
    })
</script>

<Layout>
    <div class="flex flex-row w-[95%] md:w-[85%] m-auto mt-16 text-white bg-white backdrop-blur-md bg-opacity-30 drop-shadow-lg rounded-md p-5 docs-page mb-5">
        <Sidebar/>
        <div class="overflow-x-auto code-part w-full">
            {@html htmlCode}
        </div>
    </div>
</Layout>

<style :global>
    .docs-page {
        min-height: calc(100vh - 96px * 2);
    }

    :global(h1) {
        font-weight: bold;
    }
</style>