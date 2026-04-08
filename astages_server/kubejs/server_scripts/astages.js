// Просто список модов
//
//     'ae2', 'ae2ao', 'ae2wtlib',
//     'constructionwand',
//     'create', 'createbigcannons', 'createaddition', 'create_cyber_goggles',  'copycats', 'tfmg',
//     'divinerpg', 'divinerpg_compat',
//     'draconicevolution',
//     'mekanism', 'mekanismgenerators', 'mekanismtools', 'megacells',
//     'mcwbridges', 'mcwfences', 'mcwfurnitures', 'mcwroofs', 'mcwwindows',
//     'mahoutsukai',
//     'northstar',
//     'twilightforest',
//     'usefulbackpacks',
//     'refurbished_furniture',
//     'mcsp', 'securitycraft', 'superbwarfare', 'tacz'
// 


// Создаём стадии игры

// AStages.customizeStage('stage_0') // начальная стадия, когда ничего недоступно

AStages.customizeStage('stone_age')

AStages.customizeStage('twilight')
AStages.customizeStage('divine')
AStages.customizeStage('draconic')


AStages.customizeStage('steam_age')
AStages.customizeStage('oil_age')
AStages.customizeStage('space_age')
AStages.customizeStage('war_age')


// Здесь прописываем перечень разрешённых модов
// Для stage_0
// AStages.addRestrictionForModRecipe('ID рецепта (придумать свой)' , 'Стадия на которой ограничение', 'Мод, откуда рецепты')

// Для stone_age
AStages.addRestrictionForModRecipe('astages/start' , 'stone_age', 'minecraft')

// Для steam_age
AStages.addRestrictionForModRecipe('astages/recipe01', 'steam_age', 'create')
AStages.addRestrictionForModRecipe('astages/recipe02', 'steam_age', 'mcwbridges')
AStages.addRestrictionForModRecipe('astages/recipe03', 'steam_age', 'mcwfences')
AStages.addRestrictionForModRecipe('astages/recipe04', 'steam_age', 'mcwfurnitures')
AStages.addRestrictionForModRecipe('astages/recipe05', 'steam_age', 'mcwroofs')
AStages.addRestrictionForModRecipe('astages/recipe06', 'steam_age', 'mcwwindows')
AStages.addRestrictionForModRecipe('astages/recipe07', 'steam_age', 'usefulbackpacks')
AStages.addRestrictionForModRecipe('astages/recipe08' , 'steam_age', 'createbigcannons')
AStages.addRestrictionForModRecipe('astages/recipe09' , 'steam_age', 'create_cyber_goggles')
AStages.addRestrictionForModRecipe('astages/recipe010' , 'steam_age', 'copycats')
AStages.addRestrictionForModRecipe('astages/recipe011', 'steam_age', 'adchimneys')
AStages.addRestrictionForModRecipe('astages/recipe012', 'steam_age', 'adpother')

// Для oil_age
AStages.addRestrictionForModRecipe('astages/recipe11', 'oil_age', 'tfmg')
AStages.addRestrictionForModRecipe('astages/recipe12', 'oil_age', 'refurbished_furniture')

// Для war_age
AStages.addRestrictionForModRecipe( 'astages/recipe21', 'war_age', 'superbwarfare')
AStages.addRestrictionForModRecipe( 'astages/recipe22', 'war_age', 'mcsp')
AStages.addRestrictionForRecipe(    "astages/recipe23", "war_age", "minecraft:crafting", 'kubejs:kjs/superbwarfare_handgun_ammo')
AStages.addRestrictionForRecipe(    "astages/recipe24", "war_age", "minecraft:crafting", 'kubejs:kjs/superbwarfare_shotgun_ammo')
AStages.addRestrictionForRecipe(    "astages/recipe25", "war_age", "minecraft:crafting", 'kubejs:kjs/superbwarfare_sniper_ammo')
AStages.addRestrictionForRecipe(    "astages/recipe26", "war_age", "minecraft:crafting", 'kubejs:kjs/superbwarfare_heavy_ammo')
AStages.addRestrictionForRecipe(    "astages/recipe27", "war_age", "minecraft:crafting", 'kubejs:kjs/superbwarfare_rifle_ammo')
AStages.addRestrictionForRecipe(    "astages/recipe28", "war_age", "minecraft:crafting", 'kubejs:kjs/superbwarfare_small_container')
AStages.addRestrictionForModRecipe( 'astages/recipe29', 'war_age', 'warbornrenewed')



// Для space_age
AStages.addRestrictionForModRecipe('astages/recipe31' , 'oil_age', 'createaddition')
AStages.addRestrictionForModRecipe('astages/recipe32' , 'space_age', 'ae2')
AStages.addRestrictionForModRecipe('astages/recipe33' , 'space_age', 'ae2ao')
AStages.addRestrictionForModRecipe('astages/recipe34' , 'space_age', 'ae2wtlib')
AStages.addRestrictionForModRecipe('astages/recipe35' , 'space_age', 'constructionwand')
AStages.addRestrictionForModRecipe('astages/recipe36', 'space_age', 'mekanism')
AStages.addRestrictionForModRecipe('astages/recipe37', 'space_age', 'mekanismgenerators')
AStages.addRestrictionForModRecipe('astages/recipe38', 'space_age', 'mekanismtools')
AStages.addRestrictionForModRecipe('astages/recipe39', 'space_age', 'megacells')
AStages.addRestrictionForModRecipe('astages/recipe310', 'space_age', 'securitycraft')
AStages.addRestrictionForModRecipe('astages/recipe311', 'space_age', 'northstar')

// Для twilight
AStages.addRestrictionForModRecipe('astages/recipe41', 'twilight', 'twilightforest')
AStages.addRestrictionForDimension("astages/dimension1", "twilight", "twilightforest:twilight_forest")

// Для divine
AStages.addRestrictionForModRecipe('astages/recipe42', 'divine', 'mahoutsukai')
AStages.addRestrictionForModRecipe('astages/recipe43', 'divine', 'divinerpg')
AStages.addRestrictionForModRecipe('astages/recipe44', 'divine', 'divinerpg_compat')

// Для draconic
AStages.addRestrictionForModRecipe('astages/recipe51', 'draconic', 'draconicevolution')

