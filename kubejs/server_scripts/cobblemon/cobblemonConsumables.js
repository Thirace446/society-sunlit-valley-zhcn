console.info("[SOCIETY-S-COBBLEMON] cobblemonConsumables.js loaded");

let $Stats = Java.loadClass("com.cobblemon.mod.common.api.pokemon.stats.Stats");

const candyMap = new Map([
  ["cobblemon:courage_candy", { stat: $Stats.SPECIAL_DEFENCE, increase: true }],
  ["cobblemon:health_candy", { stat: $Stats.HP, increase: true }],
  ["cobblemon:mighty_candy", { stat: $Stats.ATTACK, increase: true }],
  ["cobblemon:quick_candy", { stat: $Stats.SPEED, increase: true }],
  ["cobblemon:smart_candy", { stat: $Stats.SPECIAL_ATTACK, increase: true }],
  ["cobblemon:tough_candy", { stat: $Stats.DEFENCE, increase: true }],
  ["cobblemon:brittle_candy", { stat: $Stats.DEFENCE, increase: false }],
  ["cobblemon:coward_candy", { stat: $Stats.SPECIAL_DEFENCE, increase: false }],
  ["cobblemon:numb_candy", { stat: $Stats.SPECIAL_ATTACK, increase: false }],
  ["cobblemon:sickly_candy", { stat: $Stats.HP, increase: false }],
  ["cobblemon:slow_candy", { stat: $Stats.SPEED, increase: false }],
  ["cobblemon:weak_candy", { stat: $Stats.ATTACK, increase: false }]
]);

ItemEvents.entityInteracted((e) => {
  const { player, server, item, hand, target } = e;
  if (target.type !== "cobblemon:pokemon") return;
  if (hand == "MAIN_HAND") {
    if (candyMap.get(`${item.id}`)) {
      let effect = candyMap.get(`${item.id}`);
      let currentStat = target.pokemon.ivs.get(effect.stat);
      let consume = false;
      if (effect.increase && currentStat < 31) {
        target.pokemon.ivs.set(effect.stat, currentStat + 1)
        consume = true;
      }
      if (!effect.increase && currentStat > 0) {
        target.pokemon.ivs.set(effect.stat, currentStat - 1)
        consume = true;
      }
      if (consume) {
        server.runCommandSilent(`playsound minecraft:entity.generic.eat block @a ${player.x} ${player.y} ${player.z}`);
        if (!player.isCreative()) item.shrink(1)
      }
    }
  }
});

const mochiMap = new Map([
  ["cobblemon:clever_mochi", $Stats.SPECIAL_DEFENCE],
  ["cobblemon:health_mochi", $Stats.HP],
  ["cobblemon:muscle_mochi", $Stats.ATTACK],
  ["cobblemon:swift_mochi", $Stats.SPEED],
  ["cobblemon:genius_mochi", $Stats.SPECIAL_ATTACK],
  ["cobblemon:resist_mochi", $Stats.DEFENCE],
  ["cobblemon:fresh_start_mochi", [$Stats.SPECIAL_DEFENCE, $Stats.HP, $Stats.SPEED, $Stats.ATTACK, $Stats.DEFENCE, $Stats.SPECIAL_ATTACK]],
]);

ItemEvents.entityInteracted((e) => {
  const { player, server, item, hand, target } = e;
  if (target.type !== "cobblemon:pokemon") return;
  if (hand == "MAIN_HAND") {
    if (mochiMap.get(`${item.id}`)) {
      let stat = mochiMap.get(`${item.id}`);
      if (item.id === "cobblemon:fresh_start_mochi") {
        stat.forEach((type) => {
          target.pokemon.evs.set(type, 0)
        })
        server.runCommandSilent(`playsound minecraft:entity.generic.eat block @a ${player.x} ${player.y} ${player.z}`);
        if (!player.isCreative()) item.shrink(1)
      } else {
        let evsGained = target.pokemon.evs.add(stat, 4)
        if (evsGained > 0) {
          server.runCommandSilent(`playsound minecraft:entity.generic.eat block @a ${player.x} ${player.y} ${player.z}`);
          if (!player.isCreative()) item.shrink(1)
        }

      }

    }
  }
});