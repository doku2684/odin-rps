let moves = ['Rock', 'Paper', 'Scissors'];
let winAgainst = {
    'Rock': 'Paper',
    'Paper': 'Scissors',
    'Scissors': 'Rock',
};

function getComputerChoice() {
    return moves[Math.floor(Math.random()*moves.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (winAgainst[playerSelection]==computerSelection) {
        return "You Lose! " + computerSelection + " beats " + playerSelection
    } 
    else if (playerSelection == computerSelection) {
        return "Tied! " + computerSelection + " ties against " + playerSelection
    }
    else {
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
}
