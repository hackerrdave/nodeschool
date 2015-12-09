function Spy(target, method) {
  var spiedFunction = target[method];

  var result = { count: 0 };

  target[method] = function() {
    result.count = result.count + 1;
    return spiedFunction.apply(this, arguments);
  };

  return result;
}

module.exports = Spy;

