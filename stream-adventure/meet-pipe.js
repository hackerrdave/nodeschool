var fileName = process.argv[2];
var fs = require('fs');

var fileStream = fs.createReadStream(fileName);

fileStream.pipe(process.stdout);

