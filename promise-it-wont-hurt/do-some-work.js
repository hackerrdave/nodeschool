var qhttp = require('q-io/http');

var sessionCache = 'http://localhost:7000/';
var database = 'http://localhost:7001/';

qhttp.read(sessionCache)
  .then(function(id){
    return qhttp.read(database + id);
  })
  .then(JSON.parse)
  .then(console.log)
  .done();

