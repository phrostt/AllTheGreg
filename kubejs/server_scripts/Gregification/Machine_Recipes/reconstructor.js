ServerEvents.recipes(allthemods => {


    const reconstructedItems = [
        { input: "minecraft:redstone", output: "gtceu:restonia_gem", energy: 2048 },
        { input: "minecraft:iron_ingot", output: "gtceu:enori_gem", energy: 2048 },
        { input: "minecraft:coal", output: "gtceu:void_crystal_gem", energy: 2048 },
        { input: "minecraft:lapis_lazuli", output: "gtceu:palis_gem", energy: 2048 },
        { input: "minecraft:diamond", output: "gtceu:diamatine_gem", energy: 2048 },
        { input: "minecraft:emerald", output: "gtceu:emeradic_gem", energy: 2048 },
        { input: "minecraft:coal_block", output: "gtceu:void_crystal_block", energy: 2048 },
        { input: "#forge:storage_blocks/redstone", output: "gtceu:restonia_block", energy: 2048 },
        { input: "#forge:storage_blocks/lapis", output: "gtceu:palis_block", energy: 2048 },
        { input: "#forge:storage_blocks/diamond", output: "gtceu:diamatine_block", energy: 2048 },
        { input: "#forge:storage_blocks/emerald", output: "gtceu:emeradic_block", energy: 2048 },
        { input: "#forge:storage_blocks/iron", output: "gtceu:enori_block", energy: 2048 },
        { input: "minecraft:sand", output: "minecraft:soul_sand", energy: 128 },
        { input: "minecraft:quartz", output: "minecraft:prismarine_shard", energy: 512 },
        { input: "minecraft:rotten_flesh", output: "minecraft:leather", energy: 512 },
        { input: "gtceu:topaz_gem", output: "minecraft:prismarine_crystals", energy: 512 },
        { input: "gtceu:plant_ball", output: "minecraft:kelp", energy: 128 },
        { input: "minecraft:obsidian", output: "minecraft:crying_obsidian", energy: 32768 },
        { input: "#forge:dyes/black", output: "minecraft:ink_sac", energy: 128 },
        { input: "minecraft:ink_sac", output: "minecraft:glow_ink_sac", energy: 128 },
        { input: "thermal:rubberwood_sapling", output: "gtceu:rubber_sapling", energy: 128 },
        { input: "gtceu:rubber_sapling", output: "thermal:rubberwood_sapling", energy: 128 },
        { input: "minecraft:red_mushroom", output: "minecraft:brown_mushroom", energy: 128 },
        { input: "minecraft:brown_mushroom", output: "minecraft:red_mushroom", energy: 128 },
        { input: "#forge:seeds", output: "gtceu:crystallized_seed", energy: 2048 }
    ]

    const reconstruction = (input, output, fluidIn, voltage, duration) => {
        let recipe = allthemods.recipes.gtceu.reconstructor(`reconstruct_${output}`)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(duration || 20)
            .EUt(voltage)

        if (fluidIn && fluidIn.length > 0) {
            recipe.inputFluids(fluidIn);
        }
    }

    reconstructedItems.forEach(mat => {
        reconstruction(mat.input, mat.output, mat.fluid, mat.energy, mat.duration)
    })

    const flowerCycle = [
        "dandelion",
        "poppy",
        "blue_orchid",
        "allium",
        "azure_bluet",
        "red_tulip",
        "orange_tulip",
        "white_tulip",
        "pink_tulip",
        "oxeye_daisy",
        "cornflower",
        "lily_of_the_valley",        
        "spore_blossom",
        "wither_rose",
        "dead_bush"
    ]
    reconstructCycle(flowerCycle);
    /**
     * Creates a "cycle" of Atomic Reconstructor recipes that allow players to transmute
     * any one item in the cycle into any other, through repeated applications of Atomic Reconstruction.
     * Best applied to plants or fungi, where getting one enables you to get many more easily.
     *
     * @param {Ingredient[]} cycle The array of ingredients for the AR to cycle through
     */
    function reconstructCycle(cycle) {
        cycle.forEach((flower, index) => {
            let curItem = cycle[index];
            let nextItem = cycle[(index + 1) % cycle.length];
            reconstruction(`minecraft:${curItem}`, `minecraft:${nextItem}`, null, 128,20)            
        })
    }
    /*
        reconstruction('minecraft:redstone', 'gtceu:restonia_gem', null, 2048)
        reconstruction('minecraft:lapis_lazuli', 'gtceu:palis_gem', null, 2048)
        reconstruction('minecraft:iron_ingot', 'gtceu:enori_gem', null, 2048)
        reconstruction('minecraft:quartz', 'gtceu:black_quartz_gem', null, 2048)
        reconstruction('minecraft:coal', 'gtceu:void_crystal_gem', null, 2048)
        reconstruction('minecraft:diamond', 'gtceu:diamatine_gem', null, 2048)
        reconstruction('minecraft:emerald', 'gtceu:emeradic_gem', null, 2048)
    
        reconstruction('#forge:storage_blocks/redstone', 'gtceu:restonia_block', null, 2048)
        reconstruction('#forge:storage_blocks/lapis', 'gtceu:palis_block', null, 2048)
        reconstruction('#forge:storage_blocks/iron', 'gtceu:enori_block', null, 2048)
        reconstruction('#forge:storage_blocks/coal', 'gtceu:void_crystal_block', null, 2048)
        reconstruction('#forge:storage_blocks/diamond', 'gtceu:diamatine_block', null, 2048)
        reconstruction('#forge:storage_blocks/emerald', 'gtceu:emeradic_block', null, 2048)
    
            reconstruction('thermal:rubberwood_sapling', 'gtceu:rubber_sapling', null, 128)
            reconstruction('gtceu:rubber_sapling', 'thermal:rubberwood_sapling', null, 128)
            reconstruction('minecraft:rotten_flesh', 'minecraft:leather', null, 128)
            reconstruction('#forge:dyes/black', 'minecraft:ink_sac', null, 128)
            reconstruction('minecraft:red_mushroom', 'minecraft:brown_mushroom', null, 128)
            reconstruction('#forge:seeds', 'gtceu:crystallized_seed', null, 2048)
        */
});