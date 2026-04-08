ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ mod: 'terralith' })
})


ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'minecraft:crafter' })

  // ставим новый
  event.shaped('minecraft:crafter', [
    'AAA',
    'CBC',
    'CDC'
  ], {
    A: '#c:ingots/netherite',              
    B: 'minecraft:comparator',         
    C: 'minecraft:obsidian',
    D: 'minecraft:redstone_block'             
  })
})


ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'superbwarfare:handgun_ammo' })

  // ставим новый
  event.shaped('superbwarfare:handgun_ammo', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: '#c:nuggets/copper',              
    B: 'createbigcannons:gunpowder_pinch',         
    C: 'createbigcannons:empty_machine_gun_round'             
  })
})

ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'superbwarfare:rifle_ammo' })

  // ставим новый
  event.shaped('superbwarfare:rifle_ammo', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: '#c:nuggets/steel',              
    B: 'createbigcannons:gunpowder_pinch',         
    C: 'createbigcannons:empty_machine_gun_round'             
  })
})

ServerEvents.recipes(event => {
  // ставим новый
  event.shaped('9x northstar:tungsten_nugget', [
    'A'
  ], {
    A: '#c:ingots/tungsten'                       
  })
})

ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'superbwarfare:sniper_ammo' })

  // ставим новый
  event.shaped('superbwarfare:sniper_ammo', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: '#c:nuggets/tungsten',              
    B: 'createbigcannons:gunpowder_pinch',         
    C: 'createbigcannons:empty_machine_gun_round'             
  })
})

ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'superbwarfare:shotgun_ammo' })

  // ставим новый
  event.shaped('superbwarfare:shotgun_ammo', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: '#c:nuggets/lead',              
    B: 'createbigcannons:gunpowder_pinch',         
    C: 'minecraft:paper'             
  })
})

ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'superbwarfare:heavy_ammo' })

  // ставим новый
  event.shaped('superbwarfare:heavy_ammo', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: '#c:nuggets/steel',              
    B: 'createbigcannons:gunpowder_pinch',         
    C: 'createbigcannons:empty_machine_gun_round'             
  })
})

ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'create:crafting_blueprint' })

  // ставим новый
  event.shaped('create:crafting_blueprint', [
    'AB',
    'CB'
  ], {
    A: 'minecraft:paper',              
    B: '#c:gems/lapis',         
    C: '#c:dusts/redstone'             
  })
})

ServerEvents.recipes(event => {
  // ставим новый
  event.shaped('superbwarfare:small_container[container_loot={loot_table:"superbwarfare:containers/blueprints"}]', [
    'BBB',
    'BAB',
    'BBB'
  ], {
    A: 'create:crafting_blueprint',              
    B: '#c:ingots/copper'                    
  })
})

ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'minecraft:furnace_minecart' })

  // ставим новый
  event.shaped('minecraft:furnace_minecart', [
    'ABC',
    'DEF',
    'GHG'
  ], {
    A: 'create:controls',              
    B: 'create:steam_engine',         
    C: 'create:steam_whistle',
    D: 'create:hand_crank',
    E: 'create:blaze_burner',
    F: 'create:schedule',
    G: 'create:cogwheel',
    H: 'minecraft:minecart'             
  })
})

ServerEvents.recipes(event => {
  event.remove({ id: 'northstar:mixing/titanium2' })
  
  event.recipes.createMixing('northstar:titanium_tetrachloride', [
      Fluid.of('mekanism:chlorine', 250),
    'tfmg:coal_coke',
    'tfmg:coal_coke',
    'create:zinc_ingot',
    Fluid.of('northstar:carbon', 500)
  ]).superheated()
})


ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'superbwarfare:steel_ingot' })
})
ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'createbigcannons:steel_ingot' })
})

ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'usefulbackpacks:backpack_small' })

  // ставим новый
  event.shaped('usefulbackpacks:backpack_small', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: '#minecraft:wool',              
    B: 'minecraft:leather',         
    C: 'minecraft:shulker_shell'        
  })
})

ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'usefulbackpacks:backpack_enderchest' })

  // ставим новый
  event.shaped('usefulbackpacks:backpack_enderchest', [
    'ABA',
    'DCD',
    'ABA'
  ], {
    A: '#minecraft:wool',              
    B: 'minecraft:leather',         
    C: 'minecraft:shulker_shell',
    D: 'minecraft:ender_chest'    
  })
})

ServerEvents.recipes(event => {
  // удаляем старый рецепт
  event.remove({ output: 'mekanism:mekasuit_helmet' })
  event.remove({ output: 'mekanism:mekasuit_bodyarmor' })
  event.remove({ output: 'mekanism:mekasuit_pants'})
  event.remove({ output: 'mekanism:mekasuit_boots' })

  // ставим новый
  event.shaped('mekanism:mekasuit_helmet', [
    'ABA',
    'DCD',
    'EFE'
  ], {
    A: 'mekanism:hdpe_sheet',              
    B: 'mekanism:ultimate_control_circuit',         
    C: 'minecraft:netherite_helmet',
    D: 'northstar:martian_steel_sheet',
    E: 'mekanism:pellet_polonium',
    F: 'mekanism:basic_induction_cell'    
  })

  event.shaped('mekanism:mekasuit_bodyarmor', [
    'ABA',
    'DCD',
    'EFE'
  ], {
    A: 'mekanism:hdpe_sheet',              
    B: 'mekanism:ultimate_control_circuit',         
    C: 'minecraft:netherite_chestplate',
    D: 'northstar:martian_steel_sheet',
    E: 'mekanism:pellet_polonium',
    F: 'mekanism:basic_induction_cell'    
  })

  event.shaped('mekanism:mekasuit_pants', [
    'ABA',
    'DCD',
    'EFE'
  ], {
    A: 'mekanism:hdpe_sheet',              
    B: 'mekanism:ultimate_control_circuit',         
    C: 'minecraft:netherite_leggings',
    D: 'northstar:martian_steel_sheet',
    E: 'mekanism:pellet_polonium',
    F: 'mekanism:basic_induction_cell'    
  })

  event.shaped('mekanism:mekasuit_boots', [
    'ABA',
    'DCD',
    'EFE'
  ], {
    A: 'mekanism:hdpe_sheet',              
    B: 'mekanism:ultimate_control_circuit',         
    C: 'minecraft:netherite_boots',
    D: 'northstar:martian_steel_sheet',
    E: 'mekanism:pellet_polonium',
    F: 'mekanism:basic_induction_cell'    
  })
})