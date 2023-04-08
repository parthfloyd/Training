var firstName = "Parth";

firstName = "PARTH";


var firstName = "Perth"; //This is not possible in let, hence it is safer to use let instead

console.log(firstName);

/*
    Also var is function scoped, not block scoped. as in it is not properly scoped in if statements and other code blocks!
*/

if (true) {
    var name = "Parth Panchal"
}

console.log(name);

// let
if(true) {
    let letName = 'PARTH PANCHAL';
}

// console.log(letName); // this will throw an error


//Practice

console.log(age);
var age;
// let age //this will throw an error
//So basically when a script is run , variables are declared in the beginning as in 
// var age =10;
//the var age part will be sent to the beginning of the script!
