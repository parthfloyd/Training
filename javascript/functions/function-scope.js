
let converFarenheitToCelcius = function (f) {
    c = (f-32)*(5/9);
    return c;
}

console.log('F:120 C:' + converFarenheitToCelcius(120));
console.log('F:90 C:' + converFarenheitToCelcius(90));
console.log('F:60 C:' + converFarenheitToCelcius(60));
//Functions too create scope like if statements did!