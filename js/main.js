import { addZeroes } from "./functions.js";
import { field, pvText, button } from "./objects.js";

const details = {
  holderName: (name = "Jane Appleseed") => name,
  expiryDate: (month, year) => {
    if (month > 12) {
      month = 12;
    }
    month = addZeroes(month, 2);
    year = addZeroes(year, 2);
  },
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

console.log(details.holderName());
