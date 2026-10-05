ServerEvents.recipes(allthemods => {
    const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
    allthemods.recipes.gtceu.centrifuge('terraria_dust')
        .itemInputs('#forge:dusts/sanguine_terraria')
        .itemOutputs('gtceu:terrasteel_dust')
        .chancedOutput('gtceu:elementium_dust', 500, 250)
        .chancedOutput('gtceu:manasteel_dust', 1000, 250)
        .chancedOutput('gtceu:gaia_dust', 100, 250)
        .duration(600)
        .EUt(EV);

    allthemods.recipes.gtceu.centrifuge('gregification:centrifuge/insanite_dust')
        .itemInputs('#forge:dusts/insanite')        
        .chancedOutput('#forge:dusts/rare_earth', 1000, 250)
        .chancedOutput('#forge:dusts/uranium_235', 1000, 250)
        .chancedOutput('#forge:dusts/lanthanum', 250, 250)
        .chancedOutput('#forge:dusts/lutetium', 250, 250)
        .chancedOutput('#forge:dusts/yttrium', 250, 250)
        .chancedOutput('#forge:dusts/samarium', 250, 250)
        .duration(600)
        .EUt(ZPM);
});