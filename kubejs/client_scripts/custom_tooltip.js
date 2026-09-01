ItemEvents.tooltip(event => {
    event.addAdvanced('gtceu:bacteria_gene_sample', (item, advanced, text) => {
        let nbt = item.nbt;
        let speciesLabel = (nbt && nbt.speciesName) ? nbt.speciesName : 'Unknown';
        text.add(1, Text.of('Species - ' + speciesLabel).red());

        let line = 2;

        if (nbt && nbt.parentName) {
            text.add(line, Text.of('Parent - ' + nbt.parentName).gray());
            line++;
        }

        if (nbt && nbt.parent2Name) {
            text.add(line, Text.of('Parent - ' + nbt.parent2Name).gray());
            line++;
        }
    });
});