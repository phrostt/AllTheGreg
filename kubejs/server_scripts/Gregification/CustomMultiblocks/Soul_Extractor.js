ServerEvents.recipes(allthemods => {

    const soulExtractor = (inputs, fluidIn, outputs, fluidOut, duration, eu, cID) => {

        let id;
        if (cID){
            id = cID;
        }
        else{
            let firstFluidEntry = Array.isArray(fluidOut) ? fluidOut[0] : fluidOut;

            let fluidName = firstFluidEntry
            .split(' ')[0]               // Takes 'kubejs:liquid_soul', ignores '2000'
            .split(':').pop()            // Takes 'liquid_soul', ignores 'kubejs'
            .replace(/[^a-z0-9_]/gi, '') // Final safety clean
            .toLowerCase();
            id = `gregification:soul_extraction/${fluidName}`;

        }
        

        


        let recipe = allthemods.recipes.gtceu.soul_extractor(id)
            .itemInputs(inputs)
            .duration(duration)
            .EUt(eu);

        if (outputs && outputs.length > 0) {
            recipe.itemOutputs(outputs)
        }
        if (fluidIn && fluidIn.length > 0) {
            recipe.inputFluids(fluidIn);
        }
        if (fluidOut && fluidOut.length > 0) {
            recipe.outputFluids(fluidOut);
        }
    };

    soulExtractor(['forbidden_arcanus:soul_extractor', '128x minecraft:soul_sand'], 'gtceu:water_stage_3 2000', '128x forbidden_arcanus:soulless_sand', 'gtceu:soul 2000', 1000, 32768)
    soulExtractor(["128x minecraft:ghast_tear", "128x #forge:dusts/redstone", "128x #forge:dusts/glowstone"], 'gtceu:water_stage_3 5000', null, 'gtceu:aureal 5000', 1000, 32768)
    soulExtractor(['draconicevolution:dragon_heart'], 'gtceu:water_stage_4 1000', null, 'gtceu:liquid_draconic_essence 1000', 100, 32768)
    soulExtractor(['industrialforegoing:fertilizer'], 'gtceu:water_stage_1 1000', null, 'gtceu:liquid_fertilizer 1000', 100, 32768)
    soulExtractor(['bloodmagic:strong_tau'], 'gtceu:water_stage_1 1000', null, 'gtceu:saturated_tau 1000', 100, 32768)
    soulExtractor(['minecraft:dragon_breath'], 'gtceu:water_stage_2 1000', null, 'gtceu:liquid_dragon_breath 1000', 100, 32768)    
    //soulExtractor(['20x minecraft:rotten_flesh'], 'gtceu:water_stage_4 2000', null, 'gtceu:liquid_rotten_flesh 2000', 100, 32768)

});
