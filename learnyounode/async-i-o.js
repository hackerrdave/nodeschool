var inputFile = process.argv[2];

require('fs').readFile(inputFile, 'utf-8', function(err, data) {
  console.log(data.split('\n').length - 1);
});
