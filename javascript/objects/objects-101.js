let myBook = {
    title: '1984',
    author: 'Geroge Orwell',
    pageCount: 326
};

console.log(myBook);
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';
console.log(myBook);
console.log(`${myBook.title} by ${myBook.author}`);

//Challenge
let person  = {
    name: 'Parth Panchal',
    age: 21,
    location: 'New Delhi'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age+=1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
