// 1. add eventListener to deposit button
document.getElementById("btn-deposit").addEventListener("click", function(){
// 2. get the deposit amount from deposit input field
    const depositField = document.getElementById("deposit-input");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(typeof newDepositAmount);

// 3. get current total deposit amount
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

// 4. add numbers to set the total  deposit
    const currentDepositTotal = previousDepositTotal+ newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

//5. get balance current total;
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

// 6.calculate current total balance
    const currentBalanceTotal = previousBalanceTotal+ newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

// 7. clear the deposit field
    depositField.value = "";

})