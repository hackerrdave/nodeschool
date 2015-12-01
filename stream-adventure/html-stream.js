var trumpet = require('trumpet');
var fs = require('fs');
var tr = trumpet();
var through = require('through2');
var throughUpperCaseStream = through(writeUpperCase, end);

var trumpetStream = tr.select('.loud').createStream();
trumpetStream.pipe(throughUpperCaseStream).pipe(trumpetStream);

process.stdin.pipe(tr).pipe(process.stdout);

function writeUpperCase (buffer, encoding, next) {
  var upperCaseText = buffer.toString().toUpperCase();
  this.push(upperCaseText);
  next();
}

function end (done) {
  done();
}

