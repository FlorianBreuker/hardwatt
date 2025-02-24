<script>
    import ToggleInput from "$lib/components/AddSetup/AddModal/Elements/ToggleInput.svelte";
    import Close from "$lib/components/Icons/Close.svelte";
    import ModalInput from "$lib/components/AddSetup/AddModal/Elements/ModalInput.svelte";
    import ModalSelect from "$lib/components/AddSetup/AddModal/Elements/ModalSelect.svelte";

    let {
        modalId,
        nextModalId,
        prevModalId,
        infoText,
        gridLayout,
        inputFields,
        selectFields,
        toggleInputFields,
    } = $props()

    const closeModal = () => {
        document.getElementById(modalId).close();
    }

    const nextModal = (event) => {
        event.preventDefault();

        if(event.target.checkValidity()) {
            document.getElementById(modalId).close();
            document.getElementById(nextModalId).showModal();
        }
    }

    const backModal = () => {
        document.getElementById(modalId).close();
        document.getElementById(prevModalId).showModal();
    }
</script>

<dialog id="{modalId}" class="modal">
    <div class="modal-box w-10/12 max-w-6xl bg-base-300 flex items-center justify-center py-20 rounded-2xl">
        <div class="absolute top-5 left-5 md:text-lg font-black">{infoText}</div>
        <form onsubmit={nextModal}>
            <div class="grid {gridLayout} gap-6">
                {#each inputFields as field}
                    <ModalInput bindId={field.bindId}/>
                {/each}

                {#each selectFields as field}
                    <ModalSelect bindId={field.bindId}/>
                {/each}

                {#each toggleInputFields as field}
                    <ToggleInput toggleLabelL={field.toggleLabelL} toggleLabelR={field.toggleLabelR}
                                 bindId={field.bindId}/>
                {/each}
            </div>
            <div class="modal-action">
                <button type="button" class="absolute right-5 top-5" onclick={closeModal}>
                    <Close/>
                </button>
                {#if prevModalId !== modalId}
                    <button type="button" class="btn btn-primary absolute left-5 bottom-5"
                            onclick={backModal}>Back
                    </button>
                {/if}
                <button type="submit" class="btn btn-primary absolute right-5 bottom-5">Next
                </button>
            </div>
        </form>
    </div>
</dialog>