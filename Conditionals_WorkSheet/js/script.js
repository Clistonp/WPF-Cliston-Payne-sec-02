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

var userName = (prompt("Please enter your Username."));//Variable that gives a prompt asking for the users name
var passWord = (prompt("please enter your password."));//Variable that gives a prompt asking for the users password
var myName = "Sanza"// variable that tells the computer what the users name is 
var myPassword = "radio"//variable that tells the computer what the users password is 
if(userName === myName ){  
}else{
	console.log("Invalid Username please try again.")// if statement saying that if the usrr name is not the same as my name to go ahead and display the else statement 
}
if(passWord === myPassword){

}else{
	console.log("Invalid Password please try again.")//if statement that ask if the users password is the same as my password and if not runs a else statement to let the user know they have the wrong password
}
if(userName + passWord === myName + myPassword){
	console.log("Welcome," + myName + "!")  // if statement that checks to see if the username and password are the same as the myNAme and myPassword if they are it runs the console to say welcome to the user
}



