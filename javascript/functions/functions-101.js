//Function - input, code , output

//Defining the function
let greetUser = function (){
    console.log('Welcome User!');
}

//calling the function
greetUser();
greetUser();
greetUser();

let square = function(num) {
    let result = num * num;
    return result;
}

console.log(square(3));

let value = square(10)
console.log(value);


//code challenge

let converFarenheitToCelcius = function (f) {
    c = (f-32)*(5/9);
    return c;
}

console.log('F:120 C:' + converFarenheitToCelcius(120));
console.log('F:90 C:' + converFarenheitToCelcius(90));
console.log('F:60 C:' + converFarenheitToCelcius(60));
