ServerEvents.recipes(allthemods => {
    allthemods.shaped ('gtceu:eldritch_cloth', 
        ['ABC',
         'DZE',
         'FGH'],
        {
            A: 'botania:manaweave_cloth',
            B: 'forbidden_arcanus:cloth',
            C: 'irons_spellbooks:magic_cloth',
            D: 'tconstruct:silky_cloth',
            E: 'eidolon:tattered_cloth',
            F: 'reliquary:crimson_cloth',
            G: 'apotheosis:uncommon_material',
            H: 'thermal:hazmat_fabric',
            Z: '#forge:exquisite_gems/demon'
        }
    ).id('gregification:eldritch_cloth');
});