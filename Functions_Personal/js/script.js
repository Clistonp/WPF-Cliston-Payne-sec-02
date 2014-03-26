//Cliston Payne Functions_Personal 3/25/14

//Diapers!


var diapersPerDay = prompt("How many Diapers do you use a day?");// varaiable that displays the prompt for diapers per day
while (diapersPerDay=="")//while statement that will repeat the alert until someone enters a number into the prompt
{
	alert("Please enter the number of diapers you use a day!");// alert for my while statement
	diapersPerDay = prompt("How many Diapers do you use a day?")//prompt that replays if there is nothing entered into the var dipersPerDay
}
var daysInAWeek = prompt("How many days are in a week?");// var that creates a prompt to collect the Days in a Week

while (daysInAWeek=="")// while statement that checks for a variable
{
	alert("please enter the days per week!");// alert that displays if no variable is placed in the previous prompt
	daysInAWeek = prompt("How many days are in a week?")// replays the prompt after the alert 
}
var diapersPerPack = prompt("How many diapers are in one container you purchase?");	//var that displays a prompt for diapers per pack you would purchase
while (diapersPerPack=="")// while statement that checks for a variable in diapersPerPAck
{
		alert("Please enter the number of diapers that come in a pack!");// alert that displays if there is no variable placed in the prompt box
		diapersPerPack = prompt("How many diapers are in one container you purchase?")// replayed prompt after the alert is confirmed
}	
var packs = calcPacksPerWeek(diapersPerDay, daysInAWeek, diapersPerPack);// var that stores the dPD, dIW, dPP to calculate the packs later
console.log("You must purchase " + packs + " packs of diapers a week.")// console.log that displays the message for the packs you would need to purchase per week of diapers
function calcPacksPerWeek(dPD, dIW, dPP)// function that stores the values of dPD, dIW, and dPP for use later on 
{
var totalPerWeek =  dPD * dIW;// var that calculates the total diapers used per Week
var packsPerWeek =  Math.ceil(totalPerWeek / dPP);// var the calculates the packs needed per week rounded up by math.ceil
		
	return packsPerWeek;// return that stores the calculation var packs per week and sends it back to the console
}