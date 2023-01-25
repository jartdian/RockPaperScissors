function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)
    return rand === 0 ? 'rock' : rand === 1 ? 'paper' : 'scissors'
}

// playerSelection = prompt('Rock, Paper or Scissors?\n').toLowerCase()

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

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));