<script>
    import { onMount } from "svelte";
    import Sidebar from "../../components/Sidebar.svelte";
    import Layout from "../../layout.svelte";

    export let html;

    onMount(async () => {       
        document.querySelectorAll("pre > code.hljs").forEach(el => {
            const btn = document.createElement("img");
            btn.classList.add("white-svg");

            btn.setAttribute("style", "position: absolute; top: 10px; right: 10px;")
            btn.setAttribute("src", "/icons/copy.svg");
            btn.setAttribute("height", "18");
            btn.setAttribute("width", "18");

            btn.addEventListener("click", () => {
                btn.classList.remove("white-svg");
                btn.classList.add("green-svg");
                btn.setAttribute("src", "/icons/check.svg");

                navigator.clipboard.writeText(el.innerText);

                setTimeout(() => {
                    btn.classList.remove("green-svg");
                    btn.classList.add("white-svg");
                    btn.setAttribute("src", "/icons/copy.svg");
                }, 1000);
            })
            
            el.setAttribute("style", "position: relative;");
            el.appendChild(btn);
        });

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
    <div class="flex flex-row w-[95%] md:w-[85%] m-auto mt-16 text-white bg-black backdrop-blur-md bg-opacity-30 drop-shadow-lg rounded-md p-5 docs-page mb-5">
        <Sidebar/>
        <div class="overflow-x-auto code-part w-full ">
            {@html html}
        </div>
    </div>
</Layout>

<style>
    .docs-page {
        min-height: calc(100vh - 96px * 2);
    }
</style>