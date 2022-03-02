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
// grab people input number value
billInput.addEventListener('keyup', getBillValue)

function getBillValue(e) {
    return e.target.value;
}

// PEOPLE INPUT
// grab people input number value
peopleInput.addEventListener('keyup', getPeopleValue);

function getPeopleValue(e) {
    return e.target.value;
}

// BUTTON PERCENTAGE
// grab btn value
btnarray.map(btn => {
    btn.addEventListener('click', getButtonValue);
})

function getButtonValue(e) {
    return e.target.value;
}