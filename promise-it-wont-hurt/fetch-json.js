var HTTP = require('q-io/http');

var read = HTTP.read('http://localhost:1337');
read.then(parseJSON).then(console.log);

function parseJSON(response) {
  return JSON.parse(response);
}

