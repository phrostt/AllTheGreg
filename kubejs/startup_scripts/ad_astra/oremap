GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    const planets = [
        'charon',
        'diater',
        'dune',
        'europa',
        'galia',
        'io',
        'jada',
        'pluto',
        'soera',
        'titan',
        'vonic',
        'vulcan'
    ];

    planets.forEach(planet => {
        event.create(planet)
            .targets(
                'ad_astra:moon_stone',                
                'ad_astra:mars_stone',                
                'ad_astra:venus_stone',                
                'ad_astra:mercury_stone',
                'ad_astra:glacio_stone',
                'ad_astra:permafrost',                
            )
            .dimensions(`planetsplus:${planet}`);
    });
})