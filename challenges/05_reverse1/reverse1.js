const reverse1 = (word) => {
  if (word === "") {
    return word;
  } else {
    let newWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      newWord += word[i];
    }
    return newWord;
  }
};

// Do not delete the code below 🙏

module.exports = {
  reverse1,
};
