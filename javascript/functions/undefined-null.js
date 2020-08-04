//undefined for variable
let name;

if(name === undefined){
    console.log("Please provide a name");
}else {
    console.log(name);
}
console.log(name); //console prints undefined

//undefined for function arguments
let square = function (num) {
    return num;
}

let result = square();
console.log(result); //console prints undefined

//
let age = 26;
age = null; //null as assigned value, something was explicitly cleared
console.log(age);