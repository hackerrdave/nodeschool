var array32 = Uint32Array.of(1);
array32[0] = Number(process.argv[2]);
var array16 = new Uint16Array(array32.buffer);

console.log(JSON.stringify(array16));

