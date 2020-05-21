// moving in the map: change the pos as dir give
const move = (dir, pos) => {
  switch (dir) {
    case 'e':
      pos.x -= 1;
      return pos;
    case 'x':
      pos.x += 1;
      return pos;
    case 's':
      pos.y += 1;
      return pos;
    case 'd':
      pos.y -= 1;
      return pos;
    default:
      console.log('Give a direction, please!');
  }
};

module.exports = {
  move
};
