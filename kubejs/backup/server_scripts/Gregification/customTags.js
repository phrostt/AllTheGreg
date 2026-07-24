ServerEvents.tags('fluid', allthemods => {
	// 0. Adding fluid tags
	allthemods.add('forge:diesel', 'thermal_extra:diesel');
	allthemods.add('forge:light_fuel', 'thermal:light_oil');
	allthemods.add('forge:diesel', 'gtceu:bio_diesel');
	allthemods.add('forge:bio_diesel', 'pneumaticcraft:biodiesel');
	allthemods.add('forge:bio_diesel', 'immersiveengineering:biodiesel');
	allthemods.add('forge:ammonia', 'immersivegeology:fluid_ammonia_solution')	   
    allthemods.add('forge:liquid_soul', ['tconstruct:liquid_soul', 'gtceu:liquid_soul']);
	allthemods.add('forge:blood', ['evilcraft:blood', 'bloodmagic:life_essence_fluid']);
	allthemods.add('forge:meat', 'gtceu:liquid_rotten_flesh');		    
    
	allthemods.add('forge:seed_oil', ['pneumaticcraft:vegetable_oil', 'forestry:seed_oil', 'createaddition:seed_oil' ]);
    allthemods.add('forge:plantoil', ['gtceu:seed_oil', 'forestry:seed_oil', 'createaddition:seed_oil']);
	allthemods.add('forge:cosmic_matter', 'gtceu:primordial_cosmic_soup');
	
	allthemods.add('forge:cupronickel', 'tconstruct:molten_constantan')	
	allthemods.add('forge:plastic', 'pneumaticcraft:plastic')
	allthemods.add('forge:crude_oil', 'gtceu:oil')
	

})

ServerEvents.tags('item', allthemods => {    

	allthemods.add('gtceu:transistors', 'pneumaticcraft:transistor')
    allthemods.add('gtceu:capacitors', 'pneumaticcraft:capacitor')
	allthemods.add('forge:ingots/cupronickel', 'alltheores:constantan_ingot')
    allthemods.add('forge:plates/cupronickel', 'alltheores:constantan_plate')
    allthemods.add('forge:dusts/cupronickel', 'alltheores:constantan_dust')
    allthemods.add('forge:nuggets/cupronickel', 'alltheores:constantan_nugget')    
    allthemods.add('forge:storage_blocks/cupronickel', 'alltheores:constantan_block')

	const masterTiers = ['zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv', 'max']
    
    const godTiers = [
        { id: 'uev', baseIdx: 3 },
        { id: 'uiv', baseIdx: 4 },
        { id: 'uxv', baseIdx: 5 },
        { id: 'opv', baseIdx: 6 },
        { id: 'max', baseIdx: 7 }
    ]

    const types = [
        { id: 'processor', sub: 3 },
        { id: 'assembly',  sub: 2 },
        { id: 'computer',  sub: 1 },
        { id: 'mainframe', sub: 0 }
    ]

    godTiers.forEach(tier => {
        types.forEach(type => {
            let effectiveIndex = Math.max(0, tier.baseIdx - type.sub)
            let effectiveTier = masterTiers[effectiveIndex]

            // This ensures that 'eternal_processor' is tagged as 'gtceu:circuits/zpm'
            allthemods.add(`gtceu:circuits/${effectiveTier}`, `gtceu:${tier.id}_${type.id}`)
        })
    })

    allthemods.add('thermal:crafting/dies', 'thermal:chiller_rod_cast')
		
	allthemods.add('forge:dusts/flour', 'create:wheat_flour')
	allthemods.add('forge:dusts/flour', 'create:wheat_flour')
	allthemods.add('forge:dusts/flour', 'enderio:flour')
	allthemods.add('forge:dusts/flour', 'gtceu:wheat_dust')

	allthemods.add('minecraft:saplings', 'gtceu:rubber_sapling')
    allthemods.add('forge:saplings', 'gtceu:rubber_sapling')
	allthemods.add('industrialforegoing:plant_sower_allow', 'gtceu:rubber_sapling')
	allthemods.add('industrialforegoing:hydroponic_bed_whitelist', 'gtceu:rubber_sapling')        
	allthemods.add('gtceu:phenolic_circuit_board', 'immersiveengineering:plate_duroplast')
	allthemods.add('forge:ingots/red_alloy', 'enderio:redstone_alloy_ingot');
	allthemods.add('forge:ingots/redstone_alloy', 'gtceu:red_alloy_ingot');
	
	allthemods.add('forge:ingots/alfsteel', 'mythicbotany:alfsteel_ingot');
	allthemods.add('forge:ingots/gaia', 'botania:gaia_ingot');
	allthemods.add('forge:ingots/pink_slime', 'industrialforegoing:pink_slime_ingot');
	allthemods.add('forge:ingots/plastic', 'industrialforegoing:plastic');
	allthemods.add('forge:ferrognetic', 'forbidden_arcanus:ferrognetic_mixture');
	allthemods.add('forge:dusts/ferrognetic', 'forbidden_arcanus:ferrognetic_mixture');

	allthemods.add('forge:ingots/alloy_infused', 'mekanism:alloy_infused');
	allthemods.add('forge:ingots/alloy_reinforced', 'mekanism:alloy_renforced');
	allthemods.add('forge:ingots/alloy_atomic', 'mekanism:alloy_atomic');

	allthemods.remove('forge:ingots/compressed_iron', 'minecraft:iron_ingot')
	
})


ServerEvents.tags('block', allthemods => {
    allthemods.add('minecraft:saplings', 'gtceu:rubber_sapling')
	allthemods.add('forge:saplings', 'gtceu:rubber_sapling')
	allthemods.add('bloodmagic:crystal_clusters', 'allthemodium:allthemodium_block')
	allthemods.add('bloodmagic:crystal_clusters', 'kubejs:allthemodium_crystal_cluster')
})	

