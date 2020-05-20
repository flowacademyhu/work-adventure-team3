const where = (destination, pos) => {
  switch (destination) {
    case 1:
      pos[0] += 1;
      pos[1] -= 1;
      console.log('dél nyugatra mentél');
      break;
    case 2:
      pos[0] += 1;
      console.log('délre mentél');
      break;
    case 3:
      pos[1] += 1;
      pos[0] += 1;
      console.log('dél keletre mentél');
      break;
    case 4:
      pos[1] -= 1;
      console.log('nyugatra mentél');
      break;
    case 6:
      pos[1] += 1;
      console.log('keletre mentél');
      break;
    case 7:
      pos[0] -= 1;
      pos[1] -= 1;
      console.log('észak nyugatra mentél');
      break;
    case 8:
      pos[0] -= 1;
      console.log('északra mentél');
      break;
    case 9:
      pos[0] -= 1;
      pos[1] += 1;
      console.log('észak keletre mentél');
      break;
  }
  return pos;
};
module.exports = {
  where
};
