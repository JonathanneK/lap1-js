const evens = (arr) => {
  if (arr.legnth === 1) {
    return arr;
  } else {
    return arr.filter((element) => element % 2 === 0);
  }
};

// Do not delete the code below 🙏

module.exports = {
  evens,
};
