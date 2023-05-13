import { addZeroes, addNumberSpaces } from "./functions.js";
import { field, pvText, button } from "./objects.js";

const details = {
  cardNumber: (number = "") => {
    let value = addZeroes(number, 16);
    value = addNumberSpaces(value);
    return value;
  },
  holderName: (name = "Jane Appleseed") => name,
  expiryDate: (month = "", year = "") => {
    month = addZeroes(month, 2);
    year = addZeroes(year, 2);
    return `${month}/${year}`;
  },
  cvv: (cvv = "") => addZeroes(cvv, 3),
};

initListeners();

function initListeners() {
  field.name.addEventListener("input", (e) => {
    details.holderName(e.target.value);
  });
  field.number.addEventListener("input", (e) => {
    console.log(e.target.value);
  });
  field.month.addEventListener("input", (e) => {
    console.log(e.target.value);
  });
  field.year.addEventListener("input", (e) => {
    console.log(e.target.value);
  });
  field.cvv.addEventListener("input", (e) => {
    console.log(e.target.value);
  });
}

console.log(details.cardNumber());
console.log(details.holderName());
console.log(details.expiryDate());
console.log(details.cvv());
