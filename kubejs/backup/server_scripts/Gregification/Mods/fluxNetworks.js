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
	
	//flux casing
	addAssembler(
    [
        'gtceu:iv_machine_casing',
		'#forge:frames/enderium',
        '4x #forge:plates/draconium',
		'4x #forge:rods/hop_graphite',
		'4x #forge:screws/end_steel',
        'gtceu:iv_field_generator',
		'bloodmagic:demonslate'
    ],
    'gtceu:polytetrafluoroethylene 576',
    'gtceu:flux_casing',
    8192,
    800
	);

	// 2. Flux Controller (The Network Brain)	
	addAssembler(
		[
			'gtceu:flux_casing',
			'gtceu:computer_monitor_cover',
			'4x fluxnetworks:flux_core',
			'2x #gtceu:circuits/iv',			
			'4x #forge:plates/draconium',		
			'#forge:frames/hop_graphite'
			
		],
		'gtceu:soldering_alloy 288',
		'fluxnetworks:flux_controller',
		8192,
		600
	);

	// 3. Flux Plug (Input: Generator -> Network)		
	addAssembler(
		[
			'gtceu:flux_casing',
			'2x fluxnetworks:flux_core',
			'gtceu:iv_sensor',
			'2x #forge:plates/enderium',
			'4x #forge:screws/draconium'
			
		],
		'gtceu:polytetrafluoroethylene 144',
		'fluxnetworks:flux_plug',
		8192,
		300
	);

	// 4. Flux Point (Output: Network -> Machine)		
	addAssembler(
		[
			'gtceu:flux_casing',
			'2x fluxnetworks:flux_core',
			'gtceu:iv_emitter',
			'2x #forge:plates/enderium',
			'4x #forge:screws/draconium'
		],
		'gtceu:polytetrafluoroethylene 144',
		'fluxnetworks:flux_point',
		8192,
		300
	);
		
	//flux storage
	addAssembler(
		[
			'gtceu:flux_casing',
			'4x fluxnetworks:flux_core',
			'2x #gtceu:batteries/ev',
			'4x botania:bifrost_perm'
		],
		'gtceu:polytetrafluoroethylene 144',
		'fluxnetworks:basic_flux_storage',
		8192,
		200
	);
})