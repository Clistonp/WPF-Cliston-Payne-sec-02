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
var victimsWght = 190;
var stingsPerPound = 8.666666667;
var stingsToKill = calcStingsPerPound(stingsPerPound, victimsWght);
console.log("It takes " + stingsToKill  + "Bee stings to kill this animal.")
function calcStingsPerPound(stingsPerPound, victimsWght)
{
	return stingsPerPound * victimsWght;
} 