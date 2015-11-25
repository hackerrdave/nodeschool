var dirPath = process.argv[2];
var ext = process.argv[3];

require('fs').readdir(dirPath, function(err, files) {
  for (var i = 0; i < files.length; i++) {
    if (files[i].split('.')[1] === ext) {
      console.log(files[i]);
    }
  }
});
