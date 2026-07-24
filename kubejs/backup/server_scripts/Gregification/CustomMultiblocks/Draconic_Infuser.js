ServerEvents.recipes(allthemods => {
    const TIER = {
        wyvern: 8192,
        draconic: 32768,
        chaotic: 131072
    };

    const TIME = {
        short: 600,
        medium: 800,
        long: 1000,
        very_long: 1200
    };
    const draconicInfuser = (inputs, fluidIn, outputs, fluidOut, eu, duration, customID) => {

        // 1. AUTO-ID LOGIC
        let id;

        // 1. ID LOGIC (Optimized Safety)
        if (customID) {
            id = customID;
        } else {
            // Only try to read the item name if we DON'T have a custom ID
            let firstOutput = Array.isArray(outputs) ? outputs[0] : outputs;
            let outputName = firstOutput.toString()
                .replace(/^\d+[x ]\s*/, '')
                .split(':').pop()
                .replace(/[^a-zA-Z0-9_]/g, '_')
                .toLowerCase();
            id = `gregification:draconic_infuser/${outputName}`;
        }

        let recipe = allthemods.recipes.gtceu.draconic_infuser(id)
            .itemInputs(inputs)
            .itemOutputs(outputs)
            .duration(duration)
            .EUt(eu);

        if (fluidIn && fluidIn.length > 0) {
            recipe.inputFluids(fluidIn);
        }

        // 4. FLUID OUTPUTS (Added this!)
        if (fluidOut && fluidOut.length > 0) {
            recipe.outputFluids(fluidOut);
        }
    };
    //wyvern gear
    const wyvernGear = [
        { out: 'draconicevolution:wyvern_sword', in: 'minecraft:diamond_sword' },
        { out: 'draconicevolution:wyvern_pickaxe', in: 'minecraft:diamond_pickaxe' },
        { out: 'draconicevolution:wyvern_shovel', in: 'minecraft:diamond_shovel' },
        { out: 'draconicevolution:wyvern_axe', in: 'minecraft:diamond_axe' },
        { out: 'draconicevolution:wyvern_hoe', in: 'minecraft:diamond_hoe' },
        { out: 'draconicevolution:wyvern_bow', in: 'minecraft:bow' },
        { out: 'draconicevolution:wyvern_chestpiece', in: 'minecraft:diamond_chestplate' }
    ];
    wyvernGear.forEach(gear => {
        draconicInfuser(
            [
                gear.in,
                '2x #forge:ingots/draconium',
                'draconicevolution:draconium_core',
                'draconicevolution:wyvern_energy_core',
                '2x draconicevolution:basic_relay_crystal'
            ],
            [],
            [gear.out],
            [],
            TIER.wyvern,
            TIME.medium
        );
    });

    //draconic gear
    const draconicGear = [
        { out: 'draconicevolution:draconic_sword', in: 'draconicevolution:wyvern_sword' },
        { out: 'draconicevolution:draconic_pickaxe', in: 'draconicevolution:wyvern_pickaxe' },
        { out: 'draconicevolution:draconic_shovel', in: 'draconicevolution:wyvern_shovel' },
        { out: 'draconicevolution:draconic_axe', in: 'draconicevolution:wyvern_axe' },
        { out: 'draconicevolution:draconic_hoe', in: 'draconicevolution:wyvern_hoe' },
        { out: 'draconicevolution:draconic_bow', in: 'draconicevolution:wyvern_bow' },
        { out: 'draconicevolution:draconic_chestpiece', in: 'draconicevolution:wyvern_chestpiece' }
    ];
    draconicGear.forEach(gear => {
        draconicInfuser(
            [
                gear.in,
                '4x #forge:ingots/netherite',
                '2x #forge:ingots/draconium_awakened',
                'draconicevolution:wyvern_core',
                'draconicevolution:draconic_energy_core'
            ],
            [],
            [gear.out],
            [],
            TIER.draconic,
            TIME.long
        );
    });

    //chaotic gear
    const chaoticGear = [
        { out: 'draconicevolution:chaotic_sword', in: 'draconicevolution:draconic_sword' },
        { out: 'draconicevolution:chaotic_pickaxe', in: 'draconicevolution:draconic_pickaxe' },
        { out: 'draconicevolution:chaotic_shovel', in: 'draconicevolution:draconic_shovel' },
        { out: 'draconicevolution:chaotic_axe', in: 'draconicevolution:draconic_axe' },
        { out: 'draconicevolution:chaotic_hoe', in: 'draconicevolution:draconic_hoe' },
        { out: 'draconicevolution:chaotic_bow', in: 'draconicevolution:draconic_bow' },
        { out: 'draconicevolution:chaotic_chestpiece', in: 'draconicevolution:draconic_chestpiece' }
    ];
    chaoticGear.forEach(gear => {
        draconicInfuser(
            [
                gear.in,
                '6x #forge:ingots/draconium_awakened',
                'draconicevolution:chaotic_core',
                'draconicevolution:chaotic_energy_core'
            ],
            [],
            [gear.out],
            [],
            TIER.chaotic,
            TIME.very_long
        );
    });

    //draconic staff
    draconicInfuser(
        [
            'draconicevolution:awakened_core',
            'draconicevolution:wyvern_sword',
            'draconicevolution:wyvern_pickaxe',
            'draconicevolution:wyvern_shovel',
            '6x #forge:ingots/draconium_awakened',
            'draconicevolution:chaotic_energy_core'
        ],
        [],
        ['draconicevolution:draconic_staff'],
        [],
        TIER.draconic,
        TIME.very_long
    );

    //chaotic staff
    draconicInfuser(
        [
            'draconicevolution:draconic_staff',
            '4x draconicevolution:medium_chaos_frag',
            '3x draconicevolution:chaotic_energy_core',
            '2x draconicevolution:awakened_core',
            'draconicevolution:chaotic_core'
        ],
        [],
        ['draconicevolution:chaotic_staff'],
        [],
        TIER.chaotic,
        TIME.very_long
    );

    //chaotic staff
    draconicInfuser(
        [
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_energy_core',
            '6x draconicevolution:medium_chaos_frag',
            'draconicevolution:chaotic_sword',
            'draconicevolution:chaotic_shovel',
            'draconicevolution:chaotic_pickaxe'
        ],
        [],
        ['draconicevolution:chaotic_staff'],
        [],
        TIER.chaotic,
        TIME.very_long,
        'staff_custom'
    );

    //wyvern capacitor
    draconicInfuser(
        [
            'draconicevolution:wyvern_core',
            '4x #forge:ingots/draconium',
            '4x draconicevolution:wyvern_energy_core'
        ],
        [],
        ['draconicevolution:wyvern_capacitor'],
        [],
        TIER.wyvern,
        TIME.medium
    );

    //draconic capacitor
    draconicInfuser(
        [
            'draconicevolution:wyvern_capacitor',
            '4x #forge:ingots/draconium_awakened',
            '3x draconicevolution:draconic_energy_core',
            'draconicevolution:awakened_core'
        ],
        [],
        ['draconicevolution:draconic_capacitor'],
        [],
        TIER.draconic,
        TIME.long
    );

    //chaotic capacitor
    draconicInfuser(
        [
            'draconicevolution:draconic_capacitor',
            '4x #forge:ingots/draconium_awakened',
            '3x draconicevolution:chaotic_energy_core',
            'draconicevolution:chaotic_core'
        ],
        [],
        ['draconicevolution:chaotic_capacitor'],
        [],
        TIER.chaotic,
        TIME.very_long
    );

    //draconic relay
    draconicInfuser(
        [
            '4x #forge:gems/diamond',
            '4x draconicevolution:wyvern_relay_crystal',
            '4x draconicevolution:wyvern_energy_core',
            'draconicevolution:wyvern_core'

        ],
        [],
        ['4x draconicevolution:draconic_relay_crystal'],
        [],
        TIER.draconic,
        TIME.long,
        'draconic_relay_crystal'
    );

    //reactor core
    draconicInfuser(
        [
            'draconicevolution:chaos_shard',
            '2x draconicevolution:large_chaos_frag',
            '3x #forge:ingots/draconium',
            '4x #forge:ingots/draconium_awakened'
        ],
        [],
        ['draconicevolution:reactor_core'],
        [],
        TIER.chaotic,
        TIME.very_long
    );

    //awakened core
    draconicInfuser(
        [
            '#forge:nether_stars',
            '4x #forge:ingots/draconium_awakened',
            '4x draconicevolution:wyvern_core'
        ],
        [],
        ['draconicevolution:awakened_core'],
        [],
        TIER.wyvern,
        TIME.medium
    );

    //reactor injector
    draconicInfuser(
        [
            'draconicevolution:wyvern_core',
            '4x #forge:ingots/draconium',
            '2x #forge:ingots/iron',
            '4x draconicevolution:reactor_prt_in_rotor'
        ],
        [],
        ['draconicevolution:reactor_injector'],
        [],
        TIER.chaotic,
        TIME.very_long
    );

    //reactor stabilizer
    draconicInfuser(
        [
            'draconicevolution:reactor_prt_stab_frame',
            '3x #forge:ingots/draconium_awakened',
            'draconicevolution:chaotic_core',
            'draconicevolution:large_chaos_frag',
            'draconicevolution:wyvern_energy_core',
            'draconicevolution:reactor_prt_focus_ring',
            'draconicevolution:reactor_prt_rotor_full'

        ],
        [],
        ['draconicevolution:reactor_stabilizer'],
        [],
        TIER.chaotic,
        TIME.very_long
    );

    //awakened draconiium block
    draconicInfuser(
        [
            '4x #forge:storage_blocks/draconium',
            '6x draconicevolution:draconium_core',
            'draconicevolution:dragon_heart'

        ],
        [],
        ['4x #forge:storage_blocks/draconium_awakened'],
        [],
        TIER.wyvern,
        TIME.medium,
        'draconium_awakened_block'
    );

    //advanced dislocator
    draconicInfuser(
        [
            'draconicevolution:dislocator',
            '4x #forge:ingots/draconium',
            '3x #forge:gems/ender_pearl',
            'draconicevolution:wyvern_core'

        ],
        [],
        ['draconicevolution:advanced_dislocator'],
        [],
        TIER.wyvern,
        TIME.medium
    );

    //draconium chest
    draconicInfuser(
        [
            '#forge:chests/wooden',
            '5x #forge:furnaces',
            '2x #forge:workbenches',
            '#forge:storage_blocks/draconium',
            '2x draconicevolution:draconium_core'

        ],
        [],
        ['draconicevolution:draconium_chest'],
        [],
        TIER.draconic,
        TIME.long
    );

    //chaos bee
    draconicInfuser(
        [
            Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:awakened"}}').strongNBT(),
            '2x draconicevolution:chaotic_core',
            'draconicevolution:awakened_core',
            '2x #forge:storage_blocks/honeycombs',
            'minecraft:honey_block',
            '#forge:ingots/draconium_awakened',
            'draconicevolution:medium_chaos_frag'
        ],
        [],
        [Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:chaos"}}').strongNBT()],
        [],
        TIER.chaotic,
        TIME.very_long,
        "chaos_bee"
    );

    //awakened bee
    draconicInfuser(
        [
            Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:draconium"}}').strongNBT(),
            '2x draconicevolution:awakened_core',
            '2x #forge:storage_blocks/honeycombs',
            'minecraft:honey_block',
            '2x #forge:ingots/draconium_awakened',
            'draconicevolution:dragon_heart'
        ],
        [],
        [Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:awakened"}}').strongNBT()],
        [],
        TIER.draconic,
        TIME.long,
        "awakened_bee"
    );

    //draconium bee
    draconicInfuser(
        [
            Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:draconic"}}').strongNBT(),
            '2x draconicevolution:draconium_core',
            '2x #forge:storage_blocks/honeycombs',
            '2x #forge:storage_blocks/draconium',
            '2x #forge:dusts/draconium',
        ],
        [],
        [Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:draconium"}}').strongNBT()],
        [],
        TIER.wyvern,
        TIME.medium,
        "draconium_bee"
    );

    //chaotic core
      draconicInfuser(
        ['4x #forge:ingots/draconium_awakened', '4x draconicevolution:awakened_core', '5x draconicevolution:large_chaos_frag'],
        [],
        ['draconicevolution:chaotic_core'],
        [],
        TIER.chaotic,
        TIME.medium
    );
});