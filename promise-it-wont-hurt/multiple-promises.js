var q = require('q');
var defOne = q.defer();
var defTwo = q.defer();

all(defOne.promise, defTwo.promise).then(console.log);
setTimeout(setValues, 200);

function setValues() {
  defOne.resolve('PROMISES');
  defTwo.resolve('FTW');
}

function all(promiseOne, promiseTwo) {
  var defer = q.defer();
  var results = [];

  promiseOne.then(increment).catch(handleError);
  promiseTwo.then(increment).catch(handleError);

  return defer.promise;

  function increment(result) {
    results.push(result);
    if (results.length === arguments.length) {
      defer.resolve(results);
    }
  }

  function handleError(e) {
    defer.reject(e);
  }
}

