var prompt = require('sync-prompt').prompt;

var balance = 1000.00;
var deposits = [];
var withdrawals = [];

var response = prompt('What would you like to do? (d)eposit, (w)ithdraw, (q)uit? ');

//User enters type of and amount, loop runs until the user enters 'q'
while(response != 'q'){

    var amt = prompt('Enter the amount: ');
    amt = parseInt(amt);

  if(response === 'd'){
    deposits.push(amt);
  }else if(response === 'w'){
    withdrawals.push(amt);
  }else{
    console.log('You did not enter a valid respsonse. Please try again.');
  }
  response = prompt('What would you like to do? (d)eposit, (w)ithdraw, (q)uit? ');
} //end while loop

//Display list and type of amounts that user just entered
console.log("List of deposits: ",deposits);
console.log("List of withdrawals: ",withdrawals);

// Add deposits
var sumDeposits = 0

for(i = 0; i<deposits.length; i++){
  sumDeposits += deposits[i];
}

// Add withdrawals
var sumWithdrawals = 0

for(i = 0; i<withdrawals.length; i++){
  sumWithdrawals += withdrawals[i];
}

// Add withdrawals and deposits, then add to previous balance

balance += sumDeposits - sumWithdrawals;

// Subtract fee of $50 if balance is less than $0, and show final balance
if(balance < 0){
  console.log("This amount is less than the minimum required balance and incurs a fee of $50.00. ");
  var fee = 50;
  balance = balance - 50;
  console.log("Your new account balance is $", balance + ".");
}else{
  console.log("Your new account balance is $", balance + ".");
}

