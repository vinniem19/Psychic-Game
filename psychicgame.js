 
 
  // set up variables

var computerLetter=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var guessedAlready = [];
var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
var wins = 0;
var losses = 0;
var gLeft = 9

 
 
 //This is the area for variable references to html doc
 var myDirections = document.getElementById("my-directions");
 var playerWins = document.getElementById("player-wins");
 var lossesText = document.getElementById("losses-text");
 var gLeft = document.getElementById("guesses-left");
 var userText = document.getElementById("userGuess");
 
 
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
    
 var lettersGuessed = document.getElementById("lettersGuessed");
 lettersGuessed.innerHTML += event.key;
//guessedAlready.push(userText);
//console.log(guessedAlready);

// Conditional if loop when userGuess is wrong

/*if (lettersGuessed !== computerGuess) {
    for (let i = 0; i < alreadyGuessed.length; i++) {
        gLeft--;
        alert("Wrong letter! Try again!");
    }
}
*/
}


/*
function correct() {
    if (lettersGuessed === computerGuess) {
        console.log("That's correct!");
    };
}
correct();
*/

    
    /*for (i = 1; i < 9 ; i++){
    var userText =+ userText;
    
    }*/

//I would like to send this info to the already guessed variable  

/*function checkGuess() {
    let userGuess = getElementById("userGuess").value;
    if (gLeft === 9) {
      getElementById("lettersGuessed").textContent = 'Previous guesses: ';
     
      getElementById("lettersGuessed").textContent += userGuess + ' ';
    }
}
checkGuess();
*/
   /* let userGuess = getElementById(userGuess.value);
    if (gLeft === 9) {
      guesses.textContent = 'Previous guesses: ';
     
    guesses.textContent += userGuess + ' ';
*/

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
    // and can I put a function gameReset(); here?
}
 */   
    // display stats to the html document (would this display stats and update?)
    // document.getElementById("player-wins").innerHTML = "Wins: " + wins;
    // document.getElementById("losses-text").innerHTML = "losses: " + losses;
    // document.getElementById("guesses-left").innerHTML = "guesses-left" + gLeft;
    
    

//End of my onkeyup function






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