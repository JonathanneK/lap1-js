const downcase = (arr) => {
  if (arr.length === 0) {
    return arr;
  } else {
    return arr.map((element) => element.toLowerCase());
  }
};

// Do not delete the code below 🙏

module.exports = {
  downcase,
};
