<script>
</script>


<dialog id="add3" class="modal">
    <div class="modal-box w-10/12 md:h-3/12 max-w-5xl bg-base-300 flex justify-center py-20 rounded-2xl">
        <div class="grid md:grid-cols-4 gap-6">
            <label class="input input-bordered flex items-center gap-2">
                PSU
                <input type="text" class="grow" placeholder="Type here"/>
            </label>
            <label class="input input-bordered flex items-center gap-2">
                Power Adapter
                <input type="text" class="grow" placeholder="Type here"/>
            </label>
            <label class="input input-bordered flex items-center gap-2">
                RAM
                <input type="text" class="grow" placeholder="Type here"/>
            </label>
            <label class="input input-bordered flex items-center gap-2">
                Boot Drive
                <input type="text" class="grow" placeholder="Type here"/>
            </label>

        </div>
        <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button, it will close the modal -->
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <button class="btn btn-primary absolute right-5 bottom-5"
                        onclick={()=>document.getElementById('add4').showModal()}>Next
                </button>
                <button class="btn btn-primary absolute left-5 bottom-5"
                        onclick={()=>document.getElementById('add2').showModal()}>Back
                </button>
            </form>
        </div>
    </div>
</dialog>