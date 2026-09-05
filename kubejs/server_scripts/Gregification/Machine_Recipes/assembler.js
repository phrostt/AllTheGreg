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

    //germanium diode wafer
    addAssembler(
        [
            'gtceu:germanium_diode_wafer',
            '#forge:dusts/caesium',
            'gtceu:draconium_foil'
        ],
        'gtceu:chaos_plastic 144',
        '16x gtceu:germanium_diode',
        tiers['ZPM'],
        80
    );
    //atomic clock wafer
    addAssembler(
        [
            'gtceu:atomic_clock_wafer',
            '#forge:dusts/caesium',
            'gtceu:hop_graphite_foil'
        ],
        'gtceu:chaos_plastic 144',
        '16x gtceu:atomic_clock',
        tiers['ZPM'],
        80
    );
    //slate casing
    addAssembler(
        ['4x gtceu:compressed_iron_plate', '4x minecraft:stone', 'gtceu:lv_machine_casing'],
        'gtceu:sanguine_concentrate 2500',
        'gtceu:slate_casing',
        32, 200
    );
    
    //ritual stone
    addAssembler(
        [
            'gtceu:ritual_casing',
            '4x bloodmagic:reinforcedslate',
            '4x minecraft:obsidian'
        ],
        null,
        '4x bloodmagic:ritualstone',
        32, 300
    );

    //ender chest
    addAssembler(
        [
            "gtceu:magical_bio_composite",
            "enderchests:ender_pouch",
            "#forge:frames/terrasteel",
            "4x #forge:plates/pink_slime",
            "4x minecraft:blaze_rod",
            "#minecraft:wool",
            "3x minecraft:obsidian",
            "gtceu:aluminium_crate"

        ],
        null,
        "enderchests:ender_chest",
        2048,
        600,
        1
    );

    //ender chest
    addAssembler(
        [
            "gtceu:magical_bio_composite",
            "enderchests:ender_pouch",
            "#forge:frames/terrasteel",
            "4x #forge:plates/pink_slime",
            "4x minecraft:blaze_rod",
            "#minecraft:wool",
            "3x minecraft:obsidian",
            "gtceu:aluminium_crate"
        ],
        null,
        "minecraft:ender_chest",
        2048,
        600,
        2
    );

    //ender tank
    addAssembler(
        [
            "gtceu:magical_bio_composite",
            "gtceu:aluminium_drum",
            "#forge:frames/terrasteel",
            "4x #forge:plates/pink_slime",
            "4x minecraft:blaze_rod",
            "#minecraft:wool",
            "3x minecraft:obsidian",
            "gtceu:aluminium_drum"

        ],
        null,
        "endertanks:ender_tank",
        2048,
        600,
        3
    )

    // Xenomorphic Data Frame
    // Tier: HV (Late MV/Early HV transition)
    addAssembler(
        [
            'gtceu:hv_machine_casing',
            '4x #forge:plates/dark_steel',
            '2x #forge:rods/soularium',
            '4x #forge:screws/manasteel',
            'gtceu:data_stick',
            '#forge:frames/compressed_iron'
        ],
        'gtceu:sanguine_concentrate',
        'gtceu:xenomorphic_data_frame',
        512,
        600
    );

    // 1. Simulation Chamber
    // Tier: HV (Standard Stainless/Dark Steel Tech)
    addAssembler(
        [
            'gtceu:xenomorphic_data_frame',
            '4x #forge:plates/stainless_steel',
            '2x #gtceu:circuits/hv',
            '4x #forge:plates/elementium',
            '8x #forge:screws/soularium',
            '#forge:frames/hellforged'

        ],
        'gtceu:polyethylene 144',
        'hostilenetworks:sim_chamber',
        512,                                        // HV Voltage
        600
    );

    //sanguine hostile network
    addAssembler(
        [
            'hostilenetworks:sim_chamber',
            '2x #gtceu:circuits/hv',
            '2x bloodmagic:reagentbinding',
            '2x bloodmagic:infusedslate',
            'bloodmagic:daggerofsacrifice'           
        ],
        'gtceu:polyethylene 144',
        'sanguine_networks:virtual_sacrificer',
        512,                                        // HV Voltage
        600
    );


    //soul surge
    addAssembler(
        [            
            '4x #forge:plastic',
            '2x minecraft:echo_shard',
            '2x gtceu:iv_electric_piston',
            '2x gtceu:iv_electric_pump',
            '2x #gtceu:circuits/iv',
            '2x #forge:gears/selenium',
            '#forge:frames/hafnium',
        ],
        'gtceu:polyethylene 144',
        'industrialforegoingsouls:soul_surge',
        8192,                                        // IV Voltage
        600
    );

    //soul pipe
    addAssembler(
        [            
            '2x #forge:plastic',
            '2x minecraft:echo_shard',
            '6x #forge:plates/hafnium',
            '2x #forge:small_gears/selenium'            
        ],
        'gtceu:polyethylene 144',
        '8x industrialforegoingsouls:soul_network_pipe',
        8192,
        60
    );

    //soul laser base
    addAssembler(
        [
            '4x #forge:plastic',
            'minecraft:sculk_shrieker',            
            '#industrialforegoing:machine_frame/advanced',
            '2x #forge:gears/unobtainium',
            '2x #forge:gears/selenium',
            '#forge:frames/hafnium',
            'minecraft:sculk_catalyst',            
            '4x #gtceu:circuits/iv'           
        ],
        'gtceu:polytetrafluoroethylene 288',
        'industrialforegoingsouls:soul_laser_base',
        8192,
        600
    );


    // 2. Loot Fabricator
    // Tier: HV (Matter Fabrication Logic)
    addAssembler(
        [
            'gtceu:xenomorphic_data_frame',
            '4x #forge:plates/dark_steel',
            '2x gtceu:hv_robot_arm',
            '2x #gtceu:circuits/hv',
            '8x #forge:screws/compressed_iron',
            '#forge:frames/iesnium'

        ],
        'gtceu:polyethylene 288',
        'hostilenetworks:loot_fabricator',
        512,
        600
    );

    //dielectric casing
    addAssembler(
        [
            '#forge:frames/end_steel',
            '4x #forge:plates/dark_steel',
            '2x powah:dielectric_rod',
            '2x powah:dielectric_rod_horizontal',
            '2x #gtceu:circuits/ev'
        ],
        'gtceu:rubber 144',
        'powah:dielectric_casing',
        1920,
        400
    );

    //energizing orb
    addAssembler(
        [
            'powah:dielectric_casing',
            '#forge:frames/end_steel',
            'forbidden_arcanus:smelter_prism',
            '#forge:lenses/diamond',
            '2x gtceu:quantum_eye',
            '2x #gtceu:circuits/ev'
        ],
        'gtceu:rubber 576',
        'powah:energizing_orb',
        1920,
        1200
    );

    //pylon casing
    addAssembler(
        [
            'gtceu:iv_machine_casing',
            'gtceu:iv_field_generator',
            '4x #forge:plates/alfsteel',
            '4x #forge:rods/hop_graphite',
            '2x #gtceu:circuits/iv',
            '2x bloodmagic:etherealslate',
            '8x #forge:screws/draconium'
        ],
        'gtceu:soldering_alloy 288',
        'gtceu:industrial_pylon_casing',
        8192,
        400
    );

    //harvester pylon
    addAssembler(
        [
            'gtceu:industrial_pylon_casing',
            '#forge:frames/enderium',
            '2x gtceu:iv_robot_arm',
            '2x #gtceu:circuits/iv',
            'forbidden_arcanus:terrastomp_prism'

        ],
        'gtceu:soldering_alloy 288',           // IV Tier Soldering
        'pylons:harvester_pylon',
        8192,                                  // IV Voltage
        600                                    // 30 Seconds
    );

    //expulsion pylon
    addAssembler(
        [
            'gtceu:industrial_pylon_casing',
            '#forge:frames/enderium',
            '2x gtceu:iv_robot_arm',
            '2x #gtceu:circuits/iv',
            'forbidden_arcanus:whirlwind_prism'
        ],
        'gtceu:soldering_alloy 288',
        'pylons:expulsion_pylon',
        8192,
        600
    );

    //infusion pylon
    addAssembler(
        [
            'gtceu:industrial_pylon_casing',
            '#forge:frames/enderium',
            '2x gtceu:iv_robot_arm',
            '2x #gtceu:circuits/iv',
            'forbidden_arcanus:sea_prism'
        ],
        'gtceu:soldering_alloy 288',
        'pylons:infusion_pylon',
        8192,
        600
    );

    //interdiciton pylon
    addAssembler(
        [
            'gtceu:industrial_pylon_casing',
            '#forge:frames/enderium',
            '2x gtceu:iv_robot_arm',
            '2x #gtceu:circuits/iv',
            'forbidden_arcanus:smelter_prism'
        ],
        'gtceu:soldering_alloy 288',
        'pylons:interdiction_pylon',
        8192,
        600
    );

    //mining well
    addAssembler(
        [
            "#forge:frames/iesnium",
            "16x #forge:plates/soularium",
            "16x #forge:plates/steel",
            "4x #gtceu:circuits/ev"

        ],
        "#forge:lubricant 1000",
        "quarryplus:mining_well",
        2048,
        1200
    );

    //mini quarry
    addAssembler(
        [
            "quarryplus:mining_well",
            "16x #forge:plates/signalum",
            "16x #forge:plates/steel",
            "4x #gtceu:circuits/ev"
        ],
        "#forge:lubricant 1000",
        "quarryplus:mini_quarry",
        2048,
        1200
    );

    //solid fuel quarry
    addAssembler(
        [
            "quarryplus:mini_quarry",
            "16x #forge:plates/lumium",
            "16x #forge:plates/dark_steel",
            "4x #gtceu:circuits/iv"
        ],
        "gtceu:polytetrafluoroethylene 576",
        "quarryplus:solid_fuel_quarry",
        8192,
        1200

    );

    //quarry
    addAssembler(
        [
            "quarryplus:solid_fuel_quarry",
            "16x #forge:plates/enderium",
            "16x #forge:plates/end_steel",
            "16x mekanism:alloy_atomic",
            "4x #gtceu:circuits/luv"
        ],
        "gtceu:polybenzimidazole 576",
        "quarryplus:quarry",
        32768,
        1200
    );

    //pump plus        
    addAssembler(
        [
            "4x gtceu:ev_electric_pump",
            "16x #forge:plates/signalum",
            "16x #forge:plates/steel",
            "4x #gtceu:circuits/ev"
        ],
        "#forge:lubricant 1000",
        "quarryplus:pump_plus",
        2048,
        1200
    );

    //advanced pump
    addAssembler(
        [
            "quarryplus:pump_plus",
            "4x gtceu:iv_electric_pump",
            "16x #forge:plates/lumium",
            "16x #forge:plates/dark_steel",
            "4x #gtceu:circuits/iv"
        ],
        "gtceu:polytetrafluoroethylene 576",
        "quarryplus:adv_pump",
        8192,
        1200
    );

    //exp pump
    addAssembler(
        [
            "quarryplus:adv_pump",
            "4x gtceu:luv_electric_pump",
            "16x #forge:plates/enderium",
            "16x #forge:plates/end_steel",
            "16x mekanism:alloy_atomic",
            "4x #gtceu:circuits/luv",
            "4x thermal:redstone_servo"
        ],
        "gtceu:polybenzimidazole 576",
        "quarryplus:exp_pump",
        32768,
        1200
    );

    //fuel module
    addAssembler(
        [
            "16x #forge:plates/gold",
            "5x #forge:rods/blaze",
            "64x #forge:plates/end_steel",
            "#gtceu:circuits/luv"
        ],
        null,
        "quarryplus:fuel_module_normal",
        32768,
        600,
        2
    );

    //filter module
    addAssembler(
        [
            "16x #forge:plates/gold",
            "5x #forge:rods/blaze",
            "16x #forge:plates/end_steel",
            "#gtceu:circuits/luv"
        ],
        null,
        "quarryplus:filter_module",
        32768,
        600,
        1
    );

    //flex marker
    addAssembler(
        [
            "8x #forge:plates/gold",
            "8x #forge:plates/steel",
            "12x #forge:dusts/redstone",
            "4x #forge:dusts/glowstone",
            "4x minecraft:redstone_torch",
            "12x #forge:dusts/lapis"
        ],
        null,
        "quarryplus:flex_marker",
        2048,
        600
    );

    //placer
    addAssembler(
        [
            "minecraft:dispenser",
            "2x #forge:plates/gold",
            "2x #forge:plates/steel",
            "8x #forge:dusts/redstone",
            "4x pneumaticcraft:compressed_stone"
        ],
        "#forge:lubricant 1000",
        "quarryplus:placer_plus",
        2048,
        600
    );

    //status checker
    addAssembler(
        [
            "16x #forge:plates/gold",
            "8x #forge:plates/steel",
            "32x #forge:dusts/redstone",
            "4x minecraft:obsidian",
            "8x #forge:gems/lapis"
        ],
        "gtceu:polytetrafluoroethylene 288",
        'quarryplus:status_checker',
        2048,
        600
    );

    //y setter
    addAssembler(
        [
            "32x #forge:plates/gold",
            "64x #forge:gems/quartz",
            "gtceu:ev_emitter",
            "2x #gtceu:circuits/ev"
        ],
        "gtceu:polytetrafluoroethylene 288",
        "quarryplus:y_setter",
        2048,
        600
    );

    //filler
    addAssembler(
        [
            "32x #forge:plates/steel",
            "#forge:frames/end_steel",
            "gtceu:ev_emitter",
            "2x thermal:redstone_servo"
        ],
        "#forge:lubricant 1000",
        "quarryplus:filler",
        2048,
        600
    );

    //mover    
    addAssembler(
        [
            "2x minecraft:anvil",
            "16x #forge:plates/osmiridium",
            "16x #forge:plates/enderium",
            "16x #forge:plates/iesnium",
            "16x #forge:plates/hellforged",
            "16x #forge:plates/draconium_awakened",
            "48x #forge:plates/redstone",
            "forbidden_arcanus:eternal_stella"
        ],
        "gtceu:polybenzimidazole 576",
        "quarryplus:mover",
        8192,
        1200
    );

    //selenium rectifier
    addAssembler(
        [
            '2x #forge:plates/bismuth',
            '1x #forge:dusts/selenium',
            '8x #forge:foils/aluminium'
        ],
        'gtceu:soldering_alloy 144',
        'gtceu:selenium_rectifier',
        8192,
        200
    );

    //polishing wheel
    addAssembler(
        [
            '#forge:plates/tungsten_steel',
            '#forge:rods/titanium',
            '2x gtceu:fine_electrum_wire',
            '#forge:dusts/diamond'
        ],
        '#forge:bronze 288',
        'gtceu:polishing_wheel',
        512,
        60
    );

    addAssembler(
        ['3x minecraft:glass'], ['minecraft:water 1000'], '16x croptopia:water_bottle', 32, 360);


    const dynamos = [
        { name: "thermal:dynamo_stirling", gear: "#forge:gears/steel" },
        { name: "thermal:dynamo_compression", gear: "#forge:gears/compressed_iron" },
        { name: "thermal:dynamo_magmatic", gear: "#forge:gears/dark_steel" },
        { name: "thermal:dynamo_numismatic", gear: "#forge:gears/signalum" },
        { name: "thermal:dynamo_lapidary", gear: "#forge:gears/elementium" },
        { name: "thermal:dynamo_disenchantment", gear: "#forge:gears/gold" },
        { name: "thermal:dynamo_gourmand", gear: "#forge:gears/end_steel" },
        { name: "thermal_extra:dynamo_frost", gear: "#forge:gears/enderium" }]

    dynamos.forEach((dynamo, index) => {
        addAssembler(
            [
                "gtceu:hv_machine_hull",
                `2x ${dynamo.gear}`,
                "gtceu:lpic_chip",
                "2x #forge:rods/long/stainless_steel",
                "4x #forge:plates/redstone"
            ],
            "#forge:lubricant 1000",
            dynamo.name,
            512,
            1200,
            index + 1
        );
    });

    //thermal machine frame
    addAssembler([
        "#forge:frames/selenium",
        "4x #forge:plates/tungsten_steel",
        "4x #forge:screws/terrasteel",
        "8x #forge:small_gears/plastic",
        "2x #gtceu:circuits/iv",
        "2x gtceu:iv_electric_piston"],
        "gtceu:polytetrafluoroethylene 144",
        "thermal:machine_frame",
        8192, 600
    );

    addAssembler(
        [
            '4x pneumaticcraft:turbine_rotor',
            '#forge:frames/plastic',
            '2x #gtceu:circuits/iv',
            'gtceu:titanium_crate',
            '4x #forge:gears/plastic'
        ],
        [
            '#forge:lubricant 4000'            
        ],
        'pneumaticcraft:collector_drone',
        8192, 600
    );

    //conduits
    const conduits = [
        { conduit: "energy", material: "gtceu:conductive_alloy_double_wire" },
        { conduit: "fluid", material: "gtceu:bronze_small_fluid_pipe" },
        { conduit: "pressurized_fluid", material: "gtceu:signalum_small_fluid_pipe" },
        { conduit: "ender_fluid", material: "gtceu:enderium_small_fluid_pipe" },
        { conduit: "redstone", material: "gtceu:red_alloy_double_wire" },
        { conduit: "item", material: "gtceu:polyvinyl_chloride_normal_item_pipe" },
        { conduit: "dense_me", material: "gtceu:fluix_hex_wire" },
        { conduit: "me", material: "gtceu:fluix_double_wire" },
        { conduit: "chemical", material: "mekanism:basic_pressurized_tube" },
        { conduit: "pressurized_chemical", material: "mekanism:advanced_pressurized_tube" },
        { conduit: "ender_chemical", material: "mekanism:elite_pressurized_tube" },
        { conduit: "heat", material: "mekanism:basic_thermodynamic_conductor" },
        { conduit: "energetic", material: "gtceu:energetic_alloy_double_wire" },
        { conduit: "endsteel", material: "gtceu:end_steel_double_wire" },
        { conduit: "lumium", material: "gtceu:lumium_double_wire" },
        { conduit: "signalum", material: "gtceu:signalum_double_wire" },
        { conduit: "vibrant", material: "gtceu:vibrant_alloy_double_wire" },
        { conduit: "enderium", material: "gtceu:enderium_double_wire" }

    ]
    conduits.forEach(conduit => {
        addAssembler(
            [
                `3x ${conduit.material}`,
                '1x gtceu:polyvinyl_chloride_foil'
            ],
            'gtceu:conduit_binder 864',
            `8x enderio:${conduit.conduit}_conduit`,
            128,
            100
        )
    })

    //wirelesschargers:basic_wireless_player_charger
    addAssembler(
        [
            'gtceu:hv_machine_hull',
            '#forge:gears/manasteel',
            '4x #forge:plates/stainless_steel',
            '2x #gtceu:circuits/hv',
            'gtceu:hv_field_generator'
        ], 
        null, 
        'wirelesschargers:basic_wireless_player_charger', 
        512, 200, 1);

    //wirelesschargers:advanced_wireless_player_charger
    addAssembler(
        [
            'wirelesschargers:basic_wireless_player_charger',
            'gtceu:ev_machine_hull',
            '4x #forge:plates/titanium',
            '2x #gtceu:circuits/ev',
            'gtceu:ev_field_generator'
        ], 
        null, 
        'wirelesschargers:advanced_wireless_player_charger', 
        2048, 600, 2);

    //wirelesschargers:basic_wireless_block_charger
    addAssembler(
        [
            'gtceu:hv_machine_hull',
            'bloodmagic:blankslate',
            '4x #forge:plates/stainless_steel',
            '2x #gtceu:circuits/hv',
            'gtceu:hv_field_generator'
        ], 
        null, 
        'wirelesschargers:basic_wireless_block_charger', 
        512, 200, 1);

    //wirelesschargers:advanced_wireless_block_charger
    addAssembler(
        [
            'wirelesschargers:basic_wireless_block_charger',
            'gtceu:ev_machine_hull',
            '4x #forge:plates/titanium',
            '2x #gtceu:circuits/ev',
            'gtceu:ev_field_generator'
        ], 
        null, 
        'wirelesschargers:advanced_wireless_block_charger', 
        2048, 600, 2);

    addAssembler(
        [
            'rftoolsbase:machine_frame',            
            '4x #forge:dusts/redstone',
            '4x gtceu:tempered_glass',
            '4x #forge:plates/cadmium_selenide'
            
        ], 
        'gtceu:polytetrafluoroethylene 144', 
        'rftoolsutility:screen_controller', 
        2048, 200);

    addAssembler(
        [
            '2x integrateddynamics:part_static_light_panel',
            '2x integrateddynamics:variable_transformer_output',
            '4x #forge:foils/cadmium_selenide'
            
        ], 
        'gtceu:polytetrafluoroethylene 144', 
        'integrateddynamics:part_display_panel', 
        2048, 200);

    addAssembler(
        [
            
            '4x #forge:foils/cadmium_selenide',
            '2x #forge:gears/diamond',
            '4x #forge:plates/gadolinium',
            '4x #forge:plastic',
            '2x #gtceu:circuits/iv'
            
        ], 
        'gtceu:polytetrafluoroethylene 288', 
        'industrialforegoing:hydroponic_simulation_processor', 
        8192, 200);

    addAssembler(
        [
            
            'gtceu:long_magnetic_samarium_cobalt_rod',
            '4x #forge:rings/strontium_ferrite',
            '64x #forge:fine_wires/cadmium_copper'            
        ], 
        '#forge:polybenzimidazole 288', 
        'gtceu:samarium_cobalt_magnetic_rotor', 
        8192, 60);

});