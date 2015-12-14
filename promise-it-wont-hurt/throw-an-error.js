var q = require('q');
var def = q.defer();
var malformedData = process.argv[2];

function parsePromised(json) {
  var defer = q.defer();
  var result;

  try {
    result = JSON.parse(json);
  } catch (e) {
    defer.reject(e);
  }

  defer.resolve(result);
  return defer.promise;
}

parsePromised(malformedData).then(null, console.log);

