//Cliston Payne Conditionals_WorkSheet Sec 02   03/17/14

//Stuff your Face 1
//Are you heavy enough?
var compsWeight = 435; // gives the competitors weight to determine if he is able to enter in the contest

if(compsWeight >= 250){
	//if statement that tells us how much the competitor must weigh to quilify for the contest
	console.log("You are able to enter the Pie eating contest");

}else{
	//else statement that displays a text if the competitor is not heavy enough what he will be told
	console.log("You are to small go to the little girls Pie easting contest");

}


//Group 1 Expressions with Conditionals
//Last Chance for Gas!
var gasEffic = 16; //The cars gas efficiency in mpg
var fuelLeft = .5; //how much fuel is left in the car in percent
var carFuelCapacity = 30; //how many gallons of fuel the car can hold at max capacity 
var milesToNextFuel = 200; //This is the miles left to travel till next fuel station

if(carFuelCapacity * fuelLeft * gasEffic > milesToNextFuel){
	//if statement that tells us if we have enough fuel to make it to the next fill Station
	console.log("Continue on wise traveler!");
}else{
	//Else statement that warns us if we need to stop now and get fuel or sleep with the Vultures tonight
	console.log("Stop now or Sleep in the dessert tonight!");
}

//Group 2 Multiple Results
//Check the login

var userName = "Sanza";
var passWord = "radio";

if(userName + passWord != userName + passWord);
	console.log("Welcome");
