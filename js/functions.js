export { addZeroes, addNumberSpaces };

function addZeroes(value, digits) {
  for (let i = 0; value.length < digits; i++) {
    value = "0" + value;
  }
  return value;
}

function addNumberSpaces(value) {
  // Match every 4 digits and join them with a space
  return value.match(/.{1,4}/g).join(" ");
}
