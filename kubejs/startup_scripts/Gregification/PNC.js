GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('industrial_pressure_chamber')
        .category('industrial_pressure_chamber')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(12, 4, 4, 1) // 4 Item In, 1 Item Out, 2 Fluid In
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	
		
	allthemods.create('pneumatic_assembler')
        .category('pneumatic_assembler')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(12, 4, 4, 1) // 4 Item In, 1 Item Out, 2 Fluid In
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('industrial_pressure_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_pressure_chamber') 
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()            
			.aisle('CCCCC', 'CCCCC', 'GGGGG', 'CCCCC', 'CCCCC')            
            .aisle('CCCCC', 'COOOC', 'G   G', 'COOOC', 'CCCCC')
            .aisle('CCCCC', 'COOOC', 'G B G', 'COOOC', 'CCCCC')
            .aisle('CCCCC', 'COOOC', 'G   G', 'COOOC', 'CCCCC')
            .aisle('CCKCC', 'CCCCC', 'GGGGG', 'CCCCC', 'CCCCC')            
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('pneumaticcraft:compressed_iron_block')
                .or(Predicates.blocks('gtceu:compressed_iron_block')) 
            )
            .where('O', Predicates.blocks('gtceu:rtm_alloy_coil_block'))                
            .where('G', Predicates.blocks('gtceu:cleanroom_glass'))   
            .where('C', Predicates.blocks('gtceu:robust_machine_casing')
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))	
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))				
			)
            .where(' ', Predicates.any()) 
            .build()
        )
		.workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/large_chemical_reactor'
        )				
		
	allthemods.create('pneumatic_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('pneumatic_assembler') 
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()            
			.aisle('CCCCC', 'GGCGG', 'GGCGG', 'GGCGG', 'CCCCC')            
            .aisle('CCCCC', 'G   G', 'G   G', 'G   G', 'CCCCC')            
            .aisle('CCCCC', 'C   C', 'C   C', 'C   C', 'CCCCC')
            .aisle('CCCCC', 'G   G', 'G   G', 'G   G', 'CCCCC')
            .aisle('CCKCC', 'GGCGG', 'GGCGG', 'GGCGG', 'CCCCC')            
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:cleanroom_glass'))        
            .where('C', Predicates.blocks('gtceu:robust_machine_casing')
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))	
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))				
			)
            .where(' ', Predicates.any()) 
            .build()
        )
		.workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/large_chemical_reactor'
        )				
})