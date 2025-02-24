<script>
    import {input} from '$lib/components/AddSetup/state.svelte.js'

    let {bindId} = $props();
</script>


<label class="input input-bordered flex items-center">
        {input[bindId].label}
        <div class="divider divider-horizontal m-0 p-0"></div>
        <input type={input[bindId].type} required class="grow" placeholder={input[bindId].placeholder}
               bind:value={input[bindId].value}/>
</label>