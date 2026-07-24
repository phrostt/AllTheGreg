// priority: -1000
GTCEuStartupEvents.craftingComponents(event => {
    //items are added in circuits.js
    const Map = Java.loadClass("java.util.Map")
    const GTCraftingComponents = Java.loadClass('com.gregtechceu.gtceu.data.recipe.GTCraftingComponents')

    let wireComponents = [
        ["wireGtSingle", GTCraftingComponents.WIRE_ELECTRIC],
        ["wireGtQuadruple", GTCraftingComponents.WIRE_QUAD],
        ["wireGtOctal", GTCraftingComponents.WIRE_OCT],
        ["wireGtHex", GTCraftingComponents.WIRE_HEX]
    ]
    wireComponents.forEach(pair => {
        let prefix = pair[0]
        event.setMaterialEntries(pair[1], {            
            UEV: prefix + ":alltheneutronium",
            UIV: prefix + ":vibtronium",
            UXV: prefix + ":unobtronium",
            OpV: prefix + ":deorum_alloy",
            MAX: prefix + ":demonic_alloy"
        })
    })

    let cableComponents = [
        ["cableGtSingle", GTCraftingComponents.CABLE],
        ["cableGtDouble", GTCraftingComponents.CABLE_DOUBLE],
        ["cableGtQuadruple", GTCraftingComponents.CABLE_QUAD],
        ["cableGtOctal", GTCraftingComponents.CABLE_OCT],
        ["cableGtHex", GTCraftingComponents.CABLE_HEX]
    ]

    let transformerComponenets = [
        ["cableGtSingle", GTCraftingComponents.CABLE_TIER_UP], // Transformer Secondary
        ["cableGtDouble", GTCraftingComponents.CABLE_TIER_UP_DOUBLE],
        ["cableGtQuadruple", GTCraftingComponents.CABLE_TIER_UP_QUAD],
        ["cableGtOctal", GTCraftingComponents.CABLE_TIER_UP_OCT],
        ["cableGtHex", GTCraftingComponents.CABLE_TIER_UP_HEX]
    ]

    cableComponents.forEach(pair => {
        let prefix = pair[0]
        event.setMaterialEntries(pair[1], {
            UEV: prefix + ":alltheneutronium",
            UIV: prefix + ":vibtronium",
            UXV: prefix + ":unobtronium",
            OpV: prefix + ":deorum_alloy",
            MAX: prefix + ":demonic_alloy"
        })
    })

    transformerComponenets.forEach(pair => {
        let prefix = pair[0]
        event.setMaterialEntries(pair[1], {
            UEV: prefix + ":cosmic_alloy",
            UIV: prefix + ":antimatter_alloy",
            UXV: prefix + ":singularity_alloy",
            OpV: prefix + ":absolute_alloy"
        })
    })


    //double wire for electric furnace
    event.setMaterialEntries(GTCraftingComponents.COIL_HEATING, {        
        UEV: "wireGtDouble:alltheneutronium",
        UIV: "wireGtDouble:vibtronium",
        UXV: "wireGtDouble:unobtronium",
        OpV: "wireGtDouble:deorum_alloy",
        MAX: "wireGtDouble:demonic_alloy"
    })

    //quad wire for fluid heater
    event.setMaterialEntries(GTCraftingComponents.COIL_HEATING_DOUBLE, {
        UEV: "wireGtQuadruple:alltheneutronium",
        UIV: "wireGtQuadruple:vibtronium",
        UXV: "wireGtQuadruple:unobtronium",
        OpV: "wireGtQuadruple:deorum_alloy",
        MAX: "wireGtQuadruple:demonic_alloy"
    })

 
    event.setItems(GTCraftingComponents.ROD_ELECTROMAGNETIC, {
        UHV: Item.of("gtceu:magnetic_samarium_rod"),
        UEV: Item.of("gtceu:magnetic_eternium_rod"),
        UIV: Item.of("gtceu:magnetic_eternium_rod"),
        UXV: Item.of("gtceu:magnetic_eternium_rod"),
        OpV: Item.of("gtceu:magnetic_eternium_rod"),
        MAX: Item.of("gtceu:magnetic_eternium_rod")
    })

    event.setMaterialEntries(GTCraftingComponents.COIL_ELECTRIC, {
        UEV: "wireGtQuadruple:alltheneutronium",
        UIV: "wireGtQuadruple:vibtronium",
        UXV: "wireGtQuadruple:unobtronium",
        OpV: "wireGtQuadruple:deorum_alloy",
        MAX: "wireGtQuadruple:demonic_alloy"
    })

    event.setMaterialEntries(GTCraftingComponents.ROD_DISTILLATION, {
        UEV: "spring:eternium",
        UIV: "spring:cosmic_alloy",
        UXV: "spring:antimatter_alloy",
        OpV: "spring:singularity_alloy",
        MAX: "spring:absolute_alloy"
    })

    event.setItems(GTCraftingComponents.SPRING, {
        UEV: Item.of("gtceu:alltheneutronium_spring"),
        UIV: Item.of("gtceu:vibtronium_spring"),
        UXV: Item.of("gtceu:unobtronium_spring"),
        OpV: Item.of("gtceu:deorum_alloy_spring"),
        MAX: Item.of("gtceu:demonic_alloy_spring")
    })
    
    event.setItems(GTCraftingComponents.SPRING_TRANSFORMER, {
        UEV: Item.of("gtceu:alltheneutronium_spring"),
        UIV: Item.of("gtceu:vibtronium_spring"),
        UXV: Item.of("gtceu:unobtronium_spring"),
        OpV: Item.of("gtceu:deorum_alloy_spring"),
        MAX: Item.of("gtceu:demonic_alloy_spring")
    })    

    event.setItems(GTCraftingComponents.SMALL_SPRING_TRANSFORMER, {            
        UHV: Item.of("gtceu:small_eternium_spring"),
        UEV: Item.of("gtceu:small_cosmic_alloy_spring"),
        UIV: Item.of("gtceu:small_antimatter_alloy_spring"),
        UXV: Item.of("gtceu:small_singularity_alloy_spring"),
        OpV: Item.of("gtceu:small_absolute_alloy_spring")
    })


    event.setMaterialEntries(GTCraftingComponents.ROTOR, {
        UEV: "rotor:alltheneutronium",
        UIV: "rotor:vibtronium",
        UXV: "rotor:unobtronium",
        OpV: "rotor:deorum_alloy",
        MAX: "rotor:demonic_alloy"
    })

    event.setItems(GTCraftingComponents.GLASS, {
        UEV: Item.of("gtceu:fusion_glass"),
        UIV: Item.of("gtceu:fusion_glass"),
        UXV: Item.of("gtceu:fusion_glass"),
        OpV: Item.of("gtceu:fusion_glass"),
        MAX: Item.of("gtceu:fusion_glass"),
    })

    event.setItems(GTCraftingComponents.GRINDER, {
        UEV: Item.of("gtceu:eternium_grinding_head"),
        UIV: Item.of("gtceu:eternium_grinding_head"),
        UXV: Item.of("gtceu:eternium_grinding_head"),
        OpV: Item.of("gtceu:eternium_grinding_head"),
        MAX: Item.of("gtceu:eternium_grinding_head")
    })

    event.setItems(GTCraftingComponents.SAWBLADE, {
        UEV: Item.of("gtceu:neutronium_buzz_saw_blade"),
        UIV: Item.of("gtceu:neutronium_buzz_saw_blade"),
        UXV: Item.of("gtceu:neutronium_buzz_saw_blade"),
        OpV: Item.of("gtceu:neutronium_buzz_saw_blade"),
        MAX: Item.of("gtceu:neutronium_buzz_saw_blade")
    })

    event.setMaterialEntries(GTCraftingComponents.PIPE_NORMAL, {
        UEV: "pipeNormalFluid:eternium",
        UIV: "pipeNormalFluid:cosmic_alloy",
        UXV: "pipeNormalFluid:antimatter_alloy",
        OpV: "pipeNormalFluid:singularity_alloy",
        MAX: "pipeNormalFluid:absolute_alloy"
    })

    event.setMaterialEntries(GTCraftingComponents.PIPE_LARGE, {
        UEV: "pipeLargeFluid:eternium",
        UIV: "pipeLargeFluid:cosmic_alloy",
        UXV: "pipeLargeFluid:antimatter_alloy",
        OpV: "pipeLargeFluid:singularity_alloy",
        MAX: "pipeLargeFluid:absolute_alloy"
    })

    event.setMaterialEntries(GTCraftingComponents.PIPE_NONUPLE, {
        UEV: "pipeNonupleFluid:eternium",
        UIV: "pipeNonupleFluid:cosmic_alloy",
        UXV: "pipeNonupleFluid:antimatter_alloy",
        OpV: "pipeNonupleFluid:singularity_alloy",
        MAX: "pipeNonupleFluid:absolute_alloy"
    })

    event.setMaterialEntries(GTCraftingComponents.PIPE_REACTOR, {
        UEV: "pipeNormalFluid:eternium",
        UIV: "pipeNormalFluid:cosmic_alloy",
        UXV: "pipeNormalFluid:antimatter_alloy",
        OpV: "pipeNormalFluid:singularity_alloy",
        MAX: "pipeNormalFluid:absolute_alloy"
    })

    event.setMaterialEntries(GTCraftingComponents.PLATE, {
        UEV: "plate:eternium",
        UIV: "plate:cosmic_alloy",
        UXV: "plate:antimatter_alloy",
        OpV: "plate:singularity_alloy",
        MAX: "plate:absolute_alloy"
    })

    
    event.setMaterialEntries(GTCraftingComponents.FRAME, {
        UEV: "frame:eternium",
        UIV: "frame:cosmic_alloy",
        UXV: "frame:antimatter_alloy",
        OpV: "frame:singularity_alloy",
        MAX: "frame:absolute_alloy"
    })

    //hpic chip - for now using uhpic - might add new ones later
    event.setItems(GTCraftingComponents.POWER_COMPONENT, {
        UEV: Item.of("gtceu:uhpic_chip"),
        UIV: Item.of("gtceu:uhpic_chip"),
        UXV: Item.of("gtceu:uhpic_chip"),
        OpV: Item.of("gtceu:uhpic_chip"),
        MAX: Item.of("gtceu:uhpic_chip")
    })

    //voltage coils
    event.setItems(GTCraftingComponents.VOLTAGE_COIL, {
        UHV: Item.of("gtceu:uhv_voltage_coil"),//here
        UEV: Item.of("gtceu:uev_voltage_coil"),
        UIV: Item.of("gtceu:uiv_voltage_coil"),
        UXV: Item.of("gtceu:uxv_voltage_coil"),
        OpV: Item.of("gtceu:opv_voltage_coil"),
        MAX: Item.of("gtceu:max_voltage_coil")
    })

    //hull chemical sheets placeholder
    event.setItems(GTCraftingComponents.HULL_PLATE, {
        UEV: Item.of("gtceu:chaos_plastic_foil"),
        UIV: Item.of("gtceu:chaos_plastic_foil"),
        UXV: Item.of("gtceu:chaos_plastic_foil"),
        OpV: Item.of("gtceu:chaos_plastic_foil"),
        MAX: Item.of("gtceu:chaos_plastic_foil"),
    })

    event.setItems(GTCraftingComponents.DRUM, {
        UEV: Item.of("industrialforegoing:pity_black_hole_tank"),
        UIV: Item.of("industrialforegoing:simple_black_hole_tank"),
        UXV: Item.of("industrialforegoing:advanced_black_hole_tank"),
        OpV: Item.of("industrialforegoing:supreme_black_hole_tank"),
        MAX: Item.of("industrialforegoing:supreme_black_hole_tank")
    })

    event.setItems(GTCraftingComponents.CRATE, {
        UEV: Item.of("industrialforegoing:pity_black_hole_unit"),
        UIV: Item.of("industrialforegoing:simple_black_hole_unit"),
        UXV: Item.of("industrialforegoing:advanced_black_hole_unit"),
        OpV: Item.of("industrialforegoing:supreme_black_hole_unit"),
        MAX: Item.of("industrialforegoing:supreme_black_hole_unit")        
    })    
})
