//@ts-check
ServerEvents.recipes(allthemods => {
   
    const replaceShaped = (recipeID, itemID, schema, ingredients) => {        
        allthemods.shaped(itemID || recipeID, schema, ingredients).id(recipeID);
    }
  

    allthemods.shaped('gtceu:element_fire', [
		' E ',
		'EBE',
		' E '
	], {
		// We use .weakNBT() so it doesn't matter if the energy levels don't match exactly
		E: 'gtceu:elemental_fire_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_fire');

    allthemods.shaped('gtceu:element_water', [
		' E ',
		'EBE',
		' E '
	], {
		// We use .weakNBT() so it doesn't matter if the energy levels don't match exactly
		E: 'gtceu:elemental_water_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_water');

    allthemods.shaped('gtceu:element_air', [
		' E ',
		'EBE',
		' E '
	], {
		// We use .weakNBT() so it doesn't matter if the energy levels don't match exactly
		E: 'gtceu:elemental_air_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_air');

    allthemods.shaped('gtceu:element_earth', [
		' E ',
		'EBE',
		' E '
	], {
		// We use .weakNBT() so it doesn't matter if the energy levels don't match exactly
		E: 'gtceu:elemental_earth_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_earth');

    allthemods.shaped('projecte:philosophers_stone',
        [
            'PEP',
            'EME',
            'PEP'
        ],
        {
            P: "#forge:plates/naquatainium",
            E: "#forge:plates/europium",
            M: "mekanism:alloy_atomic"
        }
    ).id("projectge:gregificatrion/philosophers_stone")


    // --- ENDER CHEST ---
    replaceShaped("enderchests:ender_pouch", null,
        [
            'PLP',
            'LEL',
            'PLP'
        ],
        {
            P: "#forge:plates/manasteel",
            L: "#forge:leather",
            E: "minecraft:ender_eye"
        }
    );

    replaceShaped("enderchests:ender_bag", null,
        [
            'PLP',
            'LEL',
            'PLP'
        ],
        {
            P: "#forge:plates/terrasteel",
            L: "#forge:leather",
            E: "enderchests:ender_chest"
        }
    );
    
    // --- ENDER TANK ---
    replaceShaped("endertanks:bucket", "endertanks:ender_bucket",
        [
            'PLP',
            'LBL',
            'PLP'
        ],
        {
            P: "#forge:plates/manasteel",
            L: "minecraft:blaze_powder",
            B: "endertanks:ender_tank"
        }
    );
    
    //--- ENTANGLED ---
    replaceShaped("entangled:block", null,
        ['PLP',
         'LBL',
         'POP'
        ],
        {
            B: "gtceu:magical_bio_composite",
            P: "#forge:plates/unobtainium",
            O: "#forge:rotors/enderium",
            L: "minecraft:ender_pearl"

        }
    );
    replaceShaped("entangled:item", null,
        [' PL',
         'POP',
         'OP '
        ],
        {            
            P: "#forge:plates/enderium",
            O: "#forge:rods/long/unobtainium",
            L: "enderio:vibrant_crystal"

        }
    );
    //---EASY VILLAGERS---

    replaceShaped("easy_villagers:trader", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/diamond"
        }
    );
    replaceShaped("easy_villagers:auto_trader", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/netherite"
        }
    );
    replaceShaped("easy_villagers:farmer", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "evilcraft:bucket_eternal_water"
        }
    );

    replaceShaped("easy_villagers:breeder", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/pink_slime"
        }
    );
    replaceShaped("easy_villagers:converter", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/deorum"
        }
    );
    
    replaceShaped("easy_villagers:iron_farm", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/hellforged"
        }
    );
    replaceShaped("easy_villagers:incubator", null,
        [
            'GGG',
            'GAG',
            'PCP'

        ],
        {
            P: "#forge:plates/compressed_iron",
            A: "#forge:frames/soularium",
            G: "gtceu:tempered_glass",
            C: "#forge:gears/iesnium"
        }
    );
    //---teleport pad---
    replaceShaped("allthemodium:teleport_pad",null,
        [
            'GEG',
            'GCG',
            'GEG'
        ],
        {
            E: 'minecraft:ender_pearl',
            C: 'create:precision_mechanism',
            G: '#forge:ingots/gold'

        }
    );

    replaceShaped('minecraft:flint_and_steel',null,
        [
            'G  ',
            ' S ',
            '   '
        ],
        {
            G: 'minecraft:flint',
            S: '#forge:plates/steel'
        }
    );

    replaceShaped('minecraft:cauldron',null,
        [
            'I I',
            'I I',
            'III'
        ],
        {            
            I: '#forge:plates/steel'
        }
    );

    replaceShaped('minecraft:enchanting_table',null,
        [
            ' R ',
            'ORO',
            'SSS'
        ],
        {      
            R: 'minecraft:blaze_rod',
            S: '#forge:plates/steel',
            O: '#forge:plates/obsidian'
        }
    );
    

    replaceShaped('minecraft:brewing_stand',null,
        [
            ' M ',
            'DOD',
            'OOO'
        ],
        {      
            M: 'botania:rune_mana',      
            D: '#forge:exquisite_gems/diamond',
            O: '#forge:plates/obsidian'
        }
    );
    
});