// Computer picks random letter 

function makeComputerGuess () {
    let randomInt = Math.floor(Math.random() * (alphabet.length));
    let compGuess = (alphabet[randomInt]);
    return compGuess;
}

// Establish Variables
let winsText = document.getElementById ("wins-text");
let lossesText = document.getElementById ("losses-text");
let guessesText = document.getElementById ("guesses-left-text");
let userGuesses = document.getElementById ("user-guess-text");
let wins = 0;
let losses = 0;
let guessesLeft = 12;
let userList = [];
let alphabet = "abcdefghijklmnopqrstuvwxyz";


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed.
    let computerGuess = makeComputerGuess();
    let userGuess = event.key;

    //keyup value compared to compguess

    if (event.key === computerGuess) {
        wins++;
        guessesLeft = 12;
        userList = [];
        
    } if (event.key !== computerGuess) {
        guessesLeft--;
        userList.push(userGuess);

    } if (guessesLeft === 0) {
        guessesLeft = 12;
        losses++;
        userList = [];
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses left: " + guessesLeft;
    userGuesses.textContent = "Your guesses so far: " + userList;

    //if true wins++, game restarts without page refresh
    //if false guessesLeft--restarts without refresh
}

// window.onload = function () {
//     document.getElementById ("wins-text").textContent = "Wins: " + wins
//     document.getElementById ("losses-text").textContent = "Losses: " + losses
//     document.getElementById ("guesses-left-text").textContent = "Guesses left: " + guessesLeft
// }


