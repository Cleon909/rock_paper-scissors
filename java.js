//JavaScrpit for Rock Paper Scissors to be played, for now in console//

//this function creates computer output//
let compOut;
let result;

function computerPlay () {
    let ranNum = (Math.random() * 3)+1;
    ranNum = Math.floor(ranNum);

    if (ranNum === 1) 
    {
        compOut = "rock";
    }
    
    else if (ranNum === 2) 
        {
        compOut = "paper";
        }

    else 
        {
        compOut = "scissors";
        }  
return compOut;    
}

//this function plays one round//

function playRound () {

computerPlay()

let playIn = prompt("Enter Rock, Paper, or Scissors.")
playIn = playIn.toLowerCase();
if ((playIn == "rock") && (compOut == "paper")) {result = "You lose! Paper beats rock"; console.log (result);}
else if ((playIn == "rock") && (compOut == "scissors")) {result = "You win! Rock beats Scissors"; console.log (result);}

else if ((playIn == "paper") && (compOut == "rock")) {result = "You win! Paper beats rock"; console.log (result);}
else if ((playIn == "paper") && (compOut == "scissors")) {result = "You lose! Scissors beats paper";console.log (result);}

else if ((playIn == "scissors") && (compOut == "rock")) {result = "You lose! Rock beats scissors";console.log (result);}
else if ((playIn == "scissors") && (compOut == "paper")) {result =  "You win! Scissors beats paper"; console.log (result);}

else if (playIn == compOut) {result = "Draw!"; console.log (result);}
return result;
}


//this function plays 5 rounds logs the scores and declares a winner in the end//

function game() {
    let score = 0;
playRound();
    if (result.indexOf("win")>1) {score = score +1;}
    else if (result.indexOf ("lose")>1) {score = score -1}
    console.log (score)
playRound();
    if (result.indexOf("win")>1) {score = score +1;}
    else if (result.indexOf ("lose")>1) {score = score -1}
    console.log (score)
playRound();
    if (result.indexOf("win")>1) {score = score +1;}
    else if (result.indexOf ("lose")>1) {score = score -1}
    console.log (score)
playRound();
    if (result.indexOf("win")>1) {score = score +1;}
    else if (result.indexOf ("lose")>1) {score = score -1}
    console.log (score)
playRound();
    if (result.indexOf("win")>1) {score = score +1;}
    else if (result.indexOf ("lose")>1) {score = score -1}
    console.log (score)
if (score > 0) {console.log ("You won!")}
    else if (score == 0) {console.log ("It's a draw!")}
    else {console.log("You Lose!")}
}





    
