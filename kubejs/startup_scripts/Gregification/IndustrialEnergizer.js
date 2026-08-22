GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('industrial_energizer')
        .category('fabricator')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(12, 4, 0, 0) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('industrial_energizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_energizer') 
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()            
			.aisle('CCCCCCC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CCCCCCC')
			.aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'G     G', 'GAAAAAG', 'CCCCCCC')
			.aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'G     G', 'GAAAAAG', 'CCCCCCC')
			.aisle('CCCCCCC', 'G  P  G', 'G  P  G', 'G  W  G', 'G     G', 'GAAAAAG', 'CCCCCCC')
			.aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'G     G', 'GAAAAAG', 'CCCCCCC')
			.aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'G     G', 'GAAAAAG', 'CCCCCCC')
			.aisle('CCCKCCC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CCCCCCC')
			.where('W', Predicates.blocks('powah:energizing_orb'))			
            .where('A', Predicates.blocks('gtceu:rtm_alloy_coil_block'))				
            .where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('C', Predicates.blocks('gtceu:inert_machine_casing')
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))	
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))				
			)
            .where(' ', Predicates.any()) 
            .build()
        )
		.workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_inert_ptfe',
            'gtceu:block/multiblock/large_chemical_reactor'
        )		
})