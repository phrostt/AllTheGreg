ServerEvents.recipes(allthemods => {
    allthemods.recipes.gtceu.centrifuge('terraria_dust')
        .itemInputs('#forge:dusts/sanguine_terraria')
        .itemOutputs('gtceu:terrasteel_dust')
        .chancedOutput('gtceu:elementium_dust', 500, 250)
        .chancedOutput('gtceu:manasteel_dust', 1000, 250)
        .chancedOutput('gtceu:gaia_dust', 100, 250)
        .duration(600)
        .EUt(2048);
});