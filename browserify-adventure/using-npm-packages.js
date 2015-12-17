var uniq = require('uniq');

var totalStrings = prompt().split(',');
var uniqueStrings = uniq(totalStrings);

console.log(uniqueStrings);

