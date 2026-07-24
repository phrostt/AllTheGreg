ServerEvents.recipes(allthemods => {

    // --- Helper Function ---
    const bendPlate = (input, output, customID) => {
        let id
        if (customID) {
            id = `gregification:mechanical_press/${customID}`;
        } else {
            let outputName = output.toString()
                .replace(/^\d+[x ]\s*/, '')
                .split(':').pop()
                .replace(/[^a-zA-Z0-9_]/g, '_')
                .toLowerCase();
            id = `gregification:mechanical_press/${outputName}`;
        }
        
        allthemods.custom({
            type: 'create:pressing',
            ingredients: [
                { item: input } // Input
            ],
            results: [
                { item: output } // Output
            ]
        }).id(id)
    }

    bendPlate('gtceu:tin_alloy_ingot', 'gtceu:tin_alloy_plate')
    bendPlate('gtceu:wrought_iron_ingot', 'gtceu:wrought_iron_plate')

})
