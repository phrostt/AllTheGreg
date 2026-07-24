ServerEvents.recipes(allthemods => {
    const EUSimple = 2048;
    const EUComplex = 524296; //UV Tier

allthemods.recipes.gtceu.mixer('gregification:soul_essence_synthesis')
        .itemInputs('#forge:dusts/soul', '#forge:dusts/source', '#forge:dusts/mana_essence', '#forge:dusts/sculk')
        .itemOutputs('4x gtceu:soul_essence_dust')
        .duration(400)
        .EUt(EUSimple);

allthemods.recipes.gtceu.mixer('gregification:mind_numbing_agent_synthesis')
        .itemInputs('4x gtceu:stem_cells', '4x gtceu:soul_essence_dust')
        .itemOutputs('4x gtceu:mind_numbing_agent_dust')
        .duration(400)
        .EUt(EUSimple);

allthemods.recipes.gtceu.large_chemical_reactor('gregification:poison_agent_synthesis')
        .itemInputs('1x gtceu:astatine_dust')
        .inputFluids('evilcraft:poison 1000')
        .outputFluids('gtceu:poison_agent 1000')
        .duration(1600)
        .EUt(EUComplex);


allthemods.recipes.gtceu.large_chemical_reactor('gregification:paralytic_agent_synthesis')
        .itemInputs('1x twilightforest:thorn_rose')
        .inputFluids('gtceu:poison_agent 1000')
        .outputFluids('gtceu:paralytic_agent 1000')
        .duration(1600)
        .EUt(EUComplex);

allthemods.recipes.gtceu.large_chemical_reactor('gregification:mind_control_serum_synthesis')
        .itemInputs('1x gtceu:mind_numbing_agent_dust')
        .inputFluids('gtceu:terrazine 1000', 'gtceu:paralytic_agent 1000')
        .outputFluids('gtceu:mind_control_serum 1000')
        .duration(1600)
        .EUt(EUComplex);
        

        //this is missing quarks lol
        allthemods.recipes.gtceu.bacterial_vat('gregification:concentrated_dark_matter_synthesis')
        .itemInputs('#forge:dusts/cesium')
        .inputFluids('#forge:water 1000')
        .outputFluids('gtceu:concentrated_dark_matter 1')
        .duration(10000)
        .EUt(EUComplex);
});