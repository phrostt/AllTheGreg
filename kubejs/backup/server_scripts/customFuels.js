ServerEvents.recipes(event => {

    /**
     * Registers a fluid as a fuel for the GTCEu Combustion Generator (and Large Turbines).
     * @param {string} fluid - Fluid ID
     * @param {number} euPerMb - Energy per millibucket
     * @param {number} tierVoltage - The 'virtual' voltage tier for calculation (affects burn duration)
     */
    let registerFuelGas = (fluid, euPerMb, tierVoltage) => {
        event.recipes.gtceu.gas_turbine(`burn_${fluid.split(':')[1]}`)
            .inputFluids(`${fluid} 1`)
            .duration(euPerMb / tierVoltage) // Duration = Total Energy / Voltage
            .EUt(-tierVoltage) // Generate power
    }


    /**
     * Registers a fluid as a fuel for the GTCEu Combustion Generator (and Large Turbines).
     * @param {string} fluid - Fluid ID
     * @param {number} euPerMb - Energy per millibucket
     * @param {number} tierVoltage - The 'virtual' voltage tier for calculation (affects burn duration)
     */
    let registerFuelCombustion = (fluid, euPerMb, tierVoltage) => {
        event.recipes.gtceu.combustion_generator(`burn_${fluid.split(':')[1]}`)
            .inputFluids(`${fluid} 1`)
            .duration(euPerMb / tierVoltage) // Duration = Total Energy / Voltage
            .EUt(-tierVoltage) // Generate power
    }

    // 1. Refined Seed Oil
    // Cost to make: ~12.2M per bucket
    // Output: 37M per bucket (37,000 EU/mB)
    // Generates: EV (2048 EU/t) for ~18 ticks per mB
    registerFuelCombustion('gtceu:refined_seed_oil', 10000, 2048)
    

    // 2. Crystallized Oil
    // Cost to make: ~14.7M per bucket
    // Output: 45M per bucket (45,000 EU/mB)
    // Generates: IV (8192 EU/t) for ~5 ticks per mB
    registerFuelCombustion('gtceu:crystallized_oil', 40000, 2048)


    // 3. Empowered Oil
    // Cost to make: ~16.0M per bucket
    // Output: 60M per bucket (60,000 EU/mB) -> We rounded up to reward the final tier
    // Generates: LuV (32768 EU/t) for ~2 ticks per mB
    // Warning: One bucket of this contains 60 Million EU.
    registerFuelCombustion('gtceu:empowered_oil', 70000, 2048)

    registerFuelCombustion('gtceu:xylene', 85000, 8192)

})