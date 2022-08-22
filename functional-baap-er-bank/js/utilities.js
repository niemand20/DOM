
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value ="";
    return inputFieldValue;
}

// function getElementValueById(elementId){
//     const element = document.getElementById(elementId);
//     const value = parseFloat(element.value);
//     return value;
// }

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValue = parseFloat(textElement.innerText);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}