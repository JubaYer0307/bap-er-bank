// step 1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
   
    const depositAmount = document.getElementById('deposit-field');
   
    const newAmountString =  depositAmount.value;
    const newAmount = parseFloat(newAmountString);

    const depositTotalAmount = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalAmount.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newAmount;

    depositTotalAmount.innerText = currentDepositTotal;

    depositAmount.value =''

    const balanceAmount = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceAmount.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newAmount;

    balanceAmount.innerText = currentBalanceTotal;

    depositAmount.value =''


})