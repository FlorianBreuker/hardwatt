<script>
  import SetupItem from "./SetupItem.svelte";
  const setups = [
    {
        "id": 1,
        "idle": "40W",
        "load": "200W",
        "cstate": "C0",
        "measuringdevice": "Kill A Watt",
        "cpu": "Intel Core i9-11900K",
        "mainboard": "ASUS ROG Strix Z590-E",
        "psu": "Corsair RM850x",
        "poweradapter": "Dell 130W AC Adapter",
        "cpucooler": "Noctua NH-D15",
        "gpu": "NVIDIA GeForce RTX 3080",
        "ram": "32GB DDR4 3200MHz",
        "bootdrive": "Samsung 970 EVO 1TB",
        "os": "Windows 11 Pro",
        "mouse": "Logitech MX Master 3",
        "keyboard": "Corsair K95 RGB Platinum"
    },
    {
        "id": 2,
        "idle": "35W",
        "load": "150W",
        "cstate": "C1",
        "measuringdevice": "TP-Link Kasa Smart Plug",
        "cpu": "AMD Ryzen 9 5900X",
        "mainboard": "MSI MPG B550 Gaming Edge",
        "psu": "EVGA SuperNOVA 750 G5",
        "poweradapter": "HP 90W Smart AC Adapter",
        "cpucooler": "Corsair H100i RGB Platinum",
        "gpu": "AMD Radeon RX 6800 XT",
        "ram": "16GB DDR4 3600MHz",
        "bootdrive": "WD Black SN750 1TB",
        "os": "Ubuntu 20.04 LTS",
        "mouse": "Razer DeathAdder V2",
        "keyboard": "SteelSeries Apex Pro"
    },
    {
        "id": 3,
        "idle": "30W",
        "load": "180W",
        "cstate": "C2",
        "measuringdevice": "Efergy Elite",
        "cpu": "Intel Core i7-10700K",
        "mainboard": "Gigabyte Z490 AORUS Master",
        "psu": "Seasonic Focus GX-850",
        "poweradapter": "Lenovo 65W AC Adapter",
        "cpucooler": "Cooler Master Hyper 212",
        "gpu": "NVIDIA GeForce RTX 3070",
        "ram": "16GB DDR4 3000MHz",
        "bootdrive": "Crucial MX500 1TB",
        "os": "Fedora 34",
        "mouse": "Microsoft Surface Mouse",
        "keyboard": "Ducky One 2 Mini"
    },
    {
        "id": 4,
        "idle": "30W",
        "load": "180W",
        "cstate": "C2",
        "measuringdevice": "Efergy Elite",
        "cpu": "Intel Core i7-10700K",
        "mainboard": "Gigabyte Z490 AORUS Master",
        "psu": "Seasonic Focus GX-850",
        "poweradapter": "Lenovo 65W AC Adapter",
        "cpucooler": "Cooler Master Hyper 212",
        "gpu": "NVIDIA GeForce RTX 3070",
        "ram": "16GB DDR4 3000MHz",
        "bootdrive": "Crucial MX500 1TB",
        "os": "Fedora 34",
        "mouse": "Microsoft Surface Mouse",
        "keyboard": "Ducky One 2 Mini"
    }
  ];
  </script>

<div class="w-3/4">
      <div class="grid grid-cols-[1fr_1fr_1fr_1fr_1.5fr_2.5fr_1fr] text-sm font-black">
  <div>#Setup</div>
    <div><span class="icon-[ic--baseline-power]" />Idle</div>
    <div><span class="icon-[ic--baseline-power]" />Load</div>
    <div>C-State</div>
    <div>CPU</div>
    <div>Mainboard</div>
    <div class="mb-2">OS</div>

    {#each setups as setup}
      <SetupItem
        id={setup.id}
        idle={setup.idle}
        load={setup.load}
        cstate={setup.cstate}
        cpu={setup.cpu}
        mainboard={setup.mainboard}
        os={setup.os}
        {setup}
      />
    {/each}
  </div>
</div>
