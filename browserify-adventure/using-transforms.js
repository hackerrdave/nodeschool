var fs = require('fs');
var src = fs.readFileSync('/usr/local/Cellar/nvm/0.26.0/v0.10.28/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt', 'utf8');
var sprintf = require('sprintf-js').sprintf;

src.split('\n').forEach(printLine);

function printLine(line, index) {
  if (index % 5 === 0) {
    console.log(sprintf('%3d %s', index, line));
  } else {
    console.log('    ' + line);
  }
}

