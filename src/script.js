// coding starts right here

// declaring variables using DOM
let dateElem = document.querySelector('div.date');

let hour = document.querySelector('.hour');
let minutes = document.querySelector('.mins');
let seconds = document.querySelector('.second');

let userScore = 0;
let computerScore = 0;

let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");

let scoreBoardDiv = document.getElementsByClassName("score-board");

let result_p = document.querySelector(".result > p");

let rockDiv = document.querySelector("#r");
let paperDiv = document.querySelector("#p");
let scissorDiv = document.querySelector("#s");



// setting date and time
(function date() {
    let currentDate = new Date();
    dateElem.innerText = currentDate.toLocaleDateString();
})();
// date();


var updateTime = () => {
    let currentTime = new Date();
    // let currentTime = new Date()toLocaleTimeString();

    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    
    hour.textContent = currentHour;
    minutes.textContent = currentMinutes.toString().padStart(2, '0');
    seconds.textContent = currentSecond.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();


function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    // console.log(Math.floor(Math.random() * 3));

    let randomChoice = Math.floor(Math.random() * 2) + 1;
    return choices[randomChoice];
};
// console.log(getComputerChoice());


// creating a function to convert letters to a word
function convertToWord(letter) {
    if (letter === 'r') return 'Rock'; 
    if (letter === 'p') return 'Paper'; 
    return 'Scissor'; 
};


// declaring functions to check if either user or computer wins, loses or even gameOver
function win(userChoice, computerChoice) {
    // console.log('WON!');
    let resizeUserWord = 'user'.fontsize(5);
    let resizeCompWord = 'computer'.fontsize(5);
    let checkUserChoice = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertToWord(userChoice)} (${resizeUserWord}) beats ${convertToWord(computerChoice)} (${resizeCompWord}). You win! 🎉`;

    // adding a colour to icons wether won or lost
    checkUserChoice.classList.add('green-glow');

    // removing a colour after a specific time
    setTimeout(() => checkUserChoice.classList.remove('green-glow'), 1000);
};

function lose(userChoice, computerChoice) {
    // console.log('LOST!');
    let resizeUserWord = 'user'.fontsize(5);
    let resizeCompWord = 'computer'.fontsize(5);
    let checkUserChoice = document.getElementById(userChoice);

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertToWord(userChoice)} (${resizeUserWord}) loses to ${convertToWord(computerChoice)} (${resizeCompWord}). You lost! 😢`;

    // adding a colour to icons wether won or lost
    checkUserChoice.classList.add('red-glow');

    // removing a colour after a specific time
    setTimeout(() => checkUserChoice.classList.remove('red-glow'), 1000);
};

function gameOver(userChoice) {
    // console.log('GAME OVER!');
    
    // let resizeUserWord = 'user'.fontsize(2).sub();
    // let resizeCompWord = 'user'.fontsize(2).sub();
    let checkUserChoice = document.getElementById(userChoice);


    // result_p.innerHTML = `${convertToWord(userChoice)} ${resizeUserWord} equals ${convertToWord(computerChoice)} ${resizeCompWord}. Game over! 🙄`;
    result_p.innerText =  'Try again! 🙄';

    // adding a colour to icons if game over
    checkUserChoice.classList.add('gray-glow');

    // removing a colour after a specific time
    setTimeout(() => checkUserChoice.classList.remove('gray-glow'), 1000);
};

function game(userChoice) {
    // console.log('Oh hey there! ' + userChoice);

    let computerChoice = getComputerChoice();
    // console.log('user choice is ' + userChoice);
    // console.log('computer choice is ' + computerChoice);

    // checking who's the winner by using switch case statement
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
            // console.log('User wins!');
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice)
            break;
            // console.log('User loses!');
        case 'rr':
        case 'pp':
        case 'ss':
            gameOver(userChoice, computerChoice)
            break;
            // console.log('Game over!');
    }
};
// game('r');

// checking which of user's choice has been clicked
function mainGame() {
  rockDiv.addEventListener("click", function () {
    // console.log("You just clicked rock");
    game('r')
  });

  paperDiv.addEventListener("click", function () {
    // console.log("You just clicked paper");
    game('p')
  });

  scissorDiv.addEventListener("click", function () {
    // console.log("You just clicked scissor");
    game('s')
  });
};
mainGame();


// using test.js
//module.exports = {getComputerChoice, convertToWord};
