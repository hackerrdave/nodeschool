module.exports = function arrayMap(arr, fn, context) {
  return arr.reduce(function(prev, curr, index, array){
    return prev.concat([fn.call(context, curr, index, array)]);
  }, []);
};

