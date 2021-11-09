//JavaScrpit for Rock Paper Scissors to be played, for now in console//


let playIn;

const rock = document.querySelector('#rock');
rock.addEventListener ('click',() => {
    playIn ='rock';
    playRound()
})

const paper = document.querySelector('#paper');
paper.addEventListener ('click',() => {
    playIn = 'paper'; 
    playRound()
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener ('click',() => {
    playIn = 'scissors';
    playRound()
})

function endResult () {
    if (turns ==5) {
        if (score>1) {
            document.getElementById('footer').append ("You've Won")
        }
        else if (score = 0) {
            document.getElementById ('footer').append ("It's a draw!")
        }
        else {
            document.getElementById('footer').append ("You lose!")
        }
    }
}


//this function creates computer output//
let compOut;
let result;
let score = 0;
let turns = 0;

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

function displayCompOut (compOut) {
    if (compOut == "rock") {
        document.querySelector('#compOutImage').src='compRock.gif';
        document.querySelector('#compOutImage').style.cssText = 'height:150px; width:150px; margin:50px; border:black;border-radius:15px; border-radius:15px; border:solid; object-fit:cover; margin-bottom:-15px;';
    }   else if (compOut == "paper") {
                document.querySelector('#compOutImage').src='compPaper.gif';
                document.querySelector('#compOutImage').style.cssText = 'height:150px; width:150px; margin:50px; border-radius:15px; border:solid; object-fit:cover; margin-bottom:-15px;';
                
    }
       else if (compOut == "scissors") {
                document.querySelector('#compOutImage').src='compScissors.gif'
                document.querySelector('#compOutImage').style.cssText ='height:150px; width:150px; margin:50px; border-radius:15px; border:solid; object-fit:cover;  margin-bottom:-15px;';
    }
}

function displayPlayOut (playIn) {
    if (playIn == "rock") {
        document.querySelector('#playOutImage').src='compRock.gif';
        document.querySelector('#playOutImage').style.cssText ='height:150px; width:150px; margin:50px; border-radius:15px; border:solid; object-fit:cover;margin-bottom:-15px;'
    }   else if (playIn == "paper") {
                document.querySelector('#playOutImage').src='compPaper.gif';
                document.querySelector('#playOutImage').style.cssText ='height:150px; width:150px; margin:50px; border-radius:15px; border:solid; object-fit:cover;margin-bottom:-15px;';
    }
       else if (playIn == "scissors") {
                document.querySelector('#playOutImage').src='compScissors.gif';
                document.querySelector('#playOutImage').style.cssText ='height:150px; width:150px; margin:50px; border-radius:15px; border:solid; object-fit:cover;margin-bottom:-15px;';
    }
}



//this function plays one round//

function playRound () {


computerPlay()

displayCompOut(compOut)
displayPlayOut (playIn)

const imagewin = document.createElement ('img');
const imagelose = document.createElement ('img');
const imagedraw = document.createElement ('img');
imagewin.src = 'win.jpg';
imagelose.src = 'lose.jpeg'
imagedraw.src = 'draw.jpg'


if ((playIn == "rock") && (compOut == "paper")) {
        result = "You lose! Paper beats rock"; 
        document.getElementById('side').append(imagelose);
        document.getElementById('side').append (result)
        score = score -1; turns = turns +1;
        if (turns ==5) {
            if (score>1) {
                document.getElementById('footer').append ("You've Won")
            }
            else if (score = 0) {
                document.getElementById ('footer').append ("It's a draw!")
            }
            else {
                document.getElementById('footer').append ("You lose!")
            }
        }
}
else if ((playIn == "rock") && (compOut == "scissors")) {       result = "You win! Rock beats Scissors"; 
        document.getElementById('side').append(imagewin);
        document.getElementById('side').append (result)
        score = score +1; turns = turns +1;
        if (turns ==5) {
            if (score>1) {
                document.getElementById('footer').append ("You've Won")
            }
            else if (score = 0) {
                document.getElementById ('footer').append ("It's a draw!")
            }
            else {
                document.getElementById('footer').append ("You lose!")
            }
        }
}

else if ((playIn == "paper") && (compOut == "rock")) {
        result = "You win! Paper beats rock"; 
        document.getElementById('side').append(imagewin);
        document.getElementById('side').append (result);
        score = score +1; turns = turns +1;
        if (turns ==5) {
            if (score>1) {
                document.getElementById('footer').append ("You've Won")
            }
            else if (score = 0) {
                document.getElementById ('footer').append ("It's a draw!")
            }
            else {
                document.getElementById('footer').append ("You lose!")
            }
        }
}

else if ((playIn == "paper") && (compOut == "scissors")) {      result = "You lose! Scissors beats paper";
        document.getElementById('side').append (imagelose);
        document.getElementById('side').append (result);
        score = score -1; turns = turns +1;
        if (turns ==5) {
            if (score>1) {
                document.getElementById('footer').append ("You've Won")
            }
            else if (score = 0) {
                document.getElementById ('footer').append ("It's a draw!")
            }
            else {
                document.getElementById('footer').append ("You lose!")
            }
        }
}

else if ((playIn == "scissors") && (compOut == "rock")) {       result = "You lose! Rock beats scissors";
        document.getElementById('side').append(imagelose);
        document.getElementById('side').append(result);
        score = score -1; turns = turns +1;
        if (turns ==5) {
            if (score>1) {
                document.getElementById('footer').append ("You've Won")
            }
            else if (score = 0) {
                document.getElementById ('footer').append ("It's a draw!")
            }
            else {
                document.getElementById('footer').append ("You lose!")
            }
        }
}

else if ((playIn == "scissors") && (compOut == "paper")) {       result =  "You win! Scissors beats paper"; 
        document.getElementById('side').append (imagewin);
        document.getElementById('side').append(result);
        score = score +1; turns = turns +1;
        if (turns ==5) {
            if (score>1) {
                document.getElementById('footer').append ("You've Won")
            }
            else if (score = 0) {
                document.getElementById ('footer').append ("It's a draw!")
            }
            else {
                document.getElementById('footer').append ("You lose!")
            }
        }
    }

else if (playIn == compOut) {
        result = "Draw!"; document.getElementById('side').append(imagedraw);
        document.getElementById('side').append (result);
        turns = turns +1;
        if (turns ==5) {
            if (score>1) {
                document.getElementById('footer').append ("You've Won")
            }
            else if (score = 0) {
                document.getElementById ('footer').append ("It's a draw!")
            }
            else {
                document.getElementById('footer').append ("You lose!")
            }
        }
        return result;
}
console.log("score" + score);
console.log("turns" + turns);
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

endResult();



    
