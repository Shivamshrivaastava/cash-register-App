var inpBillAmount = document.querySelector("#inpBillAmount");
var cashGivenByCustomer = document.querySelector("#cashGivenByCustomer");
var submitBtn = document.querySelector("#submitBtn");
var currencyTable = document.querySelector("#currencyTable");
const currency = [2000,500,100,20,10,5,1];

submitBtn.addEventListener("click", eventHandler);

function errorExceptions(cash, bill) {
  if (cash === "" || bill === "") {
    return "one of the input is missing";
  }
  if (isNaN(bill) || isNaN(cash)) {
    return "one of the input is Not-A-Number,kindly verify";
  }

  cash = parseInt(cash);
  bill = parseInt(bill);

  if (bill < 0 || cash < 0) {
    return "entered input shouldn't be negative ";
  }
  if (bill >= cash) {
    return "billing amount is more than cash";
  }
  return "no error";
}
function printTable(cash, bill) {
    var notes = document.querySelectorAll(".notes");
    var i = 0;
    var diff = cash-bill;
    currency.map(val=>{
        notes[i].innerText = Math.floor(diff / currency[i]);
        diff = diff % currency[i];
        i++;
    })
    
}
function eventHandler() {
  var cash = cashGivenByCustomer.value;
  var bill = inpBillAmount.value;

  var errorMsg = errorExceptions(cash, bill);

  if (errorMsg === "no error") {
      cash = parseInt(cash);
      bill = parseInt(bill);
    printTable(cash, bill);
  } else {
    alert(errorMsg);
  }
}