let num = 103.941;

//toFixed
console.log(num.toFixed(1));

//Math methods
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

//Math random
let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max-min+1)) +min; 

console.log(randomNum);


//Challenge Area
//1-5-true- false if not correct

let makeGuess = function(num) {
    let randomNum = Math.floor(Math.random() * 5) + 1;
    return num == randomNum;
}

console.log(makeGuess(4));
console.log(makeGuess(4));
console.log(makeGuess(4));
console.log(makeGuess(4));
console.log(makeGuess(4));
console.log(makeGuess(4));
console.log(makeGuess(4));
console.log(makeGuess(4));
console.log(makeGuess(4));
console.log(makeGuess(4));
console.log(makeGuess(4));
console.log(makeGuess(4));
