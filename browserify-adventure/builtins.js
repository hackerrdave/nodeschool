var URL = require('url');
var queryString = require('querystring');

var webAddress = prompt();
var query = URL.parse(webAddress).query;
var params = queryString.parse(query);
console.log(URL.resolve(webAddress, params.file));

