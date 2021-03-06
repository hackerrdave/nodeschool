const PI = 3.141592;

function _sqrt(s, x, last) {
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
}

const sqrt = function sqrt(s) {
  return _sqrt(s, s / 2.0, 0.0);
};

const square = function square(x) {
  return x * x;
};

export default {
  PI:       PI,
  sqrt:     sqrt,
  square:   square
};

