<script>
    import ModalInput from "$lib/components/AddSetup/AddModal/Elements/ModalInput.svelte";

    let componentVisibility = $state(false);
    let {toggleLabelL, toggleLabelR, bindId} = $props();
</script>

<label class="flex flex-col gap-2">
    <label class="{componentVisibility ? 'xl:absolute xl:top-12':''}
                            flex cursor-pointer gap-2 items-center">
        <span>{toggleLabelL}</span>
        <input type="checkbox" bind:checked={componentVisibility} class="toggle"/>
        <span>{toggleLabelR}</span>
    </label>

    {#if componentVisibility}
        <ModalInput bindId={bindId} />
    {/if}
</label>