<script>
    import CollapsedSetupView from "./CollapsedSetupView.svelte";

    let {
        idle,
        load,
        cstate,
        cpu,
        mainboard,
        psu,
        index,
        setup
    } = $props();
</script>

<div
        tabindex="0"
        role="button"
        class="
            {index % 2 === 0 ? 'bg-base-300' : 'bg-base-200'}
            collapse grid grid-cols-subgrid col-span-7 text-xs md:text-sm px-2"
>
    <div
            class="collapse-title grid grid-cols-subgrid col-span-7 p-0 min-h-8 h-10 items-center"
    >
        <div>{idle}</div>
        <div>{load}</div>
        <div class="hidden md:block">{cstate}</div>
        <div>{cpu}</div>
        <div class="hidden md:block">{mainboard}</div>
        <div class="hidden md:block">{psu}</div>
    </div>
    <div class="collapse-content grid grid-cols-subgrid col-span-7 p-0 text-xs">
        <CollapsedSetupView {setup}/>
    </div>
</div>
