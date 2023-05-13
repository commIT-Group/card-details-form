const listeners = {
  field: {
    name: document.getElementById("name"),
    number: document.getElementById("number"),
    month: document.getElementById("month"),
    year: document.getElementById("year"),
    cvv: document.getElementById("cvv"),
  },
  pvText: {
    number: document.getElementById("card-number"),
    holder: document.getElementById("card-holder"),
    expiry: document.getElementById("card-expiry"),
    cvv: document.getElementById("card-cvv"),
  },
  button: {
    confirm: document.getElementById("confirm"),
    continue: document.getElementById("continue"),
  },
};

// Function that adds zeroes in front of the value to make it a specified number of digits
function addZeroes(value, digits) {
  for (let i = 0; value.length < digits; i++) {
    value = "0" + value;
  }
  return value;
}
