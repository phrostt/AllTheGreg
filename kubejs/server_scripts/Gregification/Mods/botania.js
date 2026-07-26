ServerEvents.recipes(allthemods => {
    const stage1 = 'gtceu:water_stage_1'
    const stage2 = 'gtceu:water_stage_2'
    const stage3 = 'gtceu:water_stage_3'
    const stage4 = 'gtceu:water_stage_4'

    allthemods.recipes.gtceu.mana_converter('eu_to_source')
        .inputFluids(`${stage1} 200}`)
        .outputFluids('gtceu:source 200')
        .addData('ebf_temp', 3600)
        .circuit(2)
        .duration(100)
        .EUt(128);

    allthemods.recipes.gtceu.mana_converter('eu_to_liquid_mana')
        .inputFluids(`${stage1} 1280}`)
        .outputFluids('gtceu:mana_essence 1280')
        .addData('ebf_temp', 3600)
        .circuit(1)
        .duration(100)
        .EUt(128);
        
    allthemods.recipes.gtceu.mana_burner('coal_to_liquid_mana')
        .itemInputs('#minecraft:coals')
        .outputFluids('gtceu:mana_essence 1200')
        .inputFluids(`${stage1} 1200}`)
        .addData('ebf_temp', 3600)
        .circuit(1)
        .duration(1600)
        //.EUt(-512);
            

    allthemods.recipes.gtceu.mana_burner('coal_to_source')
        .itemInputs('#minecraft:coals')
        .inputFluids(`${stage1} 200}`)
        .outputFluids('gtceu:source 200')
        .addData('ebf_temp', 3600)
        .circuit(2)
        .duration(1600)
        //.EUt(-512); // Generates HV tier power out

    allthemods.recipes.gtceu.mana_burner('cake_to_liquid_mana')
        .itemInputs('minecraft:cake')
        .inputFluids(`${stage1} 10800}`)
        .outputFluids('gtceu:mana_essence 10800')
        .circuit(1)
        .duration(14400)
        //.EUt(-16);
    
    allthemods.recipes.gtceu.mana_burner('cake_to_source')
        .itemInputs('minecraft:cake')
        .inputFluids(`${stage1} 1800}`)
        .outputFluids('gtceu:source 1800')
        .circuit(2)
        .duration(14400)
        //.EUt(-16);

    allthemods.recipes.gtceu.mana_burner('lava_to_liquid_mana')
        .inputFluids('minecraft:lava 1000')
        .inputFluids(`${stage1} 320}`)
        .outputFluids('gtceu:mana_essence 320')
        .circuit(1)
        .duration(400)
        //.EUt(-16);

    allthemods.recipes.gtceu.mana_burner('lava_to_source')
        .inputFluids('minecraft:lava 1000')
        .inputFluids(`${stage1} 50}`)
        .outputFluids('gtceu:source 50')
        .circuit(2)
        .duration(400)
        //.EUt(-16);

    const petalDuration = 300;
    const runicDuration = 600;
    const infusionDuration = 1200;

    const petalVoltage = 512;
    const runicVoltage = 2048;
    const infusionVoltage = 8192;

    //petal apothecary
    allthemods.forEachRecipe({ type: 'botania:petal_apothecary' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json);

        let inputItems = recipe.ingredients.map(ingredient => {
            if (ingredient.item) {
                return ingredient.item;
            } else if (ingredient.tag) {
                return '#' + ingredient.tag;
            }
            return null;
        }).filter(item => item != null);
        inputItems.push('#forge:seeds');

        let outputItem = recipe.output.item;
        let safeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');
        allthemods.recipes.gtceu.petal_apothecary(safeID)
            .itemInputs(inputItems)
            .itemOutputs(outputItem)
            .inputFluids(`${stage1} 1000}`)
            .duration(petalDuration)
            .EUt(petalVoltage);
    });

    //runic altar
     allthemods.forEachRecipe({ type: 'botania:runic_altar' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json);

        let inputItems = (recipe.ingredients || []).map(ingredient => {
            let actualIng = ingredient.ingredient || ingredient;
            if (actualIng.item) {
                return actualIng.item;
            } else if (actualIng.tag) {
                return '#' + actualIng.tag;
            }
            return null;
        }).filter(item => item != null);
        inputItems.push('botania:livingrock');

        // Properly parse output item and its count whether it uses 'output' or 'result'
        let outObj = recipe.output || recipe.result;
        let outputItem;
        if (outObj) {
            let count = outObj.count || 1;
            let itemName = outObj.item || outObj;
            outputItem = count > 1 ? `${count}x ${itemName}` : itemName;
        } else {
            outputItem = 'minecraft:air';
        }

        let outputItems = [outputItem];

        inputItems.forEach(input => {
            let cleanInput = input.startsWith('#') ? input.substring(1) : input;
            if (cleanInput.includes('rune')) {
                outputItems.push(input);
            }
        });
        let hasBee = inputItems.some(input => {
            let cleanInput = input.startsWith('#') ? input.substring(1) : input;
            return cleanInput.includes('bee');
        }) || outputItem.includes('bee');

        if (hasBee) return;

        let manaCost = recipe.mana ?? 5000;
        let safeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');

        allthemods.recipes.gtceu.runic_altar(safeID)
            .itemInputs(inputItems)
            .itemOutputs(outputItems)
            .inputFluids(`gtceu:mana_essence ${manaCost}`)
            .duration(runicDuration)
            .EUt(512);
    });

    //mana infuser
    allthemods.forEachRecipe({ type: 'botania:terra_plate' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json);

        let inputItems = (recipe.ingredients || []).map(ingredient => {
            let actualIng = ingredient.ingredient || ingredient;
            if (actualIng.item) {
                return actualIng.item;
            } else if (actualIng.tag) {
                return '#' + actualIng.tag;
            }
            return null;
        }).filter(item => item != null);

        
        // Safely parse output item and handle stack counts properly
        let outObj = recipe.result || recipe.output;
        let outputItem;
        if (outObj) {
            let count = outObj.count || 1;
            let itemName = outObj.item || outObj;
            outputItem = count > 1 ? `${count}x ${itemName}` : itemName;
        } else {
            outputItem = 'minecraft:air';
        }

        let hasBee = inputItems.some(input => {
            let cleanInput = input.startsWith('#') ? input.substring(1) : input;
            return cleanInput.includes('bee');
        }) || outputItem.includes('bee');

        if (hasBee) return;
        let safeID = rawRecipe.getId().toString().replace(/[^a-z0-9]/gi, '_');
        let manaCost = recipe.mana ?? 5000;
        
        allthemods.recipes.gtceu.mana_infuser(safeID)
            .itemInputs(inputItems)
            .itemOutputs(outputItem)
            .inputFluids(`gtceu:mana_essence ${manaCost}`)
            .duration(infusionDuration)
            .EUt(infusionVoltage);
    });
    
    const pureBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:pure"}}').strongNBT();
    const terraBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:terrasteel"}}').strongNBT();
    const manaBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:mana"}}').strongNBT();
    const elementiumBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:elementium"}}').strongNBT();
    const alfBee = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:alfsteel"}}').strongNBT();
    const manaSteel = Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:manasteel"}}').strongNBT();

    allthemods.recipes.gtceu.petal_apothecary('pure_bee')
        .itemInputs(['minecraft:bee_spawn_egg', '3x #botania:petals/white', 'productivebees:honey_treat', 'minecraft:bee_spawn_egg'])
        .itemOutputs(pureBee)
        .inputFluids(`${stage3} 10000}`)
        .duration(petalDuration)
        .EUt(petalVoltage);
    allthemods.recipes.gtceu.runic_altar('mana_bee')
        .itemInputs([pureBee, '4x botania:rune_mana', 'botania:livingrock'])
        .itemOutputs(manaBee)
        .inputFluids('gtceu:mana_essence 1000000')
        .duration(petalDuration)
        .EUt(runicVoltage);
    allthemods.recipes.gtceu.mana_infuser('terra_bee')
        .itemInputs([manaSteel, 'botania:mana_pearl', 'botania:mana_diamond'])
        .itemOutputs(terraBee)
        .inputFluids('gtceu:mana_essence 500000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);
    allthemods.recipes.gtceu.mana_infuser('alf_bee')
        .itemInputs([elementiumBee, 'botania:pixie_dust', 'botania:dragonstone'])
        .itemOutputs(alfBee)
        .inputFluids('gtceu:mana_essence 500000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);

    
    allthemods.recipes.gtceu.mana_infuser('unobtainium_allthemodium_alloy_block')
        .itemInputs ( ['#forge:storage_blocks/unobtainium', '#forge:storage_blocks/allthemodium', 'allthemodium:piglich_heart_block'])
        .itemOutputs( 'allthemodium:unobtainium_allthemodium_alloy_block')
        .inputFluids( 'gtceu:mana_essence 8100000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);      
    
    allthemods.recipes.gtceu.mana_infuser('unobtainium_vibranium_alloy_block')
        .itemInputs ( ['#forge:storage_blocks/unobtainium', '#forge:storage_blocks/vibranium', 'allthemodium:piglich_heart_block'])
        .itemOutputs( 'allthemodium:unobtainium_vibranium_alloy_block')
        .inputFluids( 'gtceu:mana_essence 8100000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);      
    
    allthemods.recipes.gtceu.mana_infuser('vibranium_allthemodium_alloy_block')
        .itemInputs ( ['#forge:storage_blocks/allthemodium', '#forge:storage_blocks/vibranium', 'allthemodium:piglich_heart_block'])
        .itemOutputs( 'allthemodium:vibranium_allthemodium_alloy_block')
        .inputFluids( 'gtceu:mana_essence 8100000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);      

    allthemods.recipes.gtceu.mana_infuser('unobtainium_vibranium_alloy_ingot')
        .itemInputs ( ['#forge:ingots/unobtainium', '#forge:ingots/vibranium', 'allthemodium:piglich_heart'])
        .itemOutputs( 'allthemodium:unobtainium_vibranium_alloy_ingot')
        .inputFluids( 'gtceu:mana_essence 1000000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);      
    
    allthemods.recipes.gtceu.mana_infuser('vibranium_allthemodium_alloy_ingot')
        .itemInputs ( ['#forge:ingots/vibranium', '#forge:ingots/allthemodium', 'allthemodium:piglich_heart'])
        .itemOutputs( 'allthemodium:vibranium_allthemodium_alloy_ingot')
        .inputFluids( 'gtceu:mana_essence 1000000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);      
    
    allthemods.recipes.gtceu.mana_infuser('unobtainium_allthemodium_alloy_ingot')
        .itemInputs ( ['#forge:ingots/unobtainium', '#forge:ingots/allthemodium', 'allthemodium:piglich_heart'])
        .itemOutputs( 'allthemodium:unobtainium_allthemodium_alloy_ingot')
        .inputFluids( 'gtceu:mana_essence 1000000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);      

    allthemods.recipes.gtceu.mana_infuser('mythicbotany:alfsteel_ingot')
        .itemInputs ( ['botania:elementium_ingot', 'botania:pixie_dust','botania:mana_pearl'])
        .itemOutputs( 'mythicbotany:alfsteel_ingot')
        .inputFluids( 'gtceu:mana_essence 1000000')
        .duration(infusionDuration)
        .EUt(infusionVoltage);   

});