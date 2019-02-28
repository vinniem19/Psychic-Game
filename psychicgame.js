 
 
 //This is the area for variable references to html doc
 var myDirections = document.getElementById("my-directions");
 var playerWins = document.getElementById("player-wins");
 var lossesText = document.getElementById("losses-text");
 var guessesLeft = document.getElementById("guesses-left");
 var alreadyGuessed = document.getElementById("already-guessed");

//  document.getElementById("my-directions").textContent = myDirections;


 //Display the letters guessed
 myDirections.textContent = "Directions: Guess what letter I am thinking of:";
 playerWins.textContent = "Wins: 0 " + wins;
 lossesText.textContent = "Losses: 0 " + losses;
 guessesLeft.textContent = "Guess left:" + guessesLeft;
 alreadyGuessed.textContent = "Already Guessed" + yourGuess;
 
  // set up variables

var computerLetter=["a","t","e","c","j","u","y","p","o","u"];
var wins=0;
var losses=0;
var guessesLeft=10;
var yourGuess="";

//set up on the html page
// COME BACK TO THIS
// var html=

// "<p>my-directions" Gess what letter I am thinking of:"</p>"
// "<p>player-wins" + wins + "</p>";
// "<p>losses-text" + losses + "</p>";
// "<p>guesses-left" + guessesLeft + "</p>""
// <p id="already-guessed"></p>

// document.querySelector("#game")


//to reset geesses left to 10  
function resetguessesLeft () {
    guessesLeft=10;
}
//Function for when a key is pressed
document.onkeyup = function(event) {



    //Let's listen for the key pressed
var yourGuess=event.key;

//to lowercase the letter
var res=yourGuess.toLowerCase();





//Array that is the correctLetter
var correctLetter=computerLetter[Math.floor(Math.random() * computerLetter.length)];

if ((yourGuess===correctLetter)){ 
    wins++;
    resetguessesLeft;
} else {
    losses++;
    guessesLeft--;
}

}

// Functions


function compare () {
    if (yourGuess===correctLetter){
        wins++;
        guessesLeft=reset;
    }
    compare;
}



