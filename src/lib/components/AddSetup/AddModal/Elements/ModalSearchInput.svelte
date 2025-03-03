<script>
    import {onMount} from 'svelte';
    import {input, parts} from '$lib/components/AddSetup/state.svelte.js';

    let {bindId} = $props();
    let field = input[bindId];

    let filterOptions = $derived(parts[bindId].filter((part) => part.toLowerCase().includes(field.value.toLowerCase())));
    let showOptions = $state(false);
    let selectedOption = $state("");

    const selectOption = (part) => {
        selectedOption = part;
        field.value = selectedOption;
        showOptions = false;
    }

    const handleChange = () => {
        if (field.value.length < 1) {
            selectedOption = '';
        }
    }

    const handleOutsideClick = (e) => {
        if (!e.target.closest('.' + bindId)) {
            showOptions = false;
        }
    }

    onMount(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    });
</script>

<div id={bindId} class="tooltip {bindId}" data-tip={field.tooltip}>
    <label class="input input-bordered flex items-center">
        {field.label}
        <div class="divider divider-horizontal m-0 p-0"></div>
        <input type={field.type} min={field.min} step={field.steps} required class="grow"
               placeholder={field.placeholder}
               bind:value={field.value} onchange={handleChange} onfocus={() => showOptions = true}/>
    </label>
    <ul class="bg-base-100 absolute top-10 max-h-30 border rounded-(--radius-field) overflow-auto z-2 p-2 {showOptions ? 'block' : 'hidden'}">
        {#each filterOptions as part}
            <button type="button" class="w-full text-left p-1" onclick={() => selectOption(part)}>{part}</button>
        {/each}
    </ul>
</div>

<style>
    ul {
        width: clamp(3rem, 20rem, 100%);
    }
</style>