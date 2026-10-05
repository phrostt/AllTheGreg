ServerEvents.recipes(allthemods => {
    const EUSimple = 8192;
    const duration = 300;
    const EUComplex = 32768;

    const phytomining = [
        // --- Hard materials (end-of-line trees) ---
        { tree: 'star_fruit',    ash: 'pgm_bio_ash',        leach: 'gtceu:aqua_regia 1000',           outItem: 'gtceu:platinum_group_sludge_dust' },
        { tree: 'carob',         ash: 'rare_earth_bio_ash', leach: 'gtceu:sulfuric_acid 1000',        outFluid: ['gtceu:mixed_rare_earth_sulfate 500'] },
        { tree: 'salak',         ash: 'radium_bio_ash',     leach: 'gtceu:acetic_acid 1000',          outFluid: ['gtceu:radium_acetate 300', 'gtceu:astatine_acetate 300'], machine: 'chemical_reactor', eu: 131072 },
        { tree: 'logwood',       ash: 'indium_bio_ash',     leach: 'gtceu:sulfuric_acid 4000',        outFluid: ['gtceu:indium_concentrate 1000'] },
        { tree: 'purpleheart',   ash: 'iodine_bio_ash',     leach: 'gtceu:peroxodisulfuric_acid 1000',outItem: 'gtceu:iodine_dust' },
        { tree: 'pomegranate',   ash: 'strontium_bio_ash',  leach: 'gtceu:sulfuric_acid 1000',        outItem: 'gtceu:celestite_dust' },
        { tree: 'sandalwood',    ash: 'rhenium_bio_ash',    leach: 'gtceu:nitric_acid 1000',          outFluid: ['gtceu:perrhenic_acid 100'] },
        { tree: 'tangerine',     ash: 'tantalum_bio_ash',   leach: 'gtceu:hydrofluoric_acid 1000',    outItem: 'gtceu:niobium_tantalum_residue_dust' },
        { tree: 'monkey_puzzle', ash: 'caesium_bio_ash',    leach: 'gtceu:hydrochloric_acid 1000',    outItem: 'gtceu:caesium_potassium_carbonate_dust' },
        { tree: 'myrtle_ebony',  ash: 'antimony_bio_ash',   leach: null,                              outItem: 'gtceu:antimony_trioxide_dust' },
        
        // --- Space materials (gated above their space tier) ---
        { tree: 'pistachio',     ash: 'selenium_bio_ash',   leach: 'gtceu:sulfuric_acid 1000',        outItem: 'gtceu:clausthalite_dust',  eu: 131072 },  // space IV
        { tree: 'pink_ivory',    ash: 'hafnium_bio_ash',    leach: 'gtceu:fluoroantimonic_acid 250',  outItem: 'gtceu:hafnon_dust', outFluid: ['gtceu:hexafluorozirconic_acid 500'], eu: 131072 }, // space IV
        { tree: 'nutmeg',        ash: 'lutetium_bio_ash',   leach: 'gtceu:nitric_acid 1000',          outItem: 'gtceu:xenotime_dust',      eu: 524288 },  // space LuV
        { tree: 'satsuma',       ash: 'samarium_bio_ash',   leach: 'gtceu:hydrochloric_acid 1000',    outItem: 'gtceu:samarskite_dust',    eu: 524288 },  // space LuV
        { tree: 'juniper',       ash: 'scandium_bio_ash',   leach: 'gtceu:phosphoric_acid 1000',      outItem: 'gtceu:thortveitite_dust',  eu: 524288 },  // space LuV
        { tree: 'buddhas_hand',  ash: 'tellurium_bio_ash',  leach: 'gtceu:aqua_regia 1000',           outItem: 'gtceu:calaverite_dust',    eu: 524288 }, // space ZPM

        // --- Low-end materials (IV) ---
        { tree: 'grapefruit',          fruit: 'productivetrees:grapefruit',          ash: 'boron_bio_ash',     leach: 'gtceu:hydrochloric_acid 1000', outItem: 'gtceu:borax_dust',        eu: 8192 },
        { tree: 'osange_orange',       fruit: 'productivetrees:osange_orange',       ash: 'uranium_bio_ash',   leach: 'gtceu:sulfuric_acid 1000',     outItem: 'gtceu:uraninite_dust',    eu: 8192 },
        { tree: 'cinnamon',            fruit: 'productivetrees:cinnamon',            ash: 'manganese_bio_ash', leach: 'gtceu:sulfuric_acid 1000',     outItem: 'gtceu:pyrolusite_dust',   eu: 8192 },
        { tree: 'lime',                fruit: 'productivetrees:lime',                ash: 'magnesium_bio_ash', leach: 'gtceu:hydrochloric_acid 1000', outItem: 'gtceu:magnesite_dust',    eu: 8192 },
        { tree: 'finger_lime',         fruit: 'productivetrees:finger_lime',         ash: 'lithium_bio_ash',   leach: 'gtceu:sulfuric_acid 1000',     outItem: 'gtceu:spodumene_dust',    eu: 8192 },
        { tree: 'greenheart',                                                        ash: 'nickel_bio_ash',    leach: 'gtceu:sulfuric_acid 1000',     outItem: 'gtceu:garnierite_dust',   eu: 8192 },
        { tree: 'boxwood',                                                           ash: 'zinc_bio_ash',      leach: 'gtceu:sulfuric_acid 1000',     outItem: 'gtceu:sphalerite_dust',   eu: 8192 },
        { tree: 'asai_palm',           fruit: 'productivetrees:asai_berry',          ash: 'tin_bio_ash',       leach: 'gtceu:hydrochloric_acid 1000', outItem: 'gtceu:cassiterite_dust',  eu: 8192 },
        { tree: 'douglas_fir',                                                       ash: 'cobalt_bio_ash',    leach: 'gtceu:sulfuric_acid 1000',     outItem: 'gtceu:cobaltite_dust',    eu: 8192 },
        { tree: 'cedar',                                                             ash: 'copper_bio_ash',    leach: 'gtceu:sulfuric_acid 1000',     outItem: 'gtceu:chalcopyrite_dust', eu: 8192 },
        { tree: 'flowering_crabapple', fruit: 'productivetrees:flowering_crabapple', ash: 'lead_bio_ash',      leach: 'gtceu:nitric_acid 1000',       outItem: 'gtceu:galena_dust',       eu: 8192 },
        { tree: 'socotra_dragon',                                                    ash: 'chromium_bio_ash',  leach: 'gtceu:sulfuric_acid 1000',     outItem: 'gtceu:chromite_dust',     eu: 8192 },
        { tree: 'hawthorn',            fruit: 'productivetrees:haw',                 ash: 'silver_bio_ash',    leach: 'gtceu:nitric_acid 1000',       outItem: 'gtceu:silver_dust',       eu: 8192 },
        { tree: 'grandidiers_baobab',  fruit: 'productivetrees:baobab_fruit',        ash: 'titanium_bio_ash',  leach: 'gtceu:sulfuric_acid 1000',     outItem: 'gtceu:ilmenite_dust',     eu: 8192 },
    ];

    phytomining.forEach(p => {
        let eu = p.eu || EUComplex;
        allthemods.recipes.gtceu.arc_furnace(`gregification:${p.ash}_leaves`)
            .itemInputs(`16x productivetrees:${p.tree}_leaves`)
            .inputFluids('gtceu:oxygen 500')
            .itemOutputs(`gtceu:${p.ash}_dust`)
            .duration(duration).EUt(eu);

        allthemods.recipes.gtceu.arc_furnace(`gregification:${p.ash}_saplings`)
            .itemInputs(`8x productivetrees:${p.tree}_sapling`)
            .inputFluids('gtceu:oxygen 500')
            .itemOutputs(`gtceu:${p.ash}_dust`)
            .duration(duration).EUt(eu);
        
        let step2 = p.leach
            ? allthemods.recipes.gtceu[p.machine || 'chemical_bath'](`gregification:leach_${p.ash}`).inputFluids(p.leach)
            : allthemods.recipes.gtceu.centrifuge(`gregification:separate_${p.ash}`);
        step2.itemInputs(`gtceu:${p.ash}_dust`)
            .itemOutputs([p.outItem, 'gtceu:ash_dust'].filter(Boolean))
            .duration(duration).EUt(eu);
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