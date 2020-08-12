import Hangman, {arrayEqualChecker, renderGameDOM} from './hangman.js';
import getPuzzle from './requests.js';

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