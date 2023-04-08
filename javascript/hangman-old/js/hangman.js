class Hangman {
    constructor(word, remainingGuesses, guessedLetters = []) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = guessedLetters;
        this.status = 'Playing';
    }

    get puzzle() {
        let ans = '';
        this.word.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter === ' ') {
                ans += letter;
            } else {
                ans += '*';
            }
        });
        
        return ans;
    }

    makeGuess(letter) {
        letter= letter.toLowerCase();
        const isUnique = !this.guessedLetters.includes(letter);
        const isBadGuess = !this.word.includes(letter);
        
        if(isUnique) {
            this.guessedLetters.push(letter);
        }

        if(isUnique && isBadGuess) {
            this.remainingGuesses--;
        }

        this.setStatus();   
    }

    setStatus() {
        //Playing, Finished, failed
        if (!arrayEqualChecker(this.word, this.guessedLetters) && this.remainingGuesses > 0){
            this.status = 'Playing';
        } else if (arrayEqualChecker(this.word, this.guessedLetters)){
            this.status = 'Finished';
        } else {
            this.status = 'Failed';
        }
    }
}


const arrayEqualChecker = function(arr1, arr2) {
    let flag = true;
    for(let i = 0; i < arr1.length; i++) {
        if(!arr2.includes(arr1[i]) && arr1[i] !== ' '){
            flag = false;
        }
    }
    return flag;
}


const renderGameDOM = (game1) => {
    const mainEl  = document.querySelector('#hangman-game');

    mainEl.innerHTML = '';
    //Element for the main puzzle
    const currentGame = document.createElement('h2');
    currentGame.setAttribute('id','puzzle');
    currentGame.innerHTML = '';
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        currentGame.appendChild(letterEl);
    }) ;

    const currentStatus = document.createElement('h2');
    if(game1.status === 'Playing'){
        //ELement for guesses left
        const guessesLeft = document.createElement('p');
        guessesLeft.textContent = 'Remaining Guesses : ' + game1.remainingGuesses;

        //Element for status
        currentStatus.textContent = 'Status: '  + game1.status;

        //appending elements to the div
        mainEl.appendChild(currentGame);
        mainEl.appendChild(guessesLeft);

    } else if (game1.status === 'Failed') {
        currentStatus.textContent = 'Nice try! The answer was: ' + game1.word.join('');
    }  else {
        currentStatus.textContent ="Congratulations you did it with " + game1.remainingGuesses + " tries left!";
    }

    mainEl.appendChild(currentStatus);    
}
