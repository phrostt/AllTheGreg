
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    const adAstraPlanets = ['moon', 'mars', 'venus', 'mercury'];

    adAstraPlanets.forEach(planet => {
        event.create(planet)
            .targets(
                `ad_astra:${planet}_stone`,
                `ad_astra:${planet}_sand`,
                //`ad_astra:${planet}_dirt`,
                //`ad_astra:${planet}_gravel`,
                //`ad_astra:${planet}_ice`,
                //`ad_astra:permafrost`
            )
            .dimensions(`ad_astra:${planet}`);
    });

    event.create('glacio')
        .targets(
            `ad_astra:glacio_stone`,
            `ad_astra:glacio_ice`,
            //`ad_astra_giselle:permafrost`
        )
        .dimensions(`ad_astra:glacio`);    
});