var parse = require('./modules/ndjson.js').parse;
var stringify = require('./modules/ndjson.js').stringify;

console.log(parse(prompt()));
console.log(stringify(prompt()));

