// @ts-nocheck
const kevlarFluids = [
    // --- Aniline branch ---
    { name: 'aniline', components: '1x nitrobenzene, 3x hydrogen', color: 0xC9A876, iconSet: 'FLUID', formula: 'C6H5NH2' },
    //{ name: 'acetic_anhydride', color: 0xD8C8A0, iconSet: 'FLUID', formula: '(CH3CO)2O' },
    { name: 'nitroaniline', components: '1x aniline, 1x nitration_mixture', color: 0xE0B840, iconSet: 'FLUID', formula: 'C6H6N2O2' },
    //{ name: 'nitration_mixture', components: '1x sulfuric_acid, 1x nitric_acid', color: 0xF0E060, iconSet: 'FLUID', noDecomp: true },
    { name: 'para_phenylenediamine', dust: true, components: '1x nitroaniline, 3x hydrogen', color: 0xB89060, iconSet: 'FLUID', formula: 'C6H8N2' },

    // --- Terephthaloyl Chloride branch ---
    { name: 'p_xylene', color: 0xEBD078, iconSet: 'FLUID', formula: 'C8H10' }, // isolated from your existing xylene via isomerization step
    { name: 'cobalt_naphthenate', color: 0x6E5A30, iconSet: 'FLUID', noDecomp: true }, // catalyst
    { name: 'terephthalic_acid', components: '1x p_xylene, 3x oxygen', color: 0xF0F0E8, iconSet: 'FLUID', formula: 'C8H6O4' },
    { name: 'dimethyl_terephthalate', components: '1x terephthalic_acid, 2x methanol', color: 0xE8E0C8, iconSet: 'FLUID', formula: 'C10H10O4' },
    { name: 'sulfur_dichloride', components: '1x sulfur, 2x chlorine', color: 0xC8A840, iconSet: 'FLUID', formula: 'SCl2' },
    { name: 'thionyl_chloride', components: '1x sulfur_trioxide, 1x sulfur_dichloride', color: 0xE8D8A0, iconSet: 'FLUID', formula: 'SOCl2', noDecomp: true },
    { name: 'terephthaloyl_chloride', dust: true, components: '1x dimethyl_terephthalate, 1x thionyl_chloride', color: 0xD8D0C0, iconSet: 'FLUID', formula: 'C8H4Cl2O2', noDecomp: true },

    // --- NMP solvent branch ---
    { name: 'methylamine', components: '1x ammonia', color: 0xE0E0D0, iconSet: 'FLUID', formula: 'CH5N' },
    { name: 'gamma_butyrolactone', color: 0xEEE8D0, iconSet: 'FLUID', formula: 'C4H6O2' },
    { name: 'n_methylpyrrolidone', components: '1x methylamine, 1x gamma_butyrolactone', color: 0xF5EED8, iconSet: 'FLUID', formula: 'C5H9NO' },

    // --- Final polymer ---
    { name: 'liquid_crystal_kevlar', components: '1x para_phenylenediamine, 1x terephthaloyl_chloride', color: 0xC8A030, iconSet: 'FLUID', noDecomp: true },

    // --- Polyurethane Resin branch ---
    { name: 'diaminodiphenylmethane', components: '1x aniline, 1x formaldehyde', color: 0xC8B090, iconSet: 'FLUID', noDecomp: true }, // MDA
    { name: 'phosgene', components: '1x carbon_monoxide, 1x chlorine', color: 0xC0C8C0, iconSet: 'FLUID', formula: 'COCl2', noDecomp: true },
    { name: 'diphenylmethane_diisocyanate', dust: true, components: '1x diaminodiphenylmethane, 1x phosgene', color: 0xD0C8B8, iconSet: 'FLUID', noDecomp: true }, // MDI    
    { name: 'ethylene_glycol', components: '1x ethylene, 2x oxygen, 2x hydrogen', color: 0xEEE0C0, iconSet: 'FLUID', formula: 'C2H6O2' },
    { name: 'pentaerythritol', dust: true, components: '4x formaldehyde', color: 0xF8F8F0, iconSet: 'DULL', formula: 'C5H12O4' },
    { name: 'kevlar_catalyst', dust: true, color: 0x707888, iconSet: 'DULL', noDecomp: true }, // abstracted catalyst, flavor material
    { name: 'polyurethane_resin', components: '1x diphenylmethane_diisocyanate, 1x ethylene_glycol', color: 0xB09850, iconSet: 'FLUID', noDecomp: true },
    { name: 'maleic_anhydride', components: '1x benzene, 3x oxygen', color: 0xE8D040, iconSet: 'FLUID', formula: 'C4H2O3', noDecomp: true },
    { name: 'butanol', color: 0xEBDCA0, iconSet: 'FLUID', formula: 'C4H9OH' }
];

GTCEuStartupEvents.registry('gtceu:material', event => {
    kevlarFluids.forEach(mat => {
        const materialBuilder = event.create(mat.name)        
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet || GTMaterialIconSet.FLUID]);
        if (mat.components) {
            materialBuilder.components(mat.components.split(', '));
        }
        if (mat.formula) { materialBuilder.formula(mat.formula); }        
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION); }
        if (mat.dust) { materialBuilder.dust(); }
    });
    
    let materialBuilder = event.create('kevlar_carbon_fiber_mesh')        
        .color(0x8A7A46)
        .gem()        
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .iconSet(GTMaterialIconSet.DULL);
});