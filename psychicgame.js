 
 
 // set up variables

var computerLetter=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var wins = 0;
var losses = 0;
var gLeft = 9
var lettersGuessed = [];
 
 
 //This is the area for variable references to html doc
 var myDirections = document.getElementById("my-directions");
 var playerWins = document.getElementById("player-wins");
 var lossesText = document.getElementById("losses-text");
 var gLeft = document.getElementById("guesses-left" + gLeft);
 var userText = document.getElementById("already-guessed");
 
console.log(myDirections);
console.log(playerWins);

//Functions during play
//gameReset
//--wouldn't we just add the document.onkeyup function again?
// -document.onkeyup();
// -userTextLetter = "";


 
// when a key is pressed
document.onkeyup = function(event) {
    var userText = event.key;


//I would like to send this info to the already guessed variable   


//  or do we get send it this way
//  userText.textContent += userTextLetter + ' ';

 //This computes the correct letter
 var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
 console.log(computerGuess);
 

//comparing the guesses
if (userText === computerGuess) {
    document.write("You Guessed it!!");
    wins++;
    gLeft=9;
    lettersGuessed = [];
//    can I put a  function gameReset(); here?
}  else {
    alert("Wrong guess.  Try again.");
    gLeft--;
}
// if turns taken are used up
if (gleft === 0) {
    losses++;
    lettersGuessed = [];
    gLeft = 9;

    // here we try to prevent the player from selecting a letter twice
    if (lettersGuessed.indexOf(userText) >= 0) {

        //and display the wrong guess to the screen
    } else {
        lettersGuessed.push(userText);
        document.getElementById("already-guessed").innerHTML = lettersGuessed;
    }
    // and can I put a function gameReset(); here?
}
//End of my onkeyup function
}

document.onkeyup();





/* Functions
function resetgLeft (){
     var gLeft=9;
} */

// function gameReset(){
    // }
 
    // if (res === correctLetter) {
    //     wins++;
    //     } else {
    //       gLeft--;
    //      };