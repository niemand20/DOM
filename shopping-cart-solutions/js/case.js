function updateCaseNumber(isIncrease){
     //get the value inside a number field
     const caseNumberField = document.getElementById("case-number-field");
     //convert the number to an integer
     const previousCaseNumber = parseInt(caseNumberField.value);
     //calculate the new case number
     let newCaseNumber;
     if(isIncrease){
        newCaseNumber = previousCaseNumber+1;
     }
     else{
        newCaseNumber = previousCaseNumber-1;
     }
     //set the value to the case number field
     caseNumberField.value = newCaseNumber;
     return newCaseNumber;
     

}



//add event listener to a case plus button
document.getElementById("btn-case-plus").addEventListener("click", function(){
   const newCaseNumber = updateCaseNumber(true);
   const caseTotalPrice = newCaseNumber*59;
   const caseTotalElement = document.getElementById("case-total");
   caseTotalElement.innerText = caseTotalPrice;
})

document.getElementById("btn-case-minus").addEventListener("click",function(){
    updateCaseNumber(false);
})