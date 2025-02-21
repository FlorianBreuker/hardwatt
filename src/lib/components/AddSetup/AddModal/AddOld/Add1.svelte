<script>
    const cStates = ["C1","C2","C3","C4","C5","C6","C7","C8","C9"];
</script>


<dialog id="add1" class="modal">
    <div class="modal-box w-10/12 md:h-3/12 max-w-5xl bg-base-300 flex justify-center py-20 rounded-2xl">
        <div class="grid md:grid-cols-[0.6fr_0.6fr_0.4fr_1fr] gap-6">
            <label class="input input-bordered flex items-center gap-2">
                Idle Power
                <input type="text" class="grow" placeholder="in Watt" />
            </label>

            <label class="input input-bordered flex items-center gap-2">
                Load Power
                <input type="text" class="grow" placeholder="in Watt" />
            </label>

            <select class="select w-full max-w-xs">
                <option disabled selected>C-State</option>
                {#each cStates as cState}
                    <option>{cState}</option>
                {/each}
            </select>

            <label class="input input-bordered flex items-center gap-2">
                measuring device
                <input type="text" class="grow" placeholder="Type here" />
            </label>
        </div>
        <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button, it will close the modal -->
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <button class="btn btn-primary absolute right-5 bottom-5"
                        onclick={()=>document.getElementById('add2').showModal()}>Next
                </button>
            </form>
        </div>
    </div>
</dialog>