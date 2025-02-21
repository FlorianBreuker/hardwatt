<script>
    import GenericModal from "$lib/components/AddSetup/AddModal/GenericModal.svelte";

    let config = {
        modalId: 'AddModal3',
        nextModalId: 'AddModal4',
        prevModalId: 'AddModal2',
        infoText: '3/4: Storage & PSU',
        gridLayout: 'md:grid-cols-4',
        inputFields: [
            {label: 'RAM ', placeholder: 'Type here'},
            {label: 'boot drive ', placeholder: 'Type here'},
            {label: 'PSU', placeholder: 'Type here'},
        ],
        toggleInputFields: [
            {toggleLabelL: "power adapter", inputLabel: "power adapter"}
        ]
    }
</script>

<GenericModal {...config}/>