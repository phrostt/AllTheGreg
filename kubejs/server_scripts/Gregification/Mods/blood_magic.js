const runePairs = [
    ['speed', 'speed'],
    ['sacrifice', 'sac'],
    ['selfsacrifice', 'self_sac'],
    ['dislocation', 'displacement'],
    ['altarcapacity', 'capacity'],
    ['bettercapacity', 'aug_capacity'],
    ['orbcapacity', 'orb'],
    ['acceleration', 'acceleration'],
    ['charging', 'charging']
];
const basicPairs = [
    ['speed', 'speed'],
    ['sacrifice', 'sacrifice'],
    ['selfsacrifice', 'self_sacrifice'],
    ['dislocation', 'displacement'],
    ['altarcapacity', 'capacity'],
    ['orbcapacity', 'orb'],
    ['acceleration', 'acceleration'],
    ['charging', 'charging'],
    ['bettercapacity', 'aug_capacity']
];

ServerEvents.recipes(allthemods => {

    

    allthemods.shaped('gtceu:rune_casing', [
        'NCN',
        'CTC',
        'NCN'
    ], {
        N: '#forge:plates/manasteel',
        C: 'pneumaticcraft:compressed_stone',
        T: 'bloodmagic:blankslate'
    }).id('gtceu:rune_casing');

    allthemods.shaped('bloodmagic:blankrune', [
        'NCN',
        'BTB',
        'NCN'
    ], {
        B: '#forge:plates/gold',
        C: 'elementalcraft:contained_crystal',
        N: '#forge:plates/compressed_iron',
        T: 'gtceu:rune_casing'
    }).id('gtceu:blank_rune');


    runePairs.forEach(([rName, rID]) => {

        // @ts-ignore
        allthemods.remove({ id: `bloodmagic:blood_rune_${rID}_2` });
        allthemods.shaped(`bloodmagic:${rName}rune2`, [
            'NPN',
            'CTC',
            'NBN'
        ], {
            N: 'minecraft:netherite_scrap',
            P: 'bloodmagic:hellforgedparts',
            B: 'bloodmagic:etherealslate',
            T: 'gtceu:reinforced_rune_casing',
            C: `bloodmagic:${rName}rune`
        }).id(`bloodmagic:blood_rune_${rID}_2`);
    });
    // Rune casing 
    const bloodAltar = (event, input, output, altarTier, syphon, consumption, drain) => {
        allthemods.custom({
            "type": "bloodmagic:altar",
            "input": { "item": input },
            "output": { "item": output },
            "upgradeLevel": altarTier,
            "altarSyphon": syphon,
            "consumptionRate": consumption,
            "drainRate": drain
        }).id(`allthemods:bloodmagic/altar/${output.replace(':', '/')}`);
    };
    const addAssembler = (itemsIn, fluidIn, itemsOut, eu, duration, program) => {

        const outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');
        let recipe = allthemods.recipes.gtceu.assembler(`gregification:assembler/${outputID}`)
            .itemInputs(itemsIn)
            .itemOutputs(itemsOut)
            .duration(duration)
            .EUt(eu);
        if (fluidIn) {
            recipe.inputFluids(fluidIn);
        }
        if (program) {
            recipe.circuit(program);
        }
    };


    basicPairs.forEach(([rName, rID], index) => {

        // @ts-ignore
        allthemods.remove({ id: `bloodmagic:blood_rune_${rID}` });
        addAssembler(
            ['bloodmagic:blankrune', 'botania:rune_mana', 'occultism:spirit_attuned_gem', 'evilcraft:dark_gem', '#forge:frames/steel'],
            'gtceu:sanguine_concentrate 2500',
            `bloodmagic:${rName}rune`,
            32,
            30,
            index + 1)

    });
    
    
    bloodAltar(allthemods, 'gtceu:blank_slate_casing', 'bloodmagic:blankslate', 0, 1000, 5, 5)

        
})