// priority: -21
console.info("[SOCIETY-S-COBBLEMON] globalCobblemonRegistry.js loaded");

global.cobbleAdventuring = [
  { item: "cobblemon:relic_coin", value: 64 },
  { item: "cobblemon:relic_coin_pouch", value: 576 },
  { item: "cobblemon:relic_coin_sack", value: 5184 },
  { item: "cobblemon:helix_fossil", value: 920 },
  { item: "cobblemon:dome_fossil", value: 9200 },
  { item: "cobblemon:old_amber_fossil", value: 920 },
  { item: "cobblemon:root_fossil", value: 1204 },
  { item: "cobblemon:claw_fossil", value: 1204 },
  { item: "cobblemon:skull_fossil", value: 920 },
  { item: "cobblemon:armor_fossil", value: 1290 },
  { item: "cobblemon:cover_fossil", value: 3999 },
  { item: "cobblemon:plume_fossil", value: 920 },
  { item: "cobblemon:jaw_fossil", value: 4200 },
  { item: "cobblemon:sail_fossil", value: 4200 },
  { item: "cobblemon:fossilized_bird", value: 5000 },
  { item: "cobblemon:fossilized_fish", value: 5000 },
  { item: "cobblemon:fossilized_drake", value: 5000 },
  { item: "cobblemon:fossilized_dino", value: 5000 },
  { item: "cobblemon:bygone_sherd", value: 256 },
  { item: "cobblemon:capture_sherd", value: 1000 },
  { item: "cobblemon:dome_sherd", value: 256 },
  { item: "cobblemon:helix_sherd", value: 256 },
  { item: "cobblemon:nostalgic_sherd", value: 256 },
  { item: "cobblemon:suspicious_sherd", value: 256 },
  { item: "cobblemon:malicious_armor", value: 2400 },
  { item: "cobblemon:auspicious_armor", value: 2400 },
  { item: "cobblemon:unremarkable_teacup", value: 200 },
  { item: "cobblemon:masterpiece_teacup", value: 16384 },
  { item: "cobblemon:chipped_pot", value: 300 },
  { item: "cobblemon:cracked_pot", value: 11 },
  { item: "sunlit_cobblemon:fire_pledge", value: 10000 },
  { item: "sunlit_cobblemon:water_pledge", value: 10000 },
  { item: "sunlit_cobblemon:grass_pledge", value: 10000 },
];

global.cobbleTypeGems = [
  { item: "cobblemon:normal_gem", value: 512 },
  { item: "cobblemon:fire_gem", value: 512 },
  { item: "cobblemon:water_gem", value: 512 },
  { item: "cobblemon:grass_gem", value: 512 },
  { item: "cobblemon:electric_gem", value: 512 },
  { item: "cobblemon:ice_gem", value: 512 },
  { item: "cobblemon:fighting_gem", value: 512 },
  { item: "cobblemon:poison_gem", value: 512 },
  { item: "cobblemon:ground_gem", value: 512 },
  { item: "cobblemon:flying_gem", value: 512 },
  { item: "cobblemon:psychic_gem", value: 512 },
  { item: "cobblemon:bug_gem", value: 512 },
  { item: "cobblemon:rock_gem", value: 512 },
  { item: "cobblemon:ghost_gem", value: 512 },
  { item: "cobblemon:dragon_gem", value: 512 },
  { item: "cobblemon:dark_gem", value: 512 },
  { item: "cobblemon:steel_gem", value: 512 },
  { item: "cobblemon:fairy_gem", value: 512 },
];

global.cobblePristineTypeGems = [];
global.cobbleTypeGems.forEach((gem) => {
  global.cobblePristineTypeGems.push({
    item: `sunlit_cobblemon:pristine_${gem.item.path}`,
    value: gem.value * 4,
  });
});

global.cobbleGeology = [
  { item: "cobblemon:tumblestone", value: 8 },
  { item: "cobblemon:black_tumblestone", value: 12 },
  { item: "cobblemon:sky_tumblestone", value: 16 },
  { item: "cobblemon:tumblestone_block", value: 32 },
  { item: "cobblemon:black_tumblestone_block", value: 48 },
  { item: "cobblemon:sky_tumblestone_block", value: 64 },
  { item: "cobblemon:fire_stone", value: 640 },
  { item: "cobblemon:fire_stone_block", value: 4500 },
  { item: "cobblemon:water_stone", value: 640 },
  { item: "cobblemon:water_stone_block", value: 4500 },
  { item: "cobblemon:thunder_stone", value: 500 },
  { item: "cobblemon:thunder_stone_block", value: 4500 },
  { item: "cobblemon:leaf_stone", value: 640 },
  { item: "cobblemon:leaf_stone_block", value: 5760 },
  { item: "cobblemon:moon_stone", value: 230 },
  { item: "cobblemon:moon_stone_block", value: 2070 },
  { item: "cobblemon:sun_stone", value: 500 },
  { item: "cobblemon:sun_stone_block", value: 4500 },
  { item: "cobblemon:shiny_stone", value: 1200 },
  { item: "cobblemon:shiny_stone_block", value: 10800 },
  { item: "cobblemon:dusk_stone", value: 1200 },
  { item: "cobblemon:dusk_stone_block", value: 10800 },
  { item: "cobblemon:dawn_stone", value: 806 },
  { item: "cobblemon:dawn_stone_block", value: 7254 },
  { item: "cobblemon:ice_stone", value: 1020 },
  { item: "cobblemon:ice_stone_block", value: 9180 },
  { item: "cobblemon:black_augurite", value: 725 },
  { item: "cobblemon:metal_coat", value: 1695 },
];

global.cobbleTypeGems.forEach((gem) => global.cobbleGeology.push(gem));

global.cobblemonCooking = [
  { item: "cobblemon:braised_vivichoke", value: 69 },
  { item: "cobblemon:roasted_leek", value: 3 },
  { item: "cobblemon:leek_and_potato_stew", value: 55 },
  { item: "cobblemon:vivichoke_dip", value: 1 },
  { item: "cobblemon:berry_juice", value: 900 },
  { item: "cobblemon:remedy",  value: 8 },
  { item: "cobblemon:fine_remedy",  value: 78 },
  { item: "cobblemon:superb_remedy",  value: 245 },
  { item: "cobblemon:heal_powder", value: 78 },
  { item: "cobblemon:potion", value: 128 },
  { item: "cobblemon:super_potion", value: 512 },
  { item: "cobblemon:hyper_potion", value: 1024 },
  { item: "cobblemon:max_potion", value: 2048 },
  { item: "cobblemon:full_restore", value: 3072 },
  { item: "cobblemon:whipped_dream", value: 1905 },
  { item: "cobblemon:ribbon_sweet", value: 312 },
  { item: "cobblemon:strawberry_sweet", value: 312 },
  { item: "cobblemon:love_sweet", value: 312 },
  { item: "cobblemon:berry_sweet", value: 312 },
  { item: "cobblemon:clover_sweet", value: 312 },
  { item: "cobblemon:flower_sweet", value: 312 },
  { item: "cobblemon:star_sweet", value: 312 },
];

global.cobbleCrops = [
  { item: "cobblemon:big_root", value: 4 },
  { item: "cobblemon:energy_root", value: 16 },
  { item: "cobblemon:medicinal_leek", value: 2 },
  { item: "cobblemon:red_apricorn", value: 8 },
  { item: "cobblemon:yellow_apricorn", value: 8 },
  { item: "cobblemon:green_apricorn", value: 8 },
  { item: "cobblemon:blue_apricorn", value: 8 },
  { item: "cobblemon:pink_apricorn", value: 8 },
  { item: "cobblemon:black_apricorn", value: 8 },
  { item: "cobblemon:white_apricorn", value: 8 },
  { item: "cobblemon:white_mint_leaf", value: 44 },
  { item: "cobblemon:green_mint_leaf", value: 44 },
  { item: "cobblemon:pink_mint_leaf", value: 44 },
  { item: "cobblemon:cyan_mint_leaf", value: 44 },
  { item: "cobblemon:blue_mint_leaf", value: 44 },
  { item: "cobblemon:red_mint_leaf", value: 44 },
  { item: "cobblemon:vivichoke", value: 46 },
  { item: "cobblemon:revival_herb", value: 52 },
  { item: "cobblemon:mirror_herb", value: 120 },
  { item: "cobblemon:mental_herb", value: 100 },
  { item: "cobblemon:power_herb", value: 100 },
  { item: "cobblemon:white_herb", value: 100 },
  { item: "cobblemon:oran_berry", value: 4 },
  { item: "cobblemon:cheri_berry", value: 4 },
  { item: "cobblemon:chesto_berry", value: 4 },
  { item: "cobblemon:pecha_berry", value: 4 },
  { item: "cobblemon:rawst_berry", value: 4 },
  { item: "cobblemon:aspear_berry", value: 4 },
  { item: "cobblemon:persim_berry", value: 4 },
  { item: "cobblemon:razz_berry", value: 4 },
  { item: "cobblemon:bluk_berry", value: 4 },
  { item: "cobblemon:nanab_berry", value: 4 },
  { item: "cobblemon:wepear_berry", value: 4 },
  { item: "cobblemon:pinap_berry", value: 4 },
  { item: "cobblemon:occa_berry", value: 4 },
  { item: "cobblemon:passho_berry", value: 4 },
  { item: "cobblemon:wacan_berry", value: 4 },
  { item: "cobblemon:rindo_berry", value: 4 },
  { item: "cobblemon:yache_berry", value: 4 },
  { item: "cobblemon:chople_berry", value: 4 },
  { item: "cobblemon:kebia_berry", value: 4 },
  { item: "cobblemon:shuca_berry", value: 4 },
  { item: "cobblemon:coba_berry", value: 4 },
  { item: "cobblemon:payapa_berry", value: 4 },
  { item: "cobblemon:tanga_berry", value: 4 },
  { item: "cobblemon:charti_berry", value: 4 },
  { item: "cobblemon:kasib_berry", value: 4 },
  { item: "cobblemon:haban_berry", value: 4 },
  { item: "cobblemon:colbur_berry", value: 4 },
  { item: "cobblemon:babiri_berry", value: 4 },
  { item: "cobblemon:chilan_berry", value: 4 },
  { item: "cobblemon:roseli_berry", value: 6 },
  { item: "cobblemon:leppa_berry", value: 8 },
  { item: "cobblemon:lum_berry", value: 8 },
  { item: "cobblemon:figy_berry", value: 8 },
  { item: "cobblemon:wiki_berry", value: 8 },
  { item: "cobblemon:mago_berry", value: 8 },
  { item: "cobblemon:aguav_berry", value: 8 },
  { item: "cobblemon:iapapa_berry", value: 8 },
  { item: "cobblemon:sitrus_berry", value: 12 },
  { item: "cobblemon:touga_berry", value: 12 },
  { item: "cobblemon:cornn_berry", value: 12 },
  { item: "cobblemon:magost_berry", value: 12 },
  { item: "cobblemon:rabuta_berry", value: 12 },
  { item: "cobblemon:nomel_berry", value: 12 },
  { item: "cobblemon:hopo_berry", value: 12 },
  { item: "cobblemon:enigma_berry", value: 16 },
  { item: "cobblemon:pomeg_berry", value: 16 },
  { item: "cobblemon:kelpsy_berry", value: 16 },
  { item: "cobblemon:qualot_berry", value: 16 },
  { item: "cobblemon:hondew_berry", value: 16 },
  { item: "cobblemon:grepa_berry", value: 16 },
  { item: "cobblemon:tamato_berry", value: 16 },
  { item: "cobblemon:spelon_berry", value: 16 },
  { item: "cobblemon:pamtre_berry", value: 16 },
  { item: "cobblemon:watmel_berry", value: 16 },
  { item: "cobblemon:durin_berry", value: 16 },
  { item: "cobblemon:belue_berry", value: 16 },
  { item: "cobblemon:kee_berry", value: 32 },
  { item: "cobblemon:maranga_berry", value: 32 },
  { item: "cobblemon:liechi_berry", value: 32 },
  { item: "cobblemon:ganlon_berry", value: 32 },
  { item: "cobblemon:salac_berry", value: 32 },
  { item: "cobblemon:petaya_berry", value: 32 },
  { item: "cobblemon:apicot_berry", value: 32 },
  { item: "cobblemon:lansat_berry", value: 32 },
  { item: "cobblemon:starf_berry", value: 32 },
  { item: "cobblemon:micle_berry", value: 32 },
  { item: "cobblemon:custap_berry", value: 32 },
  { item: "cobblemon:jaboca_berry", value: 32 },
  { item: "cobblemon:rowap_berry", value: 32 },
  { item: "cobblemon:tart_apple", value: 20736 },
  { item: "cobblemon:sweet_apple", value: 3072 },
  { item: "cobblemon:syrupy_apple", value: 26368 }
];

global.cobblemonFarmerProducts = [
  { item: "sunlit_cobblemon:paras_mushroom", value: 225 },
  { item: "sunlit_cobblemon:strange_spore", value: 130 },
  { item: "sunlit_cobblemon:poison_drop", value: 4 },
  { item: "sunlit_cobblemon:permafrost", value: 340 },
  { item: "sunlit_cobblemon:resonance_gem", value: 460 },
  { item: "sunlit_cobblemon:electro_wool", value: 512 },
  { item: "sunlit_cobblemon:electric_canvas", value: 8192 },
  { item: "sunlit_cobblemon:moomoo_milk", value: 320 },
  { item: "sunlit_cobblemon:large_moomoo_milk", value: 1280 },
  { item: "cobblemon:tasty_tail", value: 780 },
  { item: "cobblemon:deep_sea_scale", value: 450 },
  { item: "cobblemon:dragon_scale", value: 3260 },
  { item: "cobblemon:prism_scale", value: 6520 },
  { item: "cobblemon:deep_sea_tooth", value: 330 },
  { item: "cobblemon:razor_fang", value: 220 },
  { item: "cobblemon:razor_claw", value: 128 },
  { item: "cobblemon:dragon_fang", value: 1430 },
];

/**
 * Preserves
 * Formula: Ingredient * 20
 */
global.cobblemonPreserves = [
  { item: "sunlit_cobblemon:leek_preserves", value: 40 },
  { item: "sunlit_cobblemon:vivichoke_preserves", value: 1280 },
  { item: "sunlit_cobblemon:common_cobbleberry_preserves", value: 80 },
  { item: "sunlit_cobblemon:uncommon_cobbleberry_preserves", value: 200 },
  { item: "sunlit_cobblemon:rare_cobbleberry_preserves", value: 320 },
  { item: "sunlit_cobblemon:legendary_cobbleberry_preserves", value: 640 },
];
/**
 * Dried
 * Formula:  Ingredient * 14 + 64,
 */
global.cobblemonDehydrated = [
  { item: "sunlit_cobblemon:dried_common_cobbleberry", value: 120 },
  { item: "sunlit_cobblemon:dried_uncommon_cobbleberry", value: 176 },
  { item: "sunlit_cobblemon:dried_rare_cobbleberry", value: 288 },
  { item: "sunlit_cobblemon:dried_legendary_cobbleberry", value: 512 },
  { item: "sunlit_cobblemon:dried_paras_mushroom", value: 3214 },
];

global.cobblemonArtisan = [
  { item: "sunlit_cobblemon:venomshine", value: 480 },
  { item: "sunlit_cobblemon:moomoo_cheese", value: 640 },
  { item: "sunlit_cobblemon:aged_moomoo_cheese", value: 1920 },
  { item: "sunlit_cobblemon:double_aged_moomoo_cheese", value: 5760 },
];

global.cobbleAdventuring.forEach((miscItem) => {
  const { item, value } = miscItem;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:meat_sell_multiplier",
  });
});
global.cobbleGeology.forEach((miscItem) => {
  const { item, value } = miscItem;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:gem_sell_multiplier",
  });
});
global.cobblePristineTypeGems.forEach((miscItem) => {
  const { item, value } = miscItem;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:gem_sell_multiplier",
  });
});
global.cobblemonFarmerProducts.forEach((dish) => {
  const { item, value } = dish;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.cobblemonCooking.forEach((dish) => {
  const { item, value } = dish;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.cobblemonPreserves.forEach((miscItem) => {
  const { item, value } = miscItem;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.cobblemonDehydrated.forEach((dehydratee) => {
  const { item, value } = dehydratee;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.cobblemonArtisan.forEach((dehydratee) => {
  const { item, value } = dehydratee;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.cobbleCrops.forEach((miscItem) => {
  const { item, value } = miscItem;
  global.trades.set(item, {
    value: value,
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
