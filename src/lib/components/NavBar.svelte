<script>
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import GitHub from "$lib/components/Icons/GitHub.svelte";

    let githubRef = "https://github.com/FlorianBreuker/hardwatt.git"
</script>

<div class="navbar rounded-b-lg font-mono md:fixed md:top-0 flex justify-between">
    <div class="ml-5">
        <a href={githubRef} target="_blank">
            <GitHub/>
        </a>
    </div>
    <div class="gap-3 mr-5">
        <ThemeToggle/>
    </div>
</div>