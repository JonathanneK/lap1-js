function hello(name) {
  if (name === "") {
    throw "no empty strings allowed";
  } else if (name === undefined) {
    return `Hello Stranger`;
  } else {
    return `Hello ${name}`;
  }
}
// Do not delete the code below 🙏

module.exports = {
  hello,
};
