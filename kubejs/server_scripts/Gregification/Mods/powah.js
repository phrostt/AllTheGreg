ServerEvents.recipes(allthemods => {
	   
    //dielectric rod
    allthemods.shaped('8x powah:dielectric_rod', [
        'PBP', 
        'PBP', 
        'PBP'  
    ], {
        P: 'powah:dielectric_paste',
        B: '#forge:plates/end_steel'
    });
	
	//dielectric rod
    allthemods.shaped('8x powah:dielectric_rod_horizontal', [
        'PPP', 
        'BBB', 
        'PPP'  
    ], {
        P: 'powah:dielectric_paste',
        B: '#forge:plates/end_steel'
    });
	
    //industrial energizer
	allthemods.shaped('gtceu:industrial_energizer', [
		'WCW',
		'OHO',
		'WCW'
	], {
		H: 'gtceu:iv_machine_hull',
        O: 'gtceu:iv_voltage_coil',
        C: '#gtceu:circuits/iv',
        W: 'gtceu:enderium_quadruple_wire'
	}).id('gregification:powah/industrial_energizer')
})