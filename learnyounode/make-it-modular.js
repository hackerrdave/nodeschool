var module = require('./make-it-modular-module');

var dirPath = process.argv[2];
var ext = process.argv[3];

module(dirPath, ext, callbackFunc);

function callbackFunc(err, data) {
    if(err) { console.log(err); }
}
