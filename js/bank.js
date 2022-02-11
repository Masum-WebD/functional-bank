function getBankStatement(inputId){
    const input = document.getElementById(inputId)
    const inputText = input.value
    const inputAmount =parseFloat(inputText)
        // clear input value
        input.value=' '
    return inputAmount

}

function updateAmount ( balanceId, amount){
    const depositeAmountValue =document.getElementById(balanceId)
    const depositeTextValueAd = depositeAmountValue.innerText
    const depositeAmountValueAd = parseFloat(depositeTextValueAd)
    depositeAmountValue.innerText= amount + depositeAmountValueAd
}
function updateTotalBalance (amount, balance){
    const totalBalance = document.getElementById('balance-total')
    const totalBalanceText = totalBalance.innerText
    const totalBalanceAmount = parseFloat(totalBalanceText)

    if(balance == true){
        totalBalance.innerText = totalBalanceAmount + amount
    }
    else{
        totalBalance.innerText = totalBalanceAmount - amount
    }
}



document.getElementById('deposite-button').addEventListener('click', function() {
    // const depositeInput = document.getElementById('deposite-input');
    // const depositeText = depositeInput.value
    // const depositeAmount = parseFloat(depositeText)
    // add the deposite amount

  const depositeAmount= getBankStatement('deposite-input')



    // const depositeAmountValue =document.getElementById('deposite-amount')
    // const depositeTextValueAd = depositeAmountValue.innerText
    // const depositeAmountValueAd = parseFloat(depositeTextValueAd)
    // depositeAmountValue.innerText= depositeAmount +depositeAmountValueAd

    updateAmount('deposite-amount',depositeAmount)
    updateTotalBalance(depositeAmount,true)
    
    //update total balance 
    // const totalBalance = document.getElementById('balance-total')
    // const totalBalanceText = totalBalance.innerText
    // const totalBalanceAmount = parseFloat(totalBalanceText)

    // totalBalance.innerText = totalBalanceAmount + depositeAmount

    //decrese withdraw


     // clear input value
    //  depositeInput.value=' '
})
document.getElementById('withdraw-button').addEventListener('click', function() {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawText = withdrawInput.value
    // const withdrawAmount = parseFloat(withdrawText) 
    const withdrawAmount = getBankStatement('withdraw-input')

    // const withdrawAmountValue =document.getElementById('withdraw-amount')
    // const withdrawTextValueAd = withdrawAmountValue.innerText
    // const withdrawAmountValueAd = parseFloat(withdrawTextValueAd)
    // withdrawAmountValue.innerText= withdrawAmountValueAd + withdrawAmount

    updateAmount('withdraw-amount',withdrawAmount)
    updateTotalBalance(withdrawAmount,false)

    //update withdraw

    // const totalBalance = document.getElementById('balance-total')
    // const totalBalanceText = totalBalance.innerText
    // const totalBalanceAmount = parseFloat(totalBalanceText)

    // totalBalance.innerText = totalBalanceAmount - withdrawAmount

     // clear input value
    //  withdrawInput.value=' '



})