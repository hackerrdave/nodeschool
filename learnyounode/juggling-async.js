var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var requests = [
  {
    url: url1,
    response: null
  },
  {
    url: url2,
    response: null
  },
  {
    url: url3,
    response: null
  }
];
var responses = [];
var bl = require('bl');

requests.forEach(function(request){
  http.get(request.url, function(res) {
    res.pipe(bl(function(err, data) {
      var responseString = data.toString();
      request.response = responseString;
      responses.push(responseString);

      if (responses.length === 3) {
        requests.forEach(function(request){
         console.log(request.response);
        }); 
      }
    }));
  });
});

