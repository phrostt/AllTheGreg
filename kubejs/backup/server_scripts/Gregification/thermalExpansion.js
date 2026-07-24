//@ts-check
const rodMetals = ['iron', 'gold', 'copper', 'tin', 'lead', 'silver', 'nickel', 'aluminum', 'zinc', 'osmium', 'steel', 'brass' ];
const rodMetalsATM = [ 'allthemodium', 'vibranium', 'unobtainium' ];

ServerEvents.recipes(allthemods => {


    const replaceShaped = (recipeID, itemID, schema, ingredients) => {
        
        // @ts-ignore
        allthemods.shaped(itemID || recipeID, schema, ingredients).id(recipeID);

    }

    const addCentrifugeChanced = (itemsIn, fluidIn, itemsOut, chancedItems, fluidOut, eu, duration, ID) => {
        // Generate a base ID using the first item of the guaranteed outputs
        const baseName = itemsOut.length > 0 ? itemsOut[0].split(':')[1] : 'processing';
        //const outputID = baseName.replace(/[^a-z0-9]/gi, '_');
        
        let recipe = allthemods.recipes.gtceu.centrifuge(`allthemods:centrifuge/${ID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);

        // Add chanced outputs: [item, chance, bonusChance]
        chancedItems.forEach(chanced => {
            recipe.chancedOutput(chanced[0], chanced[1], chanced[2] || 0);
        });

        if (fluidIn) {
            recipe.inputFluids(fluidIn);
        }
        if (fluidOut) {
            recipe.outputFluids(fluidOut);
        }
    };
        	
	rodMetals.forEach(metal => {
        allthemods.custom({
            "type": "thermal:press",
            "ingredients": [
                { "tag": `forge:ingots/${metal}` },
                { "item": "thermal_extra:press_rod_die" } 
            ],
            "result": [
                { "item": `alltheores:${metal}_rod` }
            ],
            "energy": 6000
        }).id(`gregification:thermal/press/${metal}_rod`);
    });
    
    rodMetalsATM.forEach(metal => {
        allthemods.custom({
            "type": "thermal:press",
            "ingredients": [
                { "tag": `forge:ingots/${metal}` },
                { "item": "thermal_extra:press_rod_die" } 
            ],
            "result": [
                { "item": `allthemodium:${metal}_rod` }
            ],
            "energy": 6000
        }).id(`gregification:thermal/press/${metal}_rod`);
    });

    addCentrifugeChanced(
        ['4x thermal:oil_sand'],      // Guaranteed Input
        null,                              // Fluid In
        [],          // Guaranteed Output
        [
            ['minecraft:sand', 8500], // 85% chance (in basis points)
            ['gtceu:sulfur_dust', 1000, 500], // 10% base, 5% bonus
            ['minecraft:gunpowder', 1000, 500], // 10% base, 5% bonus
            ['thermal:bitumen', 1000, 500], // 10% base, 5% bonus
            ['gtceu:carbon_dust', 1000, 500], // 10% base, 5% bonus
        ],
        'gtceu:oil 1000',                              // Fluid Out
        128,                                // EUt
        1200,                                // duration
        'bituminous_sand_processing'
    );

    //rf coil
    replaceShaped("thermal:rf_coil", null, 
        ['ROR',
         'PHP',
         'ROR'],
        {
            R: "#forge:plates/redstone",
            O: "#forge:rods/tungsten_steel",
            P: "#forge:plates/plastic",
            H: "gtceu:hpic_chip"
        }
    );
    
    //redstone servo
    replaceShaped("thermal:redstone_servo", null,
        ['RPR',
         'SMS',
         'RPR'],
        {
            P: "gtceu:iv_electric_piston",
            M: "gtceu:iv_electric_motor",
            R: "#forge:plates/redstone",
            S: "#forge:plates/plastic"
        }
    );
    
});