//Cliston Payne Functions_Industry 3/26/14

//Functions_Industry
//Sleeping Bag

var outsideTemp = prompt("How cold is it outside?");// ask the user for the temperature outside
while (outsideTemp=="")// while statement that checks to make sure the user enters and outside temperature
{
	alert("Please enter the temperature outside!");// alert that displays if the user does not enter a temperature
	outsideTemp = prompt("How cold is it outside?")//runs the prompt again for the user to enter more information
}

var bag = calcBagToUse(outsideTemp);//var for the bag to use by the MArine
var bagToUse; // var to store the bag for the Marine to use 
console.log("Marine Equiped "+ bag + " sleeping bag.")// displays the bag that the marine should use based on the temperature outside
function calcBagToUse(oT)// function thatruns the if, else if, and else statments based on what the user placed in the prompts box
{
if (oT <= 40){// if statement that checks to see if it is below 40 degrees
	console.log("I hope you packed your green Sleeping Bag!");//console that displays if the temperature matches below 40 degrees
	bagToUse = ("green");// the bag that will be used if the temperature is below 40 degrees
}else if (oT >= 41 && oT <= 70){// else if that checks if the temperature is above for but below 70 degrees
	console.log("Its still chilly outside go grab your black sleeping bag!");// console.log that displays if the temperature matches the else if statement 
	bagToUse = ("black");// the bag that will be used if the temperature is above 41 and below 70 degrees
}else{// else statement that runs if the temperature is above 70 degrees
	console.log("Sleep under the stars Marine!");// console that runs if the temperature is above 70 degrees
	bagToUse = ("no");// the bag that will be used if the temperature is above 70 degrees which will be no bag
}
return bagToUse;// stores the bag to use from the else if statement sand returns it to the bag variable above
}