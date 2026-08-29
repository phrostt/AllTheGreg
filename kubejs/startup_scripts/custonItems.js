StartupEvents.registry('item', event => {

	/*const oreChunk = (id, iTexture, iColor) => {	
		event.create(`${id}_chunk`)			
			.displayName(`${id.charAt(0).toUpperCase() + id.slice(1)} Chunk`)
			//.glow(true) 			
			.tooltip(`§7A concentrated chunk of ${id} ore.`) 
			.texture('layer0', 'thermal_extra:item/iron_ore_chunk')
			//.texture('layer1', iTexture)
			.color(0, iColor)
	}*/

	//oreChunk('demonite',		'bloodmagic:item/rawdemonite', 			0x7BA4B1)
	//oreChunk('iesnium',			'occultism:item/raw_iesnium', 			0x7FA9C1)
	//oreChunk('allthemodium',	'allthemodium:item/allthemodium_ingot',	0xF9D71C)
	//oreChunk('vibranium', 		'allthemodium:item/vibranium_ingot', 	0x51FF00)
	//oreChunk('unobtainium', 	'allthemodium:item/unobtainium_ingot', 	0x8C00FF)



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
		.color(0, 0xff4d4d)
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

    const quarks = [
        { name: 'up', description: '§cFundamental positive charge constituent.', rarity: 'extra_red' },
        { name: 'down', description: '§9Fundamental negative charge constituent.', rarity: 'extra_blue' },
        { name: 'top', description: '§bMassive, extremely short-lived particle.', rarity: 'blue' },
        { name: 'bottom', description: '§5Heavy, dense constituent.', rarity: 'dark_gray' },
        { name: 'strange', description: '§dExotic particle with high stability decay.', rarity: 'extra_dark_purple' },
        { name: 'charm', description: '§eLuminous second-generation quark.', rarity: 'gold' }
    ];

    event.create('gtceu:preon')
            .displayName('Preon')
            .rarity('ie_masterwork')

    event.create('gtceu:plutonic_quark')
            .displayName('Plutonic Quark')
            .rarity('ie_masterwork')

    quarks.forEach(quark => {
        event.create(`gtceu:${quark.name}_quark`)
            .displayName(`${quark.name.charAt(0).toUpperCase() + quark.name.slice(1)} Quark`)
            .rarity(quark.rarity)
            //.glow(true)
    })

    const elements = [
        {name: 'fire', description: '§cThe essence of flame and heat.', rarity: 'extra_red'},
        {name: 'water', description: '§9The essence of fluidity and life.', rarity: 'extra_blue'},
        {name: 'earth', description: '§aThe essence of stability and growth.', rarity: 'extra_green'},
        {name: 'air', description: '§fThe essence of freedom and movement.', rarity: 'white'},
        {name: 'blank', description: '§7The essence of nothingness.', rarity: 'dark_gray'}
    ]
    elements.forEach(element => {
        event.create(`gtceu:element_${element.name}`)
            .displayName(`${element.name.charAt(0).toUpperCase() + element.name.slice(1)} Element`)
            .rarity(element.rarity)
            .tooltip(element.description)
            //.glow(true)
    });

    event.create('gtceu:tier_1_rocket_schematic')
        .displayName('Tier 1 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0x3FA9A0)
        .rarity('COMMON')
        .tooltip('§7A schematic for a Tier 1 Rocket, capable of reaching the Moon.')

    event.create('gtceu:tier_2_rocket_schematic')
        .displayName('Tier 2 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0xC1502E)
        .rarity('UNCOMMON')
        .tooltip('§7A schematic for a Tier 2 Rocket, capable of reaching Mars.')

    event.create('gtceu:tier_3_rocket_schematic')
        .displayName('Tier 3 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0x8B2E2E)
        .rarity('RARE')
        .tooltip('§7A schematic for a Tier 3 Rocket, capable of reaching Venus and Mercury.')

    event.create('gtceu:tier_4_rocket_schematic')
        .displayName('Tier 4 Rocket Schematic')
        .texture('minecraft:item/paper')
        .color(0, 0xA8E6C8)
        .rarity('SUPREME')
        .tooltip('§7A schematic for a Tier 4 Rocket, capable of reaching Glacio.')

    event.create('gtceu:thorium_single')
        .displayName('Single Thorium Fuel Cell')                
        .rarity('RARE')
        .tooltip('§7A Single thorium fuel cell.')
    
    event.create('gtceu:thorium_double')
        .displayName('Double Thorium Fuel Cell')                
        .rarity('RARE')
        .tooltip('§7A Double thorium fuel cell.')
    
    event.create('gtceu:thorium_quad')
        .displayName('Quad Thorium Fuel Cell')                
        .rarity('RARE')
        .tooltip('§7A Quad thorium fuel cell.')
        
})
ItemEvents.modification(event => {
    event.modify('forestry:bee_drone_ge', item => { 
        item.burnTime = 800
    })
})
