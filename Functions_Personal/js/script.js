//Cliston Payne Functions_Personal 3/25/14

//Diapers!
var alphaExp = /^[0-9]+$/;
var diapersPerDay = (prompt("How many Diapers do you use a day?", ""));
var daysInAWeek = (prompt("How many days are in a week?"));
var diapersPerPack = (prompt("how many diapers are in one container you purchase?"))
if (diapersPerDay==null || diapersPerDay==" ")
{
	alert("Please enter the number of diapers you use a day!");
	location.reload(true);
}	

