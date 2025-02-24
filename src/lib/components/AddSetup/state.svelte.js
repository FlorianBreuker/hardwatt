export const input = $state({
    idle: {
        label: "Idle Power", value: '', type: 'number', placeholder: 'in Watt',
    },
    load: {
        label: "Load Power", value: '', type: 'number', placeholder: 'in Watt',
    },
    measuringDevice: {
        label: "Meas. Device", value: '', type: 'text', placeholder: 'Type here',
    },
    cState: {
        label: "C-States", value: '', options: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'],
    },
    motherboard: {
        label: "Motherboard", value: '', type: 'text', placeholder: 'Type here',
    },
    cpu: {
        label: "CPU", value: '', type: 'text', placeholder: 'Type here',
    },
    cpuCooler: {
        label: "CPU Cooler", value: '', type: 'text', placeholder: 'Type here',
    },
    gpu: {
        label: "GPU", value: '', type: 'text', placeholder: 'Type here',
    },
    ram: {
        label: "RAM", value: '', type: 'text', placeholder: 'Type here',
    },
    bootDrive: {
        label: "Boot Drive", value: '', type: 'text', placeholder: 'Type here',
    },
    psu: {
        label: "PSU", value: '', type: 'text', placeholder: 'Type here',
    },
    powerAdapter: {
        label: "Power Adapter", value: '', type: 'text', placeholder: 'Type here',
    },
    os: {
        label: "OS", value: '', type: 'text', placeholder: 'Type here',
    },
    mouse: {
        label: "Mouse", value: '', type: 'text', placeholder: 'Type here',
    },
    keyboard: {
        label: "Keyboard", value: '', type: 'text', placeholder: 'Type here',
    },
    monitor: {
        label: "Monitor", value: '', type: 'text', placeholder: 'Type here',
    },
});