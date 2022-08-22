// 1. add withdraw button event handler
document.getElementById("btn-withdraw").addEventListener("click", function(){
    //get withdraw amount by using getInputFieldValueById
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    //get previous withdraw amount by using getTextElementValueById function
    const previousWithdrawTotal = getTextElementValueById("withdraw-total");
    //calculate new withdraw total and set the value(setTextElementValueById)
    const newWithdrawTotal= previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById("withdraw-total", newWithdrawTotal);
    //get previous balance total by using getTextElementValueById function
    const previousBalanceTotal = getTextElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //set balance total using setTextElementValueById
    setTextElementValueById("balance-total", newBalanceTotal);
})