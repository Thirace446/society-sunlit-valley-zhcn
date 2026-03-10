// priority: -21
console.info("[SOCIETY-S-COBBLEMON] cobblemonUtils.js loaded");
const $CobblemonAPI = Java.loadClass("com.cobblemon.mod.common.Cobblemon").INSTANCE;

global.getPlayerParty = (player) => $CobblemonAPI.getStorage().getParty(player.uuid);

global.getPartyLevel = (player) => {
  if (player == undefined) return 0;
  const party = global.getPlayerParty(player);
  if (party == undefined) return 0;
  let partyCount = 0;
  let levelSum = 0;
  let levelHighest = 0;
  party.forEach((pokemon) => {
    if (pokemon.isLegendary() || pokemon.isMythical()) levelSum += 99999;
    levelSum += pokemon.level;
    if (levelHighest < pokemon.level) levelHighest = pokemon.level;
    partyCount++;
  });
  let levelAverage = Math.round(levelSum / partyCount);
  if (Math.round(levelAverage * 1.5) < levelHighest) return levelHighest;
  return levelAverage;
};

global.hasScope = (entity) => entity.nbt.ForgeCaps["curios:inventory"].toString().includes("sunlit_cobblemon:silph_scope");

global.rollPokeWeightedTable = (table) => {
  let roll = 0;
  const totalWeight = table.reduce((acc, current) => acc + current.weight, 0);
  let currentWeight = 0;
  if (totalWeight > 1) {
    roll = rnd(0, totalWeight);
    for (let index = 0; index < table.length; index++) {
      currentWeight += table[index].weight;
      if (currentWeight >= roll) {
        return table[index];
      }
    }
  }
  return;
};

global.getPokemonLevel = (lvlRange) => {
  if (!lvlRange || lvlRange.length < 2) return 1;
  return (
    Math.floor(Math.random() * (lvlRange[1] - lvlRange[0] + 1)) + lvlRange[0]
  );
};
const $CobblemonWorldSpawnerManager = Java.loadClass("com.cobblemon.mod.common.api.spawning.CobblemonWorldSpawnerManager");
const $SpawningArea = Java.loadClass("com.cobblemon.mod.common.api.spawning.spawner.SpawningArea");
const $SpawnBucket = Java.loadClass("com.cobblemon.mod.common.api.spawning.SpawnBucket");
const $SpawnCause = Java.loadClass("com.cobblemon.mod.common.api.spawning.SpawnCause");

global.getCurrentSpawnDetails = (level, player, rarity) => {
  const configWorldSliceDiameter = 8;
  const configWorldSliceHeight = 16;
  const spawner = $CobblemonWorldSpawnerManager.INSTANCE.getSpawnersForPlayers().get(player.getUuid());
  let cause = new $SpawnCause(spawner, new $SpawnBucket(rarity, 1.0), player);

  let spawnArea = new $SpawningArea(
    cause,
    level,
    Math.ceil(player.x - configWorldSliceDiameter / 2.0),
    Math.ceil(player.y - configWorldSliceHeight / 2.0),
    Math.ceil(player.z - configWorldSliceDiameter / 2.0),
    configWorldSliceDiameter,
    configWorldSliceHeight,
    configWorldSliceDiameter,
  );
  let slice = spawner.prospector.prospect(spawner, spawnArea)
  let contexts = spawner.resolver.resolve(spawner, spawner.contextCalculators, slice)
  return spawner.getSpawningSelector().getProbabilities(spawner, contexts)
}


global.summonRaidPokemon = (server, level, block, type, variant, raidLevel, spawnedLevel, shiny, hiddenAbility, raidTier, moveUp) => {
  server.runCommandSilent(`execute in ${level.dimension} run pokespawnat ${block.x} ${block.y + 1} ${block.z} ${type}  ${shiny ? "shiny " : ""}${hiddenAbility ? "hiddenability " : ""}${variant && variant.equals("") ? "" : variant} level=${raidLevel} hp_ev=84 defence_ev=84 special_defence_ev=84 speed_ev=252 uncatchable=yes hp_iv=32 defence_iv=31 special_defence_iv=31 attack_iv=31 special_attack_iv=31 speed_iv=31`);
  let spawnedPokemon = level.getEntitiesWithin(AABB.ofBlock(level.getBlock(block.getPos())).inflate(0.2)).filter((e) => e.type.equals("cobblemon:pokemon"));
  if (spawnedPokemon && spawnedPokemon.length > 0) {
    spawnedPokemon = spawnedPokemon[0];
    if (moveUp) spawnedPokemon.setDeltaMovement(new Vec3d(0, 1.1, 0));
    spawnedPokemon.persistentData.raidMon = true;
    spawnedPokemon.persistentData.raidMonStats = {
      tier: raidTier,
      hasHiddenAbility: hiddenAbility,
      spawnedLevel: spawnedLevel,
      variant: variant,
      isShiny: shiny
    }
    spawnedPokemon.potionEffects.add("minecraft:glowing", 400, 0, false, false);
    spawnedPokemon.potionEffects.add("minecraft:slow_falling", 400, 0, false, false);
    server.runCommandSilent(`scale set 3 ${spawnedPokemon.getUuid().toString()}`)
    return true;
  }
  return false;
}