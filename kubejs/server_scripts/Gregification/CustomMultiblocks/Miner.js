ServerEvents.recipes(allthemods => {   
    const minerEU = 2048;
    const minerDuration = 600;



    allthemods.recipes.gtceu.void_miner('gregification:deeper_darker/bedrockium')
        .itemOutputs('gtceu:bedrockium_dust')
        .inputFluids('#forge:drilling_fluid 1000')
        .circuit(13)
        .duration(minerDuration).EUt(minerEU).dimension('deeperdarker:otherside'); 
})