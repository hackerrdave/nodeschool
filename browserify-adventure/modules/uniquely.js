var uniq = require('uniq');

module.exports = function(commaString) {
  return uniq(commaString.split(','));
};

