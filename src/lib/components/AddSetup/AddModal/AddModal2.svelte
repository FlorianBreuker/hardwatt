<script>
    import GenericModal from "$lib/components/AddSetup/AddModal/GenericModal.svelte";

    let config = {
        modalId: 'AddModal2',
        nextModalId: 'AddModal3',
        prevModalId: 'AddModal1',
        infoText: '2/4: Processors',
        gridLayout: 'md:grid-cols-4',
        inputFields: [
            {label: 'motherboard', placeholder: 'Type here'},
            {label: 'CPU', placeholder: 'Type here'},
            {label: 'CPU cooler', placeholder: 'Type here'},
        ],
        toggleInputFields: [
            {toggleLabelL: "iGPU", toggleLabelR: "dGPU", inputLabel: "GPU"}
        ]
    }
</script>

<GenericModal {...config}/>