ServerEvents.recipes(allthemods => {

    const EUStage1 = 512; //hv
    const EUStage2 = 2048; //ev
    const EUStage3 = 32768; //iv
    const EUStage4 = 524288; //luv
    const EUStage5 = 2097152; //zpm
    const EUStage6 = 8388608; //uv
    const EUStage7 = 33554432; //uhv    
    const duration = 400;

    //zinc carbon acid for the slurry
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
        .duration(duration*.9)
        .EUt(EUStage2);
    
    allthemods.recipes.gtceu.flocculation_plant('gregification:water_stage_3')
        .inputFluids('gtceu:water_stage_2 800', '#forge:polyaluminium_chloride 1000')
        .outputFluids('gtceu:water_stage_3 700', 'gtceu:spent_flocculant_slurry 1000')
        .duration(duration*.8)
        .EUt(EUStage3);

    allthemods.recipes.gtceu.microbial_filtration_array('gregification:water_stage_4')
        .chancedInput('#forge:dusts/sodium_hydroxide', 2500, 0)
        .inputFluids('gtceu:water_stage_3 700')
        .chancedFluidInput('#forge:hydrochloric_acid 1000', 2500,0)
        .outputFluids('gtceu:water_stage_4 600')
        .duration(duration*.7)
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
        .duration(duration*.6)
        .EUt(EUStage4);
    
    allthemods.recipes.gtceu.cryogenic_unit('gregification:water_stage_6')
        .chancedFluidInput('#forge:super_coolant 100', 2500,0)
        .chancedFluidInput('#forge:helium_plasma 100', 2500,0)
        .inputFluids('gtceu:water_stage_5 500')
        .outputFluids('gtceu:water_stage_6 400')
        .duration(duration*.5)
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
        .duration(duration*.4)
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

    event.recipes.gtceu.hydro_electromagnetic_separator('allthemods:hydro_electromagnetic_separator/liquid_air_separation')
        .itemInputs()
        .inputFluids('gtceu:liquid_air 13000')
        .itemOutputs()
        .outputFluids('gtceu:oxygen 3000', 'allthemods:inert_gas_mixture 10000')
        .duration(duration)
        .EUt(EUStage1);

    // Step 2: Fractional Gas Separator (Inert Gas Mixture -> Component Gases)
    event.recipes.gtceu.fractional_gas_separator('allthemods:fractional_gas_separator/inert_gas_fractionation')
        .itemInputs()
        .inputFluids('allthemods:inert_gas_mixture 10000')
        .itemOutputs()
        .outputFluids('gtceu:nitrogen 9000', 'gtceu:carbon_dioxide 500', 'gtceu:helium 250', 'gtceu:argon 125')
        .duration(duration)
        .EUt(EUStage1);

});