//Cliston Payne Functions_Industry 3/26/14

//Functions_Industry
//Sleeping Bag

var outsideTemp = prompt("How cold is it outside?");
while (outsideTemp==""){
	alert("Please enter the temperature outside!");
	outsideTemp = prompt("How cold is it outside?")
}

var bag = calcBagToUse(outsideTemp);
var bagToUse;
console.log("Marine Equiped "+ bag + " sleeping bag.")
function calcBagToUse(oT){
if (oT <= 40){
	console.log("I hope you packed your green Sleeping Bag!");
	bagToUse = ("green");
}else if (oT >= 41 && oT <= 70){
	console.log("Its still chilly outside go grab your black sleeping bag!");
	bagToUse = ("black");
}else{
	console.log("Sleep under the stars Marine!");
	bagToUse = ("no");
}
return bagToUse;
}