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
    const alchemistryEU = 524288;

    const addAssemblyLine = (output, inputs, fluids, duration, eu, researchItem, CWUt) => {

        let itemName = output.replace(/^\d+x\s+/, '').replace(':', '_');
        let generatedId = `gregification:assembly_line/${itemName}`;

        let recipe = allthemods.recipes.gtceu.assembly_line(generatedId)
            .itemOutputs(output)
            .itemInputs(inputs)
            .duration(duration)
            .EUt(eu);

        if (fluids && fluids.length > 0) {
            recipe.inputFluids(fluids);
        }

        if (researchItem) {
            if (CWUt) {
                recipe.stationResearch(b =>
                    b.researchStack(researchItem)
                        .EUt(eu / 4)
                        .CWUt(CWUt)
                );
            }
            else {
                recipe.scannerResearch(researchItem);
            }
        }
    };




    
    //farming for blockheads - market
    addAssemblyLine("farmingforblockheads:market",
        [
            '#forge:frames/naquamodium',
            "allthemodium:allthemodium_hoe",
            '2x #forge:double_plates/ferrognetic',
            '4x #forge:gears/terrasteel',
            '8x #forge:plates/emerald'
        ],
        [
            'gtceu:aetheric_sanguine_singularity 32000',
            'gtceu:super_coolant 64000',
        ],
        TIME.very_long,
        32768,
        "allthemodium:allthemodium_hoe"
    );

    //draconic evolution - bacterial vat
    addAssemblyLine('gtceu:bacterial_vat',
        [
            '#forge:frames/ferrognetic',
            '4x draconicevolution:chaotic_core',
            '4x #gtceu:circuits/luv',
            '4x mekanism:alloy_atomic'
        ],
        [
            'gtceu:aetheric_sanguine_singularity 32000',
            'gtceu:super_coolant 64000'

        ],
        TIME.very_long,
        32768,
        'draconicevolution:chaos_shard'
    );

    

    //hephaestus forge
    addAssemblyLine("gtceu:hephaestus_forge",
        [
            "gtceu:hexagonal_bio_composite",
            "forbidden_arcanus:hephaestus_forge",
            "4x #forge:plates/ferrognetic",
            "#forge:frames/alfsteel",
            "4x #gtceu:circuits/luv",
            "4x gtceu:luv_electric_pump",
            "4x gtceu:luv_electric_piston"

        ],
        [
            "#forge:soul 1000",
            "gtceu:saturated_tau 10000"
        ],
        1200,
        32768,
        "forbidden_arcanus:hephaestus_forge"
    );

    //soul extractor
    addAssemblyLine("gtceu:soul_extractor",
        [
            "gtceu:hexagonal_bio_composite",
            "#forge:frames/draconium_awakened",
            "4x #gtceu:circuits/luv",
            "4x gtceu:luv_electric_pump",
            "4x gtceu:luv_electric_piston"

        ],
        [
            "gtceu:saturated_tau 10000",
            'gtceu:sanguine_concentrate 10000',
            "gtceu:europium 576"
        ],
        1200,
        32768,
        "forbidden_arcanus:soul_extractor"
    );

    //mekanism - steel casing
    addAssemblyLine('mekanism:steel_casing',
        [
            'thermal:machine_frame',
            '4x #forge:plates/osmiridium',
            '4x #forge:plates/draconium_awakened',
            '8x #forge:gears/plastic',
            '2x #forge:rods/hop_graphite',
        ],
        [
            '#forge:soldering_alloy 288',
            '#forge:lubricant 288'
        ],
        1000,
        32768,
        'thermal:machine_frame'
    );

    //mekanism - energized smelter
    addAssemblyLine('mekanism:energized_smelter',
        [
            'mekanism:steel_casing',
            '4x gtceu:hssg_quadruple_wire',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - enrichment chamber
    addAssemblyLine('mekanism:enrichment_chamber',
        [
            'mekanism:steel_casing',
            '#forge:rotors/rhodium_plated_palladium',
            'gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - crusher
    addAssemblyLine('mekanism:crusher',
        [
            'mekanism:steel_casing',
            'gtceu:tungsten_grinding_head',
            'gtceu:luv_electric_motor',
            'gtceu:luv_electric_piston',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - osmium compressor
    addAssemblyLine('mekanism:osmium_compressor',
        [
            'mekanism:steel_casing',
            '2x gtceu:luv_electric_piston',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - combiner
    addAssemblyLine('mekanism:combiner',
        [
            'mekanism:steel_casing',
            'gtceu:osmiridium_rotor',
            'gtceu:luv_electric_motor',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768,
        null
    );

    //mekanism - purification chamber
    addAssemblyLine('mekanism:purification_chamber',
        [
            'mekanism:enrichment_chamber',
            '4x #forge:plates/osmiridium',
            '2x gtceu:luv_electric_motor'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - chemical injection chamber
    addAssemblyLine('mekanism:chemical_injection_chamber',
        [
            'mekanism:steel_casing',
            '2x gtceu:luv_conveyor_module',
            'gtceu:luv_electric_pump',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - precision sawmill
    addAssemblyLine('mekanism:precision_sawmill',
        [
            'mekanism:steel_casing',
            'gtceu:hsse_buzz_saw_blade',
            'gtceu:luv_electric_motor',
            'gtceu:luv_conveyor_module',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - metallurgic infuser
    addAssemblyLine('mekanism:metallurgic_infuser',
        [
            'mekanism:steel_casing',
            '2x gtceu:luv_electric_pump',
            'gtceu:luv_electric_motor',
            '2x gtceu:luv_conveyor_module',
            '2x #gtceu:circuits/luv',
            '2x gtceu:laminated_glass'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - fusion reactor controller
    addAssemblyLine('mekanismgenerators:fusion_reactor_controller',
        [
            'gtceu:luv_fusion_reactor',
            '4x gtceu:luv_field_generator',
            '2x gtceu:luv_electric_pump',
            '2x gtceu:luv_conveyor_module',
            '2x #gtceu:circuits/luv',
            '2x mekanism:ultimate_control_circuit',
            '4x gtceu:laminated_glass',
            '4x mekanismgenerators:fusion_reactor_frame'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768,
        'gtceu:luv_fusion_reactor',
        16
    );

    //mekanism - fusion reactor frame
    addAssemblyLine('mekanismgenerators:fusion_reactor_frame',
        [
            'gtceu:fusion_casing',
            '2x gtceu:laminated_glass',
            '4x mekanism:alloy_atomic',
            '4x mekanism:pellet_polonium'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768,
    );

    //mekanism - fusion reactor port
    addAssemblyLine('mekanismgenerators:fusion_reactor_port',
        [
            'mekanismgenerators:fusion_reactor_frame',
            '2x gtceu:laminated_glass',
            'gtceu:luv_input_bus',
            'gtceu:luv_input_hatch',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - sps casing
    addAssemblyLine('mekanism:sps_casing',
        [
            '4x mekanism:hdpe_sheet',
            '#forge:frames/ferrognetic',
            '4x mekanism:pellet_polonium',
            '4x mekanism:pellet_plutonium',
            '2x mekanism:ultimate_control_circuit',
            '2x mekanism:alloy_atomic',
            '#gtceu:circuits/luv'
        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768,
        'mekanismgenerators:fusion_reactor_controller',
        16
    );

    //mekanism - sps port
    addAssemblyLine('mekanism:sps_port',
        [
            '4x mekanism:hdpe_sheet',
            'gtceu:luv_input_bus',
            'gtceu:luv_input_hatch',
            '2x mekanism:ultimate_control_circuit',
            '2x mekanism:alloy_atomic',
            '#gtceu:circuits/luv'

        ],
        [
            'gtceu:polytetrafluoroethylene 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - fission reactor casing
    addAssemblyLine('mekanismgenerators:fission_reactor_casing',
        [
            'mekanism:steel_casing',
            '4x #forge:double_plates/hop_graphite',
            '4x #forge:rods/long/graphite',
            '16x #forge:double_plates/lead'

        ],
        [
            'gtceu:polybenzimidazole 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768,
        '#forge:ingots/plutonium'
    );

    //mekanism - fission reactor port
    addAssemblyLine('mekanismgenerators:fission_reactor_port',
        [
            'mekanismgenerators:fission_reactor_casing',
            'gtceu:luv_input_bus',
            'gtceu:luv_input_hatch',
            '2x mekanism:ultimate_control_circuit',
            '2x mekanism:alloy_atomic',
            '#gtceu:circuits/luv'

        ],
        [
            'gtceu:polybenzimidazole 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - fission fuel assembly
    addAssemblyLine('mekanismgenerators:fission_fuel_assembly',
        [
            'mekanismgenerators:fission_reactor_casing',
            '2x mekanism:ultimate_chemical_tank',
            '2x mekanism:ultimate_control_circuit',
            '2x mekanism:alloy_atomic',
            '#gtceu:circuits/luv'

        ],
        [
            'gtceu:polybenzimidazole 144',
            '#forge:lubricant 1440',
            '#forge:soldering_alloy 1440'
        ],
        1000,
        32768
    );

    //mekanism - mekasuit helm
    addAssemblyLine('mekanism:mekasuit_helmet',
        [
            'allthemodium:unobtainium_helmet',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '5x mekanism:hdpe_sheet',
            '5x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '5x #forge:dense_plates/gaia'
        ],
        'gtceu:europium 720',
        2400,
        32768,
        'allthemodium:unobtainium_helmet', 16
    );

    //mekanism - mekasuit body
    addAssemblyLine('mekanism:mekasuit_bodyarmor',
        [
            'allthemodium:unobtainium_chestplate',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '8x mekanism:hdpe_sheet',
            '8x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '8x #forge:dense_plates/gaia'
        ],
        'gtceu:europium 1152',
        2400,
        32768,
        'allthemodium:unobtainium_chestplate', 16
    );

    //mekanism - mekasuit pants
    addAssemblyLine('mekanism:mekasuit_pants',
        [
            'allthemodium:unobtainium_leggings',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '7x mekanism:hdpe_sheet',
            '7x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '7x #forge:dense_plates/gaia'
        ],
        'gtceu:europium 1008',
        2400,
        32768,
        'allthemodium:unobtainium_leggings', 16
    );

    //mekanism - mekasuit boots
    addAssemblyLine('mekanism:mekasuit_boots',
        [
            'allthemodium:unobtainium_boots',
            'mekanism:ultimate_control_circuit',
            '#gtceu:circuits/luv',
            '4x mekanism:hdpe_sheet',
            '4x mekanism:pellet_polonium',
            'mekanism:ultimate_induction_cell',
            '4x #forge:dense_plates/gaia'
        ],
        'gtceu:europium 576',
        2400,
        32768,
        'allthemodium:unobtainium_boots', 16
    );

    //3d printer
    addAssemblyLine(
        'gtceu:printer',
        [
            'gtceu:uv_machine_hull',
            '4x #forge:exquisite_gems/empowered_restonia',
            '4x #forge:exquisite_gems/empowered_diamatine',
            '4x #forge:exquisite_gems/empowered_palis',
            '4x #forge:exquisite_gems/empowered_emeradic',
            '2x #gtceu:circuits/uv',
            '4x gtceu:uv_electric_motor',
            '2x gtceu:uv_electric_pump',
            '6x gtceu:yttrium_barium_cuprate_single_cable'
        ],
        [
            '#forge:lubricant 1440',
            'gtceu:soldering_alloy 1440'
        ],
        2400,
        tiers['UXV'],
        'gtceu:uv_reconstructor'
    );

    //alchemical casing
    addAssemblyLine(
        'gtceu:alchemical_casing',
        [
            'gtceu:hexagonal_bio_composite',
            '8x #forge:plates/unobtainium',
            '4x #gtceu:circuits/uv',
            '8x naturesaura:depth_ingot'
        ],
        [
            'gtceu:mana_essence 1296',
            'gtceu:primordial_cosmic_soup 1000'

        ],
        1200,
        alchemistryEU,
        'gtceu:hexagonal_bio_composite'
    );

    //atomizer
    addAssemblyLine(
        'alchemistry:atomizer',
        [
            'gtceu:alchemical_casing',
            '2x gtceu:uv_electric_piston',
            '#forge:rotors/darmstadtium',
            'gtceu:uv_electric_pump',
            '#gtceu:circuits/uv',
            'gtceu:uv_electric_motor'

        ],
        [
            '#forge:lubricant 1000',
            'gtceu:tritanium 144'
        ],
        1200,
        alchemistryEU
    );

    //compactor
    addAssemblyLine(
        'alchemistry:compactor',
        [
            'gtceu:alchemical_casing',
            '4x gtceu:uv_electric_piston',
            '2x #gtceu:circuits/uv',
            'gtceu:uv_electric_motor'


        ],
        [
            '#forge:lubricant 1000',
            'gtceu:tritanium 144'
        ],
        1200,
        alchemistryEU
    );

    //combiner
    addAssemblyLine(
        'alchemistry:combiner',
        [
            'gtceu:alchemical_casing',
            '2x #forge:rotors/darmstadtium',
            '4x gtceu:uv_electric_piston',
            '2x #gtceu:circuits/uv',
            'gtceu:uv_electric_motor'


        ],
        [
            '#forge:lubricant 1000',
            'gtceu:tritanium 144'
        ],
        1200,
        alchemistryEU
    );

    //disolver
    addAssemblyLine(
        'alchemistry:dissolver',
        [
            'gtceu:alchemical_casing',
            '2x #forge:rotors/darmstadtium',
            '2x gtceu:uv_electric_pump',
            '2x #gtceu:circuits/uv',
            '2x gtceu:uv_electric_motor'


        ],
        [
            '#forge:lubricant 1000',
            'gtceu:tritanium 144'
        ],
        1200,
        alchemistryEU
    );

    //liquifier
    addAssemblyLine(
        'alchemistry:liquifier',
        [
            'gtceu:alchemical_casing',
            'minecraft:cauldron',
            '2x #forge:rotors/darmstadtium',
            '4x gtceu:uv_electric_pump',
            '4x #gtceu:circuits/uv',
            'gtceu:uv_electric_motor'


        ],
        [
            '#forge:lubricant 1000',
            'gtceu:tritanium 144'
        ],
        1200,
        alchemistryEU
    );

    //fission controller
    addAssemblyLine(
        'alchemistry:fission_chamber_controller',
        [
            'gtceu:alchemical_casing',
            '4x #forge:plates/naquabranium',
            '4x #forge:gears/naquabranium',
            '2x alchemistry:reactor_casing',
            '4x #forge:double_plates/ferrognetic'

        ],
        [
            '#forge:lubricant 5000',
            'gtceu:tritanium 576'
        ],
        1200,
        alchemistryEU,
        "mekanismgenerators:fission_fuel_assembly"
    );

    //fusion controller
    addAssemblyLine(
        'alchemistry:fusion_chamber_controller',
        [
            'gtceu:alchemical_casing',
            '4x #forge:plates/naquatainium',
            '4x #forge:gears/naquatainium',
            '2x alchemistry:reactor_casing',
            '4x #forge:double_plates/ferrognetic'
        ],
        [
            '#forge:lubricant 5000',
            'gtceu:tritanium 576'
        ],
        1200,
        alchemistryEU,
        'gtceu:zpm_fusion_reactor', 16
    );

    //reactor casing
    addAssemblyLine(
        'alchemistry:reactor_casing',
        [
            'gtceu:alchemical_casing',
            '2x #forge:plates/naquamodium',
            '2x #forge:gears/naquamodium',
            '2x #forge:double_plates/ferrognetic'
        ],
        [
            '#forge:lubricant 2000',
            'gtceu:tritanium 144'
        ],
        1200,
        alchemistryEU
    );

    //fission core
    addAssemblyLine(
        'alchemistry:fission_core',
        [
            'gtceu:alchemical_casing',
            '8x #forge:plates/ferrognetic',
            '4x #forge:rods/naquabranium',
            '4x naturesaura:depth_ingot'
        ],
        [
            '#forge:lubricant 1000',
            'gtceu:tritanium 144'
        ],
        1200,
        alchemistryEU
    );
    
    //fusion core
    addAssemblyLine(
        'alchemistry:fusion_core',
        [
            'gtceu:alchemical_casing',
            '8x #forge:plates/ferrognetic',
            '4x #forge:rods/naquatainium',
            '4x naturesaura:depth_ingot'
        ],
        [
            '#forge:lubricant 1000',
            'gtceu:tritanium 144'
        ],
        1200,
        alchemistryEU
    );

    //chunk destroyer
    addAssemblyLine(
        "quarryplus:adv_quarry",
        [
            "3x quarryplus:quarry",
            "2x quarryplus:pump_plus",
            "4x minecraft:dragon_head",
            "allthecompressed:nether_star_block_3x",
            "32x mekanism:alloy_atomic",
            "64x #forge:plates/draconium_awakened",
            "16x thermal:redstone_servo",
            "12x #gtceu:circuits/luv"

        ],
        [
            "gtceu:europium 1152",
            "gtceu:saturated_tau 2000",
            "gtceu:primordial_cosmic_soup 2000"

        ],
        1200,
        131072,
        "quarryplus:quarry", 128
    );

    //enchantment mover
    addAssemblyLine(
        "quarryplus:book_mover",
        [
            "4x quarryplus:mover",            
            "4x minecraft:dragon_head",
            "allthecompressed:nether_star_block_3x",
            "16x mekanism:alloy_atomic",
            "32x #forge:plates/draconium_awakened",
            "8x thermal:redstone_servo",
            "12x #gtceu:circuits/luv"
        ],
        [
            "gtceu:europium 1152",
            "gtceu:saturated_tau 2000",
            "gtceu:primordial_cosmic_soup 2000"

        ],
        1200,
        32768,
        "quarryplus:mover", 128
    );
});