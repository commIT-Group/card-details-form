export { addZeroes };

function addZeroes(value, digits) {
  for (let i = 0; value.length < digits; i++) {
    value = "0" + value;
  }
  return value;
}
