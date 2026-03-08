console.info("[SOCIETY-S-COBBLEMON] cobblemonRaidStatue.js loaded");

StartupEvents.registry("block", (e) => {
    e.create("sunlit_cobblemon:sun_raid_statue", "cardinal")
        .defaultCutout()
        .box(0, 0, 0, 16, 4, 16)
        .blockEntity((blockInfo) => {
            blockInfo.enableSync();
            blockInfo.initialData({ tier: "-1", type: "", variant: "", level: -1, dayLastRaided: -1 });
        })
        .model("sunlit_cobblemon:block/raid_statue")
        .item((item) => {
            item.tooltip(
                Text.translatable("block.society.sun_raid_statue.description").gray()
            );
            item.modelJson({
                parent: "sunlit_cobblemon:block/raid_statue",
            });
        })
        .hardness(1.0)
        .lightLevel(1)
});
