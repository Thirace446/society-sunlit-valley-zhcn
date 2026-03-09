console.info("[SOCIETY-S-COBBLEMON] addCobblemonRecipes.js loaded");

ServerEvents.recipes((e) => {
  // Experience
  e.shapeless("cobblemon:exp_candy_s", ["8x cobblemon:exp_candy_xs"]);
  e.shapeless("8x cobblemon:exp_candy_xs", ["cobblemon:exp_candy_s"]);

  e.shapeless("cobblemon:exp_candy_m", ["3x cobblemon:exp_candy_s"]);
  e.shapeless("3x cobblemon:exp_candy_s", ["cobblemon:exp_candy_m"]);

  e.shapeless("cobblemon:exp_candy_l", ["3x cobblemon:exp_candy_m"]);
  e.shapeless("3x cobblemon:exp_candy_m", ["cobblemon:exp_candy_l"]);

  e.shapeless("cobblemon:exp_candy_xl", ["3x cobblemon:exp_candy_l"]);
  e.shapeless("3x cobblemon:exp_candy_l", ["cobblemon:exp_candy_xl"]);
  // TMS
  e.shapeless("sunlit_cobblemon:tm_pack", ["9x #sunlit_cobblemon:tr"]);
  e.shapeless("sunlit_cobblemon:greater_tm_pack", ["9x #sunlit_cobblemon:tm"]);
  e.shaped("sunlit_cobblemon:uncharged_battery", [" zr", "zrz", "rz "], {
    z: "create:zinc_ingot",
    r: "create:rose_quartz",
  });
  e.shaped("cobblemon:ability_capsule", ["gsf"], {
    g: "sunlit_cobblemon:poke_genes",
    f: "sunlit_cobblemon:fairy_heart",
    s: "society:production_science_pack",
  });
  e.shaped("cobblemon:ability_patch", [" g ", "fsf", " g "], {
    g: "sunlit_cobblemon:poke_genes",
    f: "sunlit_cobblemon:fairy_heart",
    s: "numismatics:prismatic_coin",
  });
  e.shaped("cobble_workers:gardening_station", ["fff", "fpf", "f f"], {
    f: "meadow:fire_log",
    p: "cobblemon:poke_ball",
  });
  e.shaped("cobble_workers:craft_station", ["fff", "bpb", "b b"], {
    f: "meadow:fire_log",
    p: "cobblemon:poke_ball",
    b: "minecraft:bricks",
  });
  e.shaped("cobble_workers:mystery_mine", ["efe", "fpf", "efe"], {
    f: "meadow:fire_log",
    p: "cobblemon:poke_ball",
    e: "society:earth_crystal",
  });
  e.shapeless("sunlit_cobblemon:berry_smoothie", [
    "cobblemon:oran_berry",
    "society:sap",
  ]);
  e.shapeless("sunlit_cobblemon:super_berry_smoothie", [
    "cobblemon:potion",
    "minecraft:honey_bottle",
    "cobblemon:energy_root",
  ]);
  e.shapeless("sunlit_cobblemon:hyper_berry_smoothie", [
    "cobblemon:super_potion",
    "society:maple_syrup",
    "cobblemon:sitrus_berry",
  ]);
  e.shapeless("sunlit_cobblemon:max_berry_smoothie", [
    "cobblemon:hyper_potion",
    "species:ichor_bottle",
    "cobblemon:vivichoke",
  ]);
  // Legendaries
  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"fire"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:blazing_stone",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:ember_crystal_cluster",
    },
  );
  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"electric"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:endless_battery",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:amulet_of_light",
    },
  );
  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"rock"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:tabula_rasa",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:source_gem",
    },
  );
  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"ice"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:prismatic_ice",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:wheel_of_adaptation",
    },
  );
  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"steel"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:unbreakable_cog",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:steamy_gadget",
    },
  );

  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"psychic"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:poke_genes",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:production_science_pack",
    },
  );
  e.shaped(
    Item.of("sunlit_cobblemon:star_pixie", '{type:"flying"}'),
    [" g ", "fsf", " g "],
    {
      g: "sunlit_cobblemon:atmospheric_vial",
      f: "sunlit_cobblemon:fairy_heart",
      s: "society:production_science_pack",
    },
  );
  e.shaped("sunlit_cobblemon:sun_essence", ["dmd", "msm", "dmd"], {
    s: 'society:mystic_syrup',
    m: 'sunlit_cobblemon:mystica_branch',
    d: 'sunlit_cobblemon:sun_drops'
  });
  e.shaped('sunlit_cobblemon:wormhole_generator', ["ded", "sus", "dbd"], {
    s: 'minecraft:echo_shard',
    d: 'sunlit_cobblemon:cosmic_dust',
    e: 'oreganized:electrum_ingot',
    u: 'oreganized:unknown_device',
    b: 'society:battery'
  });
  e.shaped('sunlit_cobblemon:blooming_ring', ["StS", "nsc", "SrS"], {
    S: 'sunlit_cobblemon:sunlit_league_medallion',
    c: 'society:sunlit_crystal',
    s: 'sunlit_cobblemon:sun_essence',
    r: 'society:recycled_core',
    n: 'society:net_bobber',
    t: 'domesticationinnovation:collar_tag'
  });
  e.shaped('sunlit_cobblemon:cornucopia_of_greed', ["psp", "scs", "SpS"], {
    p: 'numismatics:prismatic_coin',
    c: 'society:cornucopia',
    s: 'sunlit_cobblemon:sun_essence',
    S: 'sunlit_cobblemon:sunlit_league_medallion',
  });
  e.custom({
    "type": "farm_and_charm:stove",
    "ingredients": [
      {
        "item": "bakery:sweet_dough"
      },
      {
        "item": 'sunlit_cobblemon:dried_legendary_cobbleberry'
      },
      {
        "item": 'sunlit_cobblemon:mystica_branch'
      }
    ],
    "item": 'sunlit_cobblemon:mystica_cookie',
    "count": 4,
    "experience": 0.3
  })

  global.cobbleTypeGems.forEach((gem) => {
    e.shapeless(`3x ${gem.item}`, [`society:pristine_${gem.item.split(":")[1]}`]);
  });
});
