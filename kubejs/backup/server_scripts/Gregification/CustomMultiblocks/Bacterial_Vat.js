const TIME = {
    short: 600,
    medium: 800,
    long: 1000,
    very_long: 1200
};
ServerEvents.recipes(allthemods => {
    const bacterialVat = (inputs, fluidIn, outputs, fluidOut, eu, duration, customID, program) => {
        let id;
        if (customID) {
            id = `gregification:bacterial_vat/${customID}`;
        } else {
            let firstOutput = Array.isArray(outputs) ? outputs[0] : outputs;
            let outputName = firstOutput.toString()
                .replace(/^\d+[x ]\s*/, '')
                .split(':').pop()
                .replace(/[^a-zA-Z0-9_]/g, '_')
                .toLowerCase();
            id = `gregification:bacterial_vat/${outputName}`;
        }
        let recipe = allthemods.recipes.gtceu.bacterial_vat(id)
            .itemInputs(inputs)
            .itemOutputs(outputs)
            .duration(duration)
            .EUt(eu);
        if (fluidIn && fluidIn.length > 0) {
            recipe.inputFluids(fluidIn);
        }
        if (fluidOut && fluidOut.length > 0) {
            recipe.outputFluids(fluidOut);
        }
        if (program) {
            recipe.circuit(program);
        }
    };

    //chaos shard
    bacterialVat(
        [
            'draconicevolution:small_chaos_frag',
            'draconicevolution:dragon_heart',
            'minecraft:dragon_egg',
            'naturesaura:birth_spirit'
        ],
        [
            'gtceu:saturated_life_fertilizer 2000',
            'gtceu:mana_essence 2000',
            'gtceu:liquid_dragon_breath 10000'

        ],
        'draconicevolution:chaos_shard',
        null,
        131072,
        TIME.very_long
    );

    //alfsteel ingot
    bacterialVat(
        [
            '#forge:ingots/elementium',
            'botania:pixie_dust',
            '#forge:gems/dragonstone',
            'naturesaura:birth_spirit'
        ],
        [
            'gtceu:saturated_life_fertilizer 1000',
            'gtceu:mana_essence 10000'

        ],
        'mythicbotany:alfsteel_ingot',
        null,
        131072,
        TIME.medium
    );

    //ars essences
    const essences = ['abjuration', 'conjuration', 'manipulation', 'air', 'water', 'earth', 'fire']
    essences.forEach((essence, index) => {
        bacterialVat(
            [
            ],
            [
                'gtceu:liquid_source 1500',
            ],
            `ars_nouveau:${essence}_essence`,
            null,
            32768,
            300, null, index + 1
        )
    }
    );
    bacterialVat(
        [
        ],
        [
            'gtceu:liquid_source 1500',
        ],
        'ars_elemental:anima_essence',
        null,
        32768,
        300, null, 10
    );
});