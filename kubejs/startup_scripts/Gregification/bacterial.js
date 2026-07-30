
    
GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('bacterial_growth_chamber')
        .category('bacterial_growth_chamber')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(6, 3, 3, 3) // 12 Item In, 6 Item Out, 6 Fluid In, 6 Fluids Out
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	

    allthemods.create('bacterial_vat')
        .category('bacterial_vat')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(6, 3, 3, 3) // 12 Item In, 6 Item Out, 6 Fluid In, 6 Fluids Out
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	

    allthemods.create('crystal_growth_chamber')
        .category('crystal_growth_chamber')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(6, 3, 3, 3) // 12 Item In, 6 Item Out, 6 Fluid In, 6 Fluids Out
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)	
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {  
    allthemods.create('bacterial_vat', 'multiblock')        
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('bacterial_vat', 'bacterial_growth_chamber', 'crystal_growth_chamber')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT, (machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe)])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()                        
            .aisle('CCCCCCC', 'GGGGGGG', 'GGGGGGG', 'GGGGGGG', 'CCCCCCC')
            .aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CCCCCCC')
            .aisle('CCDDDCC', 'G     G', 'G     G', 'G     G', 'CCDDDCC')
            .aisle('CCDDDCC', 'G     G', 'G     G', 'G     G', 'CCDDDCC')
            .aisle('CCDDDCC', 'G     G', 'G     G', 'G     G', 'CCDDDCC')
			.aisle('CCCCCCC', 'G     G', 'G     G', 'G     G', 'CCCCCCC')
            .aisle('CCCKCCC', 'GGGGGGG', 'GGGGGGG', 'GGGGGGG', 'CCCCCCC')            
            //.where('D', Predicates.blocks('gtceu:rtm_alloy_coil_block'))	                        
            .where('D', Predicates.heatingCoils())           
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
});