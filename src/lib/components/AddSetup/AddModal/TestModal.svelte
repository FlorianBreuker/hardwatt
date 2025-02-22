<script>
    import TestModal2 from "$lib/components/AddSetup/AddModal/TestModal2.svelte";

    let {input = $bindable()} = $props();
</script>

<TestModal2 bind:input={input}/>