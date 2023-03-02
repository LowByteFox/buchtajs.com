<script>
    import { onMount } from "svelte";

    let self;
    let playing = false;

    const PlaySound = () => {
        if (!playing) {
            const audio = new Audio('/konkon-beats.mp3');
            playing = true;
            audio.volume = 0.77;
            audio.loop = false;
            audio.play();
            audio.onended = () => {
                playing = false;
                window.location.href = "https://www.youtube.com/watch?v=c2hbKnXIa_c";
            }
        }
    }


    onMount(() => {
        if (!self) return;
        document.addEventListener("mousemove", (e) => {
            if (window.innerHeight - 5 <= e.clientY && e.clientX < 10) {
                self.style.left = `0px`;
                self.style.transform = `rotate(45deg)`;
            } else {
                self.style.left = `-48px`;
                self.style.transform = `rotate(0deg)`;
            }
        })

        document.addEventListener("click", (e) => {
            if (e.target == self.children[0]) {
                PlaySound();
            }
        })

        setTimeout(() => {
            const h = document.body.clientHeight - 48;
            self.style.top = `${h}px`;
            self.style.left = `-48px`;
            self.style.display = "block";
        }, 1000);
    })
</script>

<div class="absolute hidden transition-all duration-300" bind:this={self}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img height="48" width="48" src="/foob.svg" alt="Shirakami Fubuki's tail" />
</div>