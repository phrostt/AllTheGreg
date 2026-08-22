ServerEvents.recipes(allthemods => {
    const tiers = {
        ULV: 8,
        LV: 32,
        MV: 128,
        HV: 512,
        EV: 2048,
        IV: 8192,
        LuV: 32768,
        ZPM: 131072,
        UV: 524288,
        UHV: 2097152,
        UEV: 8388608,
        UIV: 33554432,
        UXV: 134217728,
        OpV: 536870912,
        MAX: 2147483647
    };

    const cellDuration = 600;
    const mirrorDuration = 200;
    const upgradeDuration = 400;
    const panelDuration = 1000;


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
            recipe.circuit(program);
        }
    };

    
    //mirror
    addAssembler(
        [
            '2x gtceu:tempered_glass',
            '2x #forge:plates/silver',
            '#forge:frames/steel'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:mirror',
        tiers.MV,
        mirrorDuration        
    );

    //emerald
    addAssembler(
        [
            '2x gtceu:laminated_glass',
            '2x #forge:plates/sterling_silver',
            '#forge:frames/dark_steel',
            'solarflux:mirror'
        ],
        '#forge:polytetrafluoroethylene 288',
        '2x solarflux:emerald_glass',
        tiers.IV,
        mirrorDuration
    );

    //ender
    addAssembler(
        [
            '2x gtceu:laminated_glass',
            '2x #forge:plates/selenium',
            '#forge:frames/end_steel',
            'solarflux:emerald_glass'
        ],
        '#forge:polybenzimidazole 288',
        '2x solarflux:ender_glass',
        tiers.LuV,
        mirrorDuration
    );

    //blazing
    addAssembler(
        [
            '2x gtceu:laminated_glass',
            '2x #forge:plates/scandium',
            '#forge:frames/naquadah_alloy',
            'solarflux:ender_glass',
            'gtceu:quantum_eye'
        ],
        '#forge:polybenzimidazole 288',
        '2x solarflux:blazing_coating',
        tiers.ZPM,
        mirrorDuration
    );

    // Cell 1 (Tier 1)
    addAssembler(
        [
            '3x solarflux:mirror',
            '2x #gtceu:wires/copper',
            'gtceu:mv_machine_hull',            
            '2x #forge:plates/lapis'
        ],
        '#forge:polyethylene 288',
        '1x solarflux:photovoltaic_cell_1',
        tiers.MV,
        cellDuration,
        1
    );

    // Cell 2 (Tier 1)
    addAssembler(
        [
            '2x solarflux:mirror',
            '1x solarflux:photovoltaic_cell_1',
            '2x #gtceu:wires/copper',
            'gtceu:mv_machine_hull',
            '2x #forge:plates/lapis'
        ],
        '#forge:polyethylene 288',
        '1x solarflux:photovoltaic_cell_2',
        tiers.HV,
        cellDuration,
        2
    );

    // Cell 3 (Tier 2)
    addAssembler(
        [
            '2x solarflux:mirror',
            '1x solarflux:photovoltaic_cell_2',
            '2x #gtceu:wires/electrum',
            'gtceu:hv_machine_hull',
            '2x #forge:plates/glowstone'
        ],
        '#forge:polyvinyl_chloride 288',
        '1x solarflux:photovoltaic_cell_3',
        tiers.EV,
        cellDuration,
        3
    );

    // Cell 4 (Tier 2)
    addAssembler(
        [
            '2x solarflux:emerald_glass',
            '1x solarflux:photovoltaic_cell_3',
            '2x #gtceu:wires/electrum',
            'gtceu:hv_machine_hull',
            '2x #forge:plates/glowstone'
        ],
        '#forge:polytetrafluoroethylene 288',
        '1x solarflux:photovoltaic_cell_4',
        tiers.IV,
        cellDuration,
        4
    );

    // Cell 5 (Tier 3)
    addAssembler(
        [
            '2x solarflux:ender_glass',
            '1x solarflux:photovoltaic_cell_4',
            '2x #gtceu:wires/end_steel',
            'gtceu:ev_machine_hull',
            '2x #forge:plates/diamond',            
        ],
        '#forge:polybenzimidazole 288',
        '1x solarflux:photovoltaic_cell_5',
        tiers.LuV,
        cellDuration,
        5
    );

    // Cell 6 (Tier 3)
    addAssembler(
        [
            '2x solarflux:blazing_coating',
            '1x solarflux:photovoltaic_cell_5',
            '2x #gtceu:wires/end_steel',
            'gtceu:ev_machine_hull',
            '2x #forge:plates/diamond',            
        ],
        '#forge:polybenzimidazole 288',
        '1x solarflux:photovoltaic_cell_6',
        tiers.ZPM,
        cellDuration,
        6
    );

    // Tier 1
    addAssembler(
        [
            'solarflux:photovoltaic_cell_1',
            'gtceu:mv_machine_hull',
            '2x #gtceu:circuits/mv',
            '2x solarflux:mirror',
            '2x #forge:plates/aluminum'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_1',
        tiers.MV,
        panelDuration
    );
    
    // Tier 2
    addAssembler(
        [
            'solarflux:photovoltaic_cell_1',
            '4x solarflux:sp_1',
            'gtceu:mv_machine_hull',
            '2x #gtceu:circuits/mv',
            '2x solarflux:mirror',
            '2x #forge:plates/signalum'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_2',
        tiers.HV,
        panelDuration
    );

    // Tier 3
    addAssembler(
        [
            'solarflux:photovoltaic_cell_2',
            '4x solarflux:sp_2',
            'gtceu:hv_machine_hull',
            '2x #gtceu:circuits/hv',
            '2x solarflux:mirror',
            '2x #forge:plates/signalum'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_3',
        tiers.HV,
        panelDuration
    );

    // Tier 4
    addAssembler(
        [
            'solarflux:photovoltaic_cell_2',
            '4x solarflux:sp_3',
            'gtceu:hv_machine_hull',
            '2x #gtceu:circuits/hv',
            '2x solarflux:mirror',
            '2x #forge:plates/lumium'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_4',
        tiers.EV,
        panelDuration
    );

    // Tier 5
    addAssembler(
        [
            'solarflux:photovoltaic_cell_3',
            '4x solarflux:sp_4',
            'gtceu:ev_machine_hull',
            '2x #gtceu:circuits/ev',
            '2x solarflux:mirror',
            '2x #forge:plates/enderium'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_5',
        tiers.EV,
        panelDuration
    );

    // Tier 6
    addAssembler(
        [
            'solarflux:photovoltaic_cell_3',
            '4x solarflux:sp_5',
            'gtceu:ev_machine_hull',
            '2x #gtceu:circuits/ev',
            '2x solarflux:mirror',
            '2x #forge:plates/draconium'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_6',
        tiers.IV,
        panelDuration
    );

    // Tier 7
    addAssembler(
        [
            'solarflux:photovoltaic_cell_4',
            '4x solarflux:sp_6',
            'gtceu:iv_machine_hull',
            '2x #gtceu:circuits/iv',
            '2x solarflux:emerald_glass',
            '2x #forge:ingots/fiery'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_7',
        tiers.IV,
        panelDuration
    );

    // Tier 8
    addAssembler(
        [
            'solarflux:photovoltaic_cell_4',
            '4x solarflux:sp_7',
            'gtceu:iv_machine_hull',
            '2x #gtceu:circuits/iv',
            '2x solarflux:emerald_glass',
            '2x #forge:ingots/knightmetal'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_8',
        tiers.LuV,
        panelDuration
    );

    // Wyvern
    addAssembler(
        [
            'solarflux:photovoltaic_cell_5',
            '4x solarflux:sp_8',
            'gtceu:luv_machine_hull',
            '2x #gtceu:circuits/luv',
            '2x solarflux:ender_glass',
            'draconicevolution:wyvern_core',
            '2x draconicevolution:wyvern_energy_core'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_de.wyvern',
        tiers.LuV,
        panelDuration
    );

    // Draconic
    addAssembler(
        [
            'solarflux:photovoltaic_cell_5',
            '4x solarflux:sp_de.wyvern',
            'gtceu:luv_machine_hull',
            '2x #gtceu:circuits/luv',
            '2x solarflux:ender_glass',
            'draconicevolution:awakened_core',
            '2x draconicevolution:draconic_energy_core'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_de.draconic',
        tiers.ZPM,
        panelDuration
    );

    // Chaotic
    addAssembler(
        [
            'solarflux:photovoltaic_cell_6',
            '4x solarflux:sp_de.draconic',
            'gtceu:zpm_machine_hull',
            '2x #gtceu:circuits/zpm',
            '2x solarflux:blazing_coating',
            'draconicevolution:chaotic_core',
            '2x draconicevolution:chaotic_energy_core'
        ],
        '#forge:soldering_alloy 288',
        '2x solarflux:sp_de.chaotic',
        tiers.ZPM,
        panelDuration
    );

    // Blank
    addAssembler(
        [
            '#gtceu:circuits/mv',
            '2x #gtceu:wires/quadruple/fluix',
            '4x #forge:rings/soularium'
        ],
        '#forge:polyethylene 288',
        '2x solarflux:blank_upgrade',
        tiers.MV,
        upgradeDuration
    );

    // Efficiency
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/iv',
            '2x #forge:plates/hafnium',
            '4x #forge:dusts/redstone'
        ],
        '#forge:polytetrafluoroethylene 288',
        'solarflux:efficiency_upgrade',        
        tiers.IV,
        upgradeDuration
    );

    // Transfer
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/hv',
            '2x #forge:plates/electrum',
            '4x #forge:dusts/redstone'
        ],
        '#forge:polyethylene 288',
        'solarflux:transfer_rate_upgrade',
        tiers.HV,
        upgradeDuration
    );

    // Capacity
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/ev',
            '2x #forge:plates/diamond',
            '4x #forge:dusts/redstone'
        ],
        '#forge:polyethylene 288',
        'solarflux:capacity_upgrade',
        tiers.EV,
        upgradeDuration
    );

    // Machine Traversal
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/ev',
            '2x gtceu:ev_field_generator',
            '4x #forge:dusts/ender'
        ],
        '#forge:polyethylene 288',
        'solarflux:traversal_upgrade',
        tiers.EV,
        upgradeDuration,
        1
    );

    // Dispersive
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/ev',
            '2x gtceu:ev_field_generator',
            '4x #forge:dusts/ender'
        ],
        '#forge:polyethylene 288',
        'solarflux:dispersive_upgrade',
        tiers.EV,
        upgradeDuration,
        2
    );

    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/ev',
            '2x gtceu:ev_field_generator',
            '4x #forge:dusts/ender'
        ],
        '#forge:polyethylene 288',
        'solarflux:block_charging_upgrade',
        tiers.EV,
        upgradeDuration,
        3
    );

    // Furnace
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/hv',
            '2x gtceu:hv_field_generator',
            '4x #forge:plates/elementium'
        ],
        '#forge:polyethylene 288',
        'solarflux:furnace_upgrade',
        tiers.HV,
        upgradeDuration
    );

    // AE2
    addAssembler(
        [
            'solarflux:blank_upgrade',
            '#gtceu:circuits/hv',
            'ae2:energy_acceptor',
            '4x #forge:plates/elementium'
        ],
        '#forge:polyethylene 288',
        'solarflux:ae2/energy_upgrade',
        tiers.HV,
        upgradeDuration
    );

    // Twilight
    addAssembler(
        [
            'solarflux:efficiency_upgrade',
            '#gtceu:circuits/iv',
            '2x #forge:gems/carminite',
            '2x #forge:ingots/ironwood'
        ],
        '#forge:polytetrafluoroethylene 288',
        'solarflux:twilightforest/twilight_upgrade',
        tiers.IV,
        upgradeDuration,        
    );

    


});