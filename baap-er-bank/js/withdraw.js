//1. add event handler with the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function(){
//2. get the withdrawn amount from the input field
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmount=  parseFloat( withdrawField.value);
    
// 3. get previous withdraw total
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    console.log(previousWithdrawTotal);

// 4.calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal+ newWithdrawAmount;
// 4.5 set total withdraw amount 
    withdrawTotalElement.innerText = currentWithdrawTotal;
// 5. get the previous Balance total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    console.log(previousBalanceTotal)

// 6. calculate new balance total and set the new balance total
    const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

// 7. withdraw clear
    withdrawField.value = "";
})