function curryN(fn, n) {
  var arity = n || fn.length;
  
  return function curriedN(arg){
    if (arity <= 1) { return fn(arg); }

    return curryN(fn.bind(this, arg), arity - 1);
  };
}

module.exports = curryN;

