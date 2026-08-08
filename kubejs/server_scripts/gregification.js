ServerEvents.recipes(allthemods => {
    allthemods.shaped('gtceu:water_filtration_plant', [
		'FRF',
		'PHP',
		'FCF'
	], {
        P: 'gtceu:hv_electric_pump', // Pump
        F: 'gtceu:stainless_steel_normal_fluid_pipe', // pipe
        H: 'gtceu:hv_machine_hull', // Machine hall
        C: '#gtceu:circuits/hv', // Circuit
		R: "gtceu:stainless_steel_rotor" // Rotor
    }).id('gtceu:shaped/water_filtration_plant')

	allthemods.shaped('gtceu:ozonation_plant', [
		'FRF',
		'PHP',
		'FCF'
	], {
		P: "gtceu:ev_electric_pump",
		F: "gtceu:titanium_normal_fluid_pipe",
		H: "gtceu:ev_machine_casing",
		C: "#gtceu:circuits/ev",
		R: "gtceu:titanium_rotor"
	}).id("gtceu:shaped/ozonation_plant")

	allthemods.shaped('gtceu:flocculation_plant', [
		'FRF',
		'PHP',
		'FCF'
	], {
		P: "gtceu:ev_electric_pump",
		F: "gtceu:tungsten_steel_normal_fluid_pipe",
		H: "gtceu:ev_machine_casing",
		C: "#gtceu:circuits/iv",
		R: "gtceu:titanium_rotor"
	}).id("gtceu:shaped/flocculation_plant")
    
	allthemods.shaped('gtceu:laser_purification', [
		'PEP',
		'WHW',
		'CWC'
	], {
		P: "gtceu:uv_electric_piston",
		W: 'gtceu:naquadah_alloy_single_cable',
		H: "gtceu:uv_machine_casing",
		C: "#gtceu:circuits/iv",
		E: "gtceu:uv_emitter"
	}).id("gtceu:shaped/laser_purification")

	allthemods.shaped('gtceu:element_fire', [
		' E ',
		'EBE',
		' E '
	], {
		// We use .weakNBT() so it doesn't matter if the energy levels don't match exactly
		E: 'gtceu:elemental_fire_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_fire');

    allthemods.shaped('gtceu:element_water', [
		' E ',
		'EBE',
		' E '
	], {
		// We use .weakNBT() so it doesn't matter if the energy levels don't match exactly
		E: 'gtceu:elemental_water_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_water');

    allthemods.shaped('gtceu:element_air', [
		' E ',
		'EBE',
		' E '
	], {
		// We use .weakNBT() so it doesn't matter if the energy levels don't match exactly
		E: 'gtceu:elemental_air_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_air');

    allthemods.shaped('gtceu:element_earth', [
		' E ',
		'EBE',
		' E '
	], {
		// We use .weakNBT() so it doesn't matter if the energy levels don't match exactly
		E: 'gtceu:elemental_earth_singularity',
		B: 'gtceu:element_blank'
	}).id('gregification:element_earth');
});