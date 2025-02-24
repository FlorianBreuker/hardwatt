<script>
    import GenericModal from "$lib/components/AddSetup/AddModal/Elements/GenericModal.svelte";

    let config = {
        modalId: 'AddModal3',
        nextModalId: 'AddModal4',
        prevModalId: 'AddModal2',
        infoText: '3/4: Storage & PSU',
        gridLayout: 'md:grid-cols-4',
        inputFields: [
            {bindId:'ram'},
            {bindId: 'bootDrive'},
            {bindId: 'psu'},
        ],
        toggleInputFields: [
            {bindId: 'powerAdapter', toggleLabelL: "Power Adapter"},
        ]
    }
</script>

<GenericModal {...config}/>