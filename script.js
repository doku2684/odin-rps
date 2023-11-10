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
    if (winAgainst[playerSelection]==computerSelection) {
        return 'computer'
    } 
    else if (playerSelection == computerSelection) {
        return 'tie'
    }
    else {
        return 'player'
    }
}

function game(rounds=5) {
    score = {'player': 0, 'computer': 0};
    for (i = 0; i < rounds; i++) {
        playerSelection = prompt("Please input Rock, Paper, or Scissors: ")
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        while (!moves.includes(playerSelection)){
            playerSelection = prompt("Input must be either Rock, Paper, or Scissors (case insensitive)")
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        }
        computerSelection = getComputerChoice()

        result = playRound(playerSelection, computerSelection)
        switch (result) {
            case ('player'):
                console.log("You Win! " + playerSelection + " beats " + computerSelection)
                score['player'] += 1
                break
            case ('tie'):
                console.log("Tied! " + computerSelection + " ties against " + playerSelection)
                break
            case ('computer'):
                console.log("You Lose! " + computerSelection + " beats " + playerSelection)
                score['computer'] += 1
                break
        }
    }

    if (score['player'] > score['computer']) {
        console.log("Congratulations! You won " + score['player'] + " to " + score['computer'])
    } 
    else if (score['player'] < score['computer']) {
        console.log("Sorry! You lost " + score['player'] + " to " + score['computer'])
    }
    else {
        console.log("You tied " + score['player'] + " to " + score['computer'])
    }
}

game()