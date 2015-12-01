var http = require('http');
var port = process.argv[2];
var through = require('through2');
var throughStream = through(write, end);

http.createServer(handleServerRequests).listen(port);

function handleServerRequests (req, res) {
  if (req.method === 'POST') {
    req.pipe(throughStream).pipe(res);
  }
}

function write (buffer, encoding, next) {
  var upperCaseText = buffer.toString().toUpperCase();
  this.push(upperCaseText);
  next();
}

function end (done) {
  done();
}

