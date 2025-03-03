<script>
    import Plus from "$lib/components/Icons/Plus.svelte";
    import AddModal1 from "$lib/components/AddSetup/AddModal/AddModal1.svelte";
    import AddModal2 from "$lib/components/AddSetup/AddModal/AddModal2.svelte";
    import AddModal3 from "$lib/components/AddSetup/AddModal/AddModal3.svelte";
    import AddModal4 from "$lib/components/AddSetup/AddModal/AddModal4.svelte";
    import Summary from "$lib/components/AddSetup/Summary.svelte";
</script>

<div class="mx-auto inset-x-0 max-w-max fixed bottom-10">
    <button class="btn bg-primary/70 w-20 h-12 rounded-4xl border-white"
            onclick={()=>document.getElementById('AddModal1').showModal()}>
        <Plus/>
    </button>
</div>

<AddModal1/>
<AddModal2/>
<AddModal3/>
<AddModal4/>

<Summary/>
