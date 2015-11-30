var through = require('through2');
var throughStream = through(write, end);

process.stdin.pipe(throughStream).pipe(process.stdout);

function write (buffer, encoding, next) {
  var upperCaseText = buffer.toString().toUpperCase();
  this.push(upperCaseText);
  next();
}

function end (done) {
  done();
}

