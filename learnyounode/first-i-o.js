var inputFile = process.argv[2];
var inputString = require('fs').readFileSync(inputFile, 'utf-8');
var newLineCount = inputString.split('\n').length - 1;
console.log(newLineCount);

