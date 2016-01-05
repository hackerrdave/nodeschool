const max = process.argv[2];

let getFizzBuzzValue = function getFizzBuzzValue(num) {
  if (num % 15 === 0) { return 'FizzBuzz'; }
  if (num % 5 === 0) { return 'Buzz'; }
  if (num % 3 === 0) { return 'Fizz'; }
  return num;
};

let FizzBuzz = function*() {
  let curr = 1;
  while (curr <= max) {
    let value = getFizzBuzzValue(curr);
    curr += 1;
    yield value;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}

