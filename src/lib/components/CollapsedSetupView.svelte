<script>
    let {setup} = $props();

    const fields = [
        { label: "idle power", key: "idle" },
        { label: "CPU", key: "cpu" },
        { label: "CPU cooler", key: "cpucooler" },
        { label: "OS", key: "os" },
        { label: "load power", key: "load" },
        { label: "mainboard", key: "mainboard" },
        { label: "GPU", key: "gpu" },
        { label: "mouse", key: "mouse" },
        { label: "deepest C-state", key: "cstate" },
        { label: "PSU", key: "psu" },
        { label: "RAM", key: "ram" },
        { label: "keyboard", key: "keyboard" },
        { label: "meas. device", key: "measuringdevice" },
        { label: "power adapter", key: "poweradapter" },
        { label: "boot device", key: "bootdrive" },
        { label: "monitor", key: "monitor" },
    ];

</script>

<div class="grid grid-cols-subgrid col-span-7">
    <div class="col-span-7">
        <div class="divider mt-0 mb-0"></div>
        <div class="grid xl:grid-cols-4 md:grid-cols-2 font-normal text-xs 2xl:text-sm">
            {#each fields as field}
                <div class="flex gap-1"><div class="font-black">{field.label}:</div>{setup[field.key]}</div>
            {/each}
        </div>
        <div class="divider mt-0 mb-0"></div>
    </div>
</div>
