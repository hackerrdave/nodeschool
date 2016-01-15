var fs    = require('fs');
const NL  = '\n'.charCodeAt(0);

function splitBufferNewLineChars(buffer) {
  var offset = 0;
  for (var i = 0; i < buffer.length; i++) {
    if (buffer[i] === NL) {
      console.log(buffer.slice(offset, i));
      offset = i + 1;
    }
  }
  console.log(buffer.slice(offset, i));
}

fs.createReadStream(process.argv[2]).on('data', splitBufferNewLineChars);

