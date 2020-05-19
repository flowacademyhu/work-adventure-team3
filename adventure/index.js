// main program írás
const map = require('./map');
const move = require('./move');
// const table = require'../require');
// ne felejtsd el beolvasni az útirányt
// ne felejtsd el táblát skiccelni, behívni, rajzolni

const main = () => {
  console.log('hello adventure!');
  const position = arr[3][1];
  console.log('you awaked in the middle of ', position);
  console.log('if you want to move type one of the following orders: észak, dél, nyugat, kelet');
  move.move();
};
main();
