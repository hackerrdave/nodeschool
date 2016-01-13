var bytes   = process.argv.slice(2);
var buffer  = new Buffer(bytes);
console.log(buffer.toString('hex'));

