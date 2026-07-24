ServerEvents.recipes(allthemods => {
    const tiers = {
        ULV: 8,
        LV: 32,
        MV: 128,
        HV: 512,
        EV: 2048,
        IV: 8192,
        LuV: 32768,
        ZPM: 131072,
        UV: 524288,
        UHV: 2097152,
        UEV: 8388608,
        UIV: 33554432,
        UXV: 134217728,
        OpV: 536870912,
        MAX: 2147483647
    };    
    const blackHole = (inputs, fluidIn, outputs, fluidOut, eu, duration, customID, program) => {

        let id;

        if (customID) {
            id = `gregification:black_hole/${customID}`;
        } else {
            let firstOutput = Array.isArray(outputs) ? outputs[0] : outputs;
            let outputName = firstOutput.toString()
                .replace(/^\d+[x ]\s*/, '')
                .split(':').pop()
                .replace(/[^a-zA-Z0-9_]/g, '_')
                .toLowerCase();
            id = `gregification:black_hole/${outputName}`;
        }
        
        let recipe = allthemods.recipes.gtceu.black_hole(id)
            .itemInputs(inputs)
            .itemOutputs(outputs)
            .duration(duration)
            .EUt(eu);

        if (fluidIn && fluidIn.length > 0) {
            recipe.inputFluids(fluidIn);
        }

        if (fluidOut && fluidOut.length > 0) {
            recipe.outputFluids(fluidOut);
        }
        if (program) {
            recipe.circuit(program);
        }        
    };

    const addAssemblyLine = (output, inputs, fluids, duration, eu, researchItem, CWUt) => {

        let itemName = output.replace(/^\d+x\s+/, '').split(':').pop();
        let generatedId = `gregification:assembly_line/${itemName}`;

        let recipe = allthemods.recipes.gtceu.assembly_line(generatedId)
            .itemOutputs(output)
            .itemInputs(inputs)
            .duration(duration)
            .EUt(eu);

        if (fluids && fluids.length > 0) {
            recipe.inputFluids(fluids);
        }

        if (researchItem) {
            if (CWUt) {
                recipe.stationResearch(b =>
                    b.researchStack(researchItem)  // Uses the 'researchItem' argument             
                        .EUt(eu)                  // 1/4th EU is standard for research
                        .CWUt(CWUt)                     // Computation Units (Standard default)
                );

            }
            else {
                recipe.scannerResearch(researchItem);
            }
        }
    };
    const singularityMetals = []    

    const singularityGems = [
        'demon', 'steadfast', 'corrosive', 'vengeful', 'destructive', 'eternal',
        'restonia', 'palis', 'diamatine', 'void_crystal', 'emeradic', 'enori', 'black_quartz',
        'empowered_restonia', 'empowered_palis', 'empowered_diamatine', 'empowered_void_crystal', 'empowered_emeradic', 'empowered_enori',
        'mana_essence', 'garmonbozia', 'fluix'
    ];
    const singularityIngots = [
        'copper_alloy', 'conductive_alloy', 'energetic_alloy', 'vibrant_alloy', 
        'pulsating_alloy', 'soularium', 'dark_steel', 'end_steel',
        'signalum', 'lumium', 'enderium',    
        'manasteel', 'elementium', 'terrasteel', 'gaia', 'alfsteel',    
        'hellforged', 'iesnium',
        'allthemodium', 'vibranium', 'unobtainium',    
        'draconium', 'draconium_awakened',    
        'refined_obsidian', 'refined_glowstone', 'alloy_infused', 'alloy_reinforced', 'alloy_atomic',    
        'compressed_iron', 'hop_graphite', 'graphite',
        'pink_slime', 'plastic', 'deorum', 'ferrognetic',    
        'naquamodium', 'naquabranium', 'naquatainium',    
        'eternium', 'cosmic_alloy', 'antimatter_alloy', 'singularity_alloy', 'absolute_alloy',
        'alltheneutronium', 'vibtronium', 'unobtronium', 'deorum_alloy', 'demonic_alloy', 'tenebrium',
        'rhenium','radium','astatine','strontium', 'rhenium_nickel_alloy', 'tellurium', 'berkelium', 'californium',
        'blutonium', 'cyanite', 'magentite', 'ludicrite', 'ridiculite', 'inanite', 'insanite',
        'iron','copper','silver','gold','lead','tin','platinum', 'nickel', 'zinc', 'brass', 'bronze', 'invar', 'steel'        
    ];
    
             

    singularityGems.forEach(mat=>{
        let input = `64000x #forge:gems/${mat}`
        blackHole(input, null, `gtceu:${mat}_singularity`,null,8388608, 1200)
    })

    singularityIngots.forEach(mat=>{
        let input = `64000x #forge:ingots/${mat}`        
        blackHole(input, null, `gtceu:${mat}_singularity`,null,8388608, 1200)
    })
    
    addAssemblyLine(
        'gtceu:black_hole',
        [
            'gtceu:uev_machine_hull',
            '4x gtceu:uev_electric_piston',
            '2x gtceu:uev_electric_motor',
            '8x gtceu:long_magnetic_eternium_rod',
            '64x gtceu:fine_alltheneutronium_wire',
            '8x #gtceu:circuits/uev'
        ],
        [
            '#forge:lubricant 2880',
            '#forge:soldering_alloy 2880'            
        ],
        1200,
        GTValues.V[GTValues.UEV],
        'gtceu:uev_compressor',
        64
    )
})