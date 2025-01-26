<script>
  import CollapsedSetupView from "./CollapsedSetupView.svelte";

  export let id;
  export let idle;
  export let load;
  export let cstate;
  export let cpu;
  export let mainboard;
  export let os;
  export let setup;
</script>

<div
  tabindex="0"
  role="button"
  class="collapse grid grid-cols-subgrid col-span-7 font-black text-xs rounded-none"
>
  <div
      class="collapse-title grid grid-cols-subgrid col-span-7 p-0 min-h-8"
  >
    <div>{id}</div>
    <div>{idle}</div>
    <div>{load}</div>
    <div>{cstate}</div>
    <div>{cpu}</div>
    <div>{mainboard}</div>
    <div>{os}</div>
  </div>
  <div class="collapse-content grid grid-cols-subgrid col-span-7 p-0">
    <CollapsedSetupView {setup} />
  </div>
</div>
