//Cliston Payne functions_Worksheet 3/24/14

//Calculate the Circumference of a Circle
var radius = 15;// this is the radius of my circle
var pie = 3.14; // this is the value of pie
var times = 2; // multiplied by to get circumference
var circumference = calcCircumference(times, pie, radius); // variable that stores the value of the circumference
console.log("The Circumference of the circle is " + circumference)// displays the answer to the circumference by using ghe console log
function calcCircumference(times, pie, radius)// creates a function that will run the calculation
{
	return times *pie *radius; //saves the value of the circumference
}

//Stung!
var victimsWght = 190;// the victims wieght in pounds
var stingsPerPound = 8.666666667;// the number of stings it takes per pound to kill somthing
var stingsToKill = calcStingsPerPound(stingsPerPound, victimsWght); // var to calculate stings to kill our victim
console.log("It takes " + stingsToKill  + "Bee stings to kill this animal.")// displays the stings to kill our victim in the console
function calcStingsPerPound(stingsPerPound, victimsWght)//function that will repeatidly calculate our variables
{
	return stingsPerPound * victimsWght;// saves the variable calculated for later 
} 