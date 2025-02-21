<script>
    import ToggleInput from "$lib/components/AddSetup/AddModal/ToggleInput.svelte";
    import Close from "$lib/components/Icons/Close.svelte";

    let {
        modalId,
        nextModalId,
        prevModalId,
        infoText,
        gridLayout,
        inputFields,
        selectFields,
        toggleInputFields
    } = $props();
</script>


<dialog id="{modalId}" class="modal">
    <div class="modal-box w-10/12 md:h-1/4 max-w-5xl bg-base-300 flex items-center py-20 rounded-2xl">
        <div class="absolute top-5 md:text-lg font-black">{infoText}</div>
        <div class="grid {gridLayout} gap-6">
            {#each inputFields as field}
                <label class="input input-bordered flex items-center gap-2">
                    {field.label}
                    <input type="text" class="grow" placeholder={field.placeholder}/>
                </label>
            {/each}

            {#each selectFields as field}
                <select class="select w-full max-w-xs">
                    <option disabled selected>{field.label}</option>
                    {#each field.options as option}
                        <option>{option}</option>
                    {/each}
                </select>
            {/each}

            {#each toggleInputFields as field}
                <ToggleInput toggleLabelL={field.toggleLabelL} toggleLabelR={field.toggleLabelR}
                             inputLabel={field.inputLabel}/>
            {/each}
        </div>
        <div class="modal-action">
            <form method="dialog">
                <button class="absolute right-5 top-5">
                    <Close/>
                </button>
                <button class="btn btn-primary absolute right-5 bottom-5"
                        onclick={()=>document.getElementById(nextModalId).showModal()}>Next
                </button>
                {#if prevModalId !== modalId}
                    <button class="btn btn-primary absolute left-5 bottom-5"
                            onclick={()=>document.getElementById(prevModalId).showModal()}>Back
                    </button>
                {/if}
            </form>
        </div>
    </div>
</dialog>