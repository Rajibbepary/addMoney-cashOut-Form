      
document.getElementById('btn-add-money')
.addEventListener('click', function (event){
event.preventDefault();
const inputEmail = getInputFieldValueById('input-email');
const inputPass = getInputFieldValueById('input-pass');
//console.log('hello', inputEmail, inputPass);
if(isNaN(inputEmail)){
    alert('Failed to add money');
    return
}


if(inputPass === 1234){
    const balance = getTextFieldValueById('account-balance');
    const newBalance = balance + inputEmail;
    //console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance;

    const p = document.createElement('p');
    p.innerText = `Added: ${inputEmail} Tk.New Balance: ${newBalance}`;
    //console.log(p);
//shoud be a common function
document.getElementById('Transactions-container').appendChild(p)

 
}else{
    alert('Failed to add the money')
}






});