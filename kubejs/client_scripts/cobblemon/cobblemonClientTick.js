
const rnd = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
ClientEvents.tick(event => {
    const range = 2
    const { player, player: { block: { pos }, age }, level } = event
    if (age % 20) return;
    const radiusOf = n => Array.from(Array(2 * n + 1).keys()).map(i => i - n)
    radiusOf(range).forEach(dx => radiusOf(range).forEach(dz => {
        level.getChunkAt(pos.offset(dx * 16, 0, dz * 16))["findBlocks(java.util.function.BiPredicate,java.util.function.BiConsumer)"](
            (blockState, blockPos) => blockState.equals(Block.getBlock("sunlit_cobblemon:sun_raid_statue").defaultBlockState()), (blockPos, blockState) => {
                if (pos.distManhattan(blockPos) > range * 3 * 16) return;
                const { x, y, z } = blockPos
                level.spawnParticles(
                    "atmospheric:aloe_blossom",
                    true,
                    x + 0.5,
                    y + 0.5,
                    z + 0.5,
                    0.1 * rnd(1, 3),
                    0.1 * rnd(1, 3),
                    0.1 * rnd(1, 3),
                    3,
                    0.01
                );
                level.spawnParticles(
                    "legendarycreatures:wisp_particle",
                    true,
                    x + 0.5,
                    y + 0.5,
                    z + 0.5,
                    0.1 * rnd(1, 3),
                    0.1 * rnd(1, 3),
                    0.1 * rnd(1, 3),
                    3,
                    0.01
                );
            })
    }))
})