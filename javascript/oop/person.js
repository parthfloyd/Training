//Prototypal Inheritance

class Person {

    constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}, and likes `;

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        });

        return bio;
    }

    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}


class Employee extends Person{
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }

    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`;
    }
    getYearsLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {

    constructor(firstName, lastName, age, grades = 50, likes) {
        super(firstName, lastName, age, likes);
        this.grades = grades;
    }

    getBio() {
        const gradeStatus = this.grades>=40 ? 'passing' : 'failing';
        return `${this.firstName} is ${gradeStatus} the exams with score of ${this.grades} !`;
    }

    updateGrade(addScore) {
        this.grades += addScore;
    }
}

const newStudent = new Student('Harsh',"Vishnoi",19, 66, ['cricket']);
newStudent.fullName = 'Harshai Gandhi';
console.log(newStudent.getBio());
newStudent.updateGrade(-40);
console.log(newStudent.getBio());
