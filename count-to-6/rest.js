var sum  = (nums) => nums.reduce((total, num) => total + num, 0);

module.exports = function average (...args) {
  return sum(args) / args.length;
};

