<script>
import Plus from "$lib/components/Icons/Plus.svelte";
import Add1 from "$lib/components/Add1.svelte";
import Add2 from "$lib/components/Add2.svelte";
import Add3 from "$lib/components/Add3.svelte";
</script>

<div class="mx-auto max-w-max fixed bottom-10 inset-x-0">
    <button class="btn bg-primary/10 w-20 h-12 rounded-4xl border-white"
       onclick={()=>document.getElementById('add1').showModal()}>
        <Plus/>
    </button>
</div>

<Add1/>
<Add2/>
<Add3/>
