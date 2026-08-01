
const PLANETS = {
    moon: 'ad_astra:moon',
    mars: 'ad_astra:mars',
    mercury: 'ad_astra:mercury',
    venus: 'ad_astra:venus',
    glacio: 'ad_astra:glacio', // adjust namespace if your Glacio addon differs
};

GTCEuServerEvents.oreVeins(event => {

       event.add("moon_platinum_vein", vein => {
        vein.weight(25)
        vein.density(0.2)
        vein.clusterSize(60)
        vein.layer("moon")
        vein.dimensions(["ad_astra:moon"])
        vein.heightRangeUniform(-50, 0)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Platinum, 2, -50, 0)
            .withBlock(GTMaterials.Palladium, 1, -50, -15)
            .withBlock(GTMaterials.Cooperite, 1, -40, -20)
        )
    })


    // Tier 1 - Moon (single planet, no split needed)
    const moonOres = [
        'clausthalite', 'naumannite', 'hafnian_zircon', 'hafnon', 'baddeleyite', 'zircon',
        'ullmannite', 'jamesonite', 'gallite', 'columbite_tantalite', 'microlite', 'wodginite',
        'bismuthinite', 'bismite', 'bismutite', 'thorianite', 'thorite', 'cryolite', 'hellish', 'terraria'
    ];
    moonOres.forEach((ore, i) => {
        event.add(`moon_${ore}`, vein => {
            vein.weight(35).density(0.5).clusterSize(35)
                .layer('moon')
                .dimensions([PLANETS.moon])
                .heightRangeUniform(10 + i * 3, 60 + i * 3)
                .layeredVeinGenerator(gen => gen.buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(1).mat(GTMaterials.get(ore)).size(2, 4))
                ));
        });
    });

    // Tier 2 - Mars (single planet, no split needed)
    const marsOres = [
        'roquesite', 'indite', 'sakuraiite', 'thortveitite', 'kolbeckite', 'bazzite',
        'fergusonite', 'samarskite', 'cerite', 'gadolinite', 'lanthanite', 'xenotime', 'yttrialite'
    ];
    marsOres.forEach((ore, i) => {
        event.add(`mars_${ore}`, vein => {
            vein.weight(35).density(0.5).clusterSize(35)
                .layer('mars')
                .dimensions([PLANETS.mars])
                .heightRangeUniform(10 + i * 3, 60 + i * 3)
                .layeredVeinGenerator(gen => gen.buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(1).mat(GTMaterials.get(ore)).size(2, 4))
                ));
        });
    });

    // Tier 3 - Mercury (half of the tier 3 list)
    const mercuryOres = ['crookesite', 'hutchinsonite', 'lorandite', 'strontianite', 'celestite', 'osmiridium', 'nether_star'];
    mercuryOres.forEach((ore, i) => {
        event.add(`mercury_${ore}`, vein => {
            vein.weight(35).density(0.5).clusterSize(35)
                .layer('mercury')
                .dimensions([PLANETS.mercury])
                .heightRangeUniform(10 + i * 3, 60 + i * 3)
                .layeredVeinGenerator(gen => gen.buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(1).mat(GTMaterials.get(ore)).size(2, 4))
                ));
        });
    });

    // Tier 3 - Venus (other half of the tier 3 list)
    const venusOres = ['laurite', 'calaverite', 'kurilite', 'telluride'];
    venusOres.forEach((ore, i) => {
        event.add(`venus_${ore}`, vein => {
            vein.weight(35).density(0.5).clusterSize(35)
                .layer('venus')
                .dimensions([PLANETS.venus])
                .heightRangeUniform(10 + i * 3, 60 + i * 3)
                .layeredVeinGenerator(gen => gen.buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(1).mat(GTMaterials.get(ore)).size(2, 4))
                ));
        });
    });

    // Tier 4 - Glacio (single planet, no split needed)
    const glacioOres = [
        'rubicline', 'germanite', 'renierite', 'argyrodite', 'rhenite', 'tarkianite', 'rhodizite',
        'radio_thoric_phosphate', 'tenebrius', 'etrium'
    ];
    glacioOres.forEach((ore, i) => {
        event.add(`glacio_${ore}`, vein => {
            vein.weight(35).density(0.5).clusterSize(35)
                .layer('glacio')
                .dimensions([PLANETS.glacio])
                .heightRangeUniform(10 + i * 3, 60 + i * 3)
                .layeredVeinGenerator(gen => gen.buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(1).mat(GTMaterials.get(ore)).size(2, 4))
                ));
        });
    });

    // ------------------------------------------------------------------------
    // PART B: Redistribute existing GT vanilla veins onto the 4 planets
    // Overworld -> split Moon/Mars | Nether -> split Mercury/Venus | End -> Glacio
    // ------------------------------------------------------------------------



    // Clones existing GT vanilla veins onto the 4 Ad Astra planets, rather than
    // modifying the originals - avoids the dimensions() getter bug and any load-order
    // conflict with mining_dim_ores.js entirely.
    //
    // Overworld veins -> split Moon / Mars
    // Nether veins    -> split Mercury / Venus
    // End veins       -> Glacio



    /*function cloneVeinToPlanet(sourceVeinId, newVeinId, planetDim, layerName, heightMin, heightMax) {
        let copiedGen = null;
        let newVein = {name: null, chance: null};        

        try {
            event.modify(`gtceu:${sourceVeinId}`, vein => {
                copiedGen = vein.veinGenerator().copy();       
                //let entries = vein.veinGenerator().getAllEntries();
                //console.error(`allEntries() worked, length: ${entries.length}`);
                //console.error(`First entry: ${entries[0]}`);
                //console.error(vein.veinGenerator().allEntries().map(entry => `${entry.vein().getName()} (${entry.chance()})`).join(', '));                

            });
        } catch (err) {
            console.error(`[ad_astra_ore_veins] Failed reading generator for '${sourceVeinId}' on '${planetDim} ${layerName}': ${err}`);
            return;
        }

        if (copiedGen) {
            event.add(newVeinId, vein => {
                vein.weight(35).density(0.5).clusterSize(35)
                    .layer(layerName)
                    .dimensions([planetDim])
                    .heightRangeUniform(heightMin, heightMax);
                vein['veinGenerator(com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator)'](copiedGen);
            });
        } else {
            console.error(`[ad_astra_ore_veins] Null generator for '${sourceVeinId}', skipped '${newVeinId}'`);
        }
    }*/

    function cloneVeinToPlanet(sourceVeinId, newVeinId, planetDim, layerName, heightMin, heightMax) {
        let entries = null;

        try {
            event.modify(`gtceu:${sourceVeinId}`, vein => {
                entries = vein.veinGenerator().getAllEntries();
            });
        } catch (err) {
            console.error(`[ad_astra_ore_veins] Failed reading entries for '${sourceVeinId}': ${err}`);
            return;
        }

        if (!entries || entries.length === 0) {
            console.error(`[ad_astra_ore_veins] No entries for '${sourceVeinId}', skipped '${newVeinId}'`);
            return;
        }

        let parsedLayers = [];
        entries.forEach(entry => {
            let veinStr = String(entry.vein());
            let match = veinStr.match(/^Right\[([a-z_]+:[a-z_0-9]+)\]$/);
            if (!match) {
                //console.error(`[ad_astra_ore_veins] Skipping non-material entry in '${sourceVeinId}': ${veinStr}`);
                return;
            }
            let matName = match[1].split(':')[1];
            let mat = GTMaterials.get(matName);
            if (!mat || !mat.getName || mat.getName() !== matName) {
                console.error(`[ad_astra_ore_veins] Could not resolve material '${matName}' from '${sourceVeinId}'`);
                return;
            }
            parsedLayers.push({ mat: mat, chance: entry.chance() });
        });

        if (parsedLayers.length === 0) {
            console.error(`[ad_astra_ore_veins] No resolvable materials for '${sourceVeinId}', skipped '${newVeinId}'`);
            return;
        }

        event.add(newVeinId, vein => {
            vein.weight(35).density(0.5).clusterSize(35)
                .layer(layerName)
                .dimensions([planetDim])
                .heightRangeUniform(heightMin, heightMax)
                .layeredVeinGenerator(gen => gen.buildLayerPattern(pattern => {
                    parsedLayers.forEach(pl => {
                        pattern = pattern.layer(l => l.weight(pl.chance).mat(pl.mat).size(2, 4));
                    });
                    return pattern;
                }));
        });

        console.info(`[ad_astra_ore_veins] Cloned '${sourceVeinId}' -> '${newVeinId}' with ${parsedLayers.length} materials`);
    }

    function cloneList(veinList, planetPrefix, planetDim, layerName) {
        veinList.forEach((veinId, i) => {
            let newId = `${planetPrefix}_${veinId}`;
            cloneVeinToPlanet(veinId, newId, planetDim, layerName, 10 + i * 5, 60 + i * 5);
        });
    }

    // ---- Overworld -> Moon (11) ----
    cloneList([
        'apatite_vein', 'cassiterite_vein', 'coal_vein', 'copper_tin_vein', 'galena_vein',
        'garnet_tin_vein', 'iron_vein', 'lubricant_vein', 'magnetite_vein_ow', 'mineral_sand_vein', 'nickel_vein'
    ], 'moon', 'ad_astra:moon', 'moon');

    // ---- Overworld -> Mars (10) ----
    cloneList([
        'salts_vein', 'oilsands_vein', 'copper_vein', 'diamond_vein', 'lapis_vein',
        'manganese_vein_ow', 'mica_vein', 'olivine_vein', 'redstone_vein_ow', 'sapphire_vein'
    ], 'mars', 'ad_astra:mars', 'mars');

    // ---- Nether -> Mercury (6) ----
    cloneList([
        'banded_iron_vein', 'beryllium_vein', 'certus_quartz', 'manganese_vein', 'molybdenum_vein', 'monazite_vein'
    ], 'mercury', 'ad_astra:mercury', 'mercury');

    // ---- Nether -> Venus (6) ----
    cloneList([
        'nether_quartz_vein', 'redstone_vein', 'saltpeter_vein', 'sulfur_vein', 'tetrahedrite_vein', 'topaz_vein'
    ], 'venus', 'ad_astra:venus', 'venus');

    // ---- End -> Glacio (6) ----
    cloneList([
        'bauxite_vein_end', 'magnetite_vein_end', 'naquadah_vein', 'pitchblende_vein_end', 'scheelite_vein', 'sheldonite_vein'
    ], 'glacio', 'ad_astra:glacio', 'glacio');

});