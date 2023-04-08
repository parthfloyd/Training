let game1;

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode);
    if(game1.status === 'Playing'){
        game1.makeGuess(guess);
        
    }
    renderGameDOM(game1);
});

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    renderGameDOM(game1);
}

startGame();


// getPuzzle("2").then((puzzle)=> {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error : ${err}`);
// });

// getCountryDetails("IN").then((countryName) => {
//     console.log(countryName);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// });

// getLocation().then((data) => {
//     console.log(`You are currently in ${data.city}, ${data.region}, ${data.country}`);
//     return data.country;
// }).then((countryCode) => {
//     return getCountryDetails(countryCode);
// }).then((countryName) =>{
//     console.log(countryName);
// }).catch((err) => {
//     console.log ("Error : " + err);
// });

// getCurrentCountry().then((data) => {
//     console.log('I know everything, i know you are from ' , data);
// }).catch((err) => {
//     console.log("Error: " + err);
// });


// fetch('http://puzzle.mead.io/puzzle', {}).then((response)=> {
//     if(response.status === 200) {
//         return response.json();
//     } else {
//         throw new Error('Unable to fetch the puzzle');
//     }
// }).then((data)=>{
//     console.log(data.puzzle);
// }).catch((e) => {
//     console.log(e);
// });






// const puzzle = getPuzzleSync()
// console.log(puzzle);

// console.log('Do something else');








