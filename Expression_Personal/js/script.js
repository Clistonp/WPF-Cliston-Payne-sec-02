//Cliston Payne 03/13/14 Expressions_Personal sec 02

//Budget for dog food for one year 
var bagsOfDogFoodPerWeek = // 1; //Place the value of how many bags of dog food you purchase perweeek
var weeksInAYear = //52; // place the number of weeks per year or any value of weeks you want to budget for.
var costPerBagOfFood = //35.96; // places the value of dog food perbag.
var totalCostBudgeted = weeksInAYear * costPerBagOfFood * bagsOfDogFoodPerWeek; // formula for generating your cost of dog food for your givin time

//console.log(totalCostBudgeted) //Displays total Cost of food in the console of your browser // Disabled console.log for the prompt menu to budget your own values

 var bagsOfDogFoodPerWeek = prompt("How many bags of dog food do you go through weekly?");
 var weeksInAYear = prompt("How many weeks are in a year?");
var costPerBagOfFood = prompt("How much is one bag of dog food?");
alert (totalCostBudgeted)