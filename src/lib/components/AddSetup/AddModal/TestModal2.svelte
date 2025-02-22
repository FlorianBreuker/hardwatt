<script>
    let {input = $bindable()} = $props();
</script>

<input bind:value={input.idle}>