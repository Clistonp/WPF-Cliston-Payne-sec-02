//Cliston Payne Functions_Personal 3/25/14

//Diapers!


var diapersPerDay = prompt("How many Diapers do you use a day?");
while (diapersPerDay=="")
{
	alert("Please enter the number of diapers you use a day!");
	diapersPerDay = prompt("How many Diapers do you use a day?")
}
var daysInAWeek = prompt("How many days are in a week?");

while (daysInAWeek=="")
{
	alert("please enter the days per week!");
	daysInAWeek = prompt("How many days are in a week?")
}
var diapersPerPack = prompt("How many diapers are in one container you purchase?");	
while (diapersPerPack=="")
{
		alert("Please enter the number of diapers that come in a pack!");
		diapersPerPack = prompt("How many diapers are in one container you purchase?")
}	
var packs = calcPacksPerWeek(diapersPerDay, daysInAWeek, diapersPerPack);
console.log("You must purchase " + packs + " packs of diapers a week.")
function calcPacksPerWeek(dPD, dIW, dPP)
{
var totalPerWeek =  dPD * dIW;
var packsPerWeek =  Math.ceil(totalPerWeek / dPP);
		
	return packsPerWeek;
}