
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value ="";
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const value = parseFloat(element.value);
    return value;
}

document.getElementById("btn-deposit").addEventListener("click", function(){
    const newDepositAmount = getInputFieldValueById("deposit-field");
})
