//Cliston Payne Conditionals Industry 3/20/14

//Conditionals Industry
//Proper Rounds to load

var time = (prompt("What time is it?"));// time represents military time 1800 - 23.59 is 6:00 pm - 11:59 pm
var rounds; // this is the tyoes of rounds you will use depemnding on what time of day it is 

rounds = ( time > 1800 ) ? "Tracer" : "Ball Point" ; // ternary that will tell us based on the time of day what rounds we will use
console.log(rounds); // console log that will display the typres of rounds we need to load up depending on what the prompt and ternary decide
