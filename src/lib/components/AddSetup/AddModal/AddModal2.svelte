<script>
    import GenericModal from "$lib/components/AddSetup/AddModal/Elements/GenericModal.svelte";

    let config = {
        modalId: 'AddModal2',
        nextModalId: 'AddModal3',
        prevModalId: 'AddModal1',
        infoText: '2/4: Processors',
        gridLayout: 'md:grid-cols-4',
        inputFields: [
            {bindId: 'motherboard'},
            {bindId: 'cpu'},
            {bindId: 'cpuCooler'},
        ],
        toggleInputFields: [
            {bindId: 'gpu', toggleLabelL: "iGPU", toggleLabelR: "dGPU"}
        ]
    }
</script>

<GenericModal {...config}/>