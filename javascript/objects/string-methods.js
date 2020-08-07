let name = "Parth Panchal";

//Length Property 
console.log(name.length);

//Convert to uppercase
console.log(name.toUpperCase());

//Convert to LowerCase
console.log(name.toLowerCase());

//includes method
// console.log(name.includes("art"));
let passsword = "abc123password012";
console.log(passsword.includes("password"));

//Trim
let spacedName = "                   Parth    Panchal      ";
console.log(spacedName.trim()) //trims the leading and trailing spaces.

//Challenge Area 
//isValid Password 
//true if length is more than 8, doesnt contain word password

// let isValidPassword = function(password) {
//     if(password.length > 8 && !password.includes("password")){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

//One Liner solution
let isValidPassword = function(password){
    return password.length > 8 && !password.includes("password");
}


console.log(isValidPassword("password1231@"));
console.log(isValidPassword("Hello1231@"));
console.log(isValidPassword("Hel@"));