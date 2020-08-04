let gradeCalculator = function(score=0,total=100){
    let percentage = (score/total)*100;
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

console.log(gradeCalculator(94,100));
console.log(gradeCalculator(16,20));
console.log(gradeCalculator(38,50));
console.log(gradeCalculator(26,40));
console.log(gradeCalculator(0,100));
