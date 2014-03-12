//Cliston Payne 03/11/14 Expressions Worksheet

//Dog Years
var dogYears = 7; // dogs age 7 years to 1 human year
var humanYears = 1; // the human year to a dogs 7 	
var sparkysAge = dogYears * humanYears; // 7 * 1 is the dog to human years

console.log(sparkysAge); // will calculate the age of sparky in dog years
//Sparky is 7 years old


//Slice of Pie part 1 
var numberOfSlicesPerPizza = 10; // number of slices per pizza
var peopleAtTheParty = 160; // number of people at the party
var pizzasOrdered = 35; // numnber of people at the party 

var slicesPerPerson = numberOfSlicesPerPizza * pizzasOrdered / peopleAtTheParty    // Formula used to calculate how many slices of pizza each person gets

console.log(slicesPerPerson); // displays the number of pizza slices each person gets through the console window in the browser
// each attendee will recieve 2.1875 peices of pizza

//Slice of Pie part 2 
var numberOfSlicesPerPizza = 10; // number of slices of pizza in each pizza
var peopleAtTheParty = 160; // numner of people at the party
var pizzasOrdered = 35; // number of pizzas ordered
var slicesPerPerson // number of pizzas each attendee recieves precisly 
var totalSlicesSparkyGets // total number of slices sparky recieves after his share is taken
var remainder // this is the value of the extra cut off of the pizza to give to sparky

var slicesPerPerson = numberOfSlicesPerPizza * pizzasOrdered / peopleAtTheParty // this is the equation is used to find the number of slices each person gets precisly
var remainder = slicesPerPerson % 2 // this is the formula used to recieve the remainder which is Sparkys percent of the pizza
var totalSlicesSparkyGets = remainder * peopleAtTheParty //the percent sparky gets multiplied by the number of people at the party which gives the total pieces as a whole sparky will recieve
console.log(totalSlicesSparkyGets); // will display the number of peices sparky will recieve
// Sparky will recieve 30 pieces of pizza after the attendees divide it up


//Average Shopping Bill
var grocerySpending = [453, 367, 489, 264, 529] //array telling us the total cost of each shopping trip for the past 5 weeks 
var totalSpent = grocerySpending[0] + grocerySpending[1] + grocerySpending[2] + grocerySpending[3] + grocerySpending[4]; //Equation to recieve the total cost of shopping for the past 5 weeks 
var average = totalSpent /5; //total cost spent divided by the number of weeks 
console.log(average); //displays the average spent over the past 5 weeks so that you know how much to budget for
//Average for the past 5 weeks is $420.40

//Discounts
var originalPrice = 400 //Original price of the item
var discountPercentage = .10 //Discount recieved on item
var salesTaxPrecentage = .07 //Sales tax at your local store
var discountAmount = originalPrice * discountPercentage //Equation to recieve the amount of your Discount
var priceWithDiscount = originalPrice - discountAmount //Price of your item with discount
var amountOfTaxOnItem = priceWithDiscount * salesTaxPrecentage //Amount of sales tax at your store
var priceOfItemWithTax = priceWithDiscount + amountOfTaxOnItem // Amount of your item with the discount and sales tax 
console.log(discountAmount) //Displays your discount Amount
console.log(priceWithDiscount) //Price of your item with the Discount
console.log(amountOfTaxOnItem) //Amount of tax your will pay after your discount
console.log(priceOfItemWithTax) //Total amount you will pay after the discount is added and sales tax is figured in
//The total price altogether is $385.20



