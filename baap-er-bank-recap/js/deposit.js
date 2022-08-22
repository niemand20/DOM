// 1. add eventListener to deposit button
document.getElementById("btn-deposit").addEventListener("click", function(){
    // 2. get the deposit amount from deposit input field
        const depositField = document.getElementById("deposit-field");
        const newDepositAmountString = depositField.value;
        const newDepositAmount = parseFloat(newDepositAmountString);
        console.log(newDepositAmount);
    
//3. clear the deposit  input field
    depositField.value = "";

//4. get the previous deposit total
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotal =parseFloat( depositTotalElement.innerText)

//5. calculate new deposit total and set the value to the deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

//6. get current balance
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalAmount = parseFloat(balanceTotalElement.innerText)

//7. calculate the current balance and set it to the  balance   total element
    const newBalanceTotal = previousBalanceTotalAmount +newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})