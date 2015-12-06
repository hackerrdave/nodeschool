function reduce(arr, fn, initial) {
  if (arr.length === 0) { return initial; }

  var currentValue = arr[0];
  var reducedArr = arr.slice(1);
  var reducedValue = fn(initial, currentValue, 0, arr);

  return reduce(reducedArr, fn, reducedValue); 
}

module.exports = reduce;

