//Cliston Payne Functions_Industry 3/26/14

//Functions_Industry
//Sleeping Bag

var outsideTemp = prompt("How cold is it outside?");
while (outsideTemp==""){
	alert("Please enter the temperature outside!");
	outsideTemp = prompt("How cold is it outside?")
}
if (outsideTemp >= 0 && outsideTemp <= 40){
	console.log("I hope you packed your green Sleeping Bag!");
}else if (outsideTemp >= 41 && outsideTemp <= 70){
	console.log("Its still chilly outside go grab your black sleeping bag!")

}else{
	console.log("Sleep under the stars Marine!")
}
console.log()
function calcSleepBagUse()