<script>
    import GenericModal from "$lib/components/AddSetup/GenericModal.svelte";

    let config = {
        modalId: 'AddModal1',
        nextModalId: 'AddModal2',
        prevModalId: 'AddModal1',
        infoText: 'Test 1',
        gridLayout: 'md:grid-cols-[0.6fr_0.6fr_1fr_0.4fr]',
        inputFields: [
            {label: 'idle power', placeholder: 'in Watt'},
            {label: 'load power', placeholder: 'in Watt'},
            {label: 'measuring device', placeholder: 'in Watt'},
        ],
        selectFields: [
            {label: 'C-States', options: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C9']},
        ]
    }
</script>

<GenericModal {...config}/>