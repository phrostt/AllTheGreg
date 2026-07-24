// priority: 10
const coilMaterials = [
    { name: 'draconium_awakened', color: 0xFF6600, iconSet: 'BRIGHT', voltage: 2097152, loss: 0, superconductor: true, cBlast: { temp: 7200, duration: 1200, volts: 524288 }, coilProp: { temp: 10800, level: 8, discount: 4 } },
    { name: 'eternium', color: 0x2d7d69, iconSet: 'BRIGHT', voltage: 8388608, loss: 0, superconductor: true, cBlast: { temp: 10800, duration: 1200, volts: 2097152 }, coilProp: { temp: 12600, level: 2, discount: 8 } },
    { name: 'cosmic_alloy', color: 0xe4ac29, iconSet: 'SHINY', voltage: 33554432, loss: 0, superconductor: true, cBlast: { temp: 12600, duration: 1500, volts: 8388608 }, coilProp: { temp: 15300, level: 4, discount: 8 } },
    { name: 'antimatter_alloy', color: 0x8a3947, iconSet: 'METALLIC', voltage: 134217728, loss: 0, superconductor: true, cBlast: { temp: 15300, duration: 2000, volts: 33554432 }, coilProp: { temp: 18900, level: 8, discount: 8 } },
    { name: 'singularity_alloy', color: 0xab24a2, iconSet: 'SHINY', voltage: 536870912, loss: 0, superconductor: true, cBlast: { temp: 18900, duration: 2500, volts: 134217728 }, coilProp: { temp: 21600, level: 16, discount: 8 } },
    { name: 'absolute_alloy', color: 0xE6F2FF, iconSet: 'BRIGHT', voltage: 2147483647, loss: 0, superconductor: true, cBlast: { temp: 21600, duration: 3000, volts: 536870912 }, coilProp: { temp: 24300, level: 32, discount: 8 } }
]


StartupEvents.registry('block', event => {
    /*event.create("omnic_matrix_coil_block", "gtceu:coil")
        .textureAll("kubejs:block/casing/omnic_matrix_machine/coil")
        .temperature(25000)
        .level(16)
        .energyDiscount(32)
        .tier(8)
        //.coilMaterial(() => GTMaterials.get("omnium"))
        .hardness(5)        
        .soundType("metal")*/

    coilMaterials.forEach((mat, index) => {
        event.create(`${mat.name}_coil_block`, "gtceu:coil")
            .textureAll(`kubejs:block/coils/${mat.name}`)
            .temperature(mat.coilProp.temp)
            .level(mat.coilProp.level)
            .energyDiscount(mat.coilProp.discount)
            .tier(9)
            .coilMaterial(() => GTMaterials.get(`gtceu:${mat.name}`))
            //.coilMaterial(() => GTMaterials.get(mat.name))
            .hardness(5)            
            .soundType("metal");
    });
});