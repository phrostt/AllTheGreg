//@ts-check
ServerEvents.recipes(allthemods => {

    
    const replaceShaped = (recipeID, itemID, schema, ingredients) => {
        allthemods.remove({ id: recipeID });
        // @ts-ignore
        allthemods.shaped(itemID || recipeID, schema, ingredients).id(recipeID);

    };
    
    //basic capacitor
    replaceShaped("enderio:basic_capacitor",null,
        ['PCP',
         'RGR',
         'PCP'],
        {P: '#forge:plates/conductive_alloy',
         C: '#gtceu:circuits/iv',
         G: 'enderio:grains_of_infinity',
         R: 'gtceu:ram_chip'
        }
    );

    //double layer capacitor
    replaceShaped("enderio:double_layer_capacitor",null,
        ['PCP',
         'RGR',
         'PCP'],
        {P: '#forge:plates/energetic_alloy',
         C: 'enderio:basic_capacitor',
         G: 'enderio:grains_of_infinity',
         R: 'gtceu:ram_chip'
        }
    );

    //octadic capacitor
    replaceShaped("enderio:octadic_capacitor",null,
        ['PCP',
         'RGR',
         'PCP'],
        {P: '#forge:plates/vibrant_alloy',
         C: 'enderio:octadic_capacitor',
         G: 'enderio:grains_of_infinity',
         R: 'gtceu:ram_chip'
        }
    );

    //void chasis
    replaceShaped("enderio:void_chassis",null,
        ['RPS',
         'PGP',
         'SPR'],
        {P: '#forge:plates/tungsten_steel',
         S: 'gtceu:iv_electric_piston',
         G: '#forge:frames/hellforged',
         R: '#forge:gears/draconium'
        }
    );

    //ensouled chasis
    replaceShaped("enderio:ensouled_chassis",null,
        ['RPS',
         'PGP',
         'SPR'],
        {P: '#forge:plates/tungsten_steel',
         S: 'gtceu:iv_electric_piston',
         G: '#forge:frames/soularium',
         R: '#forge:gears/terrasteel'
        }
    );

    
    allthemods.recipes.gtceu.autoclave('gregification:autoclave/pulsating_crystal')
        .itemInputs("gtceu:exquisite_diamond_gem")
        .inputFluids("gtceu:pulsating_alloy 1000")
        .itemOutputs('enderio:pulsating_crystal')
        .duration(600)
        .EUt(8192);
        
    allthemods.recipes.gtceu.autoclave('gregification:autoclave/vibrant_crystal')
        .itemInputs("gtceu:exquisite_emerald_gem")
        .inputFluids("gtceu:pulsating_alloy 1000")
        .itemOutputs('enderio:vibrant_crystal')
        .duration(600)
        .EUt(8192);
});