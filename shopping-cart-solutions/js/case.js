//add event listener to a case plus button
document.getElementById("btn-case-plus").addEventListener("click", function(){
    //get the value inside a number field
    const caseNumberField = document.getElementById("case-number-field");
    //convert the number to an integer
    const previousCaseNumber = parseInt(caseNumberField.value);
    //calculate the new case number
    const newCaseNumber =  previousCaseNumber + 1;
    //set the value to the case number field
    caseNumberField.value = newCaseNumber
    
})

document.getElementById("btn-case-minus").addEventListener("click",function(){
    const caseNumberMinusField = document.getElementById("case-number-field");
    const previousCaseNumberForMinusField = parseInt(caseNumberMinusField.value)
    const newCaseNumberForMinusField =previousCaseNumberForMinusField-1;
    caseNumberMinusField.value = newCaseNumberForMinusField;
})