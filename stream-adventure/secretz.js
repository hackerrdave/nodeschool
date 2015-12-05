var cipherName = process.argv[2];
var passphrase = process.argv[3];
var crypto     = require('crypto');
var decipher   = crypto.createDecipher(cipherName, passphrase);

var tar        = require('tar');
var parser     = tar.Parse();

var fs         = require('fs');
var zlib       = require('zlib');
var concat     = require('concat-stream');

var parseEntry = function(e) {
  if (e.type !== 'File') { return; }

  var hash = crypto.createHash('md5', {
    encoding: 'hex'
  });

  e.pipe(hash).pipe(concat(function(hash){
    console.log(hash + ' ' + e.path);
  }));
}

parser.on('entry', parseEntry);
process.stdin.pipe(decipher).pipe(zlib.createGunzip()).pipe(parser);

