ItemEvents.tooltip(event => {
    const quarks = [
        { name: 'up', desc: '§cFundamental positive charge constituent.', desc2: '§7Standard constituent of light hadrons.' },
        { name: 'down', desc: '§9Fundamental negative charge constituent.', desc2: '§7Forms stable baryonic matter pairs.' },
        { name: 'top', desc: '§bMassive, extremely short-lived particle.', desc2: '§7Requires immense energy to isolate.' },
        { name: 'bottom', desc: '§8Heavy, dense constituent.', desc2: '§7Exhibits profound gravitational interactions.' },
        { name: 'strange', desc: '§dExotic particle with high stability decay.', desc2: '§7Anomalous quantum state detected.' },
        { name: 'charm', desc: '§eLuminous second-generation quark.', desc2: '§7Highly energetic photonic emissions.' }
    ]

    quarks.forEach(quark => {
        event.add(`gtceu:${quark.name}_quark`, [
            '§8Subatomic Fundamental Particle',
            '§8[Tier: Baryonic Stabilization]',
            quark.desc,
            quark.desc2
        ])
    })
})