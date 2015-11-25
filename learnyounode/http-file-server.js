var port = process.argv[2];
var fileLocation = process.argv[3];

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  fs.createReadStream(fileLocation).pipe(response);
});

server.listen(port);
