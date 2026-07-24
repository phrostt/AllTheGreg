ServerEvents.recipes(allthemods => {

    allthemods.recipes.gtceu.distillery('refine_seed_oil')
        .inputFluids('#forge:seed_oil 100')
        .outputFluids('gtceu:refined_seed_oil 100')
        .circuit(1)
        .duration(600)
        .EUt(2048);
        
    allthemods.recipes.gtceu.cracker('steam_crack_kerosene')
        .inputFluids(
            [
                '#forge:kerosene 1000',
                '#forge:steam 1000'
            ])
        .outputFluids('gtceu:gt_cracked_kerosene 1000')
        .duration(120)
        .EUt(512);

    allthemods.recipes.gtceu.cracker('steam_crack_lpg')
        .inputFluids(
            [
                '#forge:lpg 1000',
                '#forge:steam 1000'
            ])
        .outputFluids('gtceu:gt_cracked_lpg 1000')
        .duration(120)
        .EUt(512);


    allthemods.recipes.gtceu.distillation_tower('cracker_lpg')
        .inputFluids('gtceu:gt_cracked_lpg 1000')
        .outputFluids([
            'gtceu:ethylene 500',
            'gtceu:propene 400',
            'gtceu:butene 200',
            'gtceu:benzene 150',
            'gtceu:hydrogen 150'
        ])
        .duration(160)
        .EUt(512);

    allthemods.recipes.gtceu.distillation_tower('cracker_kerosene')
        .inputFluids('gtceu:gt_cracked_kerosene 1000')
        .outputFluids([
            'gtceu:ethylene 450',
            'gtceu:propene 350',
            'gtceu:hydrogen 200'
        ])
        .duration(160)
        .EUt(512);
});