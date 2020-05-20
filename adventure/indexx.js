// main program írás
const map = require('./mapp');
const move = require('./movee');
const readline = require('readline-sync');
// const table = require'../require');
// ne felejtsd el beolvasni az útirányt
// ne felejtsd el térképet és irányzékot skiccelni
var position = [0, 0];
let destination = 0;

console.log('hello adventure!');
console.log('a te poziciód', map.terkep[position[0]][position[1]]);
console.log();
while (true) {
  while (true) {
    console.log('merre menjünk?');
    console.log('észak: 1');
    console.log('kelet: 6');
    console.log('dél: 2');
    console.log('nyugat: 4');
    console.log('észak-kelet: 9');
    console.log('észak-nyugat: 7');
    console.log('dél-kelet: 3');
    console.log('dél-nyugat: 1');
    console.log('ha adsz egy ötöst (5), akkor búcsúzunk');

    destination = readline.questionInt();
    if (destination === 1 || // dél-nyugat
      destination === 2 || // dél
      destination === 3 || // dél-kelet
      destination === 4 || // nyugat
      destination === 6 || // kelet
      destination === 7 || // észak-nyugat
      destination === 8 || // észak
      destination === 9) { // észak-kelet
      console.log('most hívnám meg a mozgást');

      break;
    } else {
      if (destination === 5) {
        process.exit();
      }
      console.log('rossz irány');
    }
  }
  move.where(destination, position);
  console.clear();
  console.log('itt tartozkodol jelenleg: ', map.terkep[position[0]][position[1]]);
  console.log();
}

