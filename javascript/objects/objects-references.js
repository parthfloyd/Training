let myAccount = {
    name : 'Parth Panchal',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount){
    account.expenses += amount;
    console.log(`Deducted ${amount} from account for the expenses.`);
};
//add income
let addIncome = function(account, amount) {
    account.income += amount;
    console.log(`Added ${amount} to the income.`);
};
//resetAccount
let resetAccount = function(account){
    account.income = 0;
    account.expenses = 0;
    console.log(`Account of ${account.name} is resetted.`)
}
//getAccountSummary
let getAccountSummary = function(account) {
    console.log(`Account for ${account.name} has ${account.income - account.expenses}, ${account.income} in income and ${account.expenses} in expenses.`);
};
//Account for Parth has 400, 500 in income 100 in expenses
console.log(myAccount);
addIncome(myAccount,20000);
addExpense(myAccount,15000);
addExpense(myAccount,2000);
getAccountSummary(myAccount);
resetAccount(myAccount);
getAccountSummary(myAccount);