
GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('empowerer')
        .category('empowerer')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(16, 16, 1, 1) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {    
    allthemods.create('empowerer', 'multiblock')        
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('empowerer')         
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()                                
            .aisle('  C  ', '     ')
            .aisle('  C  ', '     ')
            .aisle('CCCCC', '  K  ')
            .aisle('  C  ', '     ')
            .aisle('  C  ', '     ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))                                                                        
            .where('C', Predicates.blocks('gtceu:inert_machine_casing')
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))	
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))				
			)
            .where(' ', Predicates.air()) 
            .build()
        )
		.workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_inert_ptfe',            
            'gtceu:block/multiblock/fusion_reactor'
        )		
})
