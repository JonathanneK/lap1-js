const capitalise = (input) => {
  let newArray = [];
  if (input === "") {
    return "";
  } else {
    newArray.push(input[0].toUpperCase());
    newArray.push(input.split(1).toLowerCase());
    return newArray;
  }
};

// Do not delete the code below 🙏

module.exports = {
  capitalise,
};
