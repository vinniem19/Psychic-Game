 
 
  // set up variables

var computerLetter=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var guessedAlready = [];
var wins = 0;
var losses = 0;
var gLeft = 9

//This computes the correct letter



 
 
 //This is the area for variable references to html doc
 
 var playerWins = document.getElementById("player-wins");
 var lossesText = document.getElementById("losses-text");
 var guessesLeft = document.getElementById("guesses-left");
 var lettersGuessed = document.getElementById("lettersGuessed");
 var userGuess;
 var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
 console.log(computerGuess);
 
 
 
 
 //Functions during play
 //gameReset
 //--wouldn't we just add the document.onkeyup function again?
 // -document.onkeyup();
 // -userTextLetter = "";
 
 //Here I am sending the correct letter to the console for my use.
 function reset() {
     computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
     console.log(computerGuess);
     gLeft = 9;
     guessesLeft.textContent = gLeft;
     guessedAlready = [];
     lettersGuessed.textContent = guessedAlready;
     
    }
    
    // when a key is pressed
    document.addEventListener("keyup", function(event) {
        
            userguess = event.key.toLowerCase();
            guessedAlready.push(userguess);
            lettersGuessed.textContent = guessedAlready;
            gLeft--;
            guessesLeft.textContent = gLeft;
        //  when guessedAlready (userGuess) is wrong
            if (userguess === computerGuess) {
                wins++;
                playerWins.textContent = wins;
                alert("Correct! You win.");
                reset();
            }
        // Conditional if loop when guesses are used up
            else if (gLeft === -1) {
                alert("You lose!  Game over!");
                losses++;
                lossesText.textContent = losses;
                reset();
        } 
    })
  
  
  // The other portion of loop when user guesses correctly.
//   }    else  {
     
//     resetStatsWin();
    
//   }

//  //End of my onkeyup function 
//   });

//   // functions declared here

//  function resetStatsWin() {
//     gLeft = 9;
//     guessesLeft.innerHTML = " " + gLeft;
//     wins++;
//     playerWins.innerHTML = " " + wins;
//     //myDirections.innerHTML = "You now have a new letter to guess";
    
//     } 
    
//     function resetStatsLose() {
//         gLeft = 9;
//     guessesLeft.innerHTML = " " + gLeft;
//     losses++;
//     lossesText.innerHTML = " " + losses;
//     myDirections.innerHTML = "You now have a new letter to guess";
    

//     }

      

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

    