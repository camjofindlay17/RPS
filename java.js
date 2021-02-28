
let choices = ["rock", "paper", "scissors"];
let input = ["rock", "paper", "scissors"];
let user = ("Choose " + input);
let stat = {
    win:0,
    lose:0,
    tie:0
}

function comp(){
    let temp = Math.floor(Math.random() * 3);
    return (temp)
}

let playAgain = true

while (playAgain==true) {
    let input = window.prompt (user);
    cChoice=choices[comp()];

    let resultTie = "It's a tie";
    let resultWin = "It's a win";
    let resultLoss = "It's a loss";
    
    let result

    if (input===cChoice) {
        result = resultTie
        stat.tie++
    }  else if (input==="rock" && cChoice==="scissors" || input==="scissors" && cChoice==="paper" || input==="paper" && cChoice==="rock") {
        result = resultWin
        stat.win++
     }  else {
        result = resultLoss
        stat.lose++
    };


    window.confirm ("You chose: " + input + "\nComputer chose: " + cChoice + "\nResult: " + result)
    window.alert ("Your score is" + "\nWins: " + stat.win  + "\nLosses:" + stat.lose + 
    "\nTies: " + stat.tie)
    playAgain = window.confirm ("Do you want to play again?");
    console.log (playAgain)
    if (playAgain===null) {
        playAgain = false
    }
} 






