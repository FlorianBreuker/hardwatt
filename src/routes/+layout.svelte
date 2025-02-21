<script>
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte"
    let { children } = $props();
</script>

{@render NavBar?.()}
{@render children?.()}