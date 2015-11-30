var split = require('split');
var through = require('through2');
var counter = 0;

process.stdin
  .pipe(split())
  .pipe(through(transform))
  .pipe(process.stdout);

function transform (line, _, next) {
  counter++;
  var transformedString;
  if (isEven(counter)) { transformedString = line.toString().toUpperCase(); }
  if (isOdd(counter)) { transformedString = line.toString().toLowerCase(); }
  transformedString = transformedString + "\n";

  this.push(transformedString);
  next();
}

function isEven(n) {
     return n % 2 === 0;
}

function isOdd(n) {
     return Math.abs(n % 2) == 1;
}

