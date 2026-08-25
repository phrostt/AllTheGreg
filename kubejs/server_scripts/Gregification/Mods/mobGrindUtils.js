ServerEvents.recipes(allthemods => {
	const addAssembler = (itemsIn, fluidIn, itemsOut, eu, duration) => {		
		
		const outputID = itemsOut.replace(/[^a-z0-9]/gi, '_');		
		let recipe = allthemods.recipes.gtceu.assembler(`allthemods:assembler/${outputID}`)
			.itemInputs(itemsIn)
			.itemOutputs(itemsOut)
			.duration(duration)
			.EUt(eu);		
		if (fluidIn) { 
			recipe.inputFluids(fluidIn); 
		}
	};
	
    // --- MOB GRINDING UTILS ---    
    addAssembler(
        [
            'gtceu:hv_machine_casing',
            '4x gtceu:stainless_steel_buzz_saw_blade',
            '2x gtceu:hv_electric_motor',
            '2x #gtceu:circuits/hv'
        ],
        '#forge:lubricant 1000', 
        'mob_grinding_utils:saw',         
        512, // HV Tier
        1200  // 60 Seconds
    );
	
	addAssembler(
        [
            'gtceu:mv_machine_casing',
            '4x #forge:plates/manasteel',                        
            'botania:rune_mana',
			'occultism:spirit_attuned_gem',
			'ars_nouveau:source_gem',
            'bloodmagic:reinforcedslate',
            '#forge:ingots/deorum'
        ],
        'gtceu:soldering_alloy 144',
        'gtceu:magical_bio_composite',
        128, // MV Voltage
        600  // 30 Seconds
    );
	
})