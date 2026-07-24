ServerEvents.recipes(allthemods => {
    const addAssembler = (itemsIn, fluidIn, itemsOut, eu, duration, program) => {

        const outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');

        let recipe = allthemods.recipes.gtceu.assembler(`gregification:assembler/${outputID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);
        if (fluidIn) {
            recipe.inputFluids(fluidIn);
        }
        if (program) {
            recipe.circuit(program)
        }
    };

    // 1. Industrial Dissolution Chamber (HV Tier - Stainless Steel)    
    addAssembler(
        [
            'gtceu:hv_machine_hull',
            '2x #gtceu:circuits/hv',
            '2x gtceu:hv_electric_pump',
            '4x #forge:plates/stainless_steel',
            '4x #forge:gears/terrasteel',
            '2x #forge:rods/hellforged'
        ],
        'gtceu:soldering_alloy 144',
        'gtceu:industrial_dissolution_chamber',
        512,
        600

    )
    
    // 2. Latex Synthesizer (EV Tier)
    addAssembler(
        [
            'gtceu:ev_machine_hull',
            '4x #forge:frames/plastic',
            '2x #gtceu:circuits/ev',
            '2x gtceu:ev_electric_piston',
            '2x gtceu:ev_electric_pump',
            '4x #forge:plates/titanium',
            '4x #forge:gears/titanium'
        ],
        'gtceu:soldering_alloy 288',
        'gtceu:latex_synthesizer',
        2048,
        600

    )
    
    //pity machine frame    
    allthemods.shaped('industrialforegoing:machine_frame_pity', [
        'WTW',
        'CIC',
        'WTW'
    ], {
        W: '#forge:treated_wood',
        T: '#forge:plates/conductive_alloy',
        C: '#forge:plates/compressed_iron',
        I: '#gtceu:circuits/mv'
    });

    //supreme    
    addAssembler(
        [
            'industrialforegoing:machine_frame_supreme',
            '2x gtceu:quantum_eye',
            '4x #gtceu:circuits/luv',
            'gtceu:luv_field_generator',
            '4x gtceu:luv_conveyor_module',
            '4x #forge:plates/alfsteel',
            '4x #forge:plastic',
            '2x industrialforegoing:advanced_black_hole_unit'
        ],
        [
            'gtceu:soldering_alloy 288'
        ],
        'industrialforegoing:supreme_black_hole_unit',
        GTValues.VA[GTValues.LuV],
        600,
        1
    )
    addAssembler(
        [
            'industrialforegoing:machine_frame_supreme',
            '2x gtceu:quantum_eye',
            '4x #gtceu:circuits/luv',
            'gtceu:luv_field_generator',
            '4x gtceu:luv_conveyor_module',
            '4x #forge:plates/alfsteel',
            '4x #forge:plastic',
            '2x industrialforegoing:advanced_black_hole_tank'
        ],
        [
            'gtceu:soldering_alloy 288'
        ],
        'industrialforegoing:supreme_black_hole_tank',
        GTValues.VA[GTValues.LuV],
        600,
        2
    )

    //advanced
    addAssembler(
        [
            'industrialforegoing:machine_frame_advanced',
            'gtceu:quantum_eye',
            '2x #gtceu:circuits/iv',
            'gtceu:iv_field_generator',
            '2x gtceu:iv_conveyor_module',
            '2x #forge:plates/terrasteel',
            '4x #forge:plastic',
            '2x industrialforegoing:simple_black_hole_unit'
        ],
        [
            'gtceu:soldering_alloy 288'
        ],
        'industrialforegoing:advanced_black_hole_unit',
        GTValues.VA[GTValues.IV],
        600,
        1
    )
    addAssembler(
        [
            'industrialforegoing:machine_frame_advanced',
            'gtceu:quantum_eye',
            '2x #gtceu:circuits/iv',
            'gtceu:iv_field_generator',
            '2x gtceu:iv_electric_pump',
            '2x #forge:plates/terrasteel',
            '4x #forge:plastic',
            '2x industrialforegoing:simple_black_hole_tank'
        ],
        [
            'gtceu:soldering_alloy 288'
        ],
        'industrialforegoing:advanced_black_hole_tank',
        GTValues.VA[GTValues.IV],
        600,
        2
    )

    //simple
    addAssembler(
        [
            'industrialforegoing:machine_frame_simple',
            'minecraft:ender_eye',
            '2x #gtceu:circuits/ev',
            'gtceu:ev_field_generator',
            '2x gtceu:ev_conveyor_module',
            '2x #forge:plates/elementium',
            '4x #forge:plastic',
            '2x industrialforegoing:pity_black_hole_unit'
        ],
        [
            'gtceu:soldering_alloy 288'
        ],
        'industrialforegoing:simple_black_hole_unit',
        GTValues.VA[GTValues.EV],
        600,
        1
    )
    addAssembler(
        [
            'industrialforegoing:machine_frame_simple',
            'minecraft:ender_eye',
            '2x #gtceu:circuits/ev',
            'gtceu:ev_field_generator',
            '2x gtceu:ev_conveyor_module',
            '2x #forge:plates/elementium',
            '4x #forge:plastic',
            '2x industrialforegoing:pity_black_hole_tank'
        ],
        [
            'gtceu:soldering_alloy 288'
        ],
        'industrialforegoing:simple_black_hole_tank',
        GTValues.VA[GTValues.EV],
        600,
        2
    )

    //pity
    addAssembler(
        [
            'industrialforegoing:machine_frame_pity',
            'minecraft:ender_eye',
            '2x #gtceu:circuits/hv',
            'gtceu:hv_field_generator',
            '2x gtceu:hv_conveyor_module',
            '2x #forge:plates/manasteel',
            '4x #forge:plastic',
            '2x industrialforegoing:common_black_hole_unit'
        ],
        [
            'gtceu:soldering_alloy 288'
        ],
        'industrialforegoing:pity_black_hole_unit',
        GTValues.VA[GTValues.HV],
        600,
        1
    )
    addAssembler(
        [
            'industrialforegoing:machine_frame_pity',
            'minecraft:ender_eye',
            '2x #gtceu:circuits/hv',
            'gtceu:hv_field_generator',
            '2x gtceu:hv_electric_pump',
            '2x #forge:plates/manasteel',
            '4x #forge:plastic',
            '2x industrialforegoing:common_black_hole_tank'
        ],
        [
            'gtceu:soldering_alloy 288'
        ],
        'industrialforegoing:pity_black_hole_tank',
        GTValues.VA[GTValues.HV],
        600,
        2
    )

    //common black hole
    allthemods.shaped('industrialforegoing:common_black_hole_unit',
        [
            'TET',
            'PFP',
            'PUP'
        ],
        {
            F: 'industrialforegoing:machine_frame_pity',
            P: '#forge:plates/steel',
            U: 'gtceu:mv_conveyor_module',
            E: 'minecraft:ender_eye',
            T: "#forge:plastic"
        }
    )
    allthemods.shaped('industrialforegoing:common_black_hole_tank',
        [
            'TET',
            'PFP',
            'PUP'
        ],
        {
            F: 'industrialforegoing:machine_frame_pity',
            P: '#forge:plates/steel',
            U: 'gtceu:mv_electric_pump',
            E: 'minecraft:ender_eye',
            T: "#forge:plastic"
        }
    )
});