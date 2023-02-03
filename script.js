const restartButton = document.querySelector(".restartGame");
const buttons = [...document.querySelectorAll("#choiceBtn")];
const roundResult = document.querySelector(".roundResult");
const finalResult = document.querySelector(".finalResult");
const roundsInput = document.querySelector(".rounds");

buttons.forEach((button) => button.addEventListener("click", playRound));

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  return rand === 0 ? "rock" : rand === 1 ? "paper" : "scissors";
}

restartButton.addEventListener("click", restartGame);

function restartGame() {
  roundResult.textContent = "";
  finalResult.textContent = "";
  score = { win: 0, lose: 0 };
  round = 0;
  roundsInput.valueAsNumber = 0;
	roundsInput.disabled = false
}

function result() {
  if (score.win > score.lose) {
    finalResult.textContent = `Congratulations You Win \n \t ${score.win}-${score.lose}`;
  }
  if (score.win < score.lose) {
    finalResult.textContent = `Unfortunately You Lost \n \t ${score.win}-${score.lose}`;
  } else {
    finalResult.textContent = `It's a Draw! \n ${score.win}-${score.lose}`;
  }
}

let round = 0;
let score = { win: 0, lose: 0 };

function playRound(e) {
  roundResult.textContent = "";
  let rounds = roundsInput.valueAsNumber;
	roundsInput.disabled = true
  let playerSelection = e.target.className;
  let computerSelection = getComputerChoice();
  if (rounds === round ) {
    result();
  } else {
    if (playerSelection == "rock" && computerSelection == "rock") {
      roundResult.textContent = `Draw! Rock vs Rock`;
      score.win += 1;
      score.lose += 1;
      ++round;
      console.log(score, round, rounds);
      return `Draw! rock vs rock`;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
      roundResult.textContent = `Draw! Paper vs Paper`;
      score.win += 1;
      score.lose += 1;
      ++round;
      console.log(score, round, rounds);
      return `Draw! paper vs paper`;
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "scissors"
    ) {
      score.win += 1;
      score.lose += 1;
      ++round;
      console.log(score, round, rounds);
      roundResult.textContent = `Draw! Scissors vs Scissors`;
      return `Draw! scissors vs scissors`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      score.lose += 1;
      ++round;
      console.log(score, round, rounds);
      roundResult.textContent = `You Lose! Paper beats Rock`;
      return `You Lose! Paper beats Rock`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      score.win += 1;
      ++round;
      console.log(score, round, rounds);
      roundResult.textContent = `You Win! Rock beats Scissors`;
      return `You Win! Rock beats Scissors`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      score.win += 1;
      ++round;
      console.log(score, round, rounds);
      roundResult.textContent = `You Win! Paper beats Rock`;
      return `You Win! Paper beats Rock`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      score.lose += 1;
      ++round;
      console.log(score, round, rounds);
      roundResult.textContent = `You Lose! Scissors beat Paper`;
      return `You Lose! Scissors beat Paper`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      score.lose += 1;
      ++round;
      console.log(score, round, rounds);
      roundResult.textContent = `You Lose! Scissors beat Rock`;
      return `You Lose! Scissors beat Rock`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      score.win += 1;
      ++round;
      console.log(score, round, rounds);
      roundResult.textContent = `You Win! Scissors beat Paper`;
      return `You Win! Scissors beat Paper`;
    }
  }
}
