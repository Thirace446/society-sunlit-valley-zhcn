console.info("[SOCIETY-S-COBBLEMON] registerCobblemonBlocks.js loaded");

StartupEvents.registry("block", (e) => {
  ['dawn', 'dusk', 'fire', 'ice', 'leaf', 'moon', 'shiny', 'sun', 'thunder', 'water'].forEach((stone) => {
    e.create(`cobblemon:${stone}_stone_block`)
      .soundType("amethyst")
      .hardness(2)
      .resistance(1.0)
      .textureAll(`cobblemon:block/evolution/${stone}_stone_block`);
  })

  e.create("sunlit_cobblemon:ominous_black_stake")
    .box(6, 0, 6, 10, 12, 10)
    .defaultCutout()
    .soundType("stone")
    .hardness(2.5)
    .resistance(1.0)
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_diamond_tool")
    .model("sunlit_cobblemon:block/ominous_black_stake");

  e.create("sunlit_cobblemon:gem_box")
    .box(3, 0, 3, 13, 10, 13)
    .soundType("stone")
    .hardness(2.5)
    .resistance(1.0)
    .requiresTool(true)
    .blockEntity((blockInfo) => {
      blockInfo.enableSync();
      blockInfo.initialData({ passcode: "" });
    })
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_diamond_tool")
    .model("sunlit_cobblemon:block/gem_box");

});
