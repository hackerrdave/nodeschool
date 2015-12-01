var concat = require('concat-stream');

process.stdin.pipe(concat(reverse));

function reverse (buffer) {
  var reversed = buffer.toString().split('').reverse().join('');
  process.stdout.write(reversed);
}

