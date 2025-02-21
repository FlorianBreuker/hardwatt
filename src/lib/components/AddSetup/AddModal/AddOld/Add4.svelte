<script>
    import ToggleInput from "$lib/components/AddSetup/ToggleInput.svelte";
</script>


<dialog id="add4" class="modal">
    <div class="modal-box w-10/12 md:h-3/12 max-w-5xl bg-base-300 py-20 rounded-2xl">
        <h1 class="absolute left-2 top-2">4/5</h1>
        <div class="grid md:grid-cols-4 gap-6"> <!--2xl:gap-10 solves the issue on my laptop-->
            <label class="input input-bordered flex items-center gap-2">
                OS
                <input type="text" placeholder="Type here"/>
            </label>

            <ToggleInput toggleLabelL="Mouse" inputLabel="Mouse"/>
            <ToggleInput toggleLabelL="Keyboard" inputLabel="Keyboard"/>
            <ToggleInput toggleLabelL="Monitor" inputLabel="Monitor"/>
        </div>
        <div class="modal-action">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <button class="btn btn-primary absolute right-5 bottom-5"
                        onclick={()=>document.getElementById('add4').showModal()}>Next
                </button>
                <button class="btn btn-primary absolute left-5 bottom-5"
                        onclick={()=>document.getElementById('add3').showModal()}>Back
                </button>
            </form>
        </div>
    </div>
</dialog>