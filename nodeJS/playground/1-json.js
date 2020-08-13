const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);
// fs.writeFileSync('1-json.json',bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString(); //Its in JSON format
// const data = JSON.parse(dataBuffer); //Its in JavaScript object format
// console.log(data.title);

//CHALLENGE TIME

//Fetching data
const dataBuffer = fs.readFileSync('1-json.json');
const data = JSON.parse(dataBuffer); //Converting JSON to JavaScript object

//Modifying data
data.name = "Parth Panchal";
data.age = 24;

//Stringifying and overwriting the modified data
fs.writeFileSync('1-json.json',JSON.stringify(data));
