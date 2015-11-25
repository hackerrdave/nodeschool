var port = process.argv[2];

var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var url = require('url');

var constructParsetimeData = function(query) {
  var queryDate = new Date(query.split('iso=')[1]);

  return {
    'hour': queryDate.getHours(),
    'minute': queryDate.getMinutes(),
    'second': queryDate.getSeconds()
  };
};

var constructUnixtimeData = function(query) {
  var queryDate = new Date(query.split('iso=')[1]);

  return {
    'unixtime': queryDate.getTime()
  };
};

var server = http.createServer(function(req, res){

  if (req.method === 'GET') {
    var endPoint = url.parse(req.url).pathname.split('/api/')[1];
    var query = url.parse(req.url).query;
    
    var endPointFunctions = {
      'parsetime': constructParsetimeData,
      'unixtime': constructUnixtimeData
    };

    var dataConstructionFunction = endPointFunctions[endPoint];
    var responseData = dataConstructionFunction.call(this, query);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
  }
});

server.listen(port);
