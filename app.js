// elements
const billInput = document.getElementById("bill-total")
const tipBtnAll = document.querySelectorAll(".btn-percentage");
const peopleInput = document.getElementById("person-total")
const tipResult = document.getElementById("tip-amount")
const tipTotal = document.getElementById("total-amount")
const resetBtn = document.getElementById("reset-all-btn");

// transfor node to array
const btnarray = [...tipBtnAll];

// grab people input number value
const getBillValue = billInput.onkeyup = function() {
    console.log(billInput.value)
}

// grab people input number value
const getPeopleValue = peopleInput.onkeyup = function () {
    console.log(peopleInput.value);
};

// grab btn value
const getBtnValue = btnarray.map(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.value)
    })
})