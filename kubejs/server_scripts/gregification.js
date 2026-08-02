ServerEvents.recipes(allthemods => {
    allthemods.shaped('gtceu:water_filtration_plant', [
		'FCF',
		'PHP',
		'FCF'
	],
    {
        P: 'gtceu:hv_electric_pump', // pump
        F: 'gtceu:stainless_steel_normal_fluid_pipe', // pipe
        H: 'gtceu:hv_machine_hall', // machine hall
        C: '#gtceu:circuits/hv' // circuit
    }).id('gtceu:shaped/water_filtration_plant')
});