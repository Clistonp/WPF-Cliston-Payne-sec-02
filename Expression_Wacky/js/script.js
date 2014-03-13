//ClistonPayne 3/13/14 Expressions_Wacky Sec 02

//Plumbing 
alert("You are a plumber and need to find the volume of a piece of pipe (Cylinder) for a job.")
var height = prompt("How long is your piece of pipe in inches?");
var diameter = prompt("What is the diameter of your pipe inches?");
var radius = diameter / 2;
var pie = 3.14;
var volume = pie * (radius * radius) * height ;
alert("The volume of your piece of pipe is " + volume +"inches");

