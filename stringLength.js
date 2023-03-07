const stringLength = (string) => {
  if (string === '') {
    throw new Error("String length is empty");
  } else if (string.length > 0 && string.length < 10) {
    return string.length;
  }
    else throw new Error("String length is too long");
};

module.exports = stringLength;