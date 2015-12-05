function repeat(operation, num) {
  if (num <= 0) { return; }

  operation();
  num = num - 1;

  return repeat(operation, num);
}

module.exports = repeat;

