<script>
    import {input} from "$lib/components/AddSetup/state.svelte.js";

    let {blockTitle, setupParts} = $props();
</script>

<div>
    <p class="underline md:text-base/7 md:no-underline font-black">{blockTitle}</p>
    {#each setupParts as part}
        <p>{input[part].label}: {input[part].value}</p>
    {/each}
</div>