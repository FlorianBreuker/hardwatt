<script>
    import {input} from '$lib/components/AddSetup/state.svelte.js'

    let {bindId} = $props();
    let field = input[bindId];
</script>

<div class="tooltip" data-tip={field.tooltip}>
    <label class="input input-bordered flex items-center">
        {field.label}
        <div class="divider divider-horizontal m-0 p-0 z-0"></div>
        <input type={field.type} min={field.min} step={field.steps} required class="grow"
               placeholder={field.placeholder}
               bind:value={field.value} list={bindId}/>
    </label>
</div>
