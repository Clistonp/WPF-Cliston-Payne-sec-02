//Cliston Payne Functions_Personal 3/25/14

//Diapers!
var alphaExp = /^[0-99999]/;
var diapersPerDay = prompt("How many Diapers do you use a day?");
if (diapersPerDay==null || diapersPerDay==" ")
{
	alert("Please enter the number of diapers you use a day!");
	location.reload(true);
}
else if (!diapersPerDay.matches(alphaExp)){

}