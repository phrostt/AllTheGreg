

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('drone_station')
        .category('drone_station')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(6, 6, 6, 6) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    allthemods.create('magnetic_containment_chamber')
        .category('magnetic_containment_chamber')
        .setEUIO('in') // Machine takes power IN
        .setMaxIOSize(6, 6, 6, 6) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    allthemods.create('thorium_reactor')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(3, 3, 3, 3) // Item In, Item Out, Fluid In, Fluid Out
        .setProgressBar(GuiTextures.COMPRESSOR_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE);

    allthemods.create('psycho_fraculator')
        .category('psycho_fraculator')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)        
        .setSound(GTSoundEntries.SCIENCE);

    allthemods.create('neuro_interface')
        .category('neuro_interface')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)        
        .setSound(GTSoundEntries.SCIENCE);

    allthemods.create('gene_sequencer')
        .category('gene_sequencer')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 6, 6)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)        
        .setSound(GTSoundEntries.SCIENCE);
            
    allthemods.create('prototype_assembler')
        .category('prototype_assembler')
        .setEUIO('in')
        .setMaxIOSize(9, 6, 3, 0)
        .setHasResearchSlot(true)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)        
        .setSound(GTSoundEntries.SCIENCE)
        
        

})
GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('drone_station', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('drone_station')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C  D  C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle('FCCCCCF', 'FCCKCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')            
            .where('D', Predicates.blocks('gtceu:tungsten_steel_crate'))
            .where('F', Predicates.blocks('gtceu:gaia_frame'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))            
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
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


    allthemods.create('magnetic_containment_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('magnetic_containment_chamber')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('               ', '      CCC      ', '               ')
            .aisle('      SSS      ', '    CC   CC    ', '      SSS      ')
            .aisle('    CC   CC    ', '   C  CCC  C   ', '    CC   CC    ')
            .aisle('   C       C   ', '  C CC   CC C  ', '   C       C   ')
            .aisle('  C         C  ', ' C C       C C ', '  C         C  ')
            .aisle('  C         C  ', ' C C       C C ', '  C         C  ')
            .aisle(' S           S ', 'C C         C C', ' S           S ')
            .aisle(' S           S ', 'C C         C C', ' S           S ')
            .aisle(' S           S ', 'C C         C C', ' S           S ')
            .aisle('  C         C  ', ' C C       C C ', '  C         C  ')
            .aisle('  C         C  ', ' C C       C C ', '  C         C  ')
            .aisle('   C       C   ', '  C CC   CC C  ', '   C       C   ')
            .aisle('    CC   CC    ', '   C  CCC  C   ', '    CC   CC    ')
            .aisle('      SSS      ', '    CC   CC    ', '      SSS      ')
            .aisle('               ', '      CKC      ', '               ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks('gtceu:superconducting_coil'))
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/fusion_reactor'
        )

    allthemods.create('thorium_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('thorium_reactor')
        .noRecipeModifier()        
        .generator(true)
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)        
        .pattern(definition => FactoryBlockPattern.start()    
            .aisle('SSSSS', 'SCCCS', 'SCCCS', 'SCCCS', 'SSSSS')
            .aisle('SCCCS', 'C   C', 'C O C', 'C   C', 'SCCCS')
            .aisle('SCCCS', 'C O C', 'COOOC', 'C O C', 'SCCCS')
            .aisle('SCCCS', 'C   C', 'C O C', 'C   C', 'SCCCS')
            .aisle('SSSSS', 'SCCCS', 'SCKCS', 'SCCCS', 'SSSSS')
            .where('C', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )                        
            .where('S', Predicates.blocks('gtceu:scandium_frame'))
            .where('O', Predicates.blocks('gtceu:superconducting_coil'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))            
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_inert_ptfe',
            'gtceu:block/multiblock/fusion_reactor'
        )


    allthemods.create('prototype_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('prototype_assembler')                
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)        
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C  D  C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle('FCCCCCF', 'FCCKCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')            
            .where('D', Predicates.blocks('gtceu:tungsten_steel_crate'))
            .where('F', Predicates.blocks('gtceu:gaia_frame'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))            
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.DATA_ACCESS, PartAbility.OPTICAL_DATA_RECEPTION).setExactLimit(1))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/research_station'
        );

    allthemods.create('psycho_fraculator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('psycho_fraculator')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C  D  C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle('FCCCCCF', 'FCCKCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')            
            .where('D', Predicates.blocks('gtceu:tungsten_steel_crate'))
            .where('F', Predicates.blocks('gtceu:gaia_frame'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))            
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))            
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/research_station'
        )

    allthemods.create('neuro_interface', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('neuro_interface')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C  D  C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle('FCCCCCF', 'FCCKCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')            
            .where('D', Predicates.blocks('gtceu:tungsten_steel_crate'))
            .where('F', Predicates.blocks('gtceu:gaia_frame'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))            
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))                
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/research_station'
        )

    allthemods.create('gene_sequencer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('gene_sequencer')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C  D  C')
            .aisle(' CCCCC ', ' C   C ', ' C   C ', 'CCCCCCC', 'C     C')
            .aisle('FCCCCCF', 'FCCKCCF', 'FCCCCCF', 'FCCCCCF', 'CCCCCCC')            
            .where('D', Predicates.blocks('gtceu:tungsten_steel_crate'))
            .where('F', Predicates.blocks('gtceu:gaia_frame'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))            
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))                
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/research_station'
        )
})
