ServerEvents.recipes(allthemods => {   
    //hatches
    allthemods.shapeless('alchemistry:reactor_output', ['alchemistry:reactor_casing', 'gtceu:uv_output_bus'])
    allthemods.shapeless('alchemistry:reactor_input', ['alchemistry:reactor_casing', 'gtceu:uv_input_bus'])
    allthemods.shapeless('alchemistry:reactor_energy', ['alchemistry:reactor_casing', 'gtceu:uv_energy_input_hatch'])
});