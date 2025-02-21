<script>
    import LightMode from "$lib/components/Icons/LightMode.svelte";
    import DarkMode from "$lib/components/Icons/DarkMode.svelte";
</script>

<label class="swap swap-rotate">
    <input type="checkbox" class="theme-controller" value="pastel"/>
    <DarkMode/>
    <LightMode/>
</label>