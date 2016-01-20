var nums = process.argv.slice(2);
var result = `The minimum of [${nums}] is ${Math.min(...nums)}`;

console.log(result);

