import { addZeroes } from "./functions.js";
import { field, pvText, button } from "./objects.js";

initListeners();

function initListeners() {
  field.name.addEventListener("input", (e) => {
    console.log(e.target.value);
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
