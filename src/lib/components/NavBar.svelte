<script>
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import GitHub from "$lib/components/Icons/GitHub.svelte";
    import {onMount} from "svelte";

    let githubRef = "https://github.com/FlorianBreuker/hardwatt.git";
    let title = "hardwatt";
    let shownTitle = $state("");
    let typewriterSleep = 1000;
    let typewriterSpeed = 200;


    const typeWriter = (index = 1, direction = 1) => {
        shownTitle = title.slice(0, index);

        if (shownTitle.length >= title.length) {
            setTimeout(() => typeWriter(index - 1, -1), typewriterSleep);
        } else if (shownTitle.length === 0) {
            setTimeout(() => typeWriter(index + 1, 1), typewriterSleep);
        } else {
            setTimeout(() => typeWriter(index + direction, direction), typewriterSpeed);
        }
    }

    onMount(() => {
        typeWriter();
    })
</script>

<div class="md:fixed md:top-0 navbar rounded-b-lg font-mono flex justify-between">
    <div class="flex gap-0 text-2xl font-black ml-5">
        <div>
            {shownTitle}
        </div>
        {#if shownTitle.length !== title.length}
            <div>
                _
            </div>
        {/if}
    </div>
    <div class="flex mr-5 gap-5">
        <a href={githubRef} target="_blank">
            <GitHub/>
        </a>
        <ThemeToggle/>
    </div>
</div>