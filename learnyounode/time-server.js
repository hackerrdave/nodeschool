var listenPort = process.argv[2];

var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  //socket handling
  var time = strftime('%Y-%m-%d %H:%M');
  socket.write(time);
  socket.write("\n");
  socket.end();
});

server.listen(listenPort);
