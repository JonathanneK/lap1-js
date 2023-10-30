const reverse3 = (str) => {
  if (str === "") {
    return "";
  } else {
    return str.split("").reverse().join("");
  }
};

// Do not delete the code below 🙏

module.exports = {
  reverse3,
};
