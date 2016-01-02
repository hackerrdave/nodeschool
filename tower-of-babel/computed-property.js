const evenOrOdd = +process.argv[2];
const increment = +process.argv[3];

function evenOrOddKey(evenOrOdd) {
  return evenOrOdd % 2 === 0 ? 'even' : 'odd';
}

function sum(num, increment) {
  return num + increment;
}

var obj = {
  [evenOrOddKey(evenOrOdd)]: evenOrOdd,
  [sum(evenOrOdd, increment)]: sum(evenOrOdd, increment)
};

console.log(obj);

