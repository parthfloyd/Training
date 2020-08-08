const square = (num) => num * num;

const squareLong = (num) => {
    return num * num;
};

console.log(square(23));

const people = [ {
    name : 'Parth',
    age: 21
}, {
    name: 'Ramesh',
    age: 57
}, {
    name: 'Gauri',
    age: 21
}]

// const under30 = people.filter( function(person) {
//     return person.age <30;
// });

const under30 = people.filter((person)=> person.age <30);

console.log(under30);

//Challenge
//to find all
const year21 = people.filter((person) => person.age === 21);
year21.forEach((p) => console.log(p.name));

//to find one
const person = people.find((person) => person.age === 21);
console.log(person.name);