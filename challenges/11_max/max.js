const max = (arr) => {
  if (arr.legnth === 0) {
    return undefined;
  } else {
    return arr.reduce((a, b) => (a > b ? a : b));
  }
};

// Do not delete the code below 🙏

module.exports = {
  max,
};
