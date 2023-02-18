<script>
    export let iconName = "empty.svg";
    export let title;
</script>

<div class="mt-5">
    <div class="flex flex-row justify-center items-center gap-5">
        <img class="white-svg object-scale-down h-12" src={"/icons/" + iconName} alt="Icon">
        <h2 class="font-bold">{ title }</h2>
    </div>
    <slot></slot>
</div>