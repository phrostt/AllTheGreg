// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {


  allthemods.shaped('additional_lights:fire_for_standing_torch_s', ['S', 'C'], { S: '#forge:rods/wooden', C: '#minecraft:coals' })
  allthemods.shaped('ae2:quartz_block', ['CC', 'CC'], { C: 'gtceu:certus_quartz_gem' }).id(`allthemods:ae2/quartz_block`)

  allthemods.smelting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/smelting_smelt_raw_uraninite_ore_to_ingot')
  allthemods.blasting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/blasting_smelt_raw_uraninite_ore_to_ingot')
  allthemods.shapeless('gtceu:raw_uraninite_block', '9x gtceu:raw_uraninite').id('atm9:gtceu/shaped_compress_uraninite_to_ore_block')

  // Blue Skies tools
  let planks = Ingredient.of('#minecraft:planks').subtract(Ingredient.of('#blue_skies:planks'))
  allthemods.forEachRecipe({ id: /minecraft:wooden_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })
  allthemods.forEachRecipe({ id: 'minecraft:stick' }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('#', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })

  let cobble = Ingredient.of('#quark:stone_tool_materials').subtract(Ingredient.of('#blue_skies:cobblestone'))
  allthemods.forEachRecipe({ id: /quark:tweaks\/crafting\/utility\/tools\/stone_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', cobble.toJson())
    json.add('key', key)
    recipe.json = json
  })

  


  let logSticks = Ingredient.of('#minecraft:logs').subtract(Ingredient.of(['#botania:livingwood_logs', '#botania:dreamwood_logs']))
  allthemods.shaped('16x minecraft:stick', ['s', 's'], { s: logSticks }).id('allthemods:easy_sticks')

  // duplicate abd and quark
  let abdRemovals = [
    'absentbydesign:slab_tuff',
    'absentbydesign:stairs_tuff',
    'absentbydesign:wall_tuff',
    'absentbydesign:wall_calcite',
    'absentbydesign:stairs_calcite',
    'absentbydesign:slab_calcite'
  ]
  abdRemovals.forEach(removeId => {
    allthemods.remove({ id: removeId })
  })
  
  allthemods.shaped('constructionwand:stone_wand', ['  C', ' S ', 'S  '], { C: '#minecraft:stone_crafting_materials', S: '#forge:rods/wooden' }).noMirror().id(`allthemods:constructionwand/stone_wand`)
  allthemods.shaped('constructionwand:iron_wand', ['  C', ' S ', 'S  '], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`allthemods:constructionwand/iron_wand`)

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
