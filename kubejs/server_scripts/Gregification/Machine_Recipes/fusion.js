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

    const stages = {
        1: 100000,
        2: 262144,
        3: 1048576
    }
ServerEvents.recipes(allthemods => {
    
    /**
     * Helper to add GTCEu Fusion Reactor Recipes 
     * @param {string[]} fluidIn - Array of fluid inputs (Fluid.of('mod:id', amount))
     * @param {string[]} fluidOut - Array of fluid outputs (Fluid.of('mod:id', amount))
     * @param {number} eu - Energy per tick
     * @param {number} duration - Duration in ticks
     * @param {number} cost - The starting energy (fusionStartEU)
     */
    const addFusion = (fluidIn, fluidOut, eu, duration, cost) => {
        // Safely extract the fluid string from the KubeJS Fluid object/array
        const outputID = fluidOut.replace(/[^a-z0-9]/gi, '_');
        
        let recipe = allthemods.recipes.gtceu.fusion_reactor(`allthemods:fusion/${outputID}`)
            .inputFluids(fluidIn)
            .outputFluids(fluidOut)
            .duration(duration)
            .EUt(eu)        
            .fusionStartEU(cost);
            
        return recipe;
    };
    
    //naquadria stage 2
    addFusion(
        [            
            'gtceu:naquadria 72',
            'gtceu:liquid_chaos 72'
        ],
        'gtceu:naquadria_stage_2 72',
        tiers['LuV'],
        20,
        stages[1]
    )

    //naquadria stage 3
    addFusion(
        [            
            'gtceu:naquadria_stage_2 72',
            'gtceu:liquid_chaos 72'
        ],
        'gtceu:naquadria_stage_3 72',
        tiers['ZPM'],
        20,
        stages[2]
    )

    //naquadria stage 4
    addFusion(
        [            
            'gtceu:naquadria_stage_3 72',
            'gtceu:polonium 72'
        ],
        'gtceu:naquadria_stage_4 72',
        tiers['UV'],
        20,
        stages[3]
    )

    //naquadria awakened
    addFusion(
        [            
            'gtceu:naquadria_stage_4 72',
            'gtceu:antimatter 72'
        ],
        'gtceu:naquadria_awakened 72',
        tiers['UIV'],
        20,
        stages[3]
    )
    

});
