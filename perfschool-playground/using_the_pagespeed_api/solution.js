'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 7777;
var psi = require('psi');

app.get('/', home);
app.get('/insights', insights);
app.listen(port, listening);

function listening () {
  console.log('Listening on port', port);
}

function home (req, res) {
  var file = path.join(__dirname, 'index.html');
  var index = fs.readFileSync(file, 'utf8');
  res.send(index);
}

function insights (req, res) {
  psi('https://nejwfzvakq.localtunnel.me').then(function(data) {
    var output = {
      'resources': {
        'css': data.pageStats.numberCssResources,
        'js': data.pageStats.numberJsResources,
        'hosts': data.pageStats.numberHosts,
        'total': data.pageStats.numberResources
      }
    };

    res.end(JSON.stringify(output));
  });
}
