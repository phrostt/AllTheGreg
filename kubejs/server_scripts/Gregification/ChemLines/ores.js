ServerEvents.recipes(allthemods => {
    const EUMoon = 8192;
    const EUMars = 32768;
    const EUMercuryVenus = 131072;
    const EUGlacio = 524288;
    const tempMoon = 4500;
    const tempMars = 5400;
    const tempMercuryVenus = 7200;
    const tempGlacio = 9001;
    const Duration = 600;

    //iv recipe for peroxodisulfuric acid
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:peroxodisulfuric_acid_sulfur_dioxide')
        .inputFluids(['#forge:gtceu:sulfur_dioxide 8000', '#forge:gtceu:oxygen 8000', '#forge:gtceu:hydrogen_peroxide 4000'])
        .outputFluids('gtceu:peroxodisulfuric_acid 4000')
        .duration(Duration)
        .EUt(EUMoon);

    //indium
    //roquesite
    allthemods.recipes.gtceu.chemical_reactor('gregification:roquesite_bath')
        .itemInputs('2x #forge:dusts/roquesite')
        .inputFluids('#forge:peroxodisulfuric_acid 3000', '#forge:oxygen 6000')
        .itemOutputs(['2x gtceu:copper_ii_sulfate_dust', 'gtceu:indium_iii_oxide_dust'])
        .outputFluids(['minecraft:water 3000', 'sulfur_dioxide 8000'])
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.chemical_reactor('gregification:roquesite_reactor')
        .itemInputs('#forge:dusts/indium_iii_oxide')
        .inputFluids('minecraft:water 3000')
        .itemOutputs('2x gtceu:indium_hydroxide_dust')
        .duration(Duration)
        .EUt(EUMars);

    allthemods.recipes.gtceu.alloy_blast_smelter('gregification:roquesite_blast_smelter')
        .itemInputs('2x #forge:dusts/indium_hydroxide')
        .itemOutputs('2x gtceu:indium_ingot')
        .blastFurnaceTemp(tempMars)
        .duration(Duration)
        .EUt(EUMars);

    //indite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:indite_chemical_reactor')
        .itemInputs(['2x #forge:dusts/indite', '#forge:dusts/sulfur'])
        .inputFluids(['#forge:hydrochloric_acid 6000', 'minecraft:water 12000'])
        .itemOutputs('4x gtceu:indium_hydroxide_dust')
        .outputFluids(['gtceu:iron_iii_chloride 2000', 'gtceu:hydrogen_sulfide 9000'])
        .duration(Duration)
        .EUt(EUMars);

    //sakuraiite
    allthemods.recipes.gtceu.alloy_blast_smelter('gregification:zinc_stannate_blast_smelter')
        .itemInputs('2x #forge:dusts/zinc_stannate')
        .itemOutputs(['4x gtceu:zinc_ingot', '2x gtceu:tin_ingot'])
        .blastFurnaceTemp(tempMoon)
        .duration(Duration / 2)
        .EUt(EUMoon);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:sakuraiite_chemical_reactor')
        .itemInputs(['2x #forge:dusts/sakuraiite', '2x #forge:dusts/zinc'])
        .inputFluids(['minecraft:water 22000'])
        .itemOutputs(['2x gtceu:indium_hydroxide_dust', '2x gtceu:copper_ii_sulfate_dust', '2x gtceu:zinc_stannate_dust'])
        .outputFluids(['gtceu:hydrogen_sulfide 6000', 'gtceu:hydrogen 26000'])
        .duration(Duration)
        .EUt(EUMars);

    // Hafnium
    //hafnian zircon
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:hafnian_zircon_reactor')
        .itemInputs('#forge:dusts/hafnian_zircon')
        .inputFluids(['hydrofluoric_acid 6000', 'carbon_monoxide 2000'])
        .itemOutputs(['gtceu:fluorozirconic_composite_dust', 'gtceu:hafnium_silicide_dust'])
        .outputFluids('hydrogen_peroxide 3000')
        .duration(Duration)
        .EUt(EUMoon);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:hafnon_chemical_reactor')
        .itemInputs('#forge:dusts/hafnon')
        .itemOutputs('gtceu:hafnium_silicide_dust')
        .outputFluids('oxygen 4000')
        .duration(Duration)
        .EUt(EUMoon);

    allthemods.recipes.gtceu.alloy_blast_smelter('gregification:hafnium_silicide_blast_smelter')
        .itemInputs('#forge:dusts/hafnium_silicide')
        .itemOutputs(['gtceu:hot_silicon_ingot', 'chemlib:hafnium_ingot'])
        .blastFurnaceTemp(tempMoon)
        .duration(Duration)
        .EUt(EUMoon);


    //rubidium
    //rubicline
    allthemods.recipes.gtceu.chemical_bath('gregification:rubicline_bath')
        .itemInputs('2x #forge:dusts/rubicline')
        .inputFluids('#forge:sulfuric_acid 4000')
        .itemOutputs(['2x gtceu:rubidium_aluminium_sulfate_dust', '6x gtceu:silicon_dioxide_dust', '2x gtceu:potassium_dust'])
        .outputFluids('minecraft:water 4000')
        .duration(Duration)
        .EUt(EUGlacio);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:rubidium_aluminium_sulfate_reactor')
        .itemInputs(['2x #forge:dusts/rubidium_aluminium_sulfate', '#forge:dusts/soda_ash'])
        .itemOutputs(['gtceu:sodium_sulfate_dust', 'gtceu:aluminium_sulfite_dust'])
        .outputFluids(['gtceu:rubidium_carbonate 1000', 'gtceu:oxygen 3000'])
        .duration(Duration)
        .EUt(EUGlacio);

    allthemods.recipes.gtceu.alloy_blast_smelter('gregification:rubidium_carbonate_blasting')
        .itemInputs('#forge:dusts/calcium')
        .inputFluids('#forge:rubidium_carbonate 1000')
        .itemOutputs(['2x chemlib:rubidium_ingot', 'gtceu:calcium_oxide_dust'])
        .outputFluids('gtceu:carbon_dioxide 1000')
        .blastFurnaceTemp(tempGlacio)
        .duration(Duration)
        .EUt(EUGlacio);

    //Thallium        
    //lorandite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:lorandite_chemical_reactor')
        .itemInputs(['2x #forge:dusts/lorandite', '2x #forge:dusts/potassium_iodide'])
        .inputFluids(['#forge:nitric_acid 8000', '#forge:oxygen 11000'])
        .itemOutputs(['2x gtceu:thallium_iodide_dust', 'gtceu:hydrogen_sulfide_dust', '2x gtceu:niter_dust'])
        .outputFluids(['gtceu:arsenic_acid 2000', 'gtceu:sulfur_trioxide 3000', 'gtceu:nitrogen_dioxide 6000'])
        .duration(EUGlacio)
        .EUt(EUMercuryVenus);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:thallium_iodide_chemical_reactor')
        .itemInputs(['2x #forge:dusts/thallium_iodide', '#forge:dusts/soda_ash'])
        .itemOutputs(['gtceu:thallium_oxide_dust', '2x gtceu:sodium_iodide_dust'])
        .outputFluids('gtceu:carbon_dioxide 1000')
        .duration(EUGlacio)
        .EUt(EUMercuryVenus);

    allthemods.recipes.gtceu.alloy_blast_smelter('gregification:thallium_oxide_blasting')
        .itemInputs(['#forge:dusts/thallium_oxide', '#forge:dusts/carbon'])
        .itemOutputs('2x gtceu:thallium_dust')
        .outputFluids('gtceu:carbon_monoxide 1000')
        .duration(Duration)
        .EUt(EUMercuryVenus);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:arsenic_acid_chemical_reactor')
        .itemInputs('4x #forge:dusts/carbon')
        .inputFluids('#forge:arsenic_acid 2000')
        .itemOutputs('gtceu:arsenic_trioxide_dust')
        .outputFluids(['gtceu:formaldehyde 3000', 'gtceu:carbon_dioxide 1000'])
        .duration(Duration)
        .EUt(EUMercuryVenus);

    //hutchinsonite    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:hutchinsonite_chemical_reactor') 
        .itemInputs(['2x #forge:dusts/hutchinsonite', '2x #forge:dusts/sodium_iodide'])
        .inputFluids(['#forge:hydrochloric_acid 6000', 'minecraft:water 15000'])
        .itemOutputs(['2x gtceu:thallium_iodide_dust', '2x gtceu:salt_dust', '2x gtceu:lead_chloride_dust'])
        .outputFluids(['gtceu:arsenic_trioxide 5000', 'gtceu:hydrogen_sulfide 18000'])       
        .duration(Duration)
        .EUt(EUMercuryVenus);
    
    // Scandium
    //thortveitite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:thortveitite_chemical_reactor')
        .itemInputs(['#forge:dusts/thortveitite', '#forge:dusts/calcium_fluoride'])
        .inputFluids('minecraft:water 1000')
        .itemOutputs(['gtceu:wollastonite_dust', 'gtceu:silicon_dioxide_dust', 'gtceu:scandium_oxide_dust'])
        .outputFluids('gtceu:hydrofluoric_acid 2000')
        .duration(Duration)
        .EUt(EUMars);
    
    //kolbeckite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:kolbeckite_chemical_reactor')    
        .itemInputs('2x #forge:dusts/kolbeckite')
        .inputFluids('minecraft:water 3000')
        .itemOutputs('gtceu:scandium_oxide_dust')
        .outputFluids('gtceu:phosphoric_acid 2000')
        .duration(Duration)
        .EUt(EUMars);

    //bazzite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:bazzite_chemical_reactor')
        .itemInputs('#forge:dusts/bazzite')
        .itemOutputs(['gtceu:scandium_oxide_dust', '6x gtceu:silicon_dioxide_dust', '3x gtceu:beryllium_oxide_dust'])
        .duration(Duration)
        .EUt(EUMars);

    //galium    
    //gallite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:gallite_chemical_reactor')
        .itemInputs('#forge:dusts/gallite')
        .inputFluids('#forge:oxygen 7000')
        .itemOutputs(['gtceu:copper_ii_sulfate_dust', 'gtceu:gallium_dust'])
        .outputFluids('gtceu:sulfur_trioxide 1000')
        .duration(Duration)
        .EUt(EUMoon);
    
    //selenium
    //{ name: 'clausthalite', components: '1x lead, 1x selenium', byproducts: ['clausthalite', 'lead'], iconSet: 'METALLIC', color: 0xC8C8D2, noDecomp: true },
    //{ name: 'crookesite', components: '2x copper, 1x thallium, 1x silver, 1x selenium', byproducts: ['crookesite', 'thallium', 'selenium'], iconSet: 'METALLIC', color: 0x8A7048, noDecomp: true },
    //{ name: 'naumannite', components: '2x silver, 1x selenium', byproducts: ['naumannite', 'selenium'], iconSet: 'METALLIC', color: 0x4A4A52, noDecomp: true },
    
    //clausthalite
    //simple decompose
    //naumannite simple decompose

    //crookesite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:clausthalite_chemical_reactor')
        .itemInputs('2x #forge:dusts/crookesite')
        .inputFluids('#forge:sulfur_dioxide 4000')
        .itemOutputs(['2x gtceu:stromeyerite_dust', '2x gtceu:copper_ii_sulfate_dust', '2x gtceu:thallium_monoselenide_dust'])
        .duration(Duration)
        .EUt(EUMercuryVenus);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:thallium_monoselenide_chemical_reactor')
        .itemInputs(['2x #forge:dusts/thallium_monoselenide', '#forge:dusts/water'])
        .inputFluids('#forge:hydrochloric_acid 2000')
        .itemOutputs(['2x gtceu:hydrogen_selenide_dust', 'gtceu:thallium_oxide_dust'])
        .outputFluids('gtceu:chlorine 2000')
        .duration(Duration)
        .EUt(EUMercuryVenus);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:rhodizite_chemical_reactor')
        .itemInputs('#forge:dusts/rhodizite')
        .inputFluids(['#forge:carbon_monoxide 11000', '#forge:hydrochloric_acid 2000'])
        .itemOutputs(['gtceu:caesium_potassium_carbonate_dust', '4x gtceu:beryllium_oxide_dust', '11x gtceu:boron_dust'])
        .outputFluids(['gtceu:polyaluminium_chloride 2000', 'gtceu:carbon_dioxide 10000', 'gtceu:oxygen 12000'])
        .duration(Duration)
        .EUt(EUGlacio);
    
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:caesium_potassium_carbonate_decomposition')
        .itemInputs(['2x #forge:dusts/caesium_potassium_carbonate', '#forge:dusts/silicon_dioxide', '#forge:dusts/calcium_carbonate'])
        .inputFluids('#forge:oxygen 5000')
        .itemOutputs(['2x gtceu:caesium_dust', 'gtceu:potassium_calcium_orthosilicate_dust'])
        .outputFluids('gtceu:carbon_tetroxide 3000')
        .duration(duration)
        .EUt(EUMercuryVenus);
        
    allthemods.recipes.gtceu.chemical_reactor('gregification:calcium_carbonate_synthesis')
        .itemInputs('#forge:dusts/calcium_hydroxide')
        .inputFluids('#forge:carbon_monoxide 1000')
        .itemOutputs('gtceu:calcium_carbonate_dust')
        .outputFluids('gtceu:hydrogen 2000')
        .duration(Duration)
        .EUt(EUMoon);

    //strontium
    //strontianite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:strontianite_chemical_reactor')
        .itemInputs('2x #forge:dusts/strontianite')
        .inputFluids('#forge:sulfuric_acid 4000')
        .itemOutputs('2x gtceu:strontium_sulfide_dust')
        .outputFluids(['gtceu:carbon_tetroxide 2000', 'gtceu:hydrogen_peroxide 4000', 'gtceu:sulfur_trioxide 2000'])
        .duration(Duration)
        .EUt(EUMercuryVenus);

    // Tantalum & Niobium
    //{ name: 'columbite_tantalite', components: '1x iron, 1x manganese, 2x niobium, 2x tantalum, 6x oxygen', byproducts: ['columbite_tantalite', 'niobium', 'tantalum'], iconSet: 'METALLIC', color: 0x3C3C46, noDecomp: true },
    //{ name: 'microlite', components: '2x calcium, 2x tantalum, 7x oxygen', byproducts: ['microlite', 'tantalum'], iconSet: 'METALLIC', color: 0x8C7850, noDecomp: true },
    //{ name: 'wodginite', components: '1x manganese, 1x iron, 1x tin, 1x tantalum, 1x titanium, 1x niobium, 8x oxygen', byproducts: ['wodginite', 'tantalum', 'niobium'], iconSet: 'METALLIC', color: 0x463C34, noDecomp: true },
    //{ name: 'fergusonite', components: '1x yttrium, 1x niobium, 4x oxygen', byproducts: ['fergusonite', 'yttrium', 'niobium'], iconSet: 'METALLIC', color: 0x3C3428, noDecomp: true },

    //columbite_tantalite
    allthemods.recipes.gtceu.chemical_bath('gregification:columbite_tantalite_bath')
        .itemInputs('#forge:dusts/columbite_tantalite')
        .inputFluids('#forge:phosphoric_acid 1000')
        .itemOutputs(['gtceu:manganese_phosphide_dust', 'gtceu:iron_hydroxide_dust', 'gtceu:niobium_pentoxide_dust', 'gtceu:tantalum_dioxide_dust'])
        .duration(Duration)
        .EUt(EUMoon);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:niobium_tantalum_chloride_synthesis')
        .itemInputs(['#forge:dusts/niobium_pentoxide', '#forge:dusts/tantalum_dioxide', '9x #forge:dusts/carbon'])
        .inputFluids(['#forge:hydrochloric_acid 20000', 'minecraft:water 2000'])
        .itemOutputs('2x gtceu:tantalum_pentachloride_dust')
        .outputFluids(['gtceu:niobium_pentachloride 2000', 'gtceu:glycerol 3000'])
        .duration(Duration)
        .EUt(EUMoon);
    
    //microlite
    allthemods.recipes.gtceu.chemical_reactor('gregification:microlite_sulfuric_acid_reaction')
        .itemInputs(['#forge:dusts/microlite', '3x #forge:dusts/carbon'])
        .inputFluids('#forge:sulfuric_acid 2000')
        .itemOutputs(['2x gtceu:calcium_sulfate_dust', 'gtceu:tantalum_dioxide_dust'])
        .outputFluids(['gtceu:formic_acid 2000', 'gtceu:carbon_monoxide 1000'])
        .duration(Duration)
        .EUt(EUMoon);
    
    allthemods.recipes.gtceu.chemical_reactor('gregification:tantalum_sodium_sulfate_reaction')
        .itemInputs(['#forge:dusts/tantalum_dioxide', '2x #forge:dusts/sodium_sulfate'])
        .inputFluids('#forge:hydrogen 4000')
        .itemOutputs(['2x gtceu:tantalum_dust', '2x gtceu:sodium_bisulfate_dust', '2x gtceu:sodium_hydroxide_dust'])
        .duration(Duration)
        .EUt(EUMoon);

    //wodginite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:wodginite_chemical_reactor')
        .itemInputs('2x #forge:dusts/wodginite')
        .itemOutputs(['gtceu:tantalum_dioxide_dust', '2x gtceu:niobium_titanium_dust', '2x gtceu:tin_alloy_dust'])
        .outputFluids(['gtceu:manganese_heptoxide 1000', 'gtceu:oxygen 7000'])
        .duration(Duration)
        .EUt(EUMoon);

    allthemods.recipes.gtceu.large_chemical_reactor('gregification:manganese_phosphide_synthesis')
        .itemInputs(['#forge:dusts/manganese_heptoxide', '#forge:dusts/phosphorus_pentoxide', '4x #forge:dusts/sulfur'])
        .itemOutputs(['2x gtceu:manganese_phosphide_dust', '4x gtceu:sulfur_trioxide_dust'])
        .duration(Duration)
        .EUt(EUMoon);

    //fergusonite
    allthemods.recipes.gtceu.large_chemical_reactor('gregification:fergusonite_chemical_reactor')
        .itemInputs(['2x #forge:dusts/fergusonite', '#forge:dusts/carbon', '2x #forge:dusts/potassium_hydroxide'])
        .inputFluids('#forge:oxygen 2000')
        .itemOutputs(['gtceu:niobium_pentoxide_dust', 'gtceu:yttrium_oxide_dust', 'gtceu:potassium_carbonate_dust'])
        .outputFluids('minecraft:water 1000')
        .duration(Duration)
        .EUt(EUMars);
});
