<script>
  export let setup;
</script>

<div class="grid grid-cols-subgrid col-span-7">
  <div class="col-span-7">
      <div class="grid md:grid-cols-[0.75fr_0.75fr_0.5fr_1.25fr_0.5fr_1.25fr_0.5fr_1fr] sm:grid-cols-2 font-normal">
      <div>idle power:</div>
      <div>{setup.idle}</div>
      <div>CPU:</div>
      <div>{setup.cpu}</div>
      <div>CPU cooler:</div>
      <div>{setup.cpucooler}</div>
      <div>OS:</div>
      <div>{setup.os}</div>
      <div>load power:</div>
      <div>{setup.load}</div>
      <div>mainboard:</div>
      <div>{setup.mainboard}</div>
      <div>GPU:</div>
      <div>{setup.gpu}</div>
      <div>mouse:</div>
      <div>{setup.mouse}</div>
      <div>deepest C-state:</div>
      <div>{setup.cstate}</div>
      <div>PSU:</div>
      <div>{setup.psu}</div>
      <div>RAM:</div>
      <div>{setup.ram}</div>
      <div>keyboard:</div>
      <div>{setup.keyboard}</div>
      <div>meas. device:</div>
      <div>{setup.measuringdevice}</div>
      <div>power adapter:</div>
      <div>{setup.poweradapter}</div>
      <div>boot device:</div>
      <div>{setup.bootdrive}</div>
      <div>monitor:</div>
      <div>{setup.monitor}</div>
    </div>
  </div>
</div>
