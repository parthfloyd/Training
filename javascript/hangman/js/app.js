const game1 = new Hangman('Mission Impossible',7);
renderGameDOM(game1);

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode);
    if(game1.status === 'Playing'){
        game1.makeGuess(guess);
        
    }
    renderGameDOM(game1);
    console.log(game1.puzzle);
    console.log(game1.remainingGuesses);    
});

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

getLocation().then((data) => {
    console.log(`You are currently in ${data.city}, ${data.region}, ${data.country}`);
    return data.country;
}).then((countryCode) => {
    return getCountryDetails(countryCode);
}).then((countryName) =>{
    console.log(countryName);
}).catch((err) => {
    console.log ("Error : " + err);
});

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








