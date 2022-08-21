// 1. add eventListener to deposit button
document.getElementById("btn-deposit").addEventListener("click", function(){
// 2. get the deposit amount from deposit input field
    const depositField = document.getElementById("deposit-input");
    const depositAmount = depositField.value;
// 3. get current total deposit amount
    const depositTotalElement = document.getElementById("deposit-total");
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

})