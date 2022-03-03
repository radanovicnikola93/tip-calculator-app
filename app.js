// elements
const billInput = document.getElementById("bill-total")
const tipBtnAll = document.querySelectorAll(".btn-percentage");
const peopleInput = document.getElementById("person-total")
const tipResult = document.getElementById("tip-amount")
const tipTotal = document.getElementById("total-amount")
const resetBtn = document.getElementById("reset-all-btn");

// transfor node to array
const btnarray = [...tipBtnAll];

// BILL INPUT
// set people input number value
billInput.addEventListener('keyup', setBillValue);

// PEOPLE INPUT
// grab people input number value
peopleInput.addEventListener("keyup", setPeopleValue);

// BUTTON PERCENTAGE
// grab btn value
btnarray.map(btn => {
    btn.addEventListener('click', getButtonValue);
})

function setBillValue(e) {
    billInput.setAttribute("defaultValue", e.target.value);
}

function setPeopleValue(e) {
    peopleInput.setAttribute("value", e.target.value);
}

function getButtonValue(e) {
    return e.target.value;
}