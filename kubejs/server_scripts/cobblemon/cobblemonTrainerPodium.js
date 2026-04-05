console.info("[SOCIETY-S-COBBLEMON] cobblemonTrainerPodium.js loaded");

BlockEvents.placed("sunlit_cobblemon:trainer_podium", (e) => {
  let item = e.player.getHeldItem("main_hand");
  let podiumNbt;
  if (item.id !== "sunlit_cobblemon:trainer_podium") item = e.player.getHeldItem("off_hand");
  if (item.id !== "sunlit_cobblemon:trainer_podium") return;
  podiumNbt = item.getNbt();
  let nbt = e.block.getEntityData();
  if (podiumNbt && !podiumNbt.isEmpty()) {
    nbt.merge({
      data: {
        trainer: podiumNbt.get("trainer"),
        lastStreak: Number(podiumNbt.get("lastStreak"))
      },
    });
  }
  const playerUUID = e.player.getUuid().toString();
  nbt.merge({ data: { owner: playerUUID } });
  global.setBlockEntityData(e.block, nbt);
});

BlockEvents.broken("sunlit_cobblemon:trainer_podium", (e) => {
  global.removeNearbyTrainers(e.level, e.block, true);
  const nbt = e.block.getEntityData();
  e.block.popItem(Item.of("sunlit_cobblemon:trainer_podium", `{trainer:${nbt.data.trainer},lastStreak:${nbt.data.lastStreak}}`));
});

BlockEvents.rightClicked("sunlit_cobblemon:trainer_podium", (e) => {
  const { hand, player, block, level } = e;
  if (hand == "OFF_HAND") return;
  let podiumPlayer;
  level.getServer().players.forEach((p) => {
    if (p.getUuid().toString() === block.getEntityData().data.owner) {
      podiumPlayer = p;
    }
  });
  if (podiumPlayer) {
    let levelAverage = global.getPartyLevel(podiumPlayer);
    if (!podiumPlayer.persistentData.winStreak)
      podiumPlayer.persistentData.winStreak = 0;
    player.tell(`§6${podiumPlayer.username}'s§7 Trainer Podium`);
    player.tell(
      `§7Current Win Streak: §6${podiumPlayer.persistentData.winStreak}`
    );
    player.tell(
      `§7Trainer Level Tier: §6${levelAverage > 100
        ? "Not League legal!"
        : global.getPlayerPodiumLevelTier(podiumPlayer, levelAverage)
      }`
    );
  } else {
    player.tell(
      Text.gray(
        "This is a stranger's Trainer Podium. They aren't online to draw stats from..."
      )
    );
  }
});

const getNearbyPodium = (level, target) => {
  return level.getBlock(target.onPos.above()).id == "sunlit_cobblemon:trainer_podium";
};

ItemEvents.entityInteracted((e) => {
  const { hand, player, target, level, server } = e;
  if (hand == "OFF_HAND") return;
  if (target.type !== "rctmod:trainer") return;
  if (level.getBlock(target.onPos.above()).id != "sunlit_cobblemon:trainer_podium") {
    target.setRemoved("unloaded_to_chunk");
    level.spawnParticles(
      "species:ascending_dust",
      true,
      target.x,
      target.y + 0.5,
      target.z,
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      10,
      0.1
    );
    e.cancel();
  }
  let levelAverage = global.getPartyLevel(player);
  if (levelAverage > 100) {
    server.runCommandSilent(
      `emberstextapi sendcustom ${player.username} ${global.animalMessageSettings} 120 Using a legendary or mythical Pokémon isn't allowed by the League...`
    );
    e.cancel();
    return;
  }
  let currentLevel = global.getPlayerPodiumLevelTier(player, levelAverage);
  let trainerLevel = Number(target.persistentData.levelTier)
  if (trainerLevel !== currentLevel) {
    let tooHigh = currentLevel < trainerLevel;
    server.runCommandSilent(
      `emberstextapi sendcustom ${player.username} ${global.animalMessageSettings
      } 120 This trainer's level is too ${tooHigh ? "high" : "low"
      } for your team! You need an average level of ${trainerLevel + 5}.`
    );
    e.cancel();
  }
});

EntityEvents.death((e) => {
  const { source, server, entity } = e;
  if (
    source.player &&
    source.player.getType() === "minecraft:player" &&
    entity.type == "rctmod:trainer"
  ) {
    server.runCommandSilent(`playsound refurbished_furniture:ui.paddle_ball.retro_lose block @a ${source.player.x} ${source.player.y} ${source.player.z}`);
    global.handleLeagueFee(server, source.player, "murder")
  }
});
