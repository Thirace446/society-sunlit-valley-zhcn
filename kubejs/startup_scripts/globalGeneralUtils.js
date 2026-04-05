// Priority: 1000
global.getDay = (level) => Number((Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed());

global.compareDay = (day, checkedDay, amount) => day > Number(checkedDay) || Number(checkedDay) - day > amount;

global.getFacingPlusOffset = (facing, pos, offset) => {
  switch (facing) {
    case "north":
      return pos.offset(0, 0, -offset);
    case "south":
      return pos.offset(0, 0, offset);
    case "west":
      return pos.offset(-offset, 0, 0);
    case "east":
      return pos.offset(offset, 0, 0);
  }
};

global.getHasCurio = (player, item) => {
  const curios = player.nbt.ForgeCaps["curios:inventory"]
  if (!curios) return false;
  return curios.toString().includes(item)
} 