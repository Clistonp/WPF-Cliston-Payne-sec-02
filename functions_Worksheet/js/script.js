//Cliston Payne functions_Worksheet 3/24/14

//Calculate the Circumference of a Circle
var radius = 15;
var pie = 3.14;
var times = 2;
var circumference = calcCircumference(times, pie, radius);
console.log("The Circumference of the circle is " + circumference)
function calcCircumference(times, pie, radius):Number
{
	return times *pie *radius;
}