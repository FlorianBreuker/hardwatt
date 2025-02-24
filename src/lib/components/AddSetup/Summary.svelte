<script>
    import Close from "$lib/components/Icons/Close.svelte";
    import {input} from "$lib/components/AddSetup/state.svelte.js";
    import SummaryBlock from "$lib/components/AddSetup/SummaryBlock.svelte";

    let infoText = "Setup Summary";
</script>

<dialog id="AddSummary" class="modal">
    <div class="modal-box w-10/12 max-w-6xl bg-base-300 items-center py-15 rounded-2xl">
        <div class="absolute top-5 md:text-lg font-black">{infoText}</div>
        <div class="md:flex justify-evenly gap-10">
            <div class="grid gap-10">
                <SummaryBlock blockTitle="Power Consumption" setupParts={["idle","load","measuringDevice","cState"]}/>
                <SummaryBlock blockTitle="Processors" setupParts={["motherboard","cpu","cpuCooler","gpu"]}/>
            </div>
            <div class="divider divider-horizontal"></div>
            <div class="grid gap-5 md:mt-0">
                <SummaryBlock blockTitle="Storage & PSU" setupParts={["ram","bootDrive","psu","powerAdapter"]}/>
                <SummaryBlock blockTitle="OS & Peripherals" setupParts={["os","mouse","keyboard","monitor"]}/>
            </div>
        </div>
        <div class="modal-action">
            <form method="dialog">
                <button class="absolute right-5 top-5">
                    <Close/>
                </button>
                <button class="btn btn-primary absolute right-5 bottom-5">Submit
                </button>
                <button class="btn btn-primary absolute left-5 bottom-5"
                        onclick={()=>document.getElementById('AddModal4').showModal()}>Back
                </button>
            </form>
        </div>
    </div>
</dialog>