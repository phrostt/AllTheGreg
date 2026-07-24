StartupEvents.registry('item', event => {

	const oreChunk = (id, iTexture, iColor) => {	
		event.create(`${id}_chunk`)			
			.displayName(`${id.charAt(0).toUpperCase() + id.slice(1)} Chunk`)
			//.glow(true) 			
			.tooltip(`§7A concentrated chunk of ${id} ore.`) 
			.texture('layer0', 'thermal_extra:item/iron_ore_chunk')
			//.texture('layer1', iTexture)
			.color(0, iColor)
	}

	oreChunk('demonite',		'bloodmagic:item/rawdemonite', 			0x7BA4B1)
	oreChunk('iesnium',			'occultism:item/raw_iesnium', 			0x7FA9C1)
	oreChunk('allthemodium',	'allthemodium:item/allthemodium_ingot',	0xF9D71C)
	oreChunk('vibranium', 		'allthemodium:item/vibranium_ingot', 	0x51FF00)
	oreChunk('unobtainium', 	'allthemodium:item/unobtainium_ingot', 	0x8C00FF)



    event.create('cosmic_void')
        .texture('kubejs:item/micro_universe_catalyst') 
        .displayName('Cosmic Void')
        .tooltip('Made from primordial cosmic soup')		
		
		
	event.create('life_essence')
		.texture('layer0', 'forbidden_arcanus:item/soul')
		.color(0, 0xFF69B4) // Tinted to your Stable Life Essence pink
		.texture('layer1', 'bloodmagic:item/archmagebloodorb')		
		.rarity('EPIC')
		.displayName('Life Essence')
		.tooltip('The distilled power of a Master, stabilized and refined.')
		.glow(true); // Gives it that high-tier magical pulse


	event.create('quantum_sentient_circuit')        
        .texture('layer0', 'pneumaticcraft:item/printed_circuit_board')
        .texture('layer1', 'advanced_ae:item/quantum_storage_component')
        .color(1, 0x00FFFF)                 
		.rarity('EPIC')
        .displayName('Quantum Sentient Circuit')
        .tooltip('The pinnacle of GregTech and Magical integration.')		
        .glow(true);
		
	event.create('entropy_manifold')
        .displayName('The Entropy Manifold')        
        .glow(true)
        .rarity('EPIC')
        .tooltip('§7A volatile union of infinite energy and abyssal sorrow.')        
		.parentModel('minecraft:item/generated')
        .texture('layer0', 'ironjetpacks:item/capacitor') // Updated ID here
        .color(0, 0xD455FF) 
        .texture('layer1', 'evilcraft:item/corrupted_tear')
		
	/*event.create('mana_essence')
        .texture('minecraft:item/heart_of_the_sea')
        .color(0, 0x0099FF)
        .displayName('Mana Essence')        
        .glow(true)        
        .tooltip('§7A concentrated orb of pure magical energy.');
	*/	
	event.create('gtceu:blank_slate_casing')
        .displayName('Blank Slate Casing')
        .texture('bloodmagic:item/blankslate')
		.color(0, 0x660000) 		
		.tooltip('§7Blood soaked slate ready for imbuing.');

    event.create('gtceu:crystallized_seed')
        .texture('minecraft:item/pumpkin_seeds')
        .color(0, 0xFFFFFF) // White
        .displayName('Crystallized Seed')
        .glow(true)

    event.create('gtceu:empowered_seed')
        .texture('minecraft:item/pumpkin_seeds')
        .color(0, 0xFFA500) // Orange
        .displayName('Empowered Seed')
        .glow(true)

        
})
ItemEvents.modification(event => {
    event.modify('forestry:bee_drone_ge', item => { 
        item.burnTime = 800
    })
})

