const gameBtns = document.querySelectorAll('.gameBtns');
const resetBtn = document.querySelector("#resetBtn");
const result = document.querySelector("#result");
const result2 = document.querySelector("#result2");

let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById('playerScore');
let computerScore_span = document.getElementById('computerScore');

let playerFigure = document.querySelector("#dancer");
let compFigure = document.querySelector("#techie");

let rockBtn = document.getElementById('✊🏽');
let paperBtn = document.getElementById('✋🏽');
let scissorsBtn = document.getElementById('✌🏽')

const options = ["✊🏽", "✊🏽", "✌🏽"];
let playerSelection;
let computerSelection;

function getComputerChoice() {
    let randomOption = options[Math.floor(Math.random() * options.length)];
    computerSelection = randomOption;
    return computerSelection;
};

let rules = {
    '✊🏽': '✌🏽',
    '✋🏽': '✊🏽',
    '✌🏽': '✋🏽'
};

gameBtns.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.textContent;
    getComputerChoice();

    function playRound(playerSelection, computerSelection) {
        computerSelection = getComputerChoice();
        playerSelection = button.textContent;

        displayRound();
        selectWinner();
        };
        playRound(playerSelection, computerSelection);
}));

function displayRound() {
    if (computerSelection == rules[playerSelection]){
        result.textContent = `You Win This Round!`;
        result2.textContent = `${playerSelection} beats ${computerSelection}`;
        playerScore++;
        playerScore_span.textContent = playerScore;
        playerFigure.style.animation = "dance 4s";
    } else if (playerSelection == computerSelection) {
        result.textContent = "Draw!";
        result2.textContent = `${playerSelection} --- ${computerSelection}`
    } else {
        result.textContent =`Computer Wins This Round!`;
        result2.textContent = `${computerSelection} beats ${playerSelection}`
        computerScore++;
        computerScore_span.textContent = computerScore;
        compFigure.style.animation = "dance 4s";
    }
}

function selectWinner(){
    if (computerScore == 5) {
        computerWins();
    } else if (playerScore == 5) {
        playerWins();
    } else {
        return result.textContent;
    }
}

const section = document.querySelector('body');

function reset() {
    section.style.background = 'linear-gradient(109.2deg, rgb(249, 174, 240) 6.5%,rgb(139, 144, 250) 97.1%)';
    result.textContent = 'Choose Your Element';
    result2.textContent = '';
    playerScore_span.textContent = 0;
    computerScore_span.textContent = 0;
    playerScore = 0;
    computerScore = 0; 

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
};

function computerWins() {
    section.style.background = 'linear-gradient(110.6deg, rgb(156, 116, 129) -18.3%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    result.textContent =`Computer Takes The Victory!`;
    window.location.href = "matrix/matrix.html";
};

function playerWins() {
    section.style.background = 'linear-gradient(179.1deg, rgb(43, 170, 96) 2.3%, rgb(129, 204, 104) 98.3%)';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    result.textContent =`Player Takes The Victory!`;
    window.location.href = "winner/winner.html";
};



