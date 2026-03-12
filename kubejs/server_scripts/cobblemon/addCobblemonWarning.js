PlayerEvents.loggedIn((e) => {
  const { player } = e;
  if (!player.stages.has("cobble_workers_warning")) {
    player.tell(Text.red("!! WARNING !!"));
    player.tell(Text.white("Please remove any Pokemon from Cobble Workers workstations before updating to the next playtest, or you will lose your Pokemon! These blocks are: Craft Station, Garden Station, and Mystery Mine."));
    player.tell(Text.red("This message will only show once! if you have any questions put them in #playtest-discussion"));
    player.stages.add("cobble_workers_warning");
  }
});
