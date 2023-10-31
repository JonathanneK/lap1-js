const capitalise = (input) => {
  let newArray = [];
  if (input === "") {
    return "";
  } else {
    // newArray.push(input[0].toUpperCase());
    // newArray.push(input.split(1).toLowerCase());
    // return newArray;
    return `${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`;
  }
};

// Do not delete the code below 🙏

module.exports = {
  capitalise,
};
