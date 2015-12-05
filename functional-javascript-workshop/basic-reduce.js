function countWords(inputWords) {
  return inputWords.reduce(incrementWordCount, {});

  function incrementWordCount(collection, word) {
    if (collection[word]) {
      collection[word] = collection[word] + 1;
    } else {
      collection[word] = 1;
    }
    return collection;
  }
}

module.exports = countWords;

