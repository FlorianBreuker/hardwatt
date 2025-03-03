<script>
    import SetupItem from "./SetupItem.svelte";
    import {setups} from "$lib/components/state.svelte.js";
</script>

<div class="2xl:w-11/12 md:w-7/8 w-full bg-base-300 p-5 rounded-2xl shadow-2xl inset-shadow-md">
    <div class="grid 2xl:grid-cols-[0.5fr_0.5fr_0.75fr_1.5fr_2fr_3fr_2.5fr] xl:grid-cols-[0.5fr_0.5fr_0.75fr_1.5fr_2fr_3fr] grid-cols-[0.4fr_0.4fr_1fr] text-md font-black">
        <div class="ml-2">Idle</div>
        <div>Load</div>
        <div class="hidden md:block">C-State</div>
        <div>Processor</div>
        <div class="hidden xl:block">Mainboard</div>
        <div class="hidden xl:block">Power Supply</div>
        <div class="hidden 2xl:block">Operating System</div>
        <div class="divider col-span-7 mt-0 mb-0"></div>

        {#each setups as setup, index}
            <SetupItem
                    idle={setup.idle}
                    load={setup.load}
                    cstate={setup.cstate}
                    cpu={setup.cpu}
                    mainboard={setup.mainboard}
                    psu={setup.psu}
                    os={setup.os}
                    index={index}
                    {setup}
            />
        {/each}
    </div>
</div>
