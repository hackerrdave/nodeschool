const max = process.argv[2];

let FizzBuzz = {
  [Symbol.iterator]() {
    let curr = 0, value = '';
    return {
      next() {
        curr += 1;
        value = getFizzBuzzValue(curr);
        if (curr <= max) { return { done: false, value: value }; }
        return { done: true };
      }
    };
  }
};

function getFizzBuzzValue(num) {
  if (num % 15 === 0) { return 'FizzBuzz'; }
  if (num % 5 === 0) { return 'Buzz'; }
  if (num % 3 === 0) { return 'Fizz'; }
  return num;
}

for (var n of FizzBuzz) {
  console.log(n);
}

