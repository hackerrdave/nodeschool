var http = require('http');
var url = process.argv[2];

var bl = require('bl');

http.get(url, function(res){
    res.pipe(bl(function(err, data){
        var string = data.toString();
        console.log(string.split("").length);
        console.log(string);
    }));
}).on('error', function(err){
    console.log(e.message);
});
