const generateMap = (width, height) => {
  const arr = new Array(height);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(width);
  }
  return arr;
};

const fillMap = (arr) => {
  const topLine = ['A', 'B', 'C', 'D', 'E', 'F'];
  const sideLine = ['6 ', '5 ', '4 ', '3 ', '2 ', '1 '];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[j][i] = topLine[i] + sideLine[j];
    }
  }
};

const printMap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + (j < arr[i].length - 1 ? ' ' : '\r\n'));
    }
  }
};

// array generate, fill and print only for checking
const arr = generateMap(6, 6);
fillMap(arr);
console.log('ellenőrzés miatt tábla kiíratás \n');
printMap(arr);

module.exports = {
  fillMap,
  generateMap,
  printMap
};
