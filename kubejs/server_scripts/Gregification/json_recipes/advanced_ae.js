ServerEvents.recipes(event => {
    event.custom({
        type: 'advanced_ae:reaction',
        energy: 150000,
        fluid: {
            fluidStack: {
                Amount: 500,
                FluidName: 'minecraft:water'
            }
        },
        input_items: [
            {
                amount: 64,
                ingredient: { tag: 'forge:dusts/nether_quartz' }
            }
        ],
        output: {
            '#': 64,
            '#c': 'ae2:i',
            id: 'minecraft:quartz'
        }
    }).id('gregification:reaction_chamber/nether_quartz_from_dust');

    event.custom({
        type: 'advanced_ae:reaction',
        energy: 150000,
        fluid: {
            fluidStack: {
                Amount: 500,
                FluidName: 'minecraft:water'
            }
        },
        input_items: [
            {
                amount: 64,
                ingredient: { tag: 'forge:dusts/quartzite' }
            }
        ],
        output: {
            '#': 64,
            '#c': 'ae2:i',
            id: 'gtceu:quartzite_gem'
        }
    }).id('gregification:reaction_chamber/quartzite_from_dust');
});