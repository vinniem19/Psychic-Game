 
 
 // set up variables

var computerLetter=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
var wins = 0;
var losses = 0;
var gLeft = 9
var lettersGuessed = [];
 
 
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

    /*for (i = 1; i < 9 ; i++){
    var userText =+ userText;
    lettersGuessed.push(userText);
    }*/
    
//I would like to send this info to the already guessed variable   


//  or do we get send it this way
//  userText.textContent += userTextLetter + ' ';

 //This computes the correct letter
 
 console.log(computerGuess);
 

//comparing the guesses
if (userText === computerGuess) {
    document.write("You Guessed it!!");
    wins++;
    gLeft=9;
    
//    can I put a  function gameReset(); here?
}  else {
    alert("Wrong guess.  Try again.");
    gLeft--;
    push
}
// if turns taken are used up
if (gleft === 0) {
    losses++;
    
    gLeft = 9;
}
    // here we try to prevent the player from selecting a letter twice
    

        //and display the wrong guess to the screen
    
    

    // display stats to the html document
    document.getElementById("player-wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "losses: " + losses;
    document.getElementById("guesses-left").innerHTML = "guesses-left" + gLeft;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;





    // and can I put a function gameReset(); here?

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