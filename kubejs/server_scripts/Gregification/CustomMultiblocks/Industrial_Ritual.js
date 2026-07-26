ServerEvents.recipes(allthemods => {
    
    const chalks = {
        white: 'gtceu:white_chalk',
        orange: 'gtceu:orange_chalk',
        magenta: 'gtceu:magenta_chalk',
        light_blue: 'gtceu:light_blue_chalk',
        yellow: 'gtceu:yellow_chalk',
        lime: 'gtceu:lime_chalk',
        pink: 'gtceu:pink_chalk',
        gray: 'gtceu:gray_chalk',
        light_gray: 'gtceu:light_gray_chalk',
        cyan: 'gtceu:cyan_chalk',
        purple: 'gtceu:purple_chalk',
        blue: 'gtceu:blue_chalk',
        brown: 'gtceu:brown_chalk',
        green: 'gtceu:green_chalk',
        red: 'gtceu:red_chalk',
        black: 'gtceu:black_chalk'
    };
    
    const regalia = {
        candle: '#minecraft:candles',
        crystal: 'occultism:spirit_attuned_crystal',
        skull: 'minecraft:skeleton_skull',
        wither: 'minecraft:wither_skeleton_skull'
    };
    
    const rituals = [
        {
            tier: 7,
            name: 'osorins_unbound_calling',            
            fluids: [
                { fluid: chalks.pink, amount: 400 },
                { fluid: chalks.light_blue, amount: 400 },
                { fluid: chalks.green, amount: 800 }
            ]
        },

        {
            tier: 7,
            name: 'ronazas_contract',
            fluids: [
                { fluid: chalks.pink, amount: 400 },
                { fluid: chalks.light_blue, amount: 400 },
                { fluid: chalks.green, amount: 800 },
                { fluid: chalks.magenta, amount: 600 },
                { fluid: chalks.cyan, amount: 800 },
                { fluid: chalks.brown, amount: 900 }
            ],
            items: [
                {item: 'minecraft:beacon', amount: 1},
                {item: 'minecraft:enchanting_table', amount: 1},
                {item: 'minecraft:amethyst_cluster', amount: 1},
                {item: 'minecraft:iron_bars', amount: 1},
                {item: 'minecraft:lightning_rod', amount: 1},
                {item: 'minecraft:end_rod', amount: 1}
            ]
        },

        {
            tier: 6,
            name: 'xeovrenth_abjure',
            fluids: [
                { fluid: chalks.yellow, amount: 1000 },
                { fluid: chalks.white, amount: 200 },
                { fluid: chalks.lime, amount: 300 },
                { fluid: chalks.blue, amount: 500 },
                { fluid: chalks.red, amount: 200 },
                { fluid: chalks.black, amount: 200 }                
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 8 },
                { item: regalia.skull, amount: 8 },
                { item: regalia.wither, amount: 4 },
            ]
        },

        {
            tier: 4,
            name: 'posucs_convocation',
            fluids: [
                { fluid: chalks.yellow, amount: 600 },
                { fluid: chalks.white, amount: 100 },
                { fluid: chalks.lime, amount: 300 },                                
                { fluid: chalks.red, amount: 200 },
                { fluid: chalks.orange, amount: 200 },
                { fluid: chalks.gray, amount: 200 }

            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 4 },
                { item: regalia.skull, amount: 8 }            
            ]
        },

        {
            tier: 3,
            name: 'odus_open_convocation',
            fluids: [
                { fluid: chalks.yellow, amount: 600 },
                { fluid: chalks.white, amount: 100 },
                { fluid: chalks.lime, amount: 300 },                                                
                { fluid: chalks.orange, amount: 200 },
                { fluid: chalks.gray, amount: 200 }

            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 4 },
                { item: regalia.skull, amount: 8 }            
            ]
        },

        {
            tier: 2,
            name: 'ihagan_enthralment',
            fluids: [
                { fluid: chalks.yellow, amount: 300 },
                { fluid: chalks.white, amount: 100 },
                { fluid: chalks.lime, amount: 300 },                                                
                { fluid: chalks.light_gray, amount: 200 }                

            ],
            items: [
                { item: regalia.candle, amount: 8 },                
                { item: regalia.skull, amount: 8 }            
            ]
        },

        {
            tier: 1,
            name: 'hederyns_lure',
            fluids: [
                { fluid: chalks.yellow, amount: 100 },
                { fluid: chalks.white, amount: 300 }                

            ],
            items: [
                { item: regalia.candle, amount: 4 },                          
            ]
        },

        {
            tier: 6,
            name: 'uphyxes_inverted_tower',
            fluids: [                
                { fluid: chalks.white, amount: 200 },
                { fluid: chalks.lime, amount: 500 },
                { fluid: chalks.blue, amount: 1100 },
                { fluid: chalks.red, amount: 300 },
                { fluid: chalks.orange, amount: 400 },
                { fluid: chalks.purple, amount: 2200 },
                { fluid: chalks.black, amount: 200 }                
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 8 },
                { item: regalia.skull, amount: 8 },
                { item: regalia.wither, amount: 4 },
            ]
        },

        {
            tier: 4,
            name: 'seviras_permanent_confinment',
            fluids: [                
                { fluid: chalks.white, amount: 200 },
                { fluid: chalks.lime, amount: 500 },                
                { fluid: chalks.red, amount: 300 },
                { fluid: chalks.orange, amount: 400 },
                { fluid: chalks.purple, amount: 1500 },
                { fluid: chalks.gray, amount: 200 }                
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 8 },
                { item: regalia.skull, amount: 8 }
            ]
        },

        {
            tier: 2,
            name: 'strigeors_higher_binding',
            fluids: [                
                { fluid: chalks.white, amount: 200 },
                { fluid: chalks.lime, amount: 500 },                                
                { fluid: chalks.purple, amount: 800 },
                { fluid: chalks.light_gray, amount: 200 }                
            ],
            items: [
                { item: regalia.candle, amount: 8 },                
                { item: regalia.skull, amount: 8 }
            ]
        },

        {
            tier: 1,
            name: 'eziveus_spectral_complustion',
            fluids: [                
                { fluid: chalks.white, amount: 400 },                
                { fluid: chalks.purple, amount: 300 }                
            ],
            items: [
                { item: regalia.candle, amount: 4 }                
            ]
        },

        {
            tier: 1,
            name: 'aviars',
            fluids: [                
                { fluid: chalks.white, amount: 600 }                
            ],
            items: [
                { item: regalia.candle, amount: 4 }                
            ]
        },

        {
            tier: 5,
            name: 'fatmas_incentivized_attraction',
            fluids: [                
                { fluid: chalks.white, amount: 400 },
                { fluid: chalks.lime, amount: 900 },
                { fluid: chalks.blue, amount: 1500 },
                { fluid: chalks.red, amount: 400 },
                { fluid: chalks.orange, amount: 1000 },
                { fluid: chalks.black, amount: 200 }                
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 8 },
                { item: regalia.skull, amount: 8 },
                { item: regalia.wither, amount: 4 },
            ]
        },

        {
            tier: 4,
            name: 'tibiras_attraction',
            fluids: [                
                { fluid: chalks.white, amount: 400 },
                { fluid: chalks.lime, amount: 900 },
                { fluid: chalks.red, amount: 400 },
                { fluid: chalks.orange, amount: 1000 },
                { fluid: chalks.black, amount: 200 }                
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.crystal, amount: 4 },
                { item: regalia.skull, amount: 8 },
                { item: regalia.wither, amount: 4 },
            ]
        },

        {
            tier: 2,
            name: 'kandras_open_conjure',
            fluids: [                
                { fluid: chalks.white, amount: 400 },
                { fluid: chalks.lime, amount: 900 },                
                { fluid: chalks.orange, amount: 1000 },
                { fluid: chalks.gray, amount: 200 }                
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.skull, amount: 8 }                
            ]
        },
        
         {
            tier: 1,
            name: 'ophyx_calling',
            fluids: [                
                { fluid: chalks.white, amount: 400 },
                { fluid: chalks.lime, amount: 900 },                                
                { fluid: chalks.light_gray, amount: 200 }                
            ],
            items: [
                { item: regalia.candle, amount: 8 },
                { item: regalia.skull, amount: 4 }                
            ]
        },
    ];

    allthemods.shaped('gtceu:industrial_ritual_machine', ['SCS', 'PMP', 'SCS'], {
        S: 'gtceu:steel_plate',             // Now matches the Solid Steel Casings
        C: '#gtceu:circuits/hv',         
        P: 'gtceu:hv_electric_pump',
        M: 'gtceu:hv_machine_hull'
    }).id('gregification:gtceu/shaped/industrial_ritual_machine');
    
    const addRitual = (customInputs, output, ritualName) => {
        // 1. Find the ritual object from our master array by its name string
        const ritual = rituals.find(r => r.name === ritualName);
        
        if (!ritual) {
            console.error(`Error: Ritual '${ritualName}' not found in rituals array!`);
            return;
        }

        // 2. Calculate EU and duration based on the ritual tier (Tier 1 = MV: 128 EU/t)
        const baseEu = 128; 
        const baseDuration = 100;
        
        const eu = baseEu * Math.pow(4, ritual.tier - 1);
        const duration = baseDuration * ritual.tier;

        // 3. Auto-calculate ID including the output item namespace/name
        const cleanID = ritual.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const cleanOutput = output.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        
        let recipe = allthemods.recipes.gtceu.industrial_ritual_machine(`gregification:ritual/${cleanID}/${cleanOutput}`)
            .itemOutputs(output)
            .duration(duration)
            .EUt(eu);

        // 4. Combine custom item inputs with the ritual's built-in item requirements (regalia/blocks)
        let combinedItems = [].concat(customInputs);
        
        if (ritual.items && ritual.items.length > 0) {
            let ritualItemsList = ritual.items.map(i => `${i.amount}x ${i.item}`);
            combinedItems = combinedItems.concat(ritualItemsList);
        }
        
        if (combinedItems.length > 0) {
            recipe.itemInputs(combinedItems);
        }

        // 5. Process fluid inputs directly from the structured ritual array
        if (ritual.fluids && ritual.fluids.length > 0) {
            let ritualFluids = ritual.fluids.map(f => Fluid.of(f.fluid, f.amount));
            recipe.inputFluids(ritualFluids);
        }
    };
    let tartaric = Item.of('bloodmagic:soulgemgreater', '{souls:4096.0d}').strongNBT();
    //addRitual(['mekanism:digital_miner', '4x #gtceu:circuits/iv'], 'occultism:miner_marid_master','uphyxes_inverted_tower');	
    addRitual(['#occultism:miner/marid',     'occultism:iesnium_pickaxe', 'occultism:mining_dim_core', 'allthemodium:piglich_heart', 'allthemodium:unobtainium_pickaxe' ], 'occultism:miner_ancient_eldritch', 'ronazas_contract');	
    addRitual(['#occultism:miner/afrit',     'occultism:iesnium_pickaxe', 'minecraft:dragon_breath', 'occultism:marid_essence', 'minecraft:totem_of_undying', 'minecraft:netherite_pickaxe', 'minecraft:nether_star', 'occultism:spirit_attuned_crystal'], 'occultism:miner_marid_master', 'uphyxes_inverted_tower');	
    addRitual(['#occultism:miner/djinni',    'occultism:iesnium_pickaxe', '#forge:gems/echo_shard', 'minecraft:crying_obsidian', 'occultism:afrit_essence', 'occultism:spirit_attuned_crystal'], 'occultism:miner_afrit_deeps', 'seviras_permanent_confinment');	
    addRitual(['#occultism:miner/foliot',    'occultism:iesnium_pickaxe', 'occultism:spirit_attuned_crystal', '#forge:storage_blocks/lapis', '#forge:raw_materials/gold'], 'occultism:miner_djinni_ores', 'strigeors_higher_binding');	
    addRitual(['occultism:magic_lamp_empty', 'occultism:iesnium_pickaxe', '#forge:gravel', '#forge:raw_materials/iron'], 'occultism:miner_foliot_unspecialized', 'eziveus_spectral_complustion');	
        
    addRitual(['4x minecraft:soul_sand', '#forge:gems/diamond', '#forge:ingots/gold', '#forge:ingots/silver'], 'occultism:soul_gem', 'strigeors_higher_binding');
    addRitual(['#forge:frames/iesnium', '16x #gtceu:circuits/hv', '12x occultism:spirit_attuned_crystal', tartaric, '4x #forge:gears/terrasteel'], 'occultism:dimensional_mineshaft', 'strigeors_higher_binding');

    //addRitual([], '', '');

    addRitual(['#forge:dusts/netherite', 'minecraft:wither_skeleton_skull', '#forge:dusts/blackstone', 'minecraft:wither_rose'], 'occultism:witherite_dust', 'seviras_permanent_confinment');
    addRitual(['4x minecraft:rabbit_foot', '4x minecraft:scute', '2x #forge:wool', '2x minecraft:pointed_dripstone'], 'occultism:cruelty_essence', 'xeovrenth_abjure');
    addRitual(['minecraft:netherrack','minecraft:gunpowder','minecraft:flint_and_steel', '#forge:ingots/iesnium'], 'occultism:afrit_essence', 'kandras_open_conjure');
    addRitual(['minecraft:honeycomb', 'minecraft:honeycomb_block', 'minecraft:honey_bottle','minecraft:honey_block'], 'occultism:cursed_honey', 'ihagan_enthralment');
    addRitual(['#forge:dusts/emerald','2x minecraft:experience_bottle'], 'occultism:research_fragment_dust', 'eziveus_spectral_complustion');
    addRitual(['minecraft:conduit','minecraft:ghast_tear','minecraft:prismarine_shard','minecraft:prismarine_crystals'], 'occultism:marid_essence', 'tibiras_attraction');
    addRitual(['4x minecraft:end_crystal', '3x minecraft:dragon_breath','#forge:dusts/amethyst','#forge:dusts/endstone'], 'occultism:dragonyst_dust', 'uphyxes_inverted_tower');
    addRitual(['minecraft:gilded_blackstone','minecraft:warped_fungus','minecraft:crimson_fungus','minecraft:quartz'], 'occultism:demonic_meat', 'odus_open_convocation');
    addRitual(['3x #minecraft:leaves','3x #forge:saplings', '3x #forge:seeds'], 'occultism:nature_paste', 'eziveus_spectral_complustion');

    const chalkEU = 128;
    const chalkDuration = 100;
    const base = 'occultism:chalk_white_impure';
    const impureChalks = [
        { color: 'white', ingredients: ['3x occultism:otherworld_ashes', '3x occultism:burnt_otherstone'] },
        { color: 'orange', ingredients: [base, 'occultism:cursed_honey', 'minecraft:glow_berries', 'minecraft:blaze_powder'] },
        { color: 'magenta', ingredients: [base, 'occultism:dragonyst_dust', '#forge:dusts/amethyst','minecraft:chorus_fruit'] },
        { color: 'light_blue', ingredients: [base, '#forge:dusts/ice', '#forge:dusts/blue_ice'] },
        { color: 'gold', ingredients: [base, '#forge:dusts/glowstone', '2x #forge:dusts/gold' ] },
        { color: 'lime', ingredients: [base, 'occultism:research_fragment_dust', '#forge:dusts/emerald','#forge:slimeballs'] },
        { color: 'pink', ingredients: [base, '3x occultism:demonic_meat'] },
        { color: 'gray', ingredients: [base, 'occultism:gray_paste'] },
        { color: 'light_gray', ingredients: [base, '#forge:dusts/silver', '#forge:dusts/iron', '#forge:dusts/calcite'] },
        { color: 'cyan', ingredients: [base, '#forge:dusts/iesnium', '#forge:dusts/echo_shard','minecraft:glow_ink_sac'] },
        { color: 'purple', ingredients: [base, '#forge:dusts/end_stone', '2x #forge:dusts/obsidian'] },
        { color: 'blue', ingredients: [base, 'occultism:marid_essence', '#forge:dusts/lapis', 'minecraft:tube_coral'] },
        { color: 'brown', ingredients: [base, 'occultism:cruelty_essence', 'minecraft:cocoa_beans', 'minecraft:brown_mushroom'] },
        { color: 'green', ingredients: [base, 'occultism:nature_paste'] },
        { color: 'red', ingredients: [base, 'occultism:afrit_essence', 'minecraft:torchflower', '#forge:dusts/redstone'] },
        { color: 'black', ingredients: [base, '3x occultism:witherite_dust'] }
    ];

    impureChalks.forEach(chalk => {
        allthemods.recipes.gtceu.assembler(`gregification:chalk_${chalk.color}_impure`)
            .EUt(chalkEU)
            .duration(chalkDuration)
            .itemInputs(chalk.ingredients)
            .itemOutputs(`occultism:chalk_${chalk.color}_impure`)
    });
});