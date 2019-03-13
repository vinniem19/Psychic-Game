 
 
  // set up variables

var computerLetter=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var guessedAlready = [];
var wins = 0;
var losses = 0;
var gLeft = 9

//This computes the correct letter



 
 
 //This is the area for variable references to html doc
 var myDirections = document.getElementById("my-directions");
 var playerWins = document.getElementById("player-wins");
 var lossesText = document.getElementById("losses-text");
 var guessesLeft = document.getElementById("guesses-left");
 var userText = document.getElementById("userGuess");
 
 



//Functions during play
//gameReset
//--wouldn't we just add the document.onkeyup function again?
// -document.onkeyup();
// -userTextLetter = "";

//Here I am sending the correct letter to the console for my use.

 
// when a key is pressed
document.onkeyup = function(event) {
    userText.textContent = event.key;
    var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
    
    // pass the keyed letter to the display
 var lettersGuessed = document.getElementById("lettersGuessed");
 lettersGuessed.innerHTML += event.key + ", ";
 
 // Make a variaboe for the user's guess
var userGuess = event.key;
guessedAlready.push(userGuess);


// Conditional if loop when guesses are used up
if (gLeft === 0) {
    alert("You lose!  Game over!");
    resetStatsLose();
    
//  when guessedAlready (userGuess) is wrong
}  else if (guessedAlready.indexOf(computerGuess) === -1) {
  alert("Wrong letter. Try again!");
  guessesLeft.innerHTML = " " + gLeft;
  gLeft--;
  
  // The other portion of loop when user guesses correctly.
  }    else  {
    alert("Correct! You win.  Game Over.");
    resetStatsWin();
    
  }

 //End of my onkeyup function 
  }

  // functions declared here

 function resetStatsWin() {
    gLeft = 9;
    guessesLeft.innerHTML = " " + gLeft;
    wins++;
    playerWins.innerHTML = " " + wins;
    myDirections.innerHTML = "You now have a new letter to guess";
    
    } 
    
    function resetStatsLose() {
        gLeft = 9;
    guessesLeft.innerHTML = " " + gLeft;
    losses++;
    lossesText.innerHTML = " " + losses;
    myDirections.innerHTML = "You now have a new letter to guess";
    

    }

      

/*if (lettersGuessed !== computerGuess) {
    for (let i = 0; i < alreadyGuessed.length; i++) {
        gLeft--;
        alert("Wrong letter! Try again!");
    }
}
*/



/*
function correct() {
    
    };
}
correct();
*/

    
    /*for (i = 1; i < 9 ; i++){
    
    
    }*/

//I would like to send this info to the already guessed variable  

/*function checkGuess() {
    
    }
}
checkGuess();
*/
   



 
 
 
 




   
//    can I put a  function gameReset(); here?

/*
}  else {
    alert("Wrong guess.  Try again.");
    gLeft--;
}
*/
// if turns taken are used up

/*if (gleft === 0) {
    losses++;
    gLeft = 9;
    // and can I put a function gameReset(); here?
}
 */   
    // display stats to the html document (would this display stats and update?)
    // document.getElementById("player-wins").innerHTML = "Wins: " + wins;
    // document.getElementById("losses-text").innerHTML = "losses: " + losses;
    // document.getElementById("guesses-left").innerHTML = "guesses-left" + gLeft;
    
    








// Functions

//This will reset guesses left var to 9

/*  function resetgLeft (){
     var gLeft=9;
} */

//This will reset the game 

/* function gameReset(){
     if (userText === correctLetter) {
         wins++;
         losses = 0;
         guessesLeft = 9;
         var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
         lettersGuessed = "";
         myDirections.textContent("You won. Press another letter to start again.");
          } else {
            guessesLeft--;
            lettersGuessed.textContent(userText);
          };
        }
*/
    // This function will end the game.

    