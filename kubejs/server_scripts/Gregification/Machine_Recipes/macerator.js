ServerEvents.recipes(allthemods => {
        const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
        allthemods.recipes.gtceu.macerator('recycle_steel_boiler')
                .itemInputs('railcraft:high_pressure_steam_boiler_tank')
                .itemOutputs('2x alltheores:steel_dust')
                .duration(20)
                .EUt(LV);

        allthemods.recipes.gtceu.macerator('macerate_thermal_sulfur')
                .itemInputs('thermal:sulfur')
                .itemOutputs('gtceu:sulfur_dust')
                .duration(80)
                .EUt(LV);
        
        allthemods.recipes.gtceu.macerator('wheat_to_seed')
                .itemInputs('#forge:crops/wheat')
                .itemOutputs('minecraft:wheat_seeds')
                .duration(80)
                .EUt(LV)
                //.circuit(1)
                .chancedOutput('minecraft:wheat_seeds', 500, 500)
                .chancedOutput('2x minecraft:wheat_seeds', 500, 250)
                .chancedOutput('4x minecraft:wheat_seeds', 100, 100);
        
        allthemods.recipes.gtceu.macerator('wheat_to_flour')
                .itemInputs('#forge:crops/wheat')
                .itemOutputs('gtceu:wheat_dust')
                .duration(80)
                .EUt(LV)
                .circuit(1);

        allthemods.recipes.gtceu.macerator('arcane_crystal_dust')
                .itemInputs('forbidden_arcanus:arcane_crystal')
                .itemOutputs('2x forbidden_arcanus:arcane_crystal_dust')
                .duration(100)
                .EUt(MV);
        
        allthemods.recipes.gtceu.macerator('thorn_rose_dust')
                .itemInputs('twilightforest:thorn_rose')
                .itemOutputs('gtceu:thorn_rose_dust')
                .duration(800)
                .EUt(UV);
                
});