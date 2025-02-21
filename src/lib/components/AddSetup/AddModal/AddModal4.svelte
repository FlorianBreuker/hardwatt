<script>
    import GenericModal from "$lib/components/AddSetup/GenericModal.svelte";

    let config = {
        modalId: 'AddModal4',
        nextModalId: 'SummaryModal',
        prevModalId: 'AddModal3',
        infoText: 'Test 2',
        gridLayout: 'md:grid-cols-4',
        inputFields: [
            {label: 'OS ', placeholder: 'Type here'},
        ],
        toggleInputFields: [
            {toggleLabelL: "mouse", inputLabel: "mouse"},
            {toggleLabelL: "keyboard", inputLabel: "keyboard"},
            {toggleLabelL: "monitor", inputLabel: "monitor"},
        ]
    }
</script>

<GenericModal {...config}/>