<script>
    import GenericModal from "$lib/components/AddSetup/AddModal/Elements/GenericModal.svelte";

    let config = {
        modalId: 'AddModal1',
        nextModalId: 'AddModal2',
        prevModalId: 'AddModal1',
        infoText: '1/4: Power Consumption',
        gridLayout: 'md:grid-cols-[0.8fr_0.8fr_1fr_0.5fr]',
        inputFields: [
            {bindId: 'idle'},
            {bindId: 'load'},
            {bindId: 'measuringDevice'},
        ],
        selectFields: [
            {
                bindId: 'cState',
            },
        ]
    }
</script>

<GenericModal {...config}/>