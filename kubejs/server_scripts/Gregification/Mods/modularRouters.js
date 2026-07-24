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
	
	//router casing
	addAssembler(
    [        
        '4x #forge:plates/pulsating_alloy',
		'4x #forge:plates/enderium',
		'gtceu:ev_emitter',
        'gtceu:ev_sensor',
		'8x #forge:screws/terrasteel',
		'8x #forge:screws/iesnium',
		'2x #forge:rods/hellforged'
    ],
    'gtceu:polytetrafluoroethylene 144',     
    'gtceu:router_casing',
    2048,                                    
    600
	);
	
	//modular router	
	addAssembler(
		[
			'gtceu:router_casing',
			'gtceu:ev_machine_casing',           
			'4x #forge:plates/titanium',         
			'2x gtceu:ev_electric_motor',
			'gtceu:ev_field_generator'	
		],
		'gtceu:polytetrafluoroethylene 144',     
		'modularrouters:modular_router',
		2048,                                    
		600
	);
	
	
})