GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    // 1. Liquifier Recipe Type
        
    event.create('imbument_chamber')
        .category('imbument_chamber')
        .setEUIO('in')
        .setMaxIOSize(12, 3, 1, 0)
        .setSound(GTSoundEntries.BOILER)                
        .setSlotOverlay(false, true, GuiTextures.FLUID_TANK_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
})

GTCEuStartupEvents.registry("gtceu:machine", event => {    

    event.create("imbument_chamber", "simple")
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("imbument_chamber")                
                .workableTieredHullModel("gtceu:block/machines/assembler")
        );    
});