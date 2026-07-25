// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
//
// Modified: custom-dimension veins (see PROTECTED_VEIN_PREFIXES) are excluded from the
// Mining Dimension redirect, and per-vein errors no longer abort the whole loop.

const $VeinedVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.VeinedVeinGenerator');
const $DikeVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.DikeVeinGenerator');
const $CuboidVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.CuboidVeinGenerator');

// Vein ID prefixes that should NOT be redirected into the Mining Dimension.
// Add one line here per custom-dimension planet/vein set you create.
const PROTECTED_VEIN_PREFIXES = [
    'allthemods:ganymede/',
    // 'allthemods:mars/',
    // 'allthemods:europa/',
];

function isProtected(veinId) {
    return PROTECTED_VEIN_PREFIXES.some(prefix => veinId.startsWith(prefix));
}

function getHeightRangeForLayer(layer) {
    switch (layer) {
        case GTWorldGenLayers.ENDSTONE:
            return { startY: -63, endY: 0 };
        case GTWorldGenLayers.NETHERRACK:
            return { startY: 1, endY: 64 };
        case GTWorldGenLayers.DEEPSLATE:
            return { startY: 65, endY: 128 };
        case GTWorldGenLayers.STONE:
            return { startY: 129, endY: 248 };
        default:
            return { startY: 319, endY: 320 };
    }
}

function relocateVeinToMiningDim(vein, startY, endY) {
    let veinGen = vein.veinGenerator();

    if (veinGen instanceof $VeinedVeinGenerator) {
        veinGen = veinGen.copy();
        veinGen.minYLevel(startY);
        veinGen.maxYLevel(endY);
    } else if (veinGen instanceof $DikeVeinGenerator) {
        veinGen = veinGen.copy();
        veinGen.minYLevel(startY);
        veinGen.maxYLevel(endY);
        veinGen.getAllEntries().forEach((block) => {
            veinGen.withBlock(new GTDikeBlockDefinition['(com.mojang.datafixers.util.Either,int,int,int)'](
                block.vein(), block.chance(), startY, endY
            ));
        });
    } else if (veinGen instanceof $CuboidVeinGenerator) {
        veinGen = veinGen.copy();
        veinGen.minY(startY);
        veinGen.maxY(endY);
    }

    vein.heightRangeUniform(startY, endY);
    vein.dimensions('allthemodium:mining');
    vein.biomes('#allthemodium:mining_features/mining_biomes');
    vein['veinGenerator(com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator)'](veinGen);
}

GTCEuServerEvents.oreVeins(allthemods => {
    allthemods.modifyAll((veinId, vein) => {
        if (isProtected(veinId)) {
            console.log(`[mining_dim_ores] Skipping redirect for protected vein: ${veinId}`);
            return;
        }

        try {
            const { startY, endY } = getHeightRangeForLayer(vein.layer());
            relocateVeinToMiningDim(vein, startY, endY);
        } catch (err) {
            console.error(`[mining_dim_ores] Failed to relocate vein '${veinId}': ${err}`);
            // Intentionally swallow the error so one bad vein doesn't break the rest.
        }
    });

    allthemods.add("fluorite_vein", builder => {
        builder.clusterSize(35)
            .weight(30)
            .density(0.75)
            .discardChanceOnAirExposure(0.0)
            .layer('deepslate')
            .dimensions('allthemodium:mining')
            .biomes('#allthemodium:mining_features/mining_biomes')
            .heightRangeUniform(65, 128)
            .dikeVeinGenerator(generator =>
                generator.withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("fluorite"), 3, 65, 128))
                        .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("sulfur"), 1, 65, 128))
                        .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("gypsum"), 2, 65, 128))
                        .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("dolomite"), 1, 65, 128))
            )
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.