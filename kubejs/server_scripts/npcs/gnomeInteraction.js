console.info("[SOCIETY] gnomeInteraction.js loaded");

ItemEvents.entityInteracted((e) => {
    const { hand, player, item, level, target, server } = e;
    if (player.isFake() || player.isCrouching()) return;
    if (hand == "OFF_HAND") return;
    if (target.type !== "minecraft:villager") return;
    if (hand == "MAIN_HAND") {
        if (item.hasTag("society:villager_gift")) {

        } else {
            server.runCommandSilent(`dialog ${player.getUuid()} show ${player.username} gnome_unique_chatter_${Math.floor(Math.random() * 3)}`);
        }
        e.cancel()
    }
});
