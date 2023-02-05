const restartButton = document.querySelector(".restartGameButton");
const buttons = [...document.querySelectorAll("#choiceBtn")];
const roundResult = document.querySelector(".roundResult");
const finalResult = document.querySelector(".finalResult");
const roundsInput = document.querySelector(".rounds");
const playerChoiceText = document.querySelector(".playerChoiceText");
const computerChoiceText = document.querySelector(".computerChoiceText");
const playerEmoji = document.querySelector('.playerEmoji')

let round = 0;
let score = { win: 0, lose: 0 };

buttons.forEach((button) => button.addEventListener("click", playRound));
restartButton.addEventListener("click", restartGame);

function getRandomUnhappyEmoji() {
  let randEmoji = Math.floor(Math.random() * 3);
  return randEmoji === 0 ? "😒" : randEmoji === 1 ? "😔" : "😭";
}

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  return rand === 0 ? "Rock" : rand === 1 ? "Paper" : "Scissors";
}

function versus(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    roundResult.textContent = `Draw! ${playerSelection} vs ${computerSelection}`;
    score.win += 1;
    score.lose += 1;
    return;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    score.lose += 1;
    roundResult.textContent = `You lose this round, ${computerSelection} beats ${playerSelection}`;
    return;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    score.win += 1;
    roundResult.textContent = `You win this round, ${playerSelection} beats ${computerSelection}`;
    return;
  }
}

function restartGame() {
  roundResult.textContent = "";
  finalResult.textContent = "";
  playerChoiceText.textContent = "";
  computerChoiceText.textContent = "";
  playerEmoji.textContent = "🙂";
  finalResult.classList.remove("winnerText");
  finalResult.classList.remove("loserText");

  score = { win: 0, lose: 0 };
  round = 0;
  roundsInput.disabled = false;
  buttons.forEach((button) => (button.disabled = false));
}

function result() {
  if (score.win > score.lose) {
    finalResult.classList.add("winnerText");
    finalResult.textContent = `Congratulations You Won 🥳 
    ${score.win}-${score.lose}`;
  }
  if (score.win < score.lose) {
    finalResult.classList.add("loserText");
    finalResult.textContent = `Unfortunately You Lost 🥺 
    ${score.win}-${score.lose}`;
    playerEmoji.textContent = getRandomUnhappyEmoji()
  } else if (score.win === score.lose) {
    finalResult.textContent = `It's a Draw! \n ${score.win}-${score.lose}`;
  }
}

function playRound(e) {
  roundResult.textContent = "";
  let rounds = roundsInput.valueAsNumber;
  roundsInput.disabled = true;
  let playerSelection =
    e.target.className[0].toUpperCase() + e.target.className.slice(1);
  let computerSelection = getComputerChoice();
  playerChoiceText.textContent = playerSelection;
  computerChoiceText.textContent = computerSelection;
  round++;
  
  if (round === rounds) {
    versus(playerSelection, computerSelection);
    buttons.forEach((button) => (button.disabled = true));
    return result();
  }
  return versus(playerSelection, computerSelection);
}

// TODO: Create a header for Current Score
// Add media queries