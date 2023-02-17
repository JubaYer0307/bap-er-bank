// document.getElementById('btn-withdraw').addEventListener('click', function(){

//    const withDrawAmount = document.getElementById('withdraw-field');

//    const newWithdrawString = withDrawAmount.value;
//    newAmount = parseFloat (newWithdrawString);

//   const previousWithDraw = document.getElementById('withdraw-total');
//   const previousWithDrawString = previousWithdraw.innerText;
 
//   const previousTotalWithdraw = parseFloat (previousWithDrawString)

//  const currentWithdrawTotal = previousTotalWithdraw + newAmount;

//  const previousWithDraw.innerText = currentWithdrawTotal;



// })


document.getElementById('btn-withdraw').addEventListener('click', function(){
   
    const withdrawAmount = document.getElementById('withdraw-field');
   
    const newAmountString =  withdrawAmount.value;
    const newAmount = parseFloat(newAmountString);

    const withdrawTotalAmount = document.getElementById('withdraw-total');

    const previousWithdrawTotalString = withdrawTotalAmount.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentDepositTotal = previousWithdrawTotal + newAmount;

    withdrawTotalAmount.innerText = currentDepositTotal;

    withdrawAmount.value =''

    const balanceAmount = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceAmount.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal - newAmount;

    balanceAmount.innerText = currentBalanceTotal;

    withdrawAmount.value =''


})