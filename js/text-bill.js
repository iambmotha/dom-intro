
//get a reference to the add button
const textTotalAddBtn = document.querySelector(".addToBillBtn")
//create a variable that will keep track of the total bill
var billTypeText = document.querySelector('.billTypeText');
var callTotalOneElem = document.querySelector('.callTotalOne');
var smsTotalOneElem = document.querySelector('.smsTotalOne');
var totalOneElem = document.querySelector('.totalOne');

var callsTotal = 0;
var smsTotal = 0;

textTotalAddBtn.addEventListener('click', function(){

    
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value;
  
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalOneElem.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOneElem.innerHTML = totalCost.toFixed(2);


    if (totalCost >= 50){
        totalOneElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOneElem.classList.add("warning");
    }
});
