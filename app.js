// elements
const billInput = document.getElementById("bill-total");
const tipBtnAll = document.querySelectorAll(".btn-percentage");
const peopleInput = document.getElementById("person-total");
const tipResult = document.getElementById("tip-amount");
const tipTotal = document.getElementById("total-amount");
const resetBtn = document.getElementById("reset-all-btn");
const inputPercentage = document.getElementById("input-percentage");
// transfor node to array
const btnarray = [...tipBtnAll];

// BUTTON PERCENTAGE
// grab btn value
btnarray.map((btn) => {
  btn.addEventListener("click", getButtonValue);
});

function getButtonValue(e) {
  return e.target.value;
}

peopleInput.addEventListener("blur", calculate);

function calculate() {
  let bill = parseFloat(billInput.value); // bill
  let tipCustom = bill * parseFloat(`0.${inputPercentage.value}`);
  let people = parseInt(peopleInput.value); // people

  let tipAmountPerPerson = tipCustom / people;
  let totalPerPerson = (bill + tipCustom) / people;
  // calculate
  tipResult.textContent = tipAmountPerPerson.toFixed(2);
  tipTotal.textContent = totalPerPerson.toFixed(2);
}
