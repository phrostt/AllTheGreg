GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('ganymede')
        .targets(
            'ad_astra:moon_stone',
            'ad_astra:moon_sand',
            'minecraft:dripstone_block'
        )
        .dimensions('planetsplus:ganymede')
})