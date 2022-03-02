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
billInput.onkeyup = function() {
    return billInput.value
}

// grab people input number value
peopleInput.onkeyup = function() {
    return peopleInput.value
};

// grab btn value
btnarray.map(btn => {
    btn.addEventListener('click', (e) => {
        return e.target.value
    })
})