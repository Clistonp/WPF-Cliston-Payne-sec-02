// Cliston Payne Conditionals_Personal 3/20/14 

//Conditionals_Personal
//Is it time for an oil change?

var milesSinceLastOilChange = (prompt("How many miles has it been since your last oil change?")); // This represents how many miles you have traveled in between oil changes.
var whatKindOfOilDoYouUse = (prompt("Do you use premium or regular oil in your car?")); // this represents the kind of oil you use for simolicity i have chasen to only use 2 differant kinds regular and premium
var premium = 5000; // this is the milage you can go saftley on premium
var regular = 3000; // this represents the value you can travel saftley on regular oil
if (milesSinceLastOilChange = "");{
	alert("Please enter your milage since your last oil change.");
}
if (whatKindOfOilDoYouUse = "");{
	alert("Please enter the kind of oil you use Premium or regular.");
}	
if ((premium = whatKindOfOilDoYouUse && milesSinceLastOilChange >= premium) || (regular = whatKindOfOilDoYouUse && milesSinceLastOilChange >= regular)){
	console.log("You need an oil change!"); // If statement that combines my variables and ask the computer to distinguish between premium and regular oil and the milage inbetween oil changes.
}else{
	console.log("You have a few more miles to go!");
}// else statement that lets the user know if they need and oil change or not 




