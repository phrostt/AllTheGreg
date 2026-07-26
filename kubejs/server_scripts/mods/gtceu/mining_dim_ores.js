// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $VeinedVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.VeinedVeinGenerator');
const $DikeVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.DikeVeinGenerator');
const $CuboidVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.CuboidVeinGenerator');

GTCEuServerEvents.oreVeins(allthemods => {
    const PROTECTED_VEIN_PREFIXES = [
        'minecraft:ganymede_',
        'minecraft:charon_',
        'minecraft:diater_',
        'minecraft:dune_',
        'minecraft:europa_',
        'minecraft:galia_',
        'minecraft:io_',
        'minecraft:jada_',
        'minecraft:pluto_',
        'minecraft:soera_',
        'minecraft:titan_',
        'minecraft:vonic_',
        'minecraft:vulcan_'
    ];

    function isProtected(veinId) {
        let idString = String(veinId);        
        //console.info (`Ore vein: ${idString}`);
        let outputString = PROTECTED_VEIN_PREFIXES.some(prefix => idString.startsWith(prefix));
        //console.error(outputString);
        return outputString
    }
    allthemods.modifyAll((veinId, vein) => {
        let startY;
        let endY;
        switch (vein.layer()) {
            case GTWorldGenLayers.ENDSTONE:
                startY = -63;
                endY = 0;
                break;
            case GTWorldGenLayers.NETHERRACK:
                startY = 1;
                endY = 64;
                break;
            case GTWorldGenLayers.DEEPSLATE:
                startY = 65;
                endY = 128;
                break;
            case GTWorldGenLayers.STONE:
                startY = 129;
                endY = 248;
                break;
            default:
                startY = 319;
                endY = 320;
                break;
        }

        let veinGen = vein.veinGenerator();
        if (veinGen instanceof $VeinedVeinGenerator) {
            veinGen = veinGen.copy()
            veinGen.minYLevel(startY);
            veinGen.maxYLevel(endY);
        } else if (veinGen instanceof $DikeVeinGenerator) {
            veinGen = veinGen.copy()
            veinGen.minYLevel(startY);
            veinGen.maxYLevel(endY);
            var blocks = veinGen.getAllEntries()
            blocks.forEach((block) => {
                veinGen.withBlock(new GTDikeBlockDefinition['(com.mojang.datafixers.util.Either,int,int,int)'](block.vein(), block.chance(), startY, endY))
            })
        } else if (veinGen instanceof $CuboidVeinGenerator) {
            veinGen = veinGen.copy()
            veinGen.minY(startY)
            veinGen.maxY(endY)
        }
        if (!isProtected(veinId)) {
            vein.heightRangeUniform(startY, endY)
            vein.dimensions('allthemodium:mining')
            vein.biomes('#allthemodium:mining_features/mining_biomes')
            vein['veinGenerator(com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator)'](veinGen)
        }
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
