ServerEvents.recipes(allthemods => {              
        allthemods.recipes.gtceu.sifter('wheat_to_seed')
                .itemInputs('#forge:crops/wheat')
                .itemOutputs('minecraft:wheat_seeds')
                .duration(80)
                .EUt(32)
                .circuit(1)
                .chancedOutput('minecraft:wheat_seeds', 500, 500)
                .chancedOutput('2x minecraft:wheat_seeds', 500, 250)
                .chancedOutput('4x minecraft:wheat_seeds', 100, 100);
        
        allthemods.recipes.gtceu.sifter('wheat_to_flour')
                .itemInputs('#forge:crops/wheat')
                .itemOutputs('gtceu:wheat_dust')
                .duration(80)
                .EUt(32)
                .circuit(2)                
});