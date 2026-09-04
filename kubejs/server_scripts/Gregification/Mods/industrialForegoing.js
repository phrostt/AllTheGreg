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


    const ifMachines = [
        // --- Pity -> HV ---
        { name: 'industrialforegoing:fluid_extractor', components: ['2x pump', 'piston', '4x small_gear'], tier: 1 },
        { name: 'industrialforegoing:latex_processing_unit', components: ['pump', 'piston', 'conveyor', '4x plastic'], tier: 1 },
        //{ name: 'industrialforegoing:dissolution_chamber', components: [], tier: 1 },
        { name: 'industrialforegoing:plant_gatherer', components: ['generator', 'sensor', '4x gear', '4x small_gear', '4x plastic'], tier: 1 },
        { name: 'industrialforegoing:sewer', components: ['4x pump', '8x plastic', '2x piston', '2x small_gear'], other: ['gtceu:steel_drum'], tier: 1 },
        { name: 'industrialforegoing:sewage_composter', components: ['pump', 'conveyor', '4x plastic', '2x small_gear'], other: ['gtceu:steel_drum'], tier: 1 },
        { name: 'industrialforegoing:plant_sower', components: ['sensor', 'emitter', '4x small_gear', '2x piston', '2x conveyor'], tier: 1 },
        { name: 'industrialforegoing:mob_slaughter_factory', components: ['4x gear', 'generator', 'frame', '2x pump'], tier: 1 },
        { name: 'industrialforegoing:animal_rancher', components: ['frame', 'sensor', 'emitter', '2x conveyor', '2x piston'], other: ['2x #forge:tools/shears'], tier: 1 },
        { name: 'industrialforegoing:animal_feeder', components: ['frame', 'conveyor', '2x piston', '2x gear', '2x plastic'], tier: 1 },
        { name: 'industrialforegoing:animal_baby_separator', components: ['2x conveyor', 'sensor', 'generator', '2x piston', '8x plastic'], tier: 1 },
        { name: 'industrialforegoing:resourceful_furnace', components: ['frame', 'small_gear', '4x plastic'], other: ['2x minecraft:furnace'], tier: 1 },
        { name: 'industrialforegoing:sludge_refiner', components: ['2x small_gear', 'pump', 'piston', 'conveyor', '4x plastic'], other: ['gtceu:cupronickel_coil_block'], tier: 1 },
        { name: 'industrialforegoing:water_condensator', components: ['frame', 'pump', '2x small_gear', '2x plastic'], other: ['gtceu:steel_drum'], tier: 1 },
        { name: 'industrialforegoing:block_placer', components: ['frame', 'emitter', 'conveyor', '2x piston', '4x plastic'], other: ['gtceu:steel_crate'], tier: 1 },
        { name: 'industrialforegoing:block_breaker', components: ['frame', 'generator', 'conveyor', '2x piston', '4x plastic'], other: ['gtceu:steel_crate'], tier: 1 },
        { name: 'industrialforegoing:fluid_collector', components: ['frame', 'pump', 'emitter', 'conveyor', '4x plastic'], other: ['gtceu:steel_drum'], tier: 1 },
        { name: 'industrialforegoing:fluid_placer', components: ['frame', 'pump', 'generator', 'conveyor', '4x plastic'], other: ['gtceu:steel_drum'], tier: 1 },
        { name: 'industrialforegoing:dye_mixer', components: ['4x small_gear', '2x piston', '2x conveyor'], tier: 1 },
        { name: 'industrialforegoing:spores_recreator', components: ['frame', '4x gear', '2x conveyor'], other: ['gtceu:steel_crate', 'reliquary:fertile_lily_pad'], tier: 1 },
        { name: 'industrialforegoing:bioreactor', components: ['frame', '2x gear', '2x pump'], other:['4x #forge:plates/diamond', 'gtceu:steel_drum'], tier: 1 },
        { name: 'industrialforegoing:biofuel_generator', components: ['frame', '2x gear', '2x conveyor'], other:['4x #forge:plates/diamond', 'gtceu:steel_crate'], tier: 1 },

        // --- Simple -> EV ---
        { name: 'industrialforegoing:plant_fertilizer', components: ['2x small_gear', '2x plastic', 'generator', '2x motor', 'pump'], other: ['gtceu:aluminium_drum'], tier: 2 },
        { name: 'industrialforegoing:hydroponic_bed', components: ['2x gear', '2x plastic', 'sensor', 'emitter', '4x motor', 'pump'], tier: 2 },
        { name: 'industrialforegoing:simulated_hydroponic_bed', components: ['2x gear', '4x plastic', '2x small_gear', 'generator', '2x motor', '2x pump'], other: ['industrialforegoing:hydroponic_simulation_processor'], tier: 2 },
        { name: 'industrialforegoing:marine_fisher', components: ['4x small_gear', '4x plastic', 'sensor'], other: ['aquaculture:diamond_fishing_rod'], tier: 2 },
        { name: 'industrialforegoing:fermentation_station', components: ['4x pump', '2x small_gear', '4x plastic'], other: 'gtceu:aluminium_drum', tier: 2 },
        { name: 'industrialforegoing:mob_detector', components: ['sensor', '6x plastic', '2x small_gear'], other: ['2x minecraft:observer'], tier: 2 },

        // --- Advanced -> IV ---
        { name: 'industrialforegoing:mob_crusher', components: ['2x frame', '4x gear', '2x pump', '2x conveyor', 'sensor', 'emitter', 'generator'], other:['2x gtceu:diamond_grinding_head', '2x #forge:gears/pink_slime'], tier: 3 },
        { name: 'industrialforegoing:mob_duplicator', components: ['frame', '4x generator', '2x pump'], other: ['4x #forge:gears/terrasteel', '4x #forge:plates/iesnium'], tier: 3 },
        { name: 'industrialforegoing:material_stonework_factory', components: ['frame', '5x conveyor', 'robot', '4x piston'], other: ['4x #forge:gears/pink_slime', '4x #forge:rods/terrasteel'], tier: 3 },
        { name: 'industrialforegoing:potion_brewer', components: ['2x pump', '2x motor', '2x gear', '4x plastic'], other:['gtceu:stainless_steel_drum'], tier: 3 },
        { name: 'industrialforegoing:washing_factory', components: ['4x pump', 'sensor', '4x gear', '2x robot'], other: ['gtceu:stainless_steel_drum'], tier: 3 },
        { name: 'industrialforegoing:fluid_sieving_machine', components: ['frame', '2x pump', '2x motor', '2x small_gear'], other: ['gtceu:stainless_steel_drum'], tier: 3 },
        { name: 'industrialforegoing:stasis_chamber', components: ['frame', '2x generator', '2x emitter', 'sensor', '4x gear'], other: ['4x minecraft:ghast_tear'], tier: 3 },
        { name: 'industrialforegoing:enchantment_sorter', components: ['frame', '2x sensor', '4x gear', 'conveyor', 'piston'], other:['gtceu:stainless_steel_crate'], tier: 3 },
        { name: 'industrialforegoing:enchantment_applicator', components: ['frame', '2x emitter', '4x gear', 'conveyor', 'piston'], other:['irons_spellbooks:arcane_anvil'], tier: 3 },
        { name: 'industrialforegoing:enchantment_extractor', components: ['frame', '2x robot', '4x gear', 'conveyor', 'piston'], other:['gtceu:stainless_steel_crate'], tier: 3 },
        { name: 'industrialforegoing:enchantment_factory', components: ['frame', '2x robot', '4x gear', '2x piston'], other: ['2x #forge:gears/allthemodium'], tier: 3 },
        { name: 'industrialforegoing:infinity_charger', components: ['robot', '2x gear', '2x piston'], other: ['4x #gtceu:batteries/iv'], tier: 3 },

        // --- Supreme -> LuV ---
        { name: 'industrialforegoing:wither_builder', components: ['frame','5x emitter', 'generator', '2x conveyor', '2x motor'], other: ['8x minecraft:nether_star', '2x #forge:gears/vibranium'], tier: 4 },
        { name: 'industrialforegoing:black_hole_controller', components: ['frame', '2x generator', '4x conveyor', '4x motor', '4x piston'], tier: 4 },
        { name: 'industrialforegoing:ore_laser_drill', components: ['frame', '4x gear', '2x motor', 'piston'], other: ['2x #forge:gears/allthemodium','gtceu:titanium_crate'], tier: 4 },
        { name: 'industrialforegoing:fluid_laser_base', components: ['frame', '4x gear', '2x pump'], other: ['2x #forge:gears/allthemodium','gtceu:titanium_drum'], tier: 4 },
        { name: 'industrialforegoing:laser_drill', components: ['4x gear', '4x small_gear', '8x motor', '2x piston'], other: ['mekanism:laser'], tier: 4 },
    ];

    const ifTierData = {
        1: { metal: 'stainless_steel', metal2: 'compressed_iron', magical: 'manasteel', polymer: 'gtceu:polyethylene', duration: 200, eu: GTValues.VA[GTValues.HV] },
        2: { metal: 'titanium', metal2: 'graphite', magical: 'hellforged', polymer: 'gtceu:polyvinyl_chloride', duration: 300, eu: GTValues.VA[GTValues.EV] },
        3: { metal: 'tungstensteel', metal2: 'draconium', magical: 'terrasteel', polymer: 'gtceu:polytetrafluoroethylene', duration: 400, eu: GTValues.VA[GTValues.IV] },
        4: { metal: 'rhodium_plated_palladium', metal2: 'draconium_awakened', magical: 'ferrognetic', polymer: 'gtceu:polybenzimidazole', duration: 500, eu: GTValues.VA[GTValues.LuV] },
    };

    const generateIfRecipe = (allthemods, machine) => {
        let tierData = ifTierData[machine.tier];

        if (!tierData) {
            console.error(`Error: no tier data for '${machine.tier}' (machine: ${machine.name})`);
            return;
        }

        let hull = `gtceu:${machine.tier}_machine_hull`;
        let plate = `#forge:plates/${tierData.metal}`;
        let circuit = `gtceu:${machine.tier}_circuit`;
        let conveyor = `gtceu:${machine.tier}_conveyor_module`;
        let piston = `gtceu:${machine.tier}_electric_piston`;
        let motor = `gtceu:${machine.tier}_electric_motor`;
        let robot = `gtceu:${machine.tier}_robot_arm`;
        let pump = `gtceu:${machine.tier}_electric_pump`;
        let generator = `gtceu:${machine.tier}_field_generator`;
        let emitter = `gtceu:${machine.tier}_emitter`;
        let sensor = `gtceu:${machine.tier}_sensor`;
        let small_gear = `#forge:gears/${tierData.metal2}`;
        let gear = `#forge:gears/${tierData.magical}`;
        let frame = `#forge:frames/${tierData.metal2}`;
        let plastic = '#forge:plastic';

        let shorthandMap = {
            hull: hull,
            plate: plate,
            circuit: circuit,
            conveyor: conveyor,
            piston: piston,
            motor: motor,
            pump: pump,
            generator: generator,
            emitter: emitter,
            sensor: sensor,
            robot: robot,
            small_gear: small_gear,
            gear: gear,
            plastic: plastic,
            frame: frame
        };

        let resolveComponent = (entry) => {
            let match = entry.match(/^(?:(\d+)x\s+)?(\w+)$/);
            if (match) {
                let count = match[1] || '1';
                let keyword = match[2];
                if (shorthandMap[keyword]) {
                    return count + 'x ' + shorthandMap[keyword];
                }
            }
            return entry;
        };
        let baseItems = [
            hull,
            '2x ' + circuit,
            '4x ' + plate,
        ];

        let extraItems = (machine.components || []).map(resolveComponent);
        let otherItems = (machine.other || [])

        let items = baseItems.concat(extraItems).concat(otherItems);

        let cleanId = machine.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();

        allthemods.recipes.gtceu.assembler(`gregification/if/${cleanId}`)
            .itemInputs(items)
            .inputFluids(tierData.polymer + ' 1000')
            .itemOutputs(machine.name)
            .duration(tierData.duration)
            .EUt(tierData.eu);
    };

    ifMachines.forEach(machine => generateIfRecipe(allthemods, machine));


});