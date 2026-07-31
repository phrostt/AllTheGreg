// priority: 500
// @ts-nocheck
const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
const GasTier = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty$GasTier')
const WireProperties = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties')
const FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
const DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty')
const PolymerProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PolymerProperty')
const GemProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty')
const FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')
const FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder')
const GTValues = Java.loadClass('com.gregtechceu.gtceu.api.GTValues')
const MaterialStack = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialStack')

const singularityMetals = ['iron', 'copper', 'silver', 'gold', 'lead', 'tin', 'platinum', 'nickel', 'zinc', 'brass', 'bronze', 'invar', 'steel']

//need to utilize
const erMaterials = [
    { name: 'blutonium', color: 0x14147b, oItems: ['ingot', 'dust', 'block'] },
    { name: 'cyanite', color: 0x456e83, oItems: ['ingot', 'dust', 'block'] },
    { name: 'magentite', color: 0xed29ed, oItems: ['ingot', 'dust', 'block'] },
    { name: 'ludicrite', color: 0xaa47dd, oItems: ['ingot', 'dust', 'block'] },
    { name: 'ridiculite', color: 0xe5c1ea, oItems: ['ingot', 'dust', 'block'] },
    { name: 'inanite', color: 0xf12664, oItems: ['ingot', 'dust', 'block'] },
    { name: 'insanite', color: 0x38d58d, oItems: ['ingot', 'dust', 'block'] }
];

const naqStages = [
    { name: 'naquadria_stage_2', color: 0x5A189A, icon: 'RADIOACTIVE', polymer: true },
    { name: 'naquadria_stage_3', color: 0x00FFD5, icon: 'RADIOACTIVE', polymer: true },
    { name: 'naquadria_stage_4', color: 0xFFC107, icon: 'RADIOACTIVE', polymer: true },
    { name: 'naquadria_awakened', color: 0xFFC107, icon: 'RADIOACTIVE', polymer: true }
];

//ad astra - unified
const adMats = [
    { name: 'etrium', color: 0x5ABFB5, element: 'etrium' },
    { name: 'desh', color: 0xD97B3F, element: 'desh' },
    { name: 'ostrum', color: 0x8A6E78, eleemnt: 'ostrum' },
    { name: 'calorite', color: 0xBF2A3C, element: 'calorite' }
];

const materialsGem = [
    { name: 'demon', simple: true, color: '0x00FFFF', iconSet: 'DIAMOND' },
    { name: 'steadfast', simple: true, color: '0xB0C4DE', iconSet: 'LAPIS' },
    { name: 'corrosive', simple: true, color: '0x90EE90', iconSet: 'EMERALD' },
    { name: 'vengeful', simple: true, color: '0xFFCCCB', iconSet: 'DIAMOND' },
    { name: 'destructive', simple: true, color: '0xFFFFE0', iconSet: 'QUARTZ' },
    { name: 'eternal', simple: true, color: '0xFFFFE0', iconSet: 'SHINY', element: 'eternal'},
    { name: 'source', simple: true, color: '0xD662FF', iconSet: 'EMERALD' },
    { name: 'soul', simple: true, color: '0x3A4F6D', iconSet: 'GLASS' },

    { name: 'restonia', simple: true, element: 'restonia', color: 0xff0000, iconSet: 'RUBY' },
    { name: 'palis', simple: true, element: 'palis', color: 0x1a237e, iconSet: 'LAPIS' },
    { name: 'diamatine', simple: true, element: 'diamatine', color: 0x4fc3f7, iconSet: 'DIAMOND' },
    { name: 'void_crystal', simple: true, element: 'void_crystal', color: 0x212121, iconSet: 'LIGNITE' },
    { name: 'emeradic', simple: true, element: 'emeradic', color: 0x00e676, iconSet: 'EMERALD' },
    { name: 'enori', simple: true, element: 'enori', color: 0xf5f5f5, iconSet: 'QUARTZ' },
    { name: 'black_quartz', simple: true, element: 'black_quartz', color: 0x000000, iconSet: 'QUARTZ' },
    
    { name: 'empowered_restonia', simple: true, element: 'restonia', color: 0xff4d4d, iconSet: 'RUBY' },
    { name: 'empowered_palis', simple: true, element: 'palis', color: 0x534bae, iconSet: 'LAPIS' },
    { name: 'empowered_diamatine', simple: true, element: 'diamatine', color: 0x8bf6ff, iconSet: 'DIAMOND' },
    { name: 'empowered_void_crystal', simple: true, element: 'void_crystal', color: 0x484848, iconSet: 'LIGNITE' },
    { name: 'empowered_emeradic', simple: true, element: 'emeradic', color: 0x66ffa6, iconSet: 'EMERALD' },
    { name: 'empowered_enori', simple: true, element: 'enori', color: 0xffffff, iconSet: 'QUARTZ' },

    { name: 'fluix', color: 0x8F5CCB, iconSet: 'SHINY', components: '1x redstone, 1x certus_quartz, 1x nether_quartz', voltage: 32, loss: 2, superconductor: false },
    { name: 'atm_star', color: 0xFFC107, iconSet: 'SHINY', voltage: 2097152, loss: 2, superconductor: false }
];



//needs proper unification
const otherElements = [
    //need to make sure each 1 of these is useful by checking usage on its dust[
    { name: 'radium', namespace: 'chemlib', oItems: ['ingot','block','nugget','dust','plate'], cBlast: 5400, cVolt: 131072, cIngot: true },
    { name: 'rhenium', namespace: 'chemlib', oItems: ['ingot','block','nugget','dust','plate'], cBlast: 5400, cVolt: 131072, cIngot: true },
    { name: 'astatine', namespace: 'chemlib', oItems: ['dust'], cBlast: 7200, cVolt: 524288, cIngot: true },
    { name: 'graphite', cBlast: 3600, cVolt: 2048, cIngot: true },
    { name: 'strontium', namespace: 'chemlib', oItems: ['ingot','block','nugget','dust','plate'], cBlast: 4500, cVolt: 8192, cIngot: true },
    { name: 'tellurium', namespace: 'chemlib', oItems: ['dust'], cBlast: 18900, cVolt: 33554432, cIngot: true },
    { name: 'californium', cBlast: 18900, cVolt: 536870912, cIngot: true },
    { name: 'berkelium', cBlast: 18900, cVolt: 134217728, cIngot: true },
    { name: 'polonium', namespace: 'chemlib', oItems: ['ingot','block','nugget','dust','plate'], cIngot: true },
    { name: 'selenium', namespace: 'chemlib', oItems: ['dust'], cPolymer: true },
    { name: 'francium', namespace: 'chemlib', oItems: ['ingot','block','nugget','dust','plate'], cIngot: true }, //en
    { name: 'germanium', namespace: 'chemlib', oItems: ['dust'], cVolt: 524416, cIngot: true },
    { name: 'zirconium', namespace: 'chemlib', oItems: ['ingot','block','nugget','dust','plate'], cIngot: true },
    { name: 'scandium', namespace: 'chemlib', oItems: ['ingot','block','nugget','dust','plate'], cIngot: true },
    { name: 'hafnium', namespace: 'chemlib', oItems: ['ingot','block','nugget','dust','plate'], cIngot: true },
    { name: 'rubidium', namespace: 'chemlib', oItems: ['ingot','block','nugget','dust','plate'], cIngot: true },
    { name: 'thallium', namespace: 'chemlib', oItems: ['ingot','block','nugget','dust','plate'], cIngot: true }
];



const unification = [
    //thermal
    { name: 'signalum', oItems: ['rod', 'gear', 'plate', 'nugget', 'block'], namespace: 'alltheores' },
    { name: 'lumium', oItems: ['rod', 'gear', 'plate', 'nugget', 'block'], namespace: 'alltheores' },
    { name: 'enderium', oItems: ['rod', 'gear', 'plate', 'nugget', 'block'], namespace: 'alltheores' },

    //{ name: 'allthemodium', oItems: ['rod', 'gear', 'plate', 'nugget', 'block'], namespace: 'allthemodium' },
    //{ name: 'vibranium', oItems: ['rod', 'gear', 'plate', 'nugget', 'block'], namespace: 'allthemodium' },
    //{ name: 'unobtainium', oItems: ['rod', 'gear', 'plate', 'nugget', block], namespace: 'allthemodium' },

    //enderio
    { name: 'copper_alloy', oItems: ['nugget'], namespace: 'enderio' },
    { name: 'conductive_alloy', oItems: ['nugget'], namespace: 'enderio' },
    { name: 'energetic_alloy', oItems: ['nugget'], namespace: 'enderio' },
    { name: 'vibrant_alloy', oItems: ['nugget'], namespace: 'enderio' },
    { name: 'pulsating_alloy', oItems: ['nugget'], namespace: 'enderio' },
    { name: 'soularium', oItems: ['nugget'], namespace: 'enderio' },
    { name: 'dark_steel', oItems: ['nugget'], namespace: 'enderio' },
    { name: 'end_steel', oItems: ['nugget'], namespace: 'enderio' },

    //botania
    { name: 'manasteel', oItems: ['nugget', 'ingot', 'block'], namespace: 'botania' },
    { name: 'elementium', oItems: ['ingot'], namespace: 'botania' },
    { name: 'terrasteel', oItems: ['nugget', 'ingot', 'block'], namespace: 'botania' },
    { name: 'gaia', oItems: ['ingot'], namespace: 'botania' },
    { name: 'alfsteel', oItems: ['nugget', 'ingot', 'block'], namespace: 'mythicbotany' },
]

const mekanism = [
    { name: 'refined_obsidian', oItems: ['nugget', 'ingot', 'block'], namespace: 'mekanism' },
    { name: 'refined_glowstone', oItems: ['nugget', 'ingot', 'block'], namespace: 'mekanism' }        
]


const modalloys = [
    // --- EnderIO Alloys ---
    { name: 'copper_alloy', components: '1x copper, 1x silicon', color: 0x935B3B, iconSet: 'METALLIC', voltage: 32, loss: 2, cBlast: { temp: 1700, duration: 400, volts: 128 } },
    { name: 'conductive_alloy', components: '1x iron, 1x redstone', color: 0xF7B066, iconSet: 'METALLIC', voltage: 128, loss: 1, cBlast: { temp: 1700, duration: 400, volts: 128 } },
    { name: 'energetic_alloy', components: '1x gold, 1x redstone, 1x glowstone', color: 0xFFB933, iconSet: 'METALLIC', voltage: 512, loss: 2, cBlast: { temp: 1700, duration: 400, volts: 128 } },
    { name: 'vibrant_alloy', components: '1x energetic_alloy, 1x ender_pearl', color: 0xB6F132, iconSet: 'METALLIC', voltage: 2048, loss: 1, cBlast: { temp: 2700, duration: 400, volts: 512 } },
    { name: 'pulsating_alloy', components: '1x iron, 1x ender_pearl', color: 0x66FF82, iconSet: 'METALLIC', voltage: 2048, loss: 2, cBlast: { temp: 1700, duration: 400, volts: 512 } },
    { name: 'soularium', components: '1x gold, 1x soul_sand', color: 0x56402C, iconSet: 'METALLIC', voltage: 128, loss: 0, cBlast: { temp: 2700, duration: 400, volts: 512 } },
    { name: 'dark_steel', components: '1x steel, 1x carbon, 1x obsidian', color: 0x3D3D3D, iconSet: 'METALLIC', voltage: 512, loss: 2, cBlast: { temp: 2700, duration: 400, volts: 512 } },
    { name: 'end_steel', components: '1x dark_steel, 1x endstone, 1x obsidian', color: 0xE6F1A8, iconSet: 'METALLIC', voltage: 2048, loss: 0, cBlast: { temp: 3600, duration: 400, volts: 2048 } },

    // --- Thermal Alloys ---
    { name: 'signalum', pipe: true, color: 0xFF5500, iconSet: 'METALLIC', voltage: 128, loss: 1, components: '1x silver, 3x copper, 4x redstone', cBlast: { temp: 1700, duration: 400, volts: 512 } },
    { name: 'lumium', pipe: true, color: 0xFFFFAA, iconSet: 'METALLIC', voltage: 512, loss: 1, components: '1x silver, 3x tin, 2x glowstone', cBlast: { temp: 1700, duration: 600, volts: 2048 } },
    { name: 'enderium', pipe: true, color: 0x0B6156, iconSet: 'METALLIC', voltage: 2048, loss: 1, components: '1x diamond, 3x lead, 2x ender_pearl', cBlast: { temp: 2700, duration: 800, volts: 8192 } },

    // --- Botania Metals ---
    { name: 'manasteel', element: 'manasteel', color: 0x47CCFF, cDust: true, iconSet: 'METALLIC', voltage: 128, loss: 1 },
    { name: 'elementium', element: 'elementium', color: 0xF687FF, cDust: true, iconSet: 'METALLIC', voltage: 512, loss: 2 },
    { name: 'terrasteel', element: 'terrasteel', color: 0x34FF23, cDust: true, iconSet: 'METALLIC', voltage: 2048, loss: 2 },
    { name: 'gaia', element: 'gaia', color: 0xF7A8D8, cDust: true, iconSet: 'METALLIC', voltage: 131072, loss: 2 },
    { name: 'alfsteel', element: 'alfsteel', color: 0xFD9D32, cDust: true, iconSet: 'METALLIC', voltage: 32768, superconductor: true },

    // --- Magic Gating Materials ---
    { name: 'hellforged', element: 'hellforged', color: 0xC1D5EC, iconSet: 'METALLIC', voltage: 512, loss: 2 },
    { name: 'iesnium', oItem: 'occultism:iesnium_ingot', element: 'iesnium', color: 0x9FD1FF, iconSet: 'METALLIC', voltage: 512, loss: 1 },

    // --- AllTheModium End-Game Gating ---
    { name: 'allthemodium', element: 'allthemodium', color: 0xFAD64A, iconSet: 'METALLIC', voltage: 32768, superconductor: true, cBlast: { temp: 5400, duration: 1200, volts: 8192 } },
    { name: 'vibranium', element: 'vibranium', color: 0x6DFF6D, iconSet: 'METALLIC', voltage: 131072, superconductor: true, cBlast: { temp: 5400, duration: 1200, volts: 8192 } },
    { name: 'unobtainium', element: 'unobtainium', color: 0xA336FF, iconSet: 'METALLIC', voltage: 524288, superconductor: true, cBlast: { temp: 5400, duration: 1200, volts: 8192 } },

    // --- Draconic Evolution ---
    { name: 'draconium', element: 'draconium', color: 0x502C6C, iconSet: 'SHINY', voltage: 8192, loss: 1, cBlast: { temp: 4500, duration: 1200, volts: 8192 } },
    { name: 'draconium_awakened', element: 'draconium_awakened', color: 0xFF6600, iconSet: 'BRIGHT', voltage: 2097152, superconductor: true },
    { name: 'tenebrium', element: 'tenebrium', color: 0x101010, iconSet: 'METALLIC', voltage: 8388608, superconductor: true },

    // --- Mekanism Processing ---
    { name: 'refined_obsidian', components: '1x obsidian, 1x diamond', color: 0x5C3854, iconSet: 'SHINY', voltage: 2048, loss: 2 },
    { name: 'refined_glowstone', components: '1x glowstone, 1x osmium', color: 0xFFE30B, iconSet: 'SHINY', voltage: 2048, loss: 1 },
    { name: 'alloy_infused', pipe: true, components: '1x iron', color: 0xE61940, iconSet: 'METALLIC', voltage: 32768, loss: 2 },
    { name: 'alloy_reinforced', pipe: true, components: '1x alloy_infused', color: 0x00F5FF, iconSet: 'METALLIC', voltage: 131072, loss: 2 },
    { name: 'alloy_atomic', pipe: true, components: '1x alloy_reinforced', color: 0xBF40FF, iconSet: 'METALLIC', voltage: 524288, loss: 2 },

    // --- Tech Automation Basics ---
    { name: 'compressed_iron', components: '1x iron', color: 0x474747, cDust: true, iconSet: 'METALLIC', voltage: 128, loss: 1 },
    { name: 'hop_graphite', components: '8x carbon', color: 0x1C1C1C, iconSet: 'DULL', voltage: 8192, loss: 1 },

    // --- Industrial Foregoing & Tech Frames ---
    { name: 'pink_slime', element: 'pink_slime', components: '2x iron, 2x gold', color: 0xE66EA9, iconSet: 'SHINY', voltage: 512, loss: 2 },
    { name: 'plastic', oItem: 'industrialforegoing:plastic', color: 0xA9A9A9, iconSet: 'DULL', voltage: 0, loss: 0 },
    { name: 'deorum', element: 'deorum', components: '4x carbon, 1x gold', color: 0xFFD700, iconSet: 'METALLIC', voltage: 128, loss: 1 },
    { name: 'ferrognetic', pipe: true, color: 0xD1D1D1, components: '1x garmonbozia, 1x dark_steel, 1x pink_slime, 1x alfsteel, 1x hellforged, 1x iesnium', iconSet: 'METALLIC', voltage: 131072, loss: 1, cBlast: { temp: 5400, duration: 1200, volts: 8192 } },

    // --- Advanced Hybrid Materials (Naquadah/ATM) ---
    { name: 'naquamodium', color: 0xF8FF40, iconSet: 'METALLIC', voltage: 32768, superconductor: true, cDust: true, components: '5x naquadah, 3x allthemodium', cBlast: { temp: 2700, duration: 1200, volts: 512 } },
    { name: 'naquabranium', color: 0x00FF00, iconSet: 'METALLIC', voltage: 131072, superconductor: true, cDust: true, components: '5x naquadah, 3x vibranium', cBlast: { temp: 3600, duration: 1200, volts: 2048 } },
    { name: 'naquatainium', color: 0x9D40FF, iconSet: 'METALLIC', voltage: 524288, superconductor: true, cDust: true, components: '5x naquadah, 3x unobtainium', cBlast: { temp: 4500, duration: 1200, volts: 8192 } },

    // --- Cosmic & Singularity End-Game Alloys ---
    { name: 'eternium', pipe: true, magnetic: true, color: 0x2d7d69, iconSet: 'METALLIC', components: '2x eternal, 4x sculk, 2x ferrognetic, 3x netherite, 5x neutronium', voltage: 8388608, loss: 16, cBlast: { temp: 10800, duration: 1200, volts: 2097152 } },
    { name: 'cosmic_alloy', pipe: true, color: 0xe4ac29, iconSet: 'METALLIC', components: '3x cosmic_matter, 4x alfsteel, 3x americium, 2x naquadria, 2x nether_star', voltage: 33554432, loss: 16, cBlast: { temp: 12600, duration: 1500, volts: 8388608 } },
    { name: 'antimatter_alloy', pipe: true, color: 0x8a3947, iconSet: 'METALLIC', components: '3x antimatter, 3x duranium, 2x darmstadtium, 4x iridium', voltage: 134217728, loss: 16, cBlast: { temp: 15300, duration: 2000, volts: 33554432 } },
    { name: 'singularity_alloy', pipe: true, color: 0xab24a2, iconSet: 'METALLIC', voltage: 536870912, loss: 16, cBlast: { temp: 18900, duration: 2500, volts: 134217728 } },
    { name: 'absolute_alloy', pipe: true, color: 0xE6F2FF, iconSet: 'METALLIC', voltage: 2147483647, loss: 16, cBlast: { temp: 21600, duration: 3000, volts: 536870912 } },

    // --- Extreme Tech Overhaul (UEV - MAX) ---
    { name: 'alltheneutronium', pipe: true, color: 0xfcfc3d, iconSet: 'METALLIC', components: '2x naquamodium, 2x neutronium, 1x alloy_infused, 3x corrosive', voltage: 8388608, loss: 0, superconductor: false, cBlast: { temp: 10800, duration: 1200, volts: 32768 }, rotor: { speed: 1200, power: 300, efficiency: 13.0, durability: 655360 } },
    { name: 'vibtronium', pipe: true, color: 0x72fcb7, iconSet: 'METALLIC', components: '2x naquabranium, 2x alltheneutronium, 1x alloy_reinforced, 3x destructive', voltage: 33554432, loss: 0, superconductor: false, cBlast: { temp: 12600, duration: 1200, volts: 131072 }, rotor: { speed: 1400, power: 400, efficiency: 14.0, durability: 2621440 } },
    { name: 'unobtronium', pipe: true, color: 0xe782f2, iconSet: 'METALLIC', components: '2x naquatainium, 2x vibtronium, 1x alloy_atomic, 3x vengeful', voltage: 134217728, loss: 0, superconductor: false, cBlast: { temp: 15300, duration: 1200, volts: 524288 }, rotor: { speed: 1600, power: 500, efficiency: 16.0, durability: 10485760 } },
    { name: 'deorum_alloy', pipe: true, color: 0xCCDD22, iconSet: 'METALLIC', components: '3x naquadria, 2x deorum, 2x trinium, 3x steadfast', voltage: 536870912, loss: 0, superconductor: false, cBlast: { temp: 18900, duration: 1200, volts: 524288 }, rotor: { speed: 1800, power: 600, efficiency: 18.0, durability: 41943040 } },
    { name: 'demonic_alloy', pipe: true, color: 0x22DDCC, iconSet: 'METALLIC', components: '3x demon, 3x tenebrium, 3x caesium, 3x tritanium, 3x gaia', voltage: 2147483647, loss: 0, superconductor: false, cBlast: { temp: 21600, duration: 1200, volts: 524288 }, rotor: { speed: 2000, power: 800, efficiency: 20.0, durability: 167772160 } },

    { name: 'rhenium_nickel_alloy', color: 0xEAEAEA, iconSet: 'METALLIC', components: '3x rhenium, 1x nickel', voltage: 524288, loss: 2, superconductor: false, cBlast: { temp: 5400, duration: 1200, volts: 524288 }, rotor: { speed: 800, power: 500, efficiency: 10.0, durability: 163840 } },
    { name: 'rheni_zirconium_alloy', color: 0x7B1FA2, iconSet: 'METALLIC', components: '1x rhenium_nickel_alloy, 1x zirconium', cBlast: { temp: 5400, duration: 1200, volts: 524288 }, rotor: { speed: 1000, power: 750, efficiency: 15.0, durability: 327680 } },
    { name: 'thorium_berkelium_alloy', color: 0x7B1FA2, iconSet: 'METALLIC', components: '2x thorium, 1x berkelium', voltage: 131072, superconductor: true, cBlast: { temp: 7200, duration: 1200, volts: 131072 }, rotor: { speed: 1000, power: 750, efficiency: 15.0, durability: 327680 } },
    { name: 'potassium_calcium_orthosilicate', color: 0xDAA520, iconSet: 'METALLIC', components: '2x potassium, 1x calcium, 1x silicon, 4x oxygen', cBlast: { temp: 7200, duration: 1200, volts: 131072 }, rotor: { speed: 1200, power: 850, efficiency: 17.0, durability: 400000 } },
    { name: 'bedrockium', color: 0x101010, iconSet: 'METALLIC' },
    { name: 'cesium', element: 'cesium', color: 0xE6CA65, iconSet: 'METALLIC', oDust: 'chemlib:cesium_dust', oItem: 'chemlib:cesium_ingot', cIngot: true }

];

const gasses = [
    { name: 'hydrogen_selenide', components: '2x hydrogen, 1x selenium', color: 0xDCDCDC, iconSet: 'METALLIC', formula: 'H2Se' },
    { name: 'ozone', components: '3x oxygen', color: 0x3366FF, formula: 'O3', iconSet: 'FLUID' },
    { name: 'carbon_tetroxide', components: '1x carbon, 4x oxygen', color: 0x36454F, iconSet: 'METALLIC', noDecomp: true },
    { name: 'compressed_air', color: 0x80C8F0, temp: 2500, iconSet: 'FLUID' },
    { name: 'terrazine', color: 0x4B0082, iconSet: 'RADIOACTIVE' }
]
const chalks = [
    { name: 'white_chalk', color: 0xFFFFFF, iconSet: 'FLUID' },
    { name: 'yellow_chalk', color: 0xFFD700, iconSet: 'FLUID' },
    { name: 'purple_chalk', color: 0x9D00FF, iconSet: 'FLUID' },
    { name: 'red_chalk', color: 0xFF0000, iconSet: 'FLUID' },
    { name: 'orange_chalk', color: 0xFFA500, iconSet: 'FLUID' },
    { name: 'magenta_chalk', color: 0xFF00FF, iconSet: 'FLUID' },
    { name: 'light_blue_chalk', color: 0xADD8E6, iconSet: 'FLUID' },
    { name: 'lime_chalk', color: 0x00FF00, iconSet: 'FLUID' },
    { name: 'pink_chalk', color: 0xFFC0CB, iconSet: 'FLUID' },
    { name: 'gray_chalk', color: 0x808080, iconSet: 'FLUID' },
    { name: 'light_gray_chalk', color: 0xD3D3D3, iconSet: 'FLUID' },
    { name: 'cyan_chalk', color: 0x00FFFF, iconSet: 'FLUID' },
    { name: 'blue_chalk', color: 0x0000FF, iconSet: 'FLUID' },
    { name: 'brown_chalk', color: 0x8B4513, iconSet: 'FLUID' },
    { name: 'green_chalk', color: 0x008000, iconSet: 'FLUID' },
    { name: 'black_chalk', color: 0x000000, iconSet: 'FLUID' }
]

const fluids = [
    //{ name: 'molten_iesnium', color: 0x6E0099, temp: 1300, iconSet: 'METALLIC' },
    { name: 'cognizant_sanguine_ichor', color: 0x6A0DAD, temp: 300, iconSet: 'FLUID' },
    { name: 'stellar_sanguine_plasma', color: 0xE0FFFF, temp: 300, iconSet: 'FLUID' },
    { name: 'resonant_sanguine_void', color: 0x191970, temp: 300, iconSet: 'FLUID' },
    { name: 'insanium_infused_singularity', color: 0x5e00a8, temp: 300, iconSet: 'DULL' },
    { name: 'aetheric_sanguine_singularity', color: 0xFFD700, temp: 300, iconSet: 'DULL' },
    { name: 'refined_sanguine_plasma', color: 0xFF4500, temp: 5000, iconSet: 'FLUID' },
    { name: 'liquid_draconic_essence', color: 0xFF8C00, temp: 3000, iconSet: 'FLUID' },
    { name: 'gt_cracked_lpg', color: 0xE1E1AF, temp: 600, iconSet: 'FLUID' },
    { name: 'gt_cracked_kerosene', color: 0xFFB300, temp: 800, iconSet: 'FLUID' },
    { name: 'liquid_vengeance', color: 0xB197C2, temp: 200, iconSet: 'FLUID' },
    { name: 'saturated_life_fertilizer', color: 0x4CAF50, temp: 200, iconSet: 'FLUID' },
    { name: 'liquid_fertilizer', color: 0x241105, temp: 200, iconSet: 'FLUID' },
    //{ name: 'molten_demonite', color: 0x7BA4B1, temp: 2500, iconSet: 'METALLIC' },

    //{ name: 'liquid_rotten_flesh', color: 0x934537, temp: 2500, iconSet: 'FLUID' },        
    { name: 'picoline', color: 0x9E9B54, components: '6x carbon, 7x hydrogen, 1x nitrogen', formula: 'C6H7N', iconSet: 'FLUID' },
    { name: 'cyanopyridine', color: 0x4A6B82, components: '6x carbon, 4x hydrogen, 2x nitrogen', formula: 'C6H4N2', iconSet: 'FLUID' },
    { name: 'acetaldehyde', color: 0xC2B280, components: '1x ethylene, 1x oxygen', formula: 'C2H4O', iconSet: 'FLUID' },

    
    
    { name: 'primordial_sanguine_plasma', color: 0x2E2E2E, iconSet: 'FLUID' },
    { name: 'primordial_cosmic_soup', color: 0xBF00FF, iconSet: 'FLUID' },    
    { name: 'unrefined_white_blood', color: 0xF5F5FF, iconSet: 'FLUID' },
    { name: 'ethereal_white_blood', color: 0xFFFFFF, iconSet: 'FLUID' },
    { name: 'unrefined_red_blood', color: 0x8B0000, iconSet: 'FLUID' },
    { name: 'liquid_pain_and_suffering', color: 0x4B0082, iconSet: 'FLUID' },
    { name: 'energized_glowing_catalyst', color: 0xFFFACD, iconSet: 'FLUID' },
    { name: 'destabilized_red_catalyst', color: 0xFF0000, iconSet: 'FLUID' },
    { name: 'essence_of_creation', color: 0x7FFFD4, iconSet: 'FLUID' },
    { name: 'essence_of_destruction', color: 0x2F4F4F, iconSet: 'FLUID' },
    { name: 'stable_life_essence', color: 0xFF69B4, iconSet: 'FLUID' },
    { name: 'saturated_tau', color: 0xFF8C00, iconSet: 'FLUID' },
    { name: 'liquid_dragon_breath', color: 0xe577e3, iconSet: 'FLUID' },    
    { name: 'aureal', color: 0xA1C2F7, iconSet: 'FLUID' },
    { name: 'liquid_chaos', color: 0x111111, iconSet: 'FLUID' },
    { name: 'radioactive_acetate_slurry', color: 0x99FF33, iconSet: 'RADIOACTIVE' },
    { name: 'mixed_radioactive_concentrate', color: 0xCCFF66, iconSet: 'FLUID' },
    { name: 'diluted_acetic_acid', components: '1x acetic_acid, 1x water', formula: '(C2H4O2)(H2O)', color: 0xDDDDDD, iconSet: 'FLUID', noDecomp: true },
    { name: 'radium_acetate', color: 0xFFCC00, components: '2x acetic_acid, 1x radium', formula: 'Ra(C2H3O2)2', iconSet: 'FLUID', noDecomp: true },
    { name: 'astatine_acetate', color: 0x800080, components: '2x acetic_acid, 1x astatine', formula: 'At(C2H3O2)2', iconSet: 'FLUID', noDecomp: true },
    { name: 'francium_acetate', color: 0xFFFFFF, components: '2x acetic_acid, 1x francium', formula: 'Fr(C2H3O2)2', iconSet: 'FLUID', noDecomp: true },
    { name: 'radioactive_bioresidue', color: 0x4B3621, components: '1x thorium, 1x phosphorus, 6x oxygen', iconSet: 'RADIOACTIVE', noDecomp: true },
    { name: 'germanium_tetrachloride', color: 0x73877B, components: '1x germanium, 4x chlorine', noDecomp: true, iconSet: 'FLUID' },
    { name: 'tellurous_acid', components: '2x hydrogen, 1x tellurium, 3x oxygen', color: 0x9FB6CD, formula: 'H2TeO3', noDecomp: true, iconSet: 'FLUID' },
    { name: 'sodium_tellurite_solution', components: '2x sodium, 1x tellurium, 3x oxygen, 1x water', color: 0xEEF2F5, formula: '(Na2TeO3)(H2O)', iconSet: 'FLUID' },

    { name: 'peroxodisulfuric_acid', components: '2x sulfur, 6x oxygen, 2x hydrogen_peroxide', color: 0xCCDDFF, formula: 'H2S2O8', iconSet: 'FLUID' },

    { name: 'sodium_germanate_solution', components: '2x sodium, 1x germanium, 3x oxygen, 1x water', color: 0xE8DCC8, formula: '(Na2GeO3)(H2O)', iconSet: 'FLUID' },
    { name: 'perrhenic_acid', components: '1x hydrogen, 1x rhenium, 4x oxygen', formula: 'HReO4', color: 0xDCD0FF, iconSet: 'FLUID', noDecomp: true },
    { name: 'unrefined_xylene', color: 0xDEC77E, iconSet: 'FLUID' },
    { name: 'rhenate_blend_fuel', color: 0xCC6633, iconSet: 'FLUID' },
    { name: 'xylene', color: 0xEBD078, iconSet: 'FLUID' },
    { name: 'sanguine_concentrate', color: 0x8A0303, iconSet: 'FLUID' },
    { name: 'conduit_binder', color: 0x9D9A8D, iconSet: 'FLUID' },
    { name: 'hexafluorozirconic_acid', components: '2x hydrogen, 1x zirconium, 6x fluorine', color: 0xCCFFFF, iconSet: 'FLUID', noDecomp: true },
    { name: 'refined_seed_oil', color: 0xE6E600, iconSet: 'FLUID', burnTime: 5 },
    { name: 'crystallized_oil', color: 0xFFFFF0, iconSet: 'FLUID', burnTime: 20 },
    { name: 'empowered_oil', color: 0xFFA500, iconSet: 'FLUID', burnTime: 40 },

    { name: 'poison_agent', components: '1x astatine, 1x evilcraft:poison', color: 0x4A154B, iconSet: 'FLUID' },
    { name: 'paralytic_agent', components: '1x poison_agent, 1x twilightforest:thorn_rose', color: 0x2D0C35, iconSet: 'FLUID', nodecomp: true },
    { name: 'mind_control_serum', components: '1x terrazine, 1x mind_numbing_agent', color: 0x00FFFF, iconSet: 'FLUID' },
    { name: 'concentrated_dark_matter', components: '1x cesium, 1x water', color: 0x1A0033, iconSet: 'FLUID', noDecomp: true },

    { name: 'activated_carbon_slurry', components: '1x activated_carbon, 1x zinc, 1x hydrochloric_acid', color: 0x1A1A1A, iconSet: 'DULL' },
    { name: 'water_stage_1', components: '1x water', color: 0x33A1DE, iconSet: 'FLUID' },
    { name: 'water_stage_2', components: '1x water', color: 0x3366FF, iconSet: 'FLUID' },
    { name: 'water_stage_3', components: '1x water', color: 0x4682B4, iconSet: 'FLUID' },
    { name: 'water_stage_4', components: '1x water', color: 0x5F9EA0, iconSet: 'FLUID' },
    { name: 'water_stage_5', components: '1x water', color: 0xAFEEEE, iconSet: 'FLUID' },
    { name: 'water_stage_6', components: '1x water', color: 0x87CEEB, iconSet: 'FLUID' },
    { name: 'polyaluminium_chloride', components: '1x chlorine, 1x aluminium', color: 0xCCCCCC, iconSet: 'DULL' },    
    { name: 'spent_flocculant_slurry', components: '1x chlorine, 1x aluminium', color: 0x555555, iconSet: 'DULL', noDecomp: true },
    { name: 'super_coolant', color: 0x82C4E5, iconSet: 'FLUID' },
    { name: 'purest_water', components: '1x water', color: 0x00BFFF, iconSet: 'FLUID' },
    { name: 'inert_gas_mixture', color: 0x8899A6, iconSet: 'FLUID' },
    { name: 'ionized_oxygen', color: 0x3399FF, iconSet: 'FLUID' }
];

const polymers = [
    { name: "chaos_plastic", color: 0x222222 },
    { name: "empowered_polymer", color: 0x647B82 },
    { name: 'fluorozirconic_composite', color: 0x4DD0E1, components: '1x zirconium, 6x fluorine, 2x carbon' },
];

const dusts = [
    { name: 'neutrino', color: 0xFF990F, iconSet: 'METALLIC' },
    { name: 'phantom_membrane', color: 0xC1B79F, iconSet: 'DULL' },
    { name: 'cerium_chloride', components: '1x cerium, 2x chlorine', color: 0xE0DED0, iconSet: 'METALLIC' },
    { name: 'carbonate', components: '1x carbon, 3x oxygen', color: 0xF4F4F4, iconSet: 'DULL' },
    { name: 'sodium_carbonate', components: '2x sodium, 1x carbonate', color: 0xF5F5EC, iconSet: 'DULL' },
    { name: 'strontium_sulfide', components: '1x strontium, 1x sulfur', color: 0xD1D7DC, iconSet: 'METALLIC', noDecomp: true },
    { name: 'strontium_chloride', components: '1x strontium, 2x chlorine', color: 0xD1D7DC, iconSet: 'METALLIC' },
    { name: 'strontium_carbonate', components: '1x strontium, 1x carbonate', color: 0xE2E5DC, iconSet: 'DULL', noDecomp: true },
    { name: 'sodium_tellurite', components: '2x sodium, 1x tellurium, 3x oxygen', color: 0xF0F8FF, formula: 'Na2TeO3', noDecomp: true, iconSet: 'DULL' },
    { name: 'tellurium_dioxide', components: '1x tellurium, 2x oxygen', color: 0xDEDFE1, formula: 'TeO2', noDecomp: true, iconSet: 'DULL' },
    { name: 'sodium_sulfate', components: '2x sodium, 1x sulfur, 4x oxygen', color: 0xF5F5F5, formula: 'Na2SO4', iconSet: 'DULL' },
    { name: 'germanium_dioxide', components: '1x germanium, 2x oxygen', color: 0xEEF2F7, iconSet: 'DULL', noDecomp: true },
    { name: 'germanium_sulfate', components: '1x germanium, 2x sulfur,  8x oxygen', color: 0xE8ECEF, iconSet: 'DULL', noDecomp: true },
    { name: 'sodium_perrhenate', components: '1x sodium, 1x rhenium, 4x oxygen', color: 0xE6E6FA, iconSet: 'DULL', noDecomp: true },
    { name: 'rhenium_heptasulfide', components: '2x rhenium, 7x sulfur', color: 0x2E2B2A, iconSet: 'DULL', noDecomp: true },
    { name: 'wollastonite', components: '1x calcium, 1x silicon, 3x oxygen', color: 0xF0F8FF, iconSet: 'DULL' },
    { name: 'calcium_zirconate', components: '1x calcium, 1x zirconium, 3x oxygen', color: 0xE6E6FA, iconSet: 'DULL', noDecomp: true },
    { name: 'potassium_fluoride', components: '1x potassium, 1x fluorine', color: 0xFFAAAA, iconSet: 'DULL' },
    { name: 'calcium_fluoride', components: '1x calcium, 2x fluorine', color: 0xFFFAFA, iconSet: 'DULL', fluid: true },
    { name: 'potassium_hexafluorozirconate', components: '2x potassium, 1x zirconium, 6x fluorine', color: 0x99CCFF, iconSet: 'METALLIC', noDecomp: true },
    { name: 'potassium_calcium_silicate', components: '1x potassium, 1x calcium, 1x silicon, 1x fluorine, 3x oxygen', color: 0xD3D3D3, iconSet: 'DULL', noDecomp: true },
    { name: 'calcium_sulfide', components: '1x calcium, 1x sulfur', color: 0xFFFFE0, iconSet: 'DULL' },
    { name: 'potassium_thorium_hexafluoride', components: '2x potassium, 1x thorium, 6x fluorine', color: 0xE6E6FA, iconSet: 'DULL', formula: 'K2ThF6' },
    { name: 'calcium_nitrate', components: '1x calcium, 2x nitrogen, 6x oxygen', color: 0xD3D3D3, iconSet: 'DULL', formula: 'Ca(NO3)2' },
    { name: 'berkelium_osmium_phosphate', components: '1x berkelium, 1x osmium, 1x phosphorus, 4x oxygen', color: 0x4B0082, iconSet: 'METALLIC', formula: 'BkOsPO4' },
    { name: 'dicalcium_trisilicate', components: '2x calcium, 3x silicon, 8x oxygen', color: 0xE0E0E0, iconSet: 'DULL', formula: 'Ca2Si3O8' },
    { name: 'calcium_sulfate', components: '1x calcium, 1x sulfur, 4x oxygen', color: 0xF5F5DC, iconSet: 'DULL', formula: 'CaSO4', noDecomp: true },
    { name: 'silver_sulfate', components: '2x silver, 1x sulfur, 4x oxygen', color: 0xDCDCDC, iconSet: 'METALLIC', formula: 'Ag2SO4' },
    { name: 'sanguine_terraria', components: '2x terrasteel, 1x elementium, 1x manasteel, 1x gaia', byproducts: ['elementium', 'manasteel'], iconSet: 'METALLIC', color: 0xFF8888, noDecomp: true },

    { name: 'soul_essence', color: 0x1A75FF, iconSet: 'SHINY' },
    { name: 'mind_numbing_agent', color: 0x00FFCC, iconSet: 'DULL' },
    { name: 'aluminium_hydroxide', color: 0xEEEEEE, iconSet: 'DULL', components: '1x aluminium, 3x oxygen, 3x hydrogen', formula: 'Al(OH)3' },
    { name: 'picolinic_acid', color: 0x7E57C2, components: '6x carbon, 5x hydrogen, 1x nitrogen, 2x oxygen', formula: 'C6H5NO2', iconSet: 'DULL' }    


];

const newOres = [
    { name: 'calaverite', components: '2x tellurium, 1x gold', byproducts: ['calaverite', 'gold'], iconSet: 'METALLIC', color: 0xDAC084, noDecomp: true },
    { name: 'celestite', components: '1x strontium, 1x sulfur, 4x oxygen', byproducts: ['celestite', 'sulfur'], iconSet: 'METALLIC', color: 0xADD8E6, noDecomp: true },
    //{ name: 'celestine', components: '1x strontium, 1x sulfur, 4x oxygen', byproducts: ['celestine', 'strontium'], iconSet: 'GEM_VERTICAL', color: 0xADD8E6, noDecomp: true },

    { name: 'radio_thoric_phosphate', components: '1x thorium, 1x uranium, 1x radium, 1x francium, 1x astatine, 4x phosphorus, 16x oxygen', byproducts: ['thorium', 'uranium', 'plutonium'], color: 0x7FFF00, iconSet: 'RADIOACTIVE', formula: '(ThURaFrAt)(PO4)4', noDecomp: true },
    { name: 'argyrodite', components: '1x germanium, 6x sulfur, 8x silver', byproducts: ['argyrodite', 'sulfur', 'silver'], iconSet: 'METALLIC', color: 0x8C7B70, noDecomp: true },
    { name: 'kurilite', components: '8x silver, 3x tellurium, 1x selenium', byproducts: ['kurilite', 'silver'], iconSet: 'METALLIC', color: 0x4A5D23, noDecomp: true },
    { name: 'telluride', components: '1x tellurium, 1x silver', byproducts: ['telluride', 'silver'], iconSet: 'METALLIC', color: 0xC0C0D0, noDecomp: true },
    { name: 'zircon', components: '1x zirconium, 1x silicon, 4x oxygen', byproducts: ['zircon', 'silicon'], color: 0xFFB3B3, iconSet: 'METALLIC', noDecomp: true },
    { name: 'baddeleyite', components: '1x zirconium, 2x oxygen', color: 0x9999FF, iconSet: 'DULL', noDecomp: true },
    { name: 'rhenite', components: '1x rhenium, 2x sulfur', byproducts: ['rhenite', 'sulfur'], iconSet: 'METALLIC', color: 0x8A8A8A, noDecomp: true },
    //{ name: 'rheniite', components: '1x rhenium, 2x sulfur', byproducts: ['rheniite', 'rhenium'], iconSet: 'METALLIC', color: 0x505050, noDecomp: true },
    { name: 'hellish', components: '1x hellforged, 1x iesnium', byproducts: ['hellforged', 'iesnium'], iconSet: 'METALLIC', color: 0x880808, noDecomp: true },
    { name: 'tenebrius', components: '3x tenebrium, 1x hellforged, 1x iesnium', byproducts: ['hellforged', 'iesnium'], iconSet: 'METALLIC', color: 0x101010, noDecomp: true },
    { name: 'terraria', components: '2x terrasteel, 1x elementium, 1x manasteel, 1x gaia', byproducts: ['elementium', 'manasteel'], iconSet: 'METALLIC', color: 0xF7A8D8, noDecomp: true },

    // Selenium
    { name: 'clausthalite', components: '1x lead, 1x selenium', byproducts: ['clausthalite', 'lead'], iconSet: 'METALLIC', color: 0xC8C8D2, noDecomp: true },
    { name: 'crookesite', components: '2x copper, 1x thallium, 1x silver, 1x selenium', byproducts: ['crookesite', 'thallium', 'selenium'], iconSet: 'METALLIC', color: 0x8A7048, noDecomp: true },
    { name: 'naumannite', components: '2x silver, 1x selenium', byproducts: ['naumannite', 'selenium'], iconSet: 'METALLIC', color: 0x4A4A52, noDecomp: true },

    // Indium
    { name: 'roquesite', components: '1x copper, 1x indium, 2x sulfur', byproducts: ['roquesite', 'indium'], iconSet: 'METALLIC', color: 0x8C8C96, noDecomp: true },
    { name: 'indite', components: '1x iron, 2x indium, 4x sulfur', byproducts: ['indite', 'indium'], iconSet: 'METALLIC', color: 0x5C5C64, noDecomp: true },
    { name: 'sakuraiite', components: '1x copper, 1x zinc, 1x indium, 1x tin, 4x sulfur', byproducts: ['sakuraiite', 'indium'], iconSet: 'METALLIC', color: 0x707888, noDecomp: true },

    // Hafnium
    { name: 'hafnian_zircon', components: '1x zirconium, 1x hafnium, 1x silicon, 4x oxygen', byproducts: ['hafnian_zircon', 'hafnium', 'zirconium'], iconSet: 'METALLIC', color: 0xB8C8D0, noDecomp: true },
    { name: 'hafnon', components: '1x hafnium, 1x silicon, 4x oxygen', byproducts: ['hafnon', 'hafnium'], iconSet: 'METALLIC', color: 0xC0CCD8, noDecomp: true },

    // Rubidium
    { name: 'rubicline', components: '1x rubidium, 1x potassium, 1x aluminium, 3x silicon, 8x oxygen', byproducts: ['rubicline', 'rubidium'], iconSet: 'DULL', color: 0xF0C8DC, noDecomp: true },
    

    // Thallium
    { name: 'lorandite', components: '1x thallium, 1x arsenic, 2x sulfur', byproducts: ['lorandite', 'thallium'], iconSet: 'METALLIC', color: 0xB22222, noDecomp: true },
    { name: 'hutchinsonite', components: '1x thallium, 1x lead, 5x arsenic, 9x sulfur', byproducts: ['hutchinsonite', 'thallium', 'lead'], iconSet: 'METALLIC', color: 0x782828, noDecomp: true },

    // Scandium
    { name: 'thortveitite', components: '2x scandium, 2x silicon, 7x oxygen', byproducts: ['thortveitite', 'scandium'], iconSet: 'METALLIC', color: 0x4A5C3C, noDecomp: true },
    { name: 'kolbeckite', components: '1x scandium, 1x phosphorus, 4x oxygen', byproducts: ['kolbeckite', 'scandium'], iconSet: 'DULL', color: 0x5C7050, noDecomp: true },
    { name: 'bazzite', components: '3x beryllium, 2x scandium, 6x silicon, 18x oxygen', byproducts: ['bazzite', 'scandium', 'beryllium'], iconSet: 'GEM_VERTICAL', color: 0x6EC8C0, noDecomp: true },

    // Gallium
    { name: 'gallite', components: '1x copper, 1x gallium, 2x sulfur', byproducts: ['gallite', 'gallium'], iconSet: 'METALLIC', color: 0xDCC8E6, noDecomp: true },
    

    // Tantalum & Niobium
    { name: 'columbite_tantalite', components: '1x iron, 1x manganese, 2x niobium, 2x tantalum, 6x oxygen', byproducts: ['columbite_tantalite', 'niobium', 'tantalum'], iconSet: 'METALLIC', color: 0x3C3C46, noDecomp: true },
    { name: 'microlite', components: '2x calcium, 2x tantalum, 7x oxygen', byproducts: ['microlite', 'tantalum'], iconSet: 'METALLIC', color: 0x8C7850, noDecomp: true },
    { name: 'wodginite', components: '1x manganese, 1x iron, 1x tin, 1x tantalum, 1x titanium, 1x niobium, 8x oxygen', byproducts: ['wodginite', 'tantalum', 'niobium'], iconSet: 'METALLIC', color: 0x463C34, noDecomp: true },    
    { name: 'fergusonite', components: '1x yttrium, 1x niobium, 4x oxygen', byproducts: ['fergusonite', 'yttrium', 'niobium'], iconSet: 'METALLIC', color: 0x3C3428, noDecomp: true },

    // Rhenium    
    { name: 'tarkianite', components: '1x copper, 4x rhenium, 4x molybdenum, 8x sulfur', byproducts: ['tarkianite', 'rhenium', 'molybdenum'], iconSet: 'METALLIC', color: 0x686868, noDecomp: true },

    // Strontium
    { name: 'strontianite', components: '1x strontium, 1x carbon, 3x oxygen', byproducts: ['strontianite', 'strontium'], iconSet: 'DULL', color: 0xF0F0DC, noDecomp: true },    

    // Samarium
    { name: 'samarskite', components: '1x yttrium, 1x cerium, 1x uranium, 1x iron, 2x niobium, 2x tantalum, 1x titanium, 8x oxygen', byproducts: ['samarskite', 'samarium', 'yttrium'], iconSet: 'METALLIC', color: 0x2C2418, noDecomp: true },
    { name: 'cerite', components: '3x cerium, 1x lanthanum, 1x calcium, 1x iron, 1x magnesium, 3x silicon, 12x oxygen, 1x fluorine', byproducts: ['cerite', 'samarium', 'lanthanum'], iconSet: 'DULL', color: 0x8C7858, noDecomp: true },

    // Yttrium
    { name: 'xenotime', components: '1x yttrium, 1x phosphorus, 4x oxygen', byproducts: ['xenotime', 'yttrium', 'lutetium'], iconSet: 'METALLIC', color: 0xC8A050, noDecomp: true },
    { name: 'gadolinite', components: '2x yttrium, 1x cerium, 1x iron, 2x beryllium, 2x silicon, 10x oxygen', byproducts: ['gadolinite', 'yttrium'], iconSet: 'DULL', color: 0x3C3428, noDecomp: true },

    // Ruthenium & Osmium
    { name: 'laurite', components: '1x ruthenium, 2x sulfur', byproducts: ['laurite', 'ruthenium', 'osmium'], iconSet: 'METALLIC', color: 0x505860, noDecomp: true },
    //{ name: 'osmiridium', components: '1x osmium, 1x iridium', byproducts: ['osmiridium', 'osmium', 'ruthenium'], iconSet: 'METALLIC', color: 0x788088, noDecomp: true },

    // Germanium
    { name: 'germanite', components: '13x copper, 2x iron, 2x germanium, 16x sulfur', byproducts: ['germanite', 'germanium', 'gallium'], iconSet: 'METALLIC', color: 0x6E5A4A, noDecomp: true },
    { name: 'renierite', components: '11x copper, 4x zinc, 2x iron, 2x germanium, 2x arsenic, 16x sulfur', byproducts: ['renierite', 'germanium'], iconSet: 'METALLIC', color: 0x5A4A3C, noDecomp: true },

    // Bismuth
    { name: 'bismuthinite', components: '2x bismuth, 3x sulfur', byproducts: ['bismuthinite', 'bismuth'], iconSet: 'METALLIC', color: 0xC8B8C0, noDecomp: true },
    { name: 'bismite', components: '2x bismuth, 3x oxygen', byproducts: ['bismite', 'bismuth'], iconSet: 'DULL', color: 0xD8C8A8, noDecomp: true },
    { name: 'bismutite', components: '2x bismuth, 1x carbon, 5x oxygen', byproducts: ['bismutite', 'bismuth'], iconSet: 'DULL', color: 0xB8A898, noDecomp: true },

    // Thorium  - thorianite is added by immersive geology
    { name: 'thorianite', components: '1x thorium, 2x oxygen', byproducts: ['thorianite', 'thorium'], iconSet: 'METALLIC', color: 0x1C1C1C, noDecomp: true },
    { name: 'thorite', components: '1x thorium, 1x silicon, 4x oxygen', byproducts: ['thorite', 'thorium'], iconSet: 'DULL', color: 0x3C3428, noDecomp: true },

    // Cesium    
    { name: 'rhodizite', components: '1x cesium, 1x potassium, 4x aluminium, 4x beryllium, 11x boron, 28x oxygen', byproducts: ['rhodizite', 'cesium'], iconSet: 'GEM_VERTICAL', color: 0xF0F0E0, noDecomp: true },

    // Lanthanum
    { name: 'lanthanite', components: '2x lanthanum, 3x carbon, 9x oxygen', byproducts: ['lanthanite', 'lanthanum'], iconSet: 'DULL', color: 0xD8D8C0, noDecomp: true },

    // Lutetium
    { name: 'yttrialite', components: '2x yttrium, 1x thorium, 2x silicon, 7x oxygen', byproducts: ['yttrialite', 'lutetium', 'yttrium'], iconSet: 'DULL', color: 0x8C8058, noDecomp: true },

    // Fluorine    - cryolite is added by immersive geology
    { name: 'cryolite', components: '3x sodium, 1x aluminium, 6x fluorine', byproducts: ['cryolite', 'fluorine'], iconSet: 'DULL', color: 0xE8E8E8, noDecomp: true },

    // Antimony
    { name: 'ullmannite', components: '1x nickel, 1x antimony, 1x sulfur', byproducts: ['ullmannite', 'antimony'], iconSet: 'METALLIC', color: 0x9A9A9A, noDecomp: true },
    { name: 'jamesonite', components: '4x lead, 2x iron, 6x antimony, 14x sulfur', byproducts: ['jamesonite', 'antimony', 'lead'], iconSet: 'METALLIC', color: 0x605868, noDecomp: true },

];

GTCEuStartupEvents.registry('gtceu:material', event => {

    const getVoltage = (v) => {
        if (v <= 8) return GTValues.V[GTValues.ULV];
        if (v <= 32) return GTValues.V[GTValues.LV];
        if (v <= 128) return GTValues.V[GTValues.MV];
        if (v <= 512) return GTValues.V[GTValues.HV];
        if (v <= 2048) return GTValues.V[GTValues.EV];
        if (v <= 8192) return GTValues.V[GTValues.IV];
        if (v <= 32768) return GTValues.V[GTValues.LuV];
        if (v <= 131072) return GTValues.V[GTValues.ZPM];
        if (v <= 524288) return GTValues.V[GTValues.UV];
        if (v <= 2097152) return GTValues.V[GTValues.UHV];
        if (v <= 8388608) return GTValues.V[GTValues.UEV];
        if (v <= 33554432) return GTValues.V[GTValues.UIV];
        if (v <= 134217728) return GTValues.V[GTValues.UXV];
        if (v <= 536870912) return GTValues.V[GTValues.OpV];
        return GTValues.V[GTValues.MAX];
    };
    const getGasTier = (voltage) => {
        if (voltage <= 512) return GasTier.LOW;       // LV - MV
        if (voltage <= 8192) return GasTier.MID;      // HV - IV
        if (voltage <= 32768) return GasTier.HIGH;    // LuV - ZPM
        if (voltage <= 131072) return GasTier.HIGHER; // UV - UHV
        return GasTier.HIGHEST;                       // UEV+
    };

    dusts.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            .dust()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet || 'METALLIC']);
        if (mat.fluid) {
            materialBuilder.fluid()
        }
        if (mat.components) {
            materialBuilder.components(mat.components.split(', '))
        }
        if (mat.formula) { materialBuilder.formula(mat.formula) }
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION); }
    });

    newOres.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            .dust()
            .ore(2, 1)
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet || 'METALLIC'])

        if (mat.fluid) {
            materialBuilder.fluid()
        }

        if (mat.components) {
            let parts = mat.components.split(', ');
            materialBuilder.components(parts);
        }

        if (mat.formula) { materialBuilder.formula(mat.formula) }
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION); }
    });

    gasses.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            //@ts-ignore                                                   
            //this works to register as a gas
            //.fluid()            
            .gas()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet || GTMaterialIconSet.FLUID])
        if (mat.components) {
            let parts = mat.components.split(', ');
            materialBuilder.components(parts);
        }
        if (mat.formula) { materialBuilder.formula(mat.formula) }
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION); }
    });

    fluids.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            // @ts-ignore               
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet || GTMaterialIconSet.FLUID])
        if (mat.components) {
            let parts = mat.components.split(', ');
            materialBuilder.components(parts);
        }
        if (mat.formula) { materialBuilder.formula(mat.formula) }
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION); }
    });

    
    chalks.forEach(chalk => {
        let materialBuilder = event.create(chalk.name)
            // @ts-ignore               
            .fluid()
            .gem()
            .color(chalk.color)
            .iconSet(GTMaterialIconSet[chalk.iconSet || 'FLUID'])
            .flags(                
                GTMaterialFlags.DISABLE_DECOMPOSITION,
                GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES)                
    });

    let materialBuilder

    materialBuilder = event.create("unrefined_tenebrius")
        .dust()
        .fluid()
        .element('tenebrium')
        .color(0x101010)
        .iconSet(GTMaterialIconSet.RADIOACTIVE);

    materialBuilder = event.create("purified_tenebrius")
        .dust()
        .fluid()
        .element('tenebrium')
        .color(0x101010)
        .iconSet(GTMaterialIconSet.RADIOACTIVE);

    materialBuilder = event.create("refined_tenebrius")
        .dust()
        .fluid()
        .gem()
        .element('tenebrium')
        .color(0x101010)
        .iconSet(GTMaterialIconSet.RADIOACTIVE);

    materialBuilder = event.create("infinity")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element('infinity')
        .color(0xffffff)
        .iconSet("infinity")
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FOIL);

    materialBuilder = event.create("sculk_alloy")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xffffff)
        .iconSet("sculk_alloy")
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FOIL);

    materialBuilder = event.create('garmonbozia')
        // @ts-ignore
        .gem()
        .dust()
        .fluid()
        .color('0xFFFBD0')
        .element('garmonbozia')
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            // @ts-ignore                
            CMMEMaterialFlags.GENERATE_SINGULARITY
        );

    event.create('thorn_rose_dust')
        .dust()
        .color('0xAB3236')
        .iconSet(GTMaterialIconSet.WOOD)

    materialBuilder = event.create('platinum_rhenium_catalyst')
        // @ts-ignore        
        .dust()
        .fluid()
        .polymer()
        .ingot()
        .components('1x platinum', '1x aluminium', '1x rhenium')
        .color('0x8B8C8E')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.DISABLE_DECOMPOSITION);

    
    materialBuilder = event.create('blue_ice')
        .dust()
        .fluid()
        .color('0x739BD0')
        .iconSet(GTMaterialIconSet.GLASS)        

    materialBuilder = event.create('packed_ice')
        .dust()
        .fluid()
        .color('0xA5C2F5')
        .iconSet(GTMaterialIconSet.GLASS)        
    
    materialBuilder = event.create('rotten_flesh')
        .fluid()
        .color('0x934537')
        .polymer()
        .iconSet(GTMaterialIconSet.FLUID)        
    
    materialBuilder = event.create('recycled_organic_matter')        
        .fluid()
        .color('0x6E6259')
        .iconSet(GTMaterialIconSet.FLUID);

    //extreme reactors
    erMaterials.forEach(mat => {
        event.create(mat.name)
            // @ts-ignore
            .ingot()
            .dust()
            .color(mat.color)
            .iconSet(GTMaterialIconSet.RADIOACTIVE)
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                // @ts-ignore
                CMMEMaterialFlags.GENERATE_SINGULARITY
                //need to add singularity recipes
            );
    });

    materialsGem.forEach(mat => {
        let materialBuilder = event.create(mat.name)
        .gem()
        .dust()
        .fluid()
        .color(mat.color)
        .iconSet(GTMaterialIconSet[mat.iconSet])

        if (mat.element) { materialBuilder.element(mat.element) }   
        if (mat.voltage && mat.voltage > 0) { materialBuilder.cableProperties(getVoltage(mat.voltage), 1, mat.loss || 0, mat.superconductor || false) }
        if (mat.components) {
            let parts = mat.components.split(', ')
            materialBuilder.components(parts)
        }
        if (mat.formula) { materialBuilder.formula(mat.formula) }
        if (mat.noDecomp) { materialBuilder.flags(GTMaterialFlags.DISABLE_DECOMPOSITION) }
        if (mat.simple) {
            materialBuilder.flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_LENS,
                // @ts-ignore
                CMMEMaterialFlags.GENERATE_SINGULARITY
            );
        }
        else {                     
            materialBuilder.flags(
                GTMaterialFlags.GENERATE_FOIL,
                GTMaterialFlags.GENERATE_RING,
                GTMaterialFlags.GENERATE_SPRING,
                GTMaterialFlags.GENERATE_SPRING_SMALL,
                GTMaterialFlags.GENERATE_ROUND,
                GTMaterialFlags.GENERATE_FINE_WIRE,
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_DENSE,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_LONG_ROD,
                GTMaterialFlags.GENERATE_GEAR,
                GTMaterialFlags.GENERATE_SMALL_GEAR,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                GTMaterialFlags.GENERATE_FRAME,
                GTMaterialFlags.GENERATE_LENS,
                // @ts-ignore
                CMMEMaterialFlags.GENERATE_SINGULARITY
            );
        }
    });


    let mana_essence = event.create('mana_essence')
        // @ts-ignore
        .gem()
        .fluid()
        .color(0x0099FF)
        .iconSet(GTMaterialIconSet.RADIOACTIVE)
        .flags(
            // @ts-ignore
            CMMEMaterialFlags.GENERATE_SINGULARITY
        );

    //antimatter

    adMats.forEach(mat => {
        let materialbuilder = event.create(mat.name)
            // @ts-ignore
            .dust()
            .ingot()
            .element(mat.element)
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet.SHINY)
            .flags(
                // @ts-ignore
                GTMaterialFlags.GENERATE_FOIL,
                GTMaterialFlags.GENERATE_RING,
                GTMaterialFlags.GENERATE_SPRING,
                GTMaterialFlags.GENERATE_SPRING_SMALL,
                GTMaterialFlags.GENERATE_ROUND,
                GTMaterialFlags.GENERATE_FINE_WIRE,
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_DENSE,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_LONG_ROD,
                GTMaterialFlags.GENERATE_GEAR,
                GTMaterialFlags.GENERATE_SMALL_GEAR,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                GTMaterialFlags.GENERATE_FRAME,                
                // @ts-ignore
                CMMEMaterialFlags.GENERATE_SINGULARITY
            )
    });



    let antimatter = event.create('antimatter')
        // @ts-ignore
        .dust()
        .element('antimatter')
        .fluid()
        .color('0x7d4d88')
        .iconSet(GTMaterialIconSet.RADIOACTIVE);


    let cosmic_matter = event.create('cosmic_matter')
        // @ts-ignore
        .dust()
        .ingot()
        .fluid()
        .element('cosmic')
        .color(0x3b004f)
        .iconSet(GTMaterialIconSet.METALLIC);

    let thorium_doped = event.create('thorium_doped_calcium_fluoride')
        // @ts-ignore
        .dust()
        .gem()
        .fluid()
        .color(0xFF8C00)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        //.components('1x thorium, 1x calcium_fluoride')
        .formula('Th:CaF2');


    const modifyElement = (materialO, materialN, bTemp, volts, gem, polymer, ingot) => {
        let mrp = GTMaterials.get(materialN).getFlags()
        let mmaterialClass = mrp.getClass()
        // @ts-ignore
        let flagsFieldM = mmaterialClass.getDeclaredField("flags")
        flagsFieldM.setAccessible(true)
        let activeFlagsM = flagsFieldM.get(mrp)
        activeFlagsM.remove(GTMaterialFlags.NO_SMELTING)
        activeFlagsM.remove(GTMaterialFlags.FLAMMABLE)
        let material = materialO
        if (bTemp) {
            let mbp = new BlastProperty
            mbp.setBlastTemperature(bTemp);
            mbp.setDurationOverride(1200);
            mbp.setEUtOverride(volts);
            mbp.setGasTier(getGasTier(volts));
            mbp.setVacuumDurationOverride(120);
            mbp.setVacuumEUtOverride(volts);
            material.setProperty(PropertyKey.BLAST, mbp)
        }

        // @ts-ignore
        if (volts) { material.setProperty(PropertyKey.WIRE, new WireProperties(volts, 1, 0)) }
        if (polymer == true) { material.setProperty(PropertyKey.POLYMER, new PolymerProperty()) }
        if (ingot == true) {
            if (!material.hasProperty(PropertyKey.INGOT)) {
                material.setProperty(PropertyKey.INGOT, new IngotProperty())
            }

        }

        material.setProperty(PropertyKey.FLUID, new FluidProperty(FluidStorageKeys.LIQUID, new FluidBuilder()))

        if (gem == true) {
            if (!material.hasProperty(PropertyKey.INGOT)) {
                material.setProperty(PropertyKey.GEM, new GemProperty())
            }

        }
        if (ingot == true || gem == true || polymer == true) {
            material.addFlags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_DENSE,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_LONG_ROD,
                GTMaterialFlags.GENERATE_GEAR,
                GTMaterialFlags.GENERATE_SMALL_GEAR,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                GTMaterialFlags.GENERATE_FOIL,
                GTMaterialFlags.GENERATE_FRAME,
                GTMaterialFlags.GENERATE_RING,
                GTMaterialFlags.GENERATE_SPRING,
                GTMaterialFlags.GENERATE_SPRING_SMALL,
                GTMaterialFlags.GENERATE_ROTOR,
                GTMaterialFlags.GENERATE_ROUND,
                GTMaterialFlags.GENERATE_FINE_WIRE,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                // @ts-ignore
                CMMEMaterialFlags.GENERATE_SINGULARITY
            )
        }


    }

    otherElements.forEach(mat => {
        let material = GTMaterials.get(mat.name);
        modifyElement(material, mat.name, mat.cBlast, mat.cVolt, mat.oGem, mat.cPolymer, mat.cIngot)
    });

        

    const glycerol = GTMaterials.get('glycerol');
    //glycerol.setProperty(PropertyKey.DUST, new DustProperty());      
    glycerol.setProperty(PropertyKey.GEM, new GemProperty());
    glycerol.addFlags(GTMaterialFlags.CRYSTALLIZABLE);

    modalloys.forEach(mat => {

        let materialBuilder = event.create(mat.name)


            // @ts-ignore            
            .ingot()
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.iconSet])
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_DENSE,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_LONG_ROD,
                GTMaterialFlags.GENERATE_GEAR,
                GTMaterialFlags.GENERATE_SMALL_GEAR,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                GTMaterialFlags.GENERATE_FOIL,
                GTMaterialFlags.GENERATE_FRAME,
                GTMaterialFlags.GENERATE_RING,
                GTMaterialFlags.GENERATE_SPRING,
                GTMaterialFlags.GENERATE_SPRING_SMALL,
                GTMaterialFlags.GENERATE_ROTOR,
                GTMaterialFlags.GENERATE_ROUND,
                GTMaterialFlags.GENERATE_FINE_WIRE,
                GTMaterialFlags.GENERATE_BOLT_SCREW,

                // @ts-ignore
                CMMEMaterialFlags.GENERATE_SINGULARITY
            );

        if (mat.magnetic) {
            //materialBuilder.flags(GTMaterialFlags.IS_MAGNETIC)
            let magneticBuilder = event.create(`magnetic_${mat.name}`)
                // @ts-ignore                
                .ingot()
                .dust()
                .color(mat.color)
                .element(mat.element)
                .iconSet(GTMaterialIconSet['MAGNETIC'])
                .flags(
                    GTMaterialFlags.GENERATE_ROD,
                    GTMaterialFlags.GENERATE_LONG_ROD,
                    GTMaterialFlags.IS_MAGNETIC
                );
            //materialBuilder.polarizesInto(`magnetic_${mat.name}`);
        }


        if (mat.pipe) { materialBuilder.fluidPipeProperties(16384, 10800, true) }
        if (mat.element) { materialBuilder.element(mat.element) }
        if (mat.cDust) { materialBuilder.dust() }
        if (mat.cBlast) {
            materialBuilder.blastTemp(mat.cBlast.temp, getGasTier(mat.voltage), mat.cBlast.volts, mat.cBlast.duration);
        }
        if (mat.voltage > 0) { materialBuilder.cableProperties(getVoltage(mat.voltage), 1, mat.loss || 0, mat.superconductor || false); }
        if (mat.oItem) {
            let gtMaterial = GTMaterials.get(mat.name);
            TagPrefix.ingot.setIgnored(gtMaterial, Ingredient.of(mat.oItem));
            //materialBuilder.setIgnored(GTMaterialRegistry.getMaterial(mat.oItem), TagPrefix.ingot) 
        }
        if (mat.components) {
            // Splitting the string into the individual '1x material' arguments
            let parts = mat.components.split(', ');
            materialBuilder.components(parts);
        }

        if (mat.rotor) {
            materialBuilder.rotorStats(mat.rotor.speed, mat.rotor.power, mat.rotor.efficiency, mat.rotor.durability);
        }

    });



    singularityMetals.forEach(mat => {
        GTMaterials.get(mat).addFlags(CMMEMaterialFlags.GENERATE_SINGULARITY);
    });


    naqStages.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            // @ts-ignore                                             
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet[mat.icon])
        if (mat.polymer == true) {
            materialBuilder.polymer()
            materialBuilder.ingot()
            materialBuilder.flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_FOIL,
            )
        }
    });

    //making changes here
    polymers.forEach(mat => {
        let materialBuilder = event.create(mat.name)
            // @ts-ignore            
            .polymer()
            .ingot()
            .fluid()
            .color(mat.color)
            .iconSet(GTMaterialIconSet.SHINY)
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_FOIL,
                GTMaterialFlags.GENERATE_RING                
            )
        if (mat.components) {
            let parts = mat.components.split(', ');
            materialBuilder.components(parts);
        }
        //if (mat.formula) { materialBuilder.formula(mat.formula) }
    });

    let samCoBuilder = event.create('samarium_cobalt')
        .dust()
        .ingot()
        .fluid()
        .color(0x8C7B4A)
        .iconSet(GTMaterialIconSet.METALLIC)
        .formula('SmCo5')        
        //.components('1x samarium, 5x cobalt')
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION);


    // Magnetic variant - same forms, same flags + IS_MAGNETIC
    event.create('magnetic_samarium_cobalt')
        .dust()
        .ingot()
        .fluid()
        .color(0x8C7B4A)        
        .iconSet(GTMaterialIconSet['MAGNETIC'])
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.IS_MAGNETIC, GTMaterialFlags.DISABLE_DECOMPOSITION);    
});



StartupEvents.registry('block', event => {

    const casings = [
        // Logistics & Networking
        { id: 'flux_casing', name: 'Flux Casing', tex: 'fluxnetworks:block/flux_block' },
        { id: 'network_casing', name: 'Network Casing', tex: 'ae2:block/controller_column' },
        { id: 'router_casing', name: 'Router Casing', tex: 'modularrouters:block/modular_router_side' },

        // Power & Processing        
        { id: 'dimensional_casing', name: 'Dimensional Casing', tex: 'gtceu:block/casings/solid/machine_casing_stable_titanium', color: '0xE0B0FF' },
        { id: 'xenomorphic_data_frame', name: 'Xenomorphic Data-Frame', tex: 'fluxnetworks:block/flux_block', color: '0xFF0000' },
        { id: 'industrial_pylon_casing', name: 'Industrial Pylon Casing', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel' },

        // Magic & Biological
        { id: 'slate_casing', name: 'Slate Casing', tex: 'bloodmagic:block/largebloodstonebrick', color: '0xD3D3D3' },
        { id: 'rune_casing', name: 'Rune Casing', tex: 'bloodmagic:block/blankrune', color: '#D3D3D3' },
        { id: 'reinforced_rune_casing', name: 'Reinforced Rune Casing', tex: 'bloodmagic:block/masterritualstone', color: '0x5A5A5A' },
        { id: 'ritual_casing', name: 'Ritual Casing', tex: 'bloodmagic:block/ritualstone', color: '#5F9EA0' },
        { id: 'hexagonal_bio_composite', name: 'Hexagonal Bio-Composite', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel', color: '0xFF8C00' },
        { id: 'magical_bio_composite', name: 'Magical Bio-Composite', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel', color: '0xFF8C00' },

        { id: 'alchemical_casing', name: 'Alchemical Casing', tex: 'gtceu:block/casings/solid/machine_casing_clean_stainless_steel', color: '0xFF8C00' },
    ];
    const coils = [
        //'draconium', 'wyvern', 'draconic', 'chaotic'
        {name: 'draconium', displayName: 'Draconium Casing'},
        {name: 'wyvern', displayName: 'Wyvern Casing'},
        {name: 'draconic', displayName: 'Draconic Casing'},
        {name: 'chaotic', displayName: 'Chaotic Casing'},
        
    ]

    coils.forEach(coil => {
         let block = event.create(`gtceu:${coil.name}_casing`)
            // @ts-ignore
            .displayName(coil.displayName)            
            .textureAll(`gtceu:block/casings/${coil.name}_casing/${coil.name}_casing`)
            .hardness(5.0)
            .resistance(10.0)
            .soundType('metal')            
            .tagBlock('gtceu:casings');
    });

    casings.forEach(casing => {
        let block = event.create(`gtceu:${casing.id}`)
            // @ts-ignore
            .displayName(casing.name)
            // @ts-ignore
            .hardness(5.0)
            .resistance(10.0)
            .soundType('metal')
            .textureAll(casing.tex) // These paths are now verified
            .tagBlock('gtceu:casings');

        if (casing.color) {
            // Index 0 is the base layer for tinting
            block.color(0, casing.color);
            // Mandatory for tints to show up on some hardware/drivers
            block.renderType('cutout');
        }

        if (casing.light) {
            block.lightLevel(casing.light); // 1.0 is max brightness
        }
    });
        

});


StartupEvents.postInit(event => {
    //ad astra
    adMats.forEach(mat => {
        TagPrefix.ingot.setIgnored(GTMaterials.get(mat.name), `ad_astra:${mat.name}_ingot`)
        TagPrefix.nugget.setIgnored(GTMaterials.get(mat.name), `ad_astra:${mat.name}_nugget`)
        TagPrefix.plate.setIgnored(GTMaterials.get(mat.name), `ad_astra:${mat.name}_plate`)
        TagPrefix.block.setIgnored(GTMaterials.get(mat.name), `ad_astra:${mat.name}_block`)
    });
    

    // extreme reactors
    erMaterials.forEach(mat => {
        let gtMat = GTMaterials.get(mat.name);
        if (gtMat && mat.oItems) {
            mat.oItems.forEach(type => {
                if (TagPrefix[type]) {
                    TagPrefix[type].setIgnored(gtMat, `bigreactors:${mat.name}_${type}`);
                }
            });
        }
    });

    //mekanism
    mekanism.forEach(mat => {
        let gtMat = GTMaterials.get(mat.name);
        if (gtMat && mat.oItems) {
            mat.oItems.forEach(type => {
                if (TagPrefix[type]) {
                    TagPrefix[type].setIgnored(gtMat, `${mat.namespace}:${type}_${mat.name}`);
                }
            });
        }
    });

        
    otherElements.forEach(mat => {
        let gtMat = GTMaterials.get(mat.name);
        if (gtMat && mat.oItems) {
            mat.oItems.forEach(type => {
                if (TagPrefix[type]) {
                    TagPrefix[type].setIgnored(gtMat, `${mat.namespace}:${mat.name}_${type}`);
                }
            });
        }
    });    

    //unification
    unification.forEach(mat => {
        let gtMat = GTMaterials.get(mat.name);
        if (gtMat && mat.oItems) {
            mat.oItems.forEach(type => {
                if (TagPrefix[type]) {
                    TagPrefix[type].setIgnored(gtMat, `${mat.namespace}:${mat.name}_${type}`);
                }
            });
        }
    });
    

    dusts.forEach(mat => {
        let gtMat = GTMaterials.get(mat.name);
        if (gtMat) {
            let ingotItem = Item.of(mat.oItem);
            let dustItem = Item.of(mat.oDust);
            let gemItem = Item.of(mat.oGem);

            if (gtMat && !ingotItem.isEmpty()) {
                TagPrefix.ingot.setIgnored(gtMat, ingotItem.item);
            }
            if (gtMat && !dustItem.isEmpty()) {
                TagPrefix.dust.setIgnored(gtMat, dustItem.item);
            }
            if (gtMat && !gemItem.isEmpty()) {
                TagPrefix.gem.setIgnored(gtMat, gemItem.item);
            }
        }
    });

    chalks.forEach(chalk => {
        const rawColor = chalk.name.replace('_chalk', '');
        const color = (rawColor === 'yellow') ? 'gold' : rawColor;
        //const color = chalk.name.replace('_chalk', '');
        const gem = `occultism:chalk_${color}`;
        TagPrefix.gem.setIgnored(GTMaterials.get(chalk.name), gem);
    });

    

    // Block
    TagPrefix.block.setIgnored(GTMaterials.get('compressed_iron'), 'pneumaticcraft:compressed_iron_block');
    TagPrefix.block.setIgnored(GTMaterials.get('draconium_awakened'), 'draconicevolution:awakened_draconium_block');
    TagPrefix.block.setIgnored(GTMaterials.get('draconium'), 'draconicevolution:draconium_block');
    TagPrefix.block.setIgnored(GTMaterials.get('blue_ice'), 'minecraft:blue_ice');
    TagPrefix.block.setIgnored(GTMaterials.get('packed_ice'), 'minecraft:packed_ice');

    // Dust
    TagPrefix.dust.setIgnored(GTMaterials.get('refined_obsidian'), 'mekanism:dust_refined_obsidian');
    TagPrefix.dust.setIgnored(GTMaterials.get('hop_graphite'), 'immersiveengineering:dust_hop_graphite');
    TagPrefix.dust.setIgnored(GTMaterials.get('draconium_awakened'), 'draconicevolution:awakened_draconium_dust');
    TagPrefix.dust.setIgnored(GTMaterials.get('draconium'), 'draconicevolution:draconium_dust');
    TagPrefix.dust.setIgnored(GTMaterials.get('fluix'), 'ae2:fluix_dust');        
    TagPrefix.dust.setIgnored(GTMaterials.get('hellforged'), 'bloodmagic:sand_hellforged');
    TagPrefix.dust.setIgnored(GTMaterials.get('antimatter'), 'mekanism:pellet_antimatter');
    TagPrefix.dust.setIgnored(GTMaterials.get('garmonbozia'), 'evilcraft:garmonbozia');

    // Gear
    TagPrefix.gear.setIgnored(GTMaterials.get('compressed_iron'), 'pneumaticcraft:compressed_iron_gear');

    // Gem
    TagPrefix.gem.setIgnored(GTMaterials.get('fluix'), 'ae2:fluix_crystal');
    TagPrefix.gem.setIgnored(GTMaterials.get('atm_star'), 'allthetweaks:atm_star');
    TagPrefix.gem.setIgnored(GTMaterials.get('eternal'), 'forbidden_arcanus:eternal_stella');
    TagPrefix.gem.setIgnored(GTMaterials.get('source'), 'ars_nouveau:source_gem');
    TagPrefix.gem.setIgnored(GTMaterials.get('soul'), 'occultism:soul_gem');
    TagPrefix.gem.setIgnored(GTMaterials.get('glycerol'), 'pneumaticcraft:glycerol');
    TagPrefix.gem.setIgnored(GTMaterials.get('demon'), 'bloodmagic:defaultcrystal');
    TagPrefix.gem.setIgnored(GTMaterials.get('steadfast'), 'bloodmagic:steadfastcrystal');
    TagPrefix.gem.setIgnored(GTMaterials.get('corrosive'), 'bloodmagic:corrosivecrystal');
    TagPrefix.gem.setIgnored(GTMaterials.get('vengeful'), 'bloodmagic:vengefulcrystal');
    TagPrefix.gem.setIgnored(GTMaterials.get('destructive'), 'bloodmagic:destructivecrystal');


    // Ingot
    TagPrefix.ingot.setIgnored(GTMaterials.get('alloy_atomic'), 'mekanism:alloy_atomic');
    TagPrefix.ingot.setIgnored(GTMaterials.get('alloy_reinforced'), 'mekanism:alloy_reinforced');
    TagPrefix.ingot.setIgnored(GTMaterials.get('alloy_infused'), 'mekanism:alloy_infused');
    TagPrefix.ingot.setIgnored(GTMaterials.get('compressed_iron'), 'pneumaticcraft:ingot_iron_compressed');
    TagPrefix.ingot.setIgnored(GTMaterials.get('hop_graphite'), 'immersiveengineering:ingot_hop_graphite');
    TagPrefix.ingot.setIgnored(GTMaterials.get('pink_slime'), 'industrialforegoing:pink_slime_ingot');
    TagPrefix.ingot.setIgnored(GTMaterials.get('deorum'), 'forbidden_arcanus:deorum_ingot');
    TagPrefix.ingot.setIgnored(GTMaterials.get('ferrognetic'), 'forbidden_arcanus:ferrognetic_mixture');
    TagPrefix.ingot.setIgnored(GTMaterials.get('draconium_awakened'), 'draconicevolution:awakened_draconium_ingot');
    TagPrefix.ingot.setIgnored(GTMaterials.get('draconium'), 'draconicevolution:draconium_ingot');
    TagPrefix.ingot.setIgnored(GTMaterials.get('hellforged'), 'bloodmagic:ingot_hellforged');

    // Nugget
    TagPrefix.nugget.setIgnored(GTMaterials.get('draconium_awakened'), 'draconicevolution:awakened_draconium_nugget');
    TagPrefix.nugget.setIgnored(GTMaterials.get('draconium'), 'draconicevolution:draconium_nugget');

    // Rod
    TagPrefix.rod.setIgnored(GTMaterials.get('etrium'), 'ad_astra:etrium_rod')

    // Polymer
    TagPrefix.foil.setIgnored(GTMaterials.get('rotten_flesh'), 'minecraft:rotten_flesh');
});






const ArrayList = Java.loadClass('java.util.ArrayList');

GTCEuStartupEvents.materialModification(event => {
    //ad astra
    adMats.forEach(mat => {
        TagPrefix.ingot.setIgnored(GTMaterials.get(mat.name), `ad_astra:${mat.name}_ingot`)
        TagPrefix.nugget.setIgnored(GTMaterials.get(mat.name), `ad_astra:${mat.name}_nugget`)
        TagPrefix.plate.setIgnored(GTMaterials.get(mat.name), `ad_astra:${mat.name}_plate`)
        TagPrefix.block.setIgnored(GTMaterials.get(mat.name), `ad_astra:${mat.name}_block`)
    });   

    // extreme reactors
    erMaterials.forEach(mat => {
        let gtMat = GTMaterials.get(mat.name);
        if (gtMat && mat.oItems) {
            mat.oItems.forEach(type => {
                if (TagPrefix[type]) {
                    TagPrefix[type].setIgnored(gtMat, `bigreactors:${mat.name}_${type}`);
                }
            });
        }
    });
    
    unification.forEach(mat => {
        let gtMat = GTMaterials.get(mat.name);
        if (gtMat && mat.oItems) {
            mat.oItems.forEach(type => {
                if (TagPrefix[type]) {
                    TagPrefix[type].setIgnored(gtMat, `${mat.namespace}:${mat.name}_${type}`);
                }
            });
        }
    });
    
    //mekanism
    mekanism.forEach(mat => {
        let gtMat = GTMaterials.get(mat.name);
        if (gtMat && mat.oItems) {
            mat.oItems.forEach(type => {
                if (TagPrefix[type]) {
                    TagPrefix[type].setIgnored(gtMat, `${mat.namespace}:${type}_${mat.name}`);
                }
            });
        }
    });

    otherElements.forEach(mat => {
        let gtMat = GTMaterials.get(mat.name);
        if (gtMat && mat.oItems) {
            mat.oItems.forEach(type => {
                if (TagPrefix[type]) {
                    TagPrefix[type].setIgnored(gtMat, `${mat.namespace}:${mat.name}_${type}`);
                }
            });
        }
    }); 

    chalks.forEach(chalk => {
        const color = chalk.name.replace('_chalk', '');
        const gem = `occultism:chalk_${color}`;
        TagPrefix.gem.setIgnored(GTMaterials.get(chalk.name), gem);
    });
            
    // Block
    TagPrefix.block.setIgnored(GTMaterials.get('compressed_iron'), 'pneumaticcraft:compressed_iron_block');
    TagPrefix.block.setIgnored(GTMaterials.get('draconium_awakened'), 'draconicevolution:awakened_draconium_block');
    TagPrefix.block.setIgnored(GTMaterials.get('draconium'), 'draconicevolution:draconium_block');
    TagPrefix.block.setIgnored(GTMaterials.get('blue_ice'), 'minecraft:blue_ice');
    TagPrefix.block.setIgnored(GTMaterials.get('packed_ice'), 'minecraft:packed_ice');

    // Dust
    TagPrefix.dust.setIgnored(GTMaterials.get('refined_obsidian'), 'mekanism:dust_refined_obsidian');
    TagPrefix.dust.setIgnored(GTMaterials.get('hop_graphite'), 'immersiveengineering:dust_hop_graphite');
    TagPrefix.dust.setIgnored(GTMaterials.get('draconium_awakened'), 'draconicevolution:awakened_draconium_dust');
    TagPrefix.dust.setIgnored(GTMaterials.get('draconium'), 'draconicevolution:draconium_dust');
    TagPrefix.dust.setIgnored(GTMaterials.get('fluix'), 'ae2:fluix_dust');        
    TagPrefix.dust.setIgnored(GTMaterials.get('hellforged'), 'bloodmagic:sand_hellforged');
    TagPrefix.dust.setIgnored(GTMaterials.get('antimatter'), 'mekanism:pellet_antimatter');
    TagPrefix.dust.setIgnored(GTMaterials.get('garmonbozia'), 'evilcraft:garmonbozia');

    // Gear
    TagPrefix.gear.setIgnored(GTMaterials.get('compressed_iron'), 'pneumaticcraft:compressed_iron_gear');

    // Gem
    TagPrefix.gem.setIgnored(GTMaterials.get('glycerol'), 'pneumaticcraft:glycerol');
    TagPrefix.gem.setIgnored(GTMaterials.get('fluix'), 'ae2:fluix_crystal');
    TagPrefix.gem.setIgnored(GTMaterials.get('atm_star'), 'allthetweaks:atm_star');
    TagPrefix.gem.setIgnored(GTMaterials.get('eternal'), 'forbidden_arcanus:eternal_stella');
    TagPrefix.gem.setIgnored(GTMaterials.get('source'), 'ars_nouveau:source_gem');
    TagPrefix.gem.setIgnored(GTMaterials.get('soul'), 'occultism:soul_gem');
    TagPrefix.gem.setIgnored(GTMaterials.get('glycerol'), 'pneumaticcraft:glycerol');
    TagPrefix.gem.setIgnored(GTMaterials.get('demon'), 'bloodmagic:defaultcrystal');
    TagPrefix.gem.setIgnored(GTMaterials.get('steadfast'), 'bloodmagic:steadfastcrystal');
    TagPrefix.gem.setIgnored(GTMaterials.get('corrosive'), 'bloodmagic:corrosivecrystal');
    TagPrefix.gem.setIgnored(GTMaterials.get('vengeful'), 'bloodmagic:vengefulcrystal');
    TagPrefix.gem.setIgnored(GTMaterials.get('destructive'), 'bloodmagic:destructivecrystal');

    // Ingot
    TagPrefix.ingot.setIgnored(GTMaterials.get('alloy_atomic'), 'mekanism:alloy_atomic');
    TagPrefix.ingot.setIgnored(GTMaterials.get('alloy_reinforced'), 'mekanism:alloy_reinforced');
    TagPrefix.ingot.setIgnored(GTMaterials.get('alloy_infused'), 'mekanism:alloy_infused');
    TagPrefix.ingot.setIgnored(GTMaterials.get('compressed_iron'), 'pneumaticcraft:ingot_iron_compressed');
    TagPrefix.ingot.setIgnored(GTMaterials.get('hop_graphite'), 'immersiveengineering:ingot_hop_graphite');
    TagPrefix.ingot.setIgnored(GTMaterials.get('pink_slime'), 'industrialforegoing:pink_slime_ingot');
    //TagPrefix.ingot.setIgnored(GTMaterials.get('deorum'), 'forbidden_arcanus:deorum_ingot');
    TagPrefix.ingot.setIgnored(GTMaterials.get('ferrognetic'), 'forbidden_arcanus:ferrognetic_mixture');
    TagPrefix.ingot.setIgnored(GTMaterials.get('draconium_awakened'), 'draconicevolution:awakened_draconium_ingot');
    TagPrefix.ingot.setIgnored(GTMaterials.get('draconium'), 'draconicevolution:draconium_ingot');
    TagPrefix.ingot.setIgnored(GTMaterials.get('hellforged'), 'bloodmagic:ingot_hellforged' );

    // Nugget
    TagPrefix.nugget.setIgnored(GTMaterials.get('draconium_awakened'), 'draconicevolution:awakened_draconium_nugget');
    TagPrefix.nugget.setIgnored(GTMaterials.get('draconium'), 'draconicevolution:draconium_nugget');

    // Rod
    TagPrefix.rod.setIgnored(GTMaterials.get('etrium'), 'ad_astra:etrium_rod');
    
    
    // Polymer
    TagPrefix.foil.setIgnored(GTMaterials.get('rotten_flesh'), 'minecraft:rotten_flesh');

    //ore biproducts
    newOres.forEach(mat => {
        let material = GTMaterials.get(mat.name);

        if (material && mat.byproducts) {

            // 1. Create the Java ArrayList using the properly loaded KubeJS 6 class
            let javaList = new ArrayList();
            mat.byproducts.forEach(bp => {
                let gtMat = GTMaterials.get(bp);
                if (gtMat) {
                    javaList.add(gtMat);
                }
            });

            if (material.hasProperty(PropertyKey.ORE)) {
                material.removeProperty(PropertyKey.ORE);
            }

            let ore_prop = new OreProperty();

            // 2. Force Rhino to use the Collection method specifically to avoid ambiguity            
            ore_prop['setOreByProducts(java.util.Collection)'](javaList);

            material.setProperty(PropertyKey.ORE, ore_prop);
        }
    });
    let osmiridium = GTMaterials.get('osmiridium');
    let netherstar = GTMaterials.get('nether_star')
    let etrium = GTMaterials.get('etrium');
        
    

    let javaList = new ArrayList();
    javaList.add(GTMaterials.get('ruthenium'));

    let ore_prop = new OreProperty();
    ore_prop['setOreByProducts(java.util.Collection)'](javaList);

    osmiridium.setProperty(PropertyKey.ORE, ore_prop);
    
    netherstar.setProperty(PropertyKey.ORE, new OreProperty());
    etrium.setProperty(PropertyKey.ORE, new OreProperty());

    GTMaterials.get('samarium_cobalt').polarizesInto('magnetic_samarium_cobalt')
    GTMaterials.get('eternium').polarizesInto('magnetic_eternium')

    

});

 const dimensions = [
    { name: 'bloodmagic:dungeon', displayName: 'Blood Dungeon', icon: 'ad_astra:moon_globe', tier: 4 },
    { name: 'allthemodium:mining', displayName: 'Mining Dimension', icon: 'allthetweaks:atm_star', tier: 0 },
    { name: 'deeperdarker:otherside', displayName: 'Deeper Darker', icon: 'minecraft:bedrock', tier: 0 },
    { name: 'ad_astra:moon', displayName: 'Moon', icon: 'ad_astra:moon_globe', tier: 1 },
    { name: 'ad_astra:mars', displayName: 'Mars', icon: 'ad_astra:mars_globe', tier: 1 },
    { name: 'ad_astra:mercury', displayName: 'Mercury', icon: 'ad_astra:mercury_globe', tier: 2 },
    { name: 'ad_astra:venus', displayName: 'Venus', icon: 'ad_astra:venus_globe', tier: 2 },
    { name: 'ad_astra:glacio', displayName: 'Glacio', icon: 'ad_astra:glacio_globe', tier: 3 },
    { name: 'planetsplus:ganymede', displayName: 'Ganymede', icon: 'supplementaries:globe_sepia', tier: 5 },
    { name: 'charon', displayName: 'Charon', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'diater', displayName: 'Diater', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'dune', displayName: 'Dune', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'europa', displayName: 'Europa', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'galia', displayName: 'Galia', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'io', displayName: 'Io', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'jada', displayName: 'Jada', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'pluto', displayName: 'Pluto', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'soera', displayName: 'Soera', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'titan', displayName: 'Titan', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'vonic', displayName: 'Vonic', icon: 'supplementaries:globe_sepia', tier: 4 },
    { name: 'vulcan', displayName: 'Vulcan', icon: 'supplementaries:globe_sepia', tier: 4 }
];

GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {
    dimensions.forEach(dim => {
        event.create(dim.name)
            .iconSupplier(() => Item.of(dim.icon).getItem())
            .tier(dim.tier)
            .overrideName(dim.displayName);
    });
});



GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {

    event.create("infinity").parent(GTMaterialIconSet.SHINY)
    event.create("sculk_alloy").parent(GTMaterialIconSet.SHINY)

})