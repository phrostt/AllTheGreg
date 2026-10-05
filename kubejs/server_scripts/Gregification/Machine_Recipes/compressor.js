ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
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
    addCompressor("9x #forge:dusts/silicon", "expatternprovider:silicon_block", LV, 200)
});