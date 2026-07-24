ServerEvents.recipes(allthemods => {   
    const minerEU = 32768;
    const minerDuration = 600;



    allthemods.recipes.gtceu.void_miner('gregification:deeper_darker')
        .chancedOutput('gtceu:small_bedrockium_dust', 500, 500)        
        .inputFluids('#forge:drilling_fluid 1000')
        .circuit(13)
        .duration(minerDuration).EUt(minerEU).dimension('deeperdarker:otherside'); 
})