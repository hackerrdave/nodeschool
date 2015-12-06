function duckCount() {
  return Array.prototype.slice.call(arguments).filter(hasOwnPropertyFilter).length;

  function hasOwnPropertyFilter(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack');
  }
}

module.exports = duckCount;

