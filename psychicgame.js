 
 
 //This is the area for variable references to html doc
 var myDirections = document.getElementById("my-directions");
 var playerWins = document.getElementById("player-wins");
 var lossesText = document.getElementById("losses-text");
 var guessesLeft = document.getElementById("guesses-left");
 var alreadyGuessed = document.getElementById("already-guessed");

 // set up variables

var computerLetter=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var wins=0;
var losses=0;
var gLeft=10
var yourGuess=[];

// when a key is pressed
// document.onkeyup = function(event) {

//Let's listen for the key pressed
// var yourGuess=event.key;

//to lowercase the letter
// var res=yourGuess.toLowerCase();

//Array that is the correctLetter
// var correctLetter=computerLetter[Math.floor(Math.random() * computerLetter.length)];

// Functions
function resetgLeft (){
     var gLeft=10;
}

// function gameReset(){
    
// }

function startGame () {
   document.write.myDirections(["Directions: Guess what letter I am thinking of:"]);
   document.write.playerWins(["Wins: " + wins]);
   document.write.lossesText(["Losses: " + losses]);
   document.write.gLeft(["Guesses left:" + gLeft]);
   document.write.alreadyGuessed(["Already Guessed"]);
}
console.log(startGame);
function gameRun(){
    
    document.onkeyup = function(event) {
        var yourGuess=event.key;
        var res=yourGuess.toLowerCase();
        var correctLetter=computerLetter[Math.floor(Math.random() * computerLetter.length)];
    if (yourGuess === correctLetter) {
        wins++;
        resetgLeft;
         } else {
          losses++;
          gLeft--;
         };
    };
};
startGame;
gameRun;
