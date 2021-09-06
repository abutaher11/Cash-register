const billAmount = document.querySelector("#bill-amt");
const cashAmount = document.querySelector("#cash-amt");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-msg");

checkButton.addEventListener("click", function validateBillAndCashAmt(){
    message.style.display = "none";
    if (billAmount.value > 0) {
        if (cashAmount.value >= billAmount.value) {

        }
        else {
            showMessage("The cash amount should be greater than or equal to the bill amount");
        }
    }
    else {
        showMessage("The bill amount should be greater than zero");
    }
});

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;//
}

