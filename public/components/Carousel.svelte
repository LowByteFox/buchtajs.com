<script>
    import { onMount } from "svelte";

    export let timeBeforeSwitch = 5000;

    let element;
    let index = 0;
    let hovering = false;

    onMount(() => {
        const size = element.children.length;

        if (size < 1) return;

        if (size >= 1) {
            element.children[0].onmouseover = () => {
                hovering = true;
            }

            element.children[0].onmouseout = () => {
                hovering = false;
            }
        }
        for (let i = 1; i < size; i++) {
            element.children[i].style["display"] = "none";
            element.children[i].onmouseover = () => {
                hovering = true;
            }
            element.children[i].onmouseout = () => {
                hovering = false;
            }
        }

        setInterval(() => {
            if (hovering) return;
            element.children[index].style["display"] = "none";
            index++;
            index %= size;
            element.children[index].style["display"] = "block";
        }, timeBeforeSwitch);
    })
</script>

<div class="flex flex-col items-center" bind:this={element}>
    <slot></slot>
</div>