var strings     = process.argv.slice(2);
var result      = strings.map(s => s[0]).reduce((p, c) => p + c);
var declaration = `[${strings}] becomes "${result}"`;

console.log(declaration);

