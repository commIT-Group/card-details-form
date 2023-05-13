import { addZeroes } from "./functions.js";

const field = {
  name: document.getElementById("name"),
  number: document.getElementById("number"),
  month: document.getElementById("month"),
  year: document.getElementById("year"),
  cvv: document.getElementById("cvv"),
};

const pvText = {
  number: document.getElementById("card-number"),
  holder: document.getElementById("card-holder"),
  expiry: document.getElementById("card-expiry"),
  cvv: document.getElementById("card-cvv"),
};

const button = {
  confirm: document.getElementById("confirm"),
  continue: document.getElementById("continue"),
};

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
