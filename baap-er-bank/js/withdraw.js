///1. add event handler with the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function(){
    //2. get the withdrawn amount from the input field
        const withdrawField = document.getElementById("withdraw-field");
        const newWithdrawAmount=  parseFloat( withdrawField.value);
        // 7. withdraw clear
        withdrawField.value = "";
        if(isNaN(newWithdrawAmount)){
            alert("please enter a valid number");
            return;
        }
    
    // 3. get previous withdraw total
        const withdrawTotalElement = document.getElementById("withdraw-total");
        const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
        console.log(previousWithdrawTotal);
    
    
    // 5. get the previous Balance total
        const balanceTotalElement = document.getElementById("balance-total");
        const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
        
        
        //5.1 if withdraw amount > deposit amount , get an alert
        if (newWithdrawAmount>previousBalanceTotal){
            alert("eto teka nai");
            return;
        }

        // 4.calculate total withdraw amount
        const currentWithdrawTotal = previousWithdrawTotal+ newWithdrawAmount;
    // 4.5 set total withdraw amount 
        withdrawTotalElement.innerText = currentWithdrawTotal;
    
    // 6. calculate new balance total and set the new balance total
        const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
        balanceTotalElement.innerText = newBalanceTotal;
    
    
    })

