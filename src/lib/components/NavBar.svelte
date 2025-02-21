<script>
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import GitHub from "$lib/components/Icons/GitHub.svelte";
</script>

<div class="navbar bg-secondary rounded-b-lg shadow-2xl">
    <div class="flex-1">
        <p class="btn btn-ghost btn-secondary text-xl">hardwatt</p>
    </div>
    <div class="flex gap-3">
        <ThemeToggle/>
        <GitHub/>
    </div>
</div>