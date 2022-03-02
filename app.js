// elements
const billInput = document.getElementById("bill-total")
const tipBtnAll = document.querySelectorAll(".btn-percentage");
const peopleInput = document.getElementById("person-total")
const tipResult = document.getElementById("tip-amount")
const tipTotal = document.getElementById("total-amount")
const resetBtn = document.getElementById("reset-all-btn");

billInput.onkeyup = function() {
    console.log(billInput.value)
}

peopleInput.onkeyup = function () {
    console.log(peopleInput.value);
};
