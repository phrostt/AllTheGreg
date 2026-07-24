ServerEvents.recipes(allthemods => {
    const addCompressor = (itemsIn, itemsOut, eu, duration, program) => {
        const outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');
        let recipe = allthemods.recipes.gtceu.compressor(`gregification:compressor/${outputID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);
        if (program) {
            recipe.circuit(program);
        }
    };
    // --- SILICON ---
    addCompressor("9x #forge:dusts/silicon", "expatternprovider:silicon_block", 32, 200)
});