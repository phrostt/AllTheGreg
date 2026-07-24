//@ts-check
ServerEvents.recipes(allthemods => {

    allthemods.shaped('pneumaticcraft:printed_circuit_board', [
        ' C ',
        'TPT',
        ' C '
    ], {
        C: '#gtceu:transistors',
        T: '#gtceu:capacitors',
        P: 'pneumaticcraft:unassembled_pcb',
    })
    allthemods.shaped('pneumaticcraft:printed_circuit_board', [
        ' T ',
        'CPC',
        ' T '
    ], {
        C: '#gtceu:transistors',
        T: '#gtceu:capacitors',
        P: 'pneumaticcraft:unassembled_pcb',
    })
    
    allthemods.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            { "type": "pneumaticcraft:stacked_item", "tag": "forge:plastic", "count": 8 },
            { "type": "pneumaticcraft:stacked_item", "item": "gtceu:fine_tin_wire", "count": 8 },
            { "type": "pneumaticcraft:stacked_item", "item": "gtceu:silicon_plate", "count": 1 },
            { "type": "pneumaticcraft:stacked_item", "item": "minecraft:redstone", "count": 2 }
        ],
        "pressure": 3.0,
        "results": [
            { "item": "pneumaticcraft:transistor", "count": 8 }
        ]
    })

    allthemods.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            { "type": "pneumaticcraft:stacked_item", "tag": "forge:plastic", "count": 8 },
            { "type": "pneumaticcraft:stacked_item", "item": "gtceu:fine_electrum_wire", "count": 8 },
            { "type": "pneumaticcraft:stacked_item", "item": "gtceu:aluminium_foil", "count": 2 },
            { "type": "pneumaticcraft:stacked_item", "item": "minecraft:redstone", "count": 2 }
        ],
        "pressure": 3.0,
        "results": [
            { "item": "pneumaticcraft:capacitor", "count": 8 }
        ]
    })

    allthemods.shaped('gtceu:pneumatic_assembler', [
        'TPT',
        'CHC',
        'TPT'
    ], {
        H: 'gtceu:iv_machine_hull',
        C: '#gtceu:circuits/iv',
        T: '#forge:plates/tungsten_steel',
        P: 'gtceu:iv_electric_piston'
    }).id('gregification:pnc/pneumatic_assembler')

    allthemods.shaped('gtceu:industrial_pressure_chamber', [
        'PCP',
        'CHC',
        'PTP'
    ], {
        H: 'gtceu:iv_machine_hull',
        C: '#gtceu:circuits/iv',
        T: 'gtceu:lumium_octal_wire',
        P: 'gtceu:iv_electric_piston'
    }).id('gregification:pnc/pressure_chamber')
    

});