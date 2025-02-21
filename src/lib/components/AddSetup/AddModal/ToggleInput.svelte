<script>
    let componentVisibility = $state(false);
    let {toggleLabelL, toggleLabelR, inputLabel} = $props();
</script>

<label class="flex flex-col gap-2">
    <label class="{componentVisibility ? 'xl:absolute xl:top-18':''}
                            flex cursor-pointer gap-2 items-center">
        <span>{toggleLabelL}</span>
        <input type="checkbox" bind:checked={componentVisibility} class="toggle"/>
        <span>{toggleLabelR}</span>
    </label>

    {#if componentVisibility}
        <label class="input input-bordered flex items-center gap-2">
            {inputLabel}
            <input type="text" placeholder="Type here"/>
        </label>
    {/if}
</label>