console.info("[SOCIETY-S-COBBLEMON] cobblemonMysteryGift.js loaded");

ItemEvents.rightClicked("sunlit_cobblemon:mystery_gift", (e) => {
  const { server, player, item, level } = e;
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  if (!player.isCreative()) item.count--;
  level.spawnParticles(
    "supplementaries:confetti",
    true,
    player.x,
    player.y + 1.5,
    player.z,
    0.2 * rnd(1, 2),
    0.2 * rnd(1, 2),
    0.2 * rnd(1, 2),
    25,
    0.001
  );

  player.tell(Text.green("Thank you for playtesting Sunlit Cobblemon! Please report all issues to #playtest-issues-suggestions soon before the final release!"))
  server.runCommandSilent(
    `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
  );
  server.runCommandSilent(
    `playsound species:music.happy_birtday block @a ${player.x} ${player.y} ${player.z}`
  );
  server.runCommandSilent(
    `pokegiveother ${player.username} jirachi originaltrainer=Chakyl ottype=Player pokeball=premier_ball `
  );
});


PlayerEvents.loggedIn((e) => {
  const { player } = e;
  if (!player.stages.has("playtest_gift")) {
    player.stages.add("playtest_gift");
    player.give("sunlit_cobblemon:mystery_gift");
    player.tell(Text.green("...What's this?"))
  }
});
