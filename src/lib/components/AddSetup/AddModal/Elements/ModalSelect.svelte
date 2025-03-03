<script>
    import {input} from "$lib/components/AddSetup/state.svelte.js";

    let {bindId} = $props();
</script>

<label class="select">
    <p class="p-0 text-nowrap rounded-none">{input[bindId].label}</p>
    <div class="divider divider-horizontal m-0 z-1"></div>
    <select class="select grow" required bind:value={input[bindId].value}>
        {#each input[bindId].options as option}
            <option>{option}</option>
        {/each}
    </select>
</label>
