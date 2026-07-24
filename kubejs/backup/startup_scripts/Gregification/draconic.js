GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('draconic_infuser')
        .category('draconic_infuser')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(12, 4, 4, 4) // 12 Item In, 4 Item Out, 4 Fluid In, 4 Fluids Out
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	
    
    allthemods.create('bacterial_vat')
        .category('bacterial_vat')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(12, 4, 4, 4) // 12 Item In, 4 Item Out, 4 Fluid In, 4 Fluids Out
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('draconic_infuser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('draconic_infuser') 
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()                        
            .aisle('CCCCCCC', 'GGOOOGG', 'GGOOOGG', 'GGOOOGG', 'CCCCCCC')
            .aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CCCCCCC')
            .aisle('CCDDDCC', 'O     O', 'O     O', 'O     O', 'CCDDDCC')
            .aisle('CCDDDCC', 'O     O', 'O  A  O', 'O     O', 'CCDDDCC')
            .aisle('CCDDDCC', 'O     O', 'O     O', 'O     O', 'CCDDDCC')
			.aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CCCCCCC')
            .aisle('CCCKCCC', 'GGOOOGG', 'GGOOOGG', 'GGOOOGG', 'CCCCCCC')            
            .where('O', Predicates.blocks('gtceu:rtm_alloy_coil_block'))	
            .where('D', Predicates.blocks('draconicevolution:awakened_draconium_block'))	
            .where('A', Predicates.blocks('draconicevolution:crafting_core'))	
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('botania:bifrost_perm'))
            .where('C', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))	
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))				
			)
            .where(' ', Predicates.air()) 
            .build()
        )
		.workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/large_chemical_reactor"
        )

    allthemods.create('bacterial_vat', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bacterial_vat') 
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()                        
            .aisle('CCCCCCC', 'GGGGGGG', 'GGGGGGG', 'GGGGGGG', 'CCCCCCC')
            .aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CCCCCCC')
            .aisle('CCDDDCC', 'G     G', 'G     G', 'G     G', 'CCDDDCC')
            .aisle('CCDDDCC', 'G     G', 'G     G', 'G     G', 'CCDDDCC')
            .aisle('CCDDDCC', 'G     G', 'G     G', 'G     G', 'CCDDDCC')
			.aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CCCCCCC')
            .aisle('CCCKCCC', 'GGGGGGG', 'GGGGGGG', 'GGGGGGG', 'CCCCCCC')            
            .where('D', Predicates.blocks('gtceu:rtm_alloy_coil_block'))	                        
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('C', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))	
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))				
			)
            .where(' ', Predicates.air()) 
            .build()
        )
		.workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})