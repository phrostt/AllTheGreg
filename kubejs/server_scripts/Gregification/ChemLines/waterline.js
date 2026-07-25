ServerEvents.recipes(allthemods => {

    const EUStage1 = 2048; //ev
    const EUStage2 = 32768; //luv
    const EUStage3 = 524288; //uv
    const EUStage4 = 2097152; //uhv
    const EUStage5 = 8388608; //uev
    const EUStage6 = 33554432; //uhv    
    const duration = 400;

   const filter = Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:activated_carbon_slurry"}}').strongNBT();

    allthemods.recipes.gtceu.water_filtration_plant('gregification:water_stage_1')
        .chancedInput(filter, 1000, 0)
        .inputFluids('#forge:distilled_water 1000')
        .outputFluids('gtceu:water_stage_1 900')
        .duration(duration)
        .EUt(EUStage1);

    allthemods.recipes.gtceu.ozonation_plant('gregification:water_stage_2')        
        .inputFluids('gtceu:water_stage_1 900', '#forge:ozone 1000')
        .outputFluids('gtceu:water_stage_2 800')
        .duration(duration)
        .EUt(EUStage2);
    
    allthemods.recipes.gtceu.flocculation_plant('gregification:water_stage_3')
        .inputFluids('gtceu:water_stage_2 800', '#forge:polyaluminium_chloride 1000')
        .outputFluids('gtceu:water_stage_3 700', 'gtceu:spent_flocculant_slurry 1000')
        .duration(duration)
        .EUt(EUStage3);

    allthemods.recipes.gtceu.bacterial_vat('gregification:water_stage_4')
        .chancedInput('#forge:dusts/sodium_hydroxide', 2500, 0)
        .inputFluids('gtceu:water_stage_3 700')
        .chancedFluidInput('#forge:hydrochloric_acid 1000', 2500,0)
        .outputFluids('gtceu:water_stage_4 600')
        .duration(duration)
        .EUt(EUStage3);
    
    allthemods.recipes.gtceu.laser_purification('gregification:water_stage_5')
        .chancedInput('#forge:lenses/restonia', 500, 0)
        .chancedInput('#forge:lenses/palis', 500, 0)
        .chancedInput('#forge:lenses/diamatine', 500, 0)
        .chancedInput('#forge:lenses/void_crystal', 500, 0)
        .chancedInput('#forge:lenses/emeradic', 500, 0)
        .chancedInput('#forge:lenses/enori', 500, 0)
        .chancedInput('#forge:lenses/black_quartz', 500, 0)
        .inputFluids('gtceu:water_stage_4 600')
        .outputFluids('gtceu:water_stage_5 500')
        .duration(duration)
        .EUt(EUStage4);
    
    allthemods.recipes.gtceu.cryogenic_unit('gregification:water_stage_6')
        .chancedFluidInput('#forge:super_coolant 100', 2500,0)
        .chancedFluidInput('#forge:helium_plasma 100', 2500,0)
        .inputFluids('gtceu:water_stage_5 500')
        .outputFluids('gtceu:water_stage_6 400')
        .duration(duration)
        .EUt(EUStage5);
    
    allthemods.recipes.gtceu.baryonic_stabilizer('gregification:water_stage_7')
        .chancedInput('gtceu:up_quark', 500, 0)
        .chancedInput('gtceu:down_quark', 500, 0)
        .chancedInput('gtceu:top_quark', 500, 0)
        .chancedInput('gtceu:bottom_quark', 500, 0)
        .chancedInput('gtceu:strange_quark', 500, 0)
        .chancedInput('gtceu:charm_quark', 500, 0)
        .inputFluids('gtceu:water_stage_6 400')
        .outputFluids('gtceu:purest_water 300')
        .duration(duration)
        .EUt(EUStage6); 
        
    allthemods.recipes.gtceu.baryonic_separator('gregification:quark_separation')
        .itemInputs(['#forge:small_dusts/infinity', '#forge:small_dusts/draconium_awakened'])
        .chancedOutput('gtceu:up_quark', 500, 0)
        .chancedOutput('gtceu:down_quark', 500, 0)
        .chancedOutput('gtceu:top_quark', 500, 0)
        .chancedOutput('gtceu:bottom_quark', 500, 0)
        .chancedOutput('gtceu:strange_quark', 500, 0)
        .chancedOutput('gtceu:charm_quark', 500, 0)
        .duration(duration)
        .EUt(EUStage6); 

});