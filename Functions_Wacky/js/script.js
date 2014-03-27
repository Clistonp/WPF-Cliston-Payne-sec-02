//Cliston Payne Functionals_Wacky 3/26/14 

//Functionals_Wacky
//Jelly Beans!
alert("Thank you for stepping up to our game, theres only one rule grab a handful of jelly beans and count them out.")//playful alert to to the player to get ready to give a number
var jellyGrab = prompt("How many Jelly Beans did you grab?"); // variable that carries a prompt for the player to tell us how many jelly beans they grabbed
while (jellyGrab==""){// while statement that checks to see if the player enters a number 
	alert("Please enter the amount of Jelly Beans you grabbed!");//lets the player know to enter a number 
	jellyGrab = prompt("How many Jelly Beans did you grab?");// replays prompt for the player to enter the number of jelly beans they grabbed
		}

var calcJellyInHand = function(jG){// anonymous function that stores the players numner of jelly beans 

hand = (jellyGrab >= 30) ? ("Great Job grab a prize off the top Shelf") : ("OH, to bad try again when you become a man!");// ternary that acts as an if, else statemnet to give whether the player won a prize or needs to grow bigger hands 
	return hand;// stores the message to send back to the player to the console

}
var hand;// stores the message to play back to the player
var jellyDunk = calcJellyInHand(jellyGrab);// stores the function for later use 
console.log(hand);// displays the players final message from playing the game

