<script>
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import GitHub from "$lib/components/Icons/GitHub.svelte";
</script>

<div class="navbar bg-primary rounded-b-lg shadow-2xl shadow-primary/30 font-JetBrainsMono">
    <div class="flex-1 ml-5">
        <a class="text-xl font-black" href="/">hardwatt</a>
    </div>
    <div class="flex gap-3">
        <ThemeToggle/>
        <GitHub/>
    </div>
</div>