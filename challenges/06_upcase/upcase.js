const upcase = (arr) => {
  if (arr.length === 0) {
    return arr;
  } else {
    let newArray = [];
    arr.forEach((element) => {
      newArray.push(element.toUpperCase());
    });
    return newArray;
  }
};

// Do not delete the code below 🙏

module.exports = {
  upcase,
};
