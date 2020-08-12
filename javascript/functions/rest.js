const todo = {
    id: 'adfpaonsdfa',
    text: 'Pay the bills',
    completed: false
}

const {text: todoText, completed , details = `No details provided`,...others} = todo

console.log(todoText);
console.log(completed);
console.log(details);
console.log(others);

const age = [54,32,43,65];
const [firstAge, secondAge, , fourthAge] = age
console.log(firstAge);
console.log(secondAge);
console.log(fourthAge);

const printTodo = ({text: todoText, completed}) => {
    console.log(`${todoText}: ${completed}`);
}
printTodo(todo);

// const calculateAverage = (thing, ...numbers) => {
//     let sum = 0;
//     numbers.forEach((num) => sum+=num);
//     const average =  sum / numbers.length;
//     return `The average ${thing} is ${average}`;
// }
// console.log(calculateAverage('grade',123,232,320,100));

// const printTeam = (team, coach, ...players) => {
//     console.log(`Team: ${team}`);
//     console.log(`Coach: ${coach}`);
//     console.log(`Players: ${players.join(', ')}`);
// }

// const team= {
//     name: 'KKR',
//     coach: 'Brendon Mccullum',
//     players: ['Eoin Morgan', 'Andre Russell', 'Shubham Gill']
// }

// // printTeam('KKR','Brendon Mccullum', 'Eoin Morgan', 'Andre Russell', 'Shubham Gill');
// printTeam(team.name, team.coach, ...team.players);


// const cities = ['Barcelona', 'Cape Town', 'Bordeaux'];
// const citiesCopy = ['Santiago',...cities];
// console.log(cities);
// console.log(citiesCopy);

// let house = {
//     bedrooms: 2,
//     bathrooms: 1.5,
//     yearBuilt: 2017
// }

// let newHouse= {
//     basement: true,
//     ...house,
//     bedrooms:3
// }
// newHouse.yearBuilt = 2019;

// console.log(newHouse);

// person = {
//     name: 'Parth',
//     age: 24
// }

// location = {
//     city: 'New Delhi',
//     country: 'India'
// }

// overview = {
//     ...person,
//     ...location
// }

// console.log(overview);