//Cliston Payne Functionals_Wacky 3/26/14 

//Functionals_Wacky
//Jelly Beans!
alert("Thank you for stepping up to our game, theres only one rule grab a handful of jelly beans and count them out.")
var jellyGrab = prompt("How many Jelly Beans did you grab?");
while (jellyGrab==""){
	alert("Please enter the amount of Jelly Beans you grabbed!");
	jellyGrab = prompt("How many Jelly Beans did you grab?");
		}

var calcJellyInHand = function(jellyGrab){

hand = (jellyGrab >= 30) ? "Great Job grab a prize off the top Shelf " : "OH, to bad try again when you become a man!";
	return hand;

}
var hand; 
var jellyDunk = calcJellyInHand();
console.log(hand);

