const account = {

    name: "Parth Panchal", //Name of account holder

    expenses: [], //Expenses Array

    income: [], //Income Array

    //Method to add Expense
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description, 
            amount: amount
        });
        console.log(`Expense -> Description : ${description} | Amount : ₹${amount}`);
    },

    //Method to add Income
    addIncome: function (description, amount) {
        this.income.push({
            description: description, 
            amount: amount
        });
        console.log(`Income -> Description : ${description} | Amount : ₹${amount}`);
    },

    //Method to get account summary
    getAccountSummary: function() {
        let totalExpense = 0;
        let totalIncome = 0;

        // for(let i = 0; i <this.expenses.length;i++){
        //     total+= this.expenses[i].amount;
        // }

        //Alternatively using forEach
        this.expenses.forEach(function(expense){
            totalExpense += expense.amount;
        });

        this.income.forEach(function(inc){
            totalIncome += inc.amount;
        })

        
        return `${this.name} has a balance of ₹${totalIncome - totalExpense}, ₹${totalIncome} in income,  ₹${totalExpense} in expenses`;


    }

}

//Expense -> description, amount
//addExpense -> description, amount
//getAccountSummary -> total up all expenses -> Parth has $342 in expenses.

/*
    Add income array to the account
    addIncomeMethod -> description, amount
    tweak getAccountSummary
    parth has a balance of $123 $223 in income $100 in expenses.
*/

account.addExpense('Rent', 4000);
account.addExpense('Tea', 30);
account.addIncome('Monthly Salary', 90000);
account.addIncome('Indian Government', 1500000);
console.log(account.getAccountSummary());
