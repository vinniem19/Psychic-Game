 
 
 // set up variables

var computerLetter=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
var wins = 0;
var losses = 0;
var gLeft = 9
//var lettersGuessed = [];
 
 
 //This is the area for variable references to html doc
 var myDirections = document.getElementById("my-directions");
 var playerWins = document.getElementById("player-wins");
 var lossesText = document.getElementById("losses-text");
 var gLeft = document.getElementById("guesses-left");
 var userText = document.getElementById("userGuess");
 var lettersGuessed = document.getElementById("lettersGuessed");
 
console.log(myDirections);
console.log(playerWins);

//Functions during play
//gameReset
//--wouldn't we just add the document.onkeyup function again?
// -document.onkeyup();
// -userTextLetter = "";


 
// when a key is pressed
document.onkeyup = function(event) {
    userText.textContent = event.key;

// Array.prototype.push.apply(userText, lettersGuessed);

    
    /*for (i = 1; i < 9 ; i++){
    var userText =+ userText;
    
    }*/

//I would like to send this info to the already guessed variable   


//  or do we get send it this way
//  userText.textContent += userTextLetter + ' ';

 //This computes the correct letter
 
 console.log(computerGuess);
 

//comparing the guesses
/*if (userText === computerGuess) {
    document.write("You Guessed it!!");
    wins++;
    gLeft=9;
   
//    can I put a  function gameReset(); here?
}  else {
    alert("Wrong guess.  Try again.");
    gLeft--;
}
*/
// if turns taken are used up

/*if (gleft === 0) {
    losses++;
    
    gLeft = 9;
}
 */   
    // display stats to the html document (would this display stats and update?)
    // document.getElementById("player-wins").innerHTML = "Wins: " + wins;
    // document.getElementById("losses-text").innerHTML = "losses: " + losses;
    // document.getElementById("guesses-left").innerHTML = "guesses-left" + gLeft;
    
    // and can I put a function gameReset(); here?

//End of my onkeyup function
};





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

    // This function will end the game.

    */