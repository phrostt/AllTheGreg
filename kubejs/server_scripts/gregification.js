ServerEvents.recipes(allthemods => {
    
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