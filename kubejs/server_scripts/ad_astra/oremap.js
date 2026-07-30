/*GTCEuServerEvents.oreVeins(event => {
    const gtOreVeins = [
        "gtceu:cassiterite_vein", "gtceu:naquadah_vein", "gtceu:redstone_vein",
        "gtceu:beryllium_vein", "gtceu:manganese_vein", "gtceu:magnetite_vein_end",
        "gtceu:salts_vein", "gtceu:monazite_vein", "gtceu:saltpeter_vein",        
        "gtceu:lapis_vein", "gtceu:olivine_vein", "gtceu:tetrahedrite_vein",
        "gtceu:sheldonite_vein", "gtceu:garnet_vein", "gtceu:molybdenum_vein",
        "gtceu:bauxite_vein_end", "gtceu:scheelite_vein", "gtceu:sapphire_vein",
        "gtceu:mica_vein", "gtceu:copper_vein", "gtceu:magnetite_vein_ow",
        "gtceu:lubricant_vein", "gtceu:garnet_tin_vein", "gtceu:coal_vein",
        "gtceu:redstone_vein_ow", "gtceu:pitchblende_vein_end", "gtceu:nether_quartz_vein",
        "gtceu:mineral_sand_vein", "gtceu:manganese_vein_ow", "gtceu:sulfur_vein",
        "gtceu:topaz_vein", "gtceu:apatite_vein", "gtceu:banded_iron_vein",
        "gtceu:nickel_vein", "gtceu:galena_vein", "gtceu:certus_quartz"
    ];

    const myOreVeins = [
        { name: 'tounkite_re', weight: 35, heightRange: [5, 30], ores: ['tounkite_re', 'rhenium_oxide_complex', 'stibioruartite'] },
        { name: 'ruthenium_sulfide_rare', weight: 35, heightRange: [8, 35], ores: ['ruthenium_sulfide_rare', 'indite', 'sakuraiite'] },
        { name: 'indium_zinc_complex', weight: 35, heightRange: [10, 40], ores: ['indium_zinc_complex', 'samarskite', 'tantalite_sm'] },
        { name: 'samarium_niobate', weight: 35, heightRange: [12, 42], ores: ['samarium_niobate', 'lorandite', 'vrbaite'] },
        { name: 'hutchinsonite', weight: 35, heightRange: [15, 45], ores: ['hutchinsonite', 'crookesite', 'hafnon'] },
        { name: 'alurgite_hf', weight: 35, heightRange: [18, 48], ores: ['alurgite_hf', 'germanite', 'renierite'] },
        { name: 'germanium_zinc_ore', weight: 35, heightRange: [10, 50], ores: ['germanium_zinc_ore', 'thortveitite', 'silicate_scandium'] },
        { name: 'bazzite', weight: 35, heightRange: [15, 55], ores: ['bazzite', 'yftisite', 'yttrium_fluorite_rare'] },
        { name: 'bismutite', weight: 35, heightRange: [20, 60], ores: ['bismutite', 'pucherite', 'bismuth_cobalt_ore'] },
        { name: 'strontianite', weight: 35, heightRange: [22, 65], ores: ['strontianite', 'strontium_calcium_ore', 'wairauite'] },
        { name: 'cattierite', weight: 35, heightRange: [25, 70], ores: ['cattierite', 'gersdorffite', 'nickel_antimony_ore'] },
        { name: 'miassite', weight: 35, heightRange: [28, 75], ores: ['miassite', 'rhodium_lead_ore', 'laurite'] },
        { name: 'erlichmanite', weight: 35, heightRange: [15, 45], ores: ['erlichmanite', 'osmium_titanium_ore', 'vanadium_mercury_ore'] },
        { name: 'selenium_silver_ore', weight: 35, heightRange: [18, 50], ores: ['selenium_silver_ore', 'hydrogen_beryllium_ore', 'dzhalindite'] },
        { name: 'yanomamite', weight: 35, heightRange: [20, 55], ores: ['yanomamite', 'indium_ganide', 'bastnasite_sm'] },
        { name: 'florencite_sm', weight: 35, heightRange: [5, 30], ores: ['florencite_sm', 'kolbeckite', 'rowlandite'] },
        { name: 'frischolite', weight: 35, heightRange: [8, 33], ores: ['frischolite', 'yttrialite', 'stottite'] },
        { name: 'prassoite', weight: 35, heightRange: [10, 35], ores: ['prassoite', 'irarsite', 'hollingworthite'] },
        { name: 'platarsite', weight: 35, heightRange: [10, 40], ores: ['platarsite', 'bowieite', 'avogadrite'] },
        { name: 'loellingite_rb', weight: 35, heightRange: [12, 43], ores: ['loellingite_rb', 'curite', 'soddyite'] },
        { name: 'kasolite', weight: 35, heightRange: [15, 45], ores: ['kasolite', 'fourmarierite', 'thorogummite'] },
        { name: 'upalite', weight: 35, heightRange: [20, 65], ores: ['upalite', 'arsenuranylite', 'niobokuprite'] },
        { name: 'bismutotantalite', weight: 35, heightRange: [22, 70], ores: ['bismutotantalite', 'stibiotantalite', 'yttrotantalite'] },
        { name: 'fergusonite', weight: 35, heightRange: [25, 75], ores: ['fergusonite', 'polycrase', 'eschynite'] },
        { name: 'shadlunite', weight: 35, heightRange: [15, 55], ores: ['shadlunite', 'tambovite', 'margaritasite'] },
        { name: 'xtyrechtite', weight: 35, heightRange: [18, 58], ores: ['xtyrechtite', 'calkinsite', 'lanthanite'] },
        { name: 'chlormagaluminite', weight: 35, heightRange: [20, 60], ores: ['chlormagaluminite', 'oulankaite', 'gallite'] },
        { name: 'sulgallite', weight: 35, heightRange: [35, 90], ores: ['sulgallite', 'stringhamite_os', 'pezzottaite'] },
        { name: 'pollucite', weight: 35, heightRange: [38, 95], ores: ['pollucite', 'uranocircite_ra', 'schafarzikite'] },
        { name: 'chalcophanite_bi', weight: 35, heightRange: [40, 100], ores: ['chalcophanite_bi', 'roquesite', 'indiumite'] },
        { name: 'monazite_sm', weight: 35, heightRange: [20, 70], ores: ['monazite_sm', 'loparite_sm', 'xenotime_sm'] },
        { name: 'cerite_sm', weight: 35, heightRange: [22, 72], ores: ['cerite_sm', 'atheyite', 'beudantite_sb'] },
        { name: 'partzite', weight: 35, heightRange: [25, 75], ores: ['partzite', 'tounkite_re', 'rhenium_oxide_complex'] },
        { name: 'stibioruartite', weight: 35, heightRange: [5, 40], ores: ['stibioruartite', 'ruthenium_sulfide_rare', 'indite'] },
        { name: 'sakuraiite', weight: 35, heightRange: [8, 42], ores: ['sakuraiite', 'indium_zinc_complex', 'samarskite'] },
        { name: 'tantalite_sm', weight: 35, heightRange: [10, 45], ores: ['tantalite_sm', 'samarium_niobate', 'lorandite'] }    
    ];

    const planets = [
        'charon', 'diater', 'dune', 'europa', 
        'galia', 'io', 'jada', 'pluto', 
        'soera', 'titan', 'vonic', 'vulcan'
    ];
    
    const defaultVeinSettings = {
        density: 0.5,
        clusterSize: 35
    };

    const gtVeinDimensions = {};
    gtOreVeins.forEach(vein => { gtVeinDimensions[vein] = []; });

    planets.forEach((planet, index) => {
        let gtIndices = [];
        if (index === 0) {
            gtIndices = [0, 1, 2]; 
        } else if (index === planets.length - 1) {
            gtIndices = [index - 2, index - 1, index]; 
        } else {
            gtIndices = [index - 1, index, index + 1]; 
        }
        
        gtIndices.forEach(gIndex => {
            const slice = gtOreVeins.slice(gIndex * 3, gIndex * 3 + 3);
            slice.forEach(gtVein => {
                if (!gtVeinDimensions[gtVein].includes(planet)) {
                    gtVeinDimensions[gtVein].push(planet);
                }
            });
        });

        const customSlice = myOreVeins.slice(index * 3, index * 3 + 3);
        
        // This MUST run every reload, so it stays outside the global check
        customSlice.forEach(veinData => {
            const veinID = `${planet}_${veinData.name}`;
            
            event.add(veinID, vein => {
                vein.weight(veinData.weight)
                vein.density(defaultVeinSettings.density)
                vein.clusterSize(defaultVeinSettings.clusterSize)
                vein.layer(planet)
                vein.dimensions([`planetsplus:${planet}`])
                vein.heightRangeUniform(veinData.heightRange[0], veinData.heightRange[1])
                vein.layeredVeinGenerator(generator => generator
                    .buildLayerPattern(pattern => pattern
                        .layer(l => l.weight(3).mat(GTMaterials.get(veinData.ores[0])).size(2, 4))
                        .layer(l => l.weight(2).mat(GTMaterials.get(veinData.ores[1])).size(1, 3))
                        .layer(l => l.weight(2).mat(GTMaterials.get(veinData.ores[2])).size(1, 2))
                        .layer(l => l.weight(1).mat(GTMaterials.get(veinData.ores[2])).size(1, 1))
                    )
                )
            })
        });
    });

    // Modifying built-in GT veins MUST be protected from /reload to stop JEI duplication
    // Modifying built-in GT veins MUST be protected from /reload to stop JEI duplication
    if (!global.gtVeinsModified) {
        Object.keys(gtVeinDimensions).forEach(veinId => {
            const dimensionsList = gtVeinDimensions[veinId].map(p => `planetsplus:${p}`);
            
            if (dimensionsList.length > 0) {
                // Route the base generation to the End, Nether, or Mining Dimension 
                if (veinId.endsWith('_end')) {
                    dimensionsList.push('minecraft:the_end');
                } else if (veinId.includes('nether') || veinId === 'gtceu:sulfur_vein') {
                    dimensionsList.push('minecraft:the_nether');
                } else {
                    // Automatically replaces the Overworld with the targeted Mining Dimension
                    dimensionsList.push('allthemodium:mining'); 
                }

                event.modify(veinId, vein => {
                    vein.dimensions(dimensionsList);
                });
            }
        });
        
        global.gtVeinsModified = true;
    }
});


*/

GTCEuServerEvents.oreVeins(event => {
    const gtOreVeins = [
        "gtceu:cassiterite_vein", "gtceu:naquadah_vein", "gtceu:redstone_vein",
        "gtceu:beryllium_vein", "gtceu:manganese_vein", "gtceu:magnetite_vein_end",
        "gtceu:salts_vein", "gtceu:monazite_vein", "gtceu:saltpeter_vein",        
        "gtceu:lapis_vein", "gtceu:olivine_vein", "gtceu:tetrahedrite_vein",
        "gtceu:sheldonite_vein", "gtceu:garnet_vein", "gtceu:molybdenum_vein",
        "gtceu:bauxite_vein_end", "gtceu:scheelite_vein", "gtceu:sapphire_vein",
        "gtceu:mica_vein", "gtceu:copper_vein", "gtceu:magnetite_vein_ow",
        "gtceu:lubricant_vein", "gtceu:garnet_tin_vein", "gtceu:coal_vein",
        "gtceu:redstone_vein_ow", "gtceu:pitchblende_vein_end", "gtceu:nether_quartz_vein",
        "gtceu:mineral_sand_vein", "gtceu:manganese_vein_ow", "gtceu:sulfur_vein",
        "gtceu:topaz_vein", "gtceu:apatite_vein", "gtceu:banded_iron_vein",
        "gtceu:nickel_vein", "gtceu:galena_vein", "gtceu:certus_quartz"
    ];

    const veinGroups = [
        { id: 'indium_group',            planet: 'charon', heightRange: [10, 50], ores: ['indium_zinc_complex', 'yanomamite', 'sakuraiite'] },
        { id: 'samarium_group',          planet: 'diater', heightRange: [10, 70], ores: ['florencite_sm', 'monazite_sm', 'cerite_sm'] },
        { id: 'yttrium_group',           planet: 'dune',   heightRange: [10, 70], ores: ['frischolite', 'xtyrechtite', 'fergusonite'] },
        { id: 'platinum_group',          planet: 'europa', heightRange: [10, 75], ores: ['miassite', 'prassoite', 'platarsite'] },
        { id: 'rhenium_ruthenium_group', planet: 'galia',  heightRange: [5, 40],  ores: ['tounkite_re', 'ruthenium_sulfide_rare', 'stibioruartite'] },
        { id: 'bismuth_group',           planet: 'io',     heightRange: [20, 90], ores: ['bismutite', 'bismutotantalite', 'chalcophanite_bi'] },
        { id: 'thallium_group',          planet: 'jada',   heightRange: [12, 48], ores: ['hutchinsonite', 'loellingite_rb', 'alurgite_hf'] },
        { id: 'germanium_group',         planet: 'pluto',  heightRange: [10, 60], ores: ['germanium_zinc_ore', 'bazzite', 'chlormagaluminite'] },
        { id: 'strontium_cobalt_group',  planet: 'soera',  heightRange: [15, 70], ores: ['strontianite', 'cattierite', 'erlichmanite'] },
        { id: 'uranium_lead_group',      planet: 'titan',  heightRange: [15, 65], ores: ['kasolite', 'upalite', 'shadlunite'] },
        { id: 'selenium_gallium_group',  planet: 'vonic',  heightRange: [10, 90], ores: ['selenium_silver_ore', 'sulgallite', 'tantalite_sm'] },
        { id: 'antimony_cesium_group',   planet: 'vulcan', heightRange: [12, 95], ores: ['partzite', 'pollucite', 'samarium_niobate'] }
    ];

    const planets = veinGroups.map(g => g.planet);

    const defaultVeinSettings = {
        weight: 35,
        density: 0.5,
        clusterSize: 35
    };

    // 1. Register the 12 custom grouped veins, one per planet
    veinGroups.forEach(group => {
        const veinID = `${group.planet}_${group.id}`;

        event.add(veinID, vein => {
            vein.weight(defaultVeinSettings.weight)
            vein.density(defaultVeinSettings.density)
            vein.clusterSize(defaultVeinSettings.clusterSize)
            vein.layer(group.planet)
            vein.dimensions([`planetsplus:${group.planet}`])
            vein.heightRangeUniform(group.heightRange[0], group.heightRange[1])
            vein.layeredVeinGenerator(generator => generator
                .buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(3).mat(GTMaterials.get(group.ores[0])).size(2, 4))
                    .layer(l => l.weight(2).mat(GTMaterials.get(group.ores[1])).size(1, 3))
                    .layer(l => l.weight(2).mat(GTMaterials.get(group.ores[2])).size(1, 2))
                    .layer(l => l.weight(1).mat(GTMaterials.get(group.ores[2])).size(1, 1))
                )
            )
        })
    });

    // 2. Assign each built-in GT vein to its neighboring planets (wrap-around)
    const gtVeinDimensions = {};
    gtOreVeins.forEach(vein => { gtVeinDimensions[vein] = []; });

    planets.forEach((planet, index) => {
        let gtIndices = [];
        if (index === 0) {
            gtIndices = [0, 1, 2];
        } else if (index === planets.length - 1) {
            gtIndices = [index - 2, index - 1, index];
        } else {
            gtIndices = [index - 1, index, index + 1];
        }

        gtIndices.forEach(gIndex => {
            const slice = gtOreVeins.slice(gIndex * 3, gIndex * 3 + 3);
            slice.forEach(gtVein => {
                if (!gtVeinDimensions[gtVein].includes(planet)) {
                    gtVeinDimensions[gtVein].push(planet);
                }
            });
        });
    });

    // 3. Modify built-in GT veins to add planet dimensions - guarded against re-running on /reload
    if (!global.gtVeinsModified) {
        Object.keys(gtVeinDimensions).forEach(veinId => {
            const dimensionsList = gtVeinDimensions[veinId].map(p => `planetsplus:${p}`);

            if (dimensionsList.length > 0) {
                if (veinId.endsWith('_end')) {
                    dimensionsList.push('minecraft:the_end');
                } else if (veinId.includes('nether') || veinId === 'gtceu:sulfur_vein') {
                    dimensionsList.push('minecraft:the_nether');
                } else {
                    dimensionsList.push('allthemodium:mining');
                }

                event.modify(veinId, vein => {
                    vein.dimensions(dimensionsList);
                });
            }
        });

        global.gtVeinsModified = true;
    }
});