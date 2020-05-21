const readLine = require('readline-sync');
const table = require('table');
const chalk = require('chalk');

// construct and fill the map
const map = [
  ['cellA1', 'cellB1', 'cellC1', 'cellD1', 'cellE1'],
  ['cellA2', 'cellB2', 'cellC2', 'cellD2', 'cellE2'],
  ['cellA3', 'cellB3', 'cellC3', 'cellD3', 'cellE3'],
  ['cellA4', 'cellB4', 'cellC4', 'cellD4', 'cellE4'],
  ['cellA5', 'cellB5', 'cellC5', 'cellD5', 'cellE5']
];

const direction = [
  'Délnyugat',
  'Dél',
  'Délkelet',
  'Nyugat',
  'Kilépés',
  'Kelet',
  'Északnyugat',
  'Észak',
  'Északkelet'
];

const x = 0;
const y = 0;
const position = [x, y];
let posMap = map;
// move

const move = () => {
  const dir = readLine.keyInSelect(direction, 'Melyik irányba menjek?');
  switch (dir) {
    case 0:
      //      if (x > 0 && x < 5 && y > 0 && y < 5) {
      position[0] += 1;
      position[1] -= 1;
      //        break;
      //      }
      break;
    case 1:
      //      if (y > 0 && y < 5) {
      position[0] += 1;
      //        break;
      //      }
      break;
    case 2:
      //      if (x > 0 && x < 5 && y > 0 && y < 5) {
      position[0] += 1;
      position[1] += 1;
      //        break;
      //      }
      break;
    case 3:
      //      if (x > 0 && x < 5) {
      position[1] -= 1;
      //        break;
      //      }
      break;
    case 4:
      process.exit();
    case 5:
      //      if (x > 0 && x < 5) {
      position[1] += 1;
      //        break;
      //      }
      break;
    case 6:
      //      if (x > 0 && x < 5 && y > 0 && y < 5) {
      position[0] -= 1;
      position[1] -= 1;
      //        break;
      //      }
      break;
    case 7:
      //      if (y > 0 && y < 5) {
      position[0] -= 1;
      //        break;
      //      }
      break;
    case 8:
      //      if (x > 0 && x < 5 && y > 0 && y < 5) {
      position[0] -= 1;
      position[1] += 1;
      //        break;
      //      }
      break;
  }
  return position;
};

while (true) {
  console.clear();
  posMap = map;
  console.log('A ', position, ' koordinátán állsz!');
  console.log(map[position[0]][position[1]]);
  //  posMap[position[0]][position[1]] = 'Here';
  console.log(table.table(map));
  move();
}
