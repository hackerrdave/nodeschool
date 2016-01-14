const DOT   = '.'.charCodeAt(0);
const BANG  = '!'.charCodeAt(0);

function bufferDotToBang(buffer) {
  for (var i = 0; i < buffer.length; i++) {
    if (buffer[i] === DOT) { buffer[i] = BANG; }
  }
  return buffer;
}

process.stdin.on('data', function(buffer) {
  console.log(bufferDotToBang(buffer));
});

