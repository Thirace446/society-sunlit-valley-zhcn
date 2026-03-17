console.info("[SOCIETY-S-COBBLEMON] registerCobblemonBlocks.js loaded");

StartupEvents.registry("block", (e) => {
  ['dawn', 'dusk', 'fire', 'ice', 'leaf', 'moon', 'shiny', 'sun', 'thunder', 'water'].forEach((stone) => {
    e.create(`cobblemon:${stone}_stone_block`)
      .soundType("amethyst")
      .hardness(2)
      .resistance(1.0)
      .textureAll(`cobblemon:block/evolution/${stone}_stone_block`);
  })
});
