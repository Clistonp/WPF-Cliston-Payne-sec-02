// Cliston Payne Conditionals Wacky 3/20/14

//Conditionals Wacky
//Ounces of Mountain Dew per Day

var ouncesPerBottle = (prompt("How many ounces are in 1 container of Dew you drink?")) // this is the prompt that ask how many ouncesof dew are in your preferred container, IE bottles or cans 
var drinksPerDay = (prompt("how many containers of dew do you drink a day?"))// how many of these containers do you drink a day 
var ouncesPerDay = ouncesPerBottle * drinksPerDay; // calculates the ounces you drink of Mountain dew  day 

if (ouncesPerDay >= 15 && ouncesPerDay <= 24){// if statement that displays a console log if you drink between 15 and 24oz's of beverage
	console.log("Gotta Keep the Energy up.");
}
else if ((ouncesPerDay >= 25 && ouncesPerDay <= 48) || ( ouncesPerDay >= 96 && ouncesPerDay <= 120)){
	console.log("Your getting there or you may have had just a little bit too much!");// else if statement that calculates displays if you drink between 25 and 48 oz's and 96 and 120 
}
else{
	console.log("Now thats just the right amount of Dew for you!");
}
