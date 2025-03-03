<script>
    import ModalSearchInput from "$lib/components/AddSetup/AddModal/Elements/ModalSearchInput.svelte";
    import {input} from "$lib/components/AddSetup/state.svelte.js";

    let componentVisibility = $state(false);
    let {toggleLabelL, toggleLabelR, bindId} = $props();

    $effect(() => {
        if (!componentVisibility) {
            input[bindId].value = '';
        }
    });
</script>

<label class="flex flex-col gap-2">
    <label class="{componentVisibility ? 'xl:absolute 2xl:top-25 xl:top-21':''}
                            flex cursor-pointer gap-2 items-center">
        <span>{toggleLabelL}</span>
        <input type="checkbox" bind:checked={componentVisibility} class="toggle"/>
        <span>{toggleLabelR}</span>
    </label>

    {#if componentVisibility}
        <ModalSearchInput bindId={bindId}/>
    {/if}
</label>