      
document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
event.preventDefault();
const cashOut = getInputFieldValueById('input-cash-out');

const cashPin = getInputFieldValueById('cash-out-pin');

if(isNaN(cashOut)){
    alert('Failed to add money');
    return
}


if(cashPin === 1234){
    const balance = getTextFieldValueById('account-balance')
    if(cashOut > balance){
        alert('Not enough balance');
        return;
    }


    const newBalance = balance - cashOut;
    document.getElementById('account-balance').innerText = newBalance;
    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.classList.add('p-4');
    div.classList.add('mt-2');
    div.classList.add('rounded-md');
    div.innerHTML = `
    <h4 class= "text-2xl font-bold">Cash Out</h4>
    <p>${cashOut} withdraw New Balance ${newBalance}</p>
    
    `
    document.getElementById('Transactions-container').appendChild(div);

}else{
    alert('Wrong Pin')
}



})