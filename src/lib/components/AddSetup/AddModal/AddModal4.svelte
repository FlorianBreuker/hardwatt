<script>
    import GenericModal from "$lib/components/AddSetup/AddModal/Elements/GenericModal.svelte";

    let config = {
        modalId: 'AddModal4',
        nextModalId: 'AddSummary',
        prevModalId: 'AddModal3',
        infoText: '4/4: OS & Peripherals',
        gridLayout: 'md:grid-cols-4',
        inputFields: [
            {bindId: 'os'},
        ],
        toggleInputFields: [
            {bindId: 'mouse', toggleLabelL: "Mouse"},
            {bindId: 'keyboard', toggleLabelL: "Keyboard"},
            {bindId: 'monitor', toggleLabelL: "Monitor"},
        ]
    }
</script>

<GenericModal {...config}/>