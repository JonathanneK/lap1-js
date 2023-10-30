const add = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (a === undefined && b === undefined) {
    throw "you need to call the functions with 2 arguments";
  } else if (a === undefined) {
    return b * 2;
  } else {
    return a * 2;
  }
};

// Do not delete the code below 🙏

module.exports = {
  add,
};
