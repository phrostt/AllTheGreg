ServerEvents.recipes(allthemods => {
    const EUSimple = 8192;
    const duration = 300;
    const EUComplex = 32768;

    const phytomining = [
        { tree: 'star_fruit',    ash: 'pgm_bio_ash',        leach: null,                           outItem: 'gtceu:platinum_group_sludge_dust' },
        { tree: 'carob',         ash: 'rare_earth_bio_ash', leach: 'gtceu:sulfuric_acid 1000',     outFluid: ['gtceu:mixed_rare_earth_sulfate 500'] },
        { tree: 'salak',         ash: 'radium_bio_ash',     leach: 'gtceu:acetic_acid 1000',       outFluid: ['gtceu:radium_acetate 300', 'gtceu:astatine_acetate 300'] },        
        { tree: 'logwood',       ash: 'indium_bio_ash',     leach: 'gtceu:sulfuric_acid 4000',     outFluid: ['gtceu:indium_concentrate 1000'] },
        { tree: 'purpleheart',   ash: 'iodine_bio_ash',     leach: 'gtceu:sulfuric_acid 1000',     outItem: 'gtceu:iodine_dust' },
        { tree: 'pomegranate',   ash: 'strontium_bio_ash',  leach: 'gtceu:sulfuric_acid 1000',     outItem: 'gtceu:celestite_dust' },
        { tree: 'sandalwood',    ash: 'rhenium_bio_ash',    leach: 'minecraft:water 1000',         outFluid: ['gtceu:perrhenic_acid 100'] },
        { tree: 'tangerine',     ash: 'tantalum_bio_ash',   leach: null,                           outItem: 'gtceu:niobium_tantalum_residue_dust' },
        { tree: 'monkey_puzzle', ash: 'caesium_bio_ash',    leach: 'minecraft:water 1000',         outItem: 'gtceu:caesium_potassium_carbonate_dust' },
        { tree: 'myrtle_ebony',  ash: 'antimony_bio_ash',   leach: null,                           outItem: 'gtceu:antimony_trioxide_dust' },
    ];

    phytomining.forEach(p => {

        allthemods.recipes.gtceu.arc_furnace(`gregification:${p.ash}_leaves`)
            .itemInputs(`16x productivetrees:${p.tree}_leaves`)
            .inputFluids('gtceu:oxygen 500')
            .itemOutputs(`gtceu:${p.ash}_dust`)
            .duration(duration).EUt(EUComplex);

        allthemods.recipes.gtceu.arc_furnace(`gregification:${p.ash}_saplings`)
            .itemInputs(`8x productivetrees:${p.tree}_sapling`)
            .inputFluids('gtceu:oxygen 500')
            .itemOutputs(`gtceu:${p.ash}_dust`)
            .duration(duration).EUt(EUComplex);
        
        let step2 = p.leach
            ? allthemods.recipes.gtceu.chemical_reactor(`gregification:leach_${p.ash}`).inputFluids(p.leach)
            : allthemods.recipes.gtceu.centrifuge(`gregification:separate_${p.ash}`);
        step2.itemInputs(`gtceu:${p.ash}_dust`)
            .itemOutputs([p.outItem, 'gtceu:ash_dust'].filter(Boolean))
            .duration(duration).EUt(EUComplex);
        if (p.outFluid) step2.outputFluids(p.outFluid);
    });

    allthemods.recipes.gtceu.chemical_reactor('gregification:amygdalin')
        .itemInputs('16x productivetrees:apricot_leaves')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('gtceu:amygdalin_dust')
        .duration(duration).EUt(EUSimple);

    allthemods.recipes.gtceu.chemical_reactor('gregification:poison_from_amygdalin')
        .itemInputs('gtceu:amygdalin_dust')
        .inputFluids('gtceu:enzyme_solution 250')
        .outputFluids('evilcraft:poison 50')
        .duration(duration).EUt(EUSimple);
});