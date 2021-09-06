const billAmount = document.querySelector("#bill-amt");
const cashAmount = document.querySelector("#cash-amt");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function validateBillAndCashAmt(){
    hideMessage();
    if (billAmount.value > 0) {
        if (cashAmount.value >= billAmount.value) {
           const amtToBeReturned =  cashAmount.value - billAmount.value;
           calculateChange(amtToBeReturned);
        }
        else {
            showMessage("The cash amount should be greater than or equal to the bill amount");
        }
    }
    else {
        showMessage("invalid  bill amount");
    }
});

function hideMessage () {
    message.style.display = "none";
}

function calculateChange (amtToBeReturned) {
    for (let i=0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amtToBeReturned / availableNotes[i]);
        amtToBeReturned = amtToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;//
}

