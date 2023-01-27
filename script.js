playerSelection = prompt('Rock, Paper or Scissors?\n').toLowerCase()

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)
    return rand === 0 ? 'rock' : rand === 1 ? 'paper' : 'scissors'
}

let computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return `Draw! rock vs rock`
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return `Draw! paper vs paper`
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return `Draw! scissors vs scissors`
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return `You Lose! Paper beats Rock`
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You Win! Rock beats Scissors`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You Win! Paper beats Rock`
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return `You Lose! Scissors beat Paper`
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return `You Lose! Scissors beat Rock`
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You Win! Scissors beat Paper`
    }

}


function game() {
    let score = {win: 0,lose: 0}
    for (let i = 0; i < 5; i++) {
        result = playRound(playerSelection,computerSelection);
        if (result.includes("Win")) {
            score.win +=1
        }
        else if(result.includes("Lose")) {
            score.lose +=1
        }
        else {
            score.lose +=1;
            score.win += 1;
        }
        computerSelection = getComputerChoice()
        console.log(result);
        console.log(score);
        playerSelection = prompt('Rock, Paper or Scissors?\n').toLowerCase()
    }
    console.log(`Final Score \n Human: ${score.win} vs Computer ${score.lose} \n`)
    console.log(score.win > score.lose ? "Congratulations You Win!!!" : "You Lose :-( Good luck next time");
    
}

game()