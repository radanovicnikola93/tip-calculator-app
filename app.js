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
const parent = document.querySelector("#tip__tip-percentage");
// parent.addEventListener('click', doSomething, false);

// function doSomething(e) {
//     // if e.target does not equal to parent target
//     if (e.target !== e.currentTarget) {
//         var clickedItem = e.target.value;
//         console.log(clickedItem)
//     }
//     e.stopPropagation();
// }

peopleInput.addEventListener("blur", calculate);

function calculate() {
    // get values
    let bill = parseFloat(billInput.value); // bill
    let tipCustom = bill * parseFloat(`0.${inputPercentage.value}`);
    let people = parseInt(peopleInput.value); // people

    // calculate
    let tipAmountPerPerson = tipCustom / people;
    let totalPerPerson = (bill + tipCustom) / people;

    // display results
    tipResult.textContent = tipAmountPerPerson.toFixed(2);
    tipTotal.textContent = totalPerPerson.toFixed(2);
}
