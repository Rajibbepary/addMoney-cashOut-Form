function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    //console.log(id, inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    //hide all the section
   document.getElementById('addmoney-section').classList.add('hidden');
   document.getElementById('cash-out-section').classList.add('hidden');
   document.getElementById('Transactions-section').classList.add('hidden');
   document.getElementById(id).classList.remove('hidden');
} 