GTCEuServerEvents.oreVeins(event => {
    // Silicon-Zircon Vein (Expanded with Zircon, Baddeleyite, and Silicon)
    event.add("ganymede_silicon_zircon", vein => {
        vein.weight(50)
        vein.density(0.5)
        vein.clusterSize(32)
        vein.layer("ganymede")
        vein.dimensions(["planetsplus:ganymede"])
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get("baddeleyite")).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get("zircon")).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Silicon).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Zirconium).size(1, 2))
            )
        )
    })

    // Kurilite-Telluride Vein (Expanded with Kurilite, Sphalerite, and Silver)
    event.add("ganymede_kurilite_telluride", vein => {
        vein.weight(40)
        vein.density(0.5)
        vein.clusterSize(25)
        vein.layer("ganymede")
        vein.dimensions(["planetsplus:ganymede"])
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get("kurilite")).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Sphalerite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Galena).size(1, 1))
            )
        )
    })

    // Bauxite-Sphalerite Vein
    event.add("ganymede_bauxite_sphalerite", vein => {
        vein.weight(45)
        vein.density(0.6)
        vein.clusterSize(30)
        vein.layer("ganymede")
        vein.dimensions(["planetsplus:ganymede"])
        vein.heightRangeUniform(30, 90)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bauxite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Sphalerite).size(1, 3))
            )
        )
    })

    // Platinum Group Vein
    event.add("ganymede_platinum_group", vein => {
        vein.weight(25)
        vein.density(0.2)
        vein.clusterSize(60)
        vein.layer("ganymede")
        vein.dimensions(["planetsplus:ganymede"])
        vein.heightRangeUniform(-50, 0)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Platinum, 2, -50, 0)
            .withBlock(GTMaterials.Palladium, 1, -50, -15)
            .withBlock(GTMaterials.Cooperite, 1, -40, -20)
        )
    })

    // Copper Vein
    event.add("ganymede_copper", vein => {
        vein.weight(60)
        vein.density(0.6)
        vein.clusterSize(40)
        vein.layer("ganymede")
        vein.dimensions(["planetsplus:ganymede"])
        vein.heightRangeUniform(20, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Chalcopyrite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Iron).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 3))
            )
        )
    })

    // Iron Vein (Magnetite/Iron/Gold)
    event.add("ganymede_iron", vein => {
        vein.weight(60)
        vein.density(0.6)
        vein.clusterSize(40)
        vein.layer("ganymede")
        vein.dimensions(["planetsplus:ganymede"])
        vein.heightRangeUniform(10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Iron).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.VanadiumMagnetite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
            )
        )
    })

    // Nether Quartz Vein
    event.add("ganymede_nether_quartz", vein => {
        vein.weight(40)
        vein.density(0.5)
        vein.clusterSize(30)
        vein.layer("ganymede")
        vein.dimensions(["planetsplus:ganymede"])
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.NetherQuartz).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Quartzite).size(1, 2))
            )
        )
    })
})