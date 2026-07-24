ServerEvents.recipes(allthemods => {
    const tiers = {
        ULV: 8,
        LV: 32,
        MV: 128,
        HV: 512,
        EV: 2048,
        IV: 8192,
        LuV: 32768,
        ZPM: 131072,
        UV: 524288,
        UHV: 2097152,
        UEV: 8388608,
        UIV: 33554432,
        UXV: 134217728,
        OpV: 536870912,
        MAX: 2147483647
    };

    const tierValues = [32, 128, 512, 2048, 8192, 32768, 131072, 524288, 2097152, 8388608, 33554432, 134217728, 536870912, 2147483647];

    const addLaserEngraver = (itemIn, lensIn, itemOut, duration, eu, oID) => {
        // Sanitize ID based on output
        let outputID
        if (oID) { outputID = oID }
        else { outputID = itemOut.toString().replace(/[^a-z0-9]/gi, '_'); }
        allthemods.recipes.gtceu.laser_engraver(`allthemods:laser_engraver/${outputID}`)
            .itemInputs([itemIn, lensIn]) // The lens is a required item input
            .itemOutputs(itemOut)
            .duration(duration)
            .EUt(eu)
            .cleanroom(CleanroomType.STERILE_CLEANROOM);
    };

    addLaserEngraver(
        'gtceu:empowered_wafer',
        'gtceu:empowered_polymer_lens',
        'gtceu:empowered_ram_wafer',
        900,
        tiers['UV']
    );

    addLaserEngraver(
        'gtceu:germanium_wafer',
        'gtceu:atm_star_lens',
        'gtceu:germanium_diode_wafer',
        900,
        tiers['ZPM']
    );

    addLaserEngraver(
        'gtceu:atomic_wafer',
        'gtceu:eternal_lens',
        'gtceu:atomic_clock_wafer',
        900,
        tiers['ZPM']
    );

    const socs = [
        { T: 9, Name: 'uhv', Lens: 'gtceu:corrosive_lens' },
        { T: 10, Name: 'uev', Lens: 'gtceu:destructive_lens' },
        { T: 11, Name: 'uiv', Lens: 'gtceu:vengeful_lens' },
        { T: 12, Name: 'uxv', Lens: 'gtceu:steadfast_lens' },
        { T: 13, Name: 'opv', Lens: 'gtceu:demon_lens' },
        { T: 14, Name: 'max', Lens: 'gtceu:chaos_plastic_lens' }
    ]

    socs.forEach(soc => {
        let eTier = soc.T <= 13 ? soc.T : 13
        addLaserEngraver(
            'gtceu:empowered_wafer',
            soc.Lens,
            `gtceu:${soc.Name}_soc`,
            900,
            tierValues[eTier],
            `${soc.Name}_soc`);
    })
});