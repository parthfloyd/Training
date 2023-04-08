//Multiple Arguments
let add = function (a, b, c) {
    return (a+b+c);
}

let result = add(10, 1, 5);
console.log(result);


//Default Arguments
let getScoreText = function(name = 'Anonymous',score = 0) {
    //return 'Name: ' + name + ' Score: ' + score;
    return `Name ${name} Score: ${score}`;
}

console.log(getScoreText('Parth',240));
console.log(getScoreText(undefined, 99));
console.log(getScoreText('Jignesh'));

///Challenge
//total, tipPer

let tipCalculator = function(total, tipPer = .02) {
    // let res = total*tipPer;
    return `A ${tipPer * 100}% tip on ${total} would be ${total * tipPer}`;
    // return `Tip: ${res}`;
}

console.log(tipCalculator(3213,.05));
console.log(tipCalculator(1000,.04));


//TEMPLATE STRINGS
let name = 'Parth';
console.log(`Hey, my name is ${name}`);