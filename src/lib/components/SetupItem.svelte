<script>
    import CollapsedSetupView from "./CollapsedSetupView.svelte";

    let {
        idle,
        load,
        cstate,
        cpu,
        mainboard,
        psu,
        os,
        index,
        setup
    } = $props();
</script>

<div
        tabindex="0"
        role="button"
        class="
            {index % 2 === 0 ? 'bg-base-300' : 'bg-base-200'}
            collapse grid grid-cols-subgrid col-span-8 text-xs md:text-sm"
>
    <div
            class="collapse-title grid grid-cols-subgrid col-span-8 p-0 min-h-8 h-10 items-center"
    >
        <div class="ml-2">{idle}</div>
        <div>{load}</div>
        <div class="hidden xl:block">{cstate}</div>
        <div>{cpu}</div>
        <div class="hidden xl:block">{mainboard}</div>
        <div class="hidden xl:block">{psu}</div>
        <div class="hidden 2xl:block">{os}</div>
    </div>
    <div class="collapse-content grid grid-cols-subgrid col-span-8 p-0 text-xs">
        <CollapsedSetupView {setup}/>
    </div>
</div>
