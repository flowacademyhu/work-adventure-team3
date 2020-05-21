// moving in the map: change the pos as dir give
const move = (dir, pos) => {
  switch (dir) {
    case 1:
      pos.x -= 1;
      pos.y += 1;
      return pos;
    case 2:
      pos.y += 1;
      return pos;
    case 3:
      pos.x += 1;
      pos.y += 1;
      return pos;
    case 4:
      pos.y -= 1;
      return pos;
    case 6:
      pos.x += 1;
      return pos;
    case 7:
      pos.x -= 1;
      pos.y -= 1;
      return pos;
    case 8:
      pos.y -= 1;
      return pos;
    case 9:
      pos.x += 1;
      pos.y -= 1;
      return pos;
    default:
      console.log('Give a direction, please!');
  }
};

module.exports = {
  move
};
