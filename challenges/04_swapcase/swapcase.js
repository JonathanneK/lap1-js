const swapcase = (input) => {
  if (input === "" || typeof Number(input) === "number") {
    return input;
  } else {
    let swapedLetters = "";
    let splitLetters = input.split("");
    console.log(splitLetters);
    for (let i = 0; i < splitLetters.length; i++) {
      if (splitLetters[i] == splitLetters[i].toUpperCase()) {
        swapedLetters += splitLetters[i].toLowerCase();
      } else {
        swapedLetters += splitLetters[i].toUpperCase();
      }
    }
    return swapedLetters;
  }
};

// Do not delete the code below 🙏

swapcase("JournAl");

module.exports = {
  swapcase,
};
