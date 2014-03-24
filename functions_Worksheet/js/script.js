//Cliston Payne functions_Worksheet 3/24/14

//Calculate the Circumference of a Circle
var radius = 15;// this is the radius of my circle
var pie = 3.14; // this is the value of pie
var times = 2; // multiplied by to get circumference
var circumference = calcCircumference(times, pie, radius);
console.log("The Circumference of the circle is " + circumference)
function calcCircumference(times, pie, radius)
{
	return times *pie *radius;
}

// 