///1. add event handler with the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function(){
    //2. get the withdrawn amount from the input field
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmount=  parseFloat( withdrawField.value);
    
//3. clear the input Field
    withdrawField.value = "";

//4. get previous withdraw total
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    

    //5. calculate total withdraw amount and set it to the withdraw total amount
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal ;

    //6. get previous balance 
    const balanceElement = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceElement.innerText);

    //7 . calculate new balance and set it to the balance total element
    const newBalanceTotal = previousBalanceTotal- newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;


})