const isRaining = true;

//isRaining = false;

console.log(isRaining);

const person = {
    age: 43
}
//you can still change the internal properties
person.age = 32;

console.log(person);

//one of the ways to make it immutable
const stubbornPerson = Object.freeze({
    age: 19
});

stubbornPerson.age = 21;

console.log(stubbornPerson);





//Checking where to use CONST CHALLENGE
const gradeCalculator = function(score=0,total=100){
    const percentage = (score/total)*100;
    let grade = ''; //initializing a local var

    if(percentage >=90) {
        grade = 'A';
    } else if(percentage >= 80) {
        grade = 'B';
    } else if(percentage >= 70) {
        grade = 'C';
    } else if(percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return `You got a ${grade} (${percentage}%)!`;
}

console.log(gradeCalculator(23,100));