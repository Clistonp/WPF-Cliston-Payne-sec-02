// Cliston Payne Conditionals_Personal 3/20/14 

//Conditionals_Personal
//Is it time for an oil change?

var milesSinceLastOilChange = (prompt("How many miles has it been since your last oil change?"));
var whatKindOfOilDoYouUse = (prompt("Do you use premium or regular oil in your car?"));
var premium = 5000;
var regular = 3000;
 
if ((premium = whatKindOfOilDoYouUse && milesSinceLastOilChange >= premium) || (regular = whatKindOfOilDoYouUse && milesSinceLastOilChange >= regular)){
	console.log("You need an oil change!");
}else{
	console.log("You have a few more miles to go!");
}



