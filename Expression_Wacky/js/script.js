//ClistonPayne 3/13/14 Expressions_Wacky Sec 02

//Plumbing 
alert("You are a plumber and need to find the volume of a piece of pipe (Cylinder) for a job."); //Alert box for the plumbing question
var height = prompt("How long is your piece of pipe in inches?");// gives us the prompt box that ask us what the height of our peice of pipe is 
var diameter = prompt("What is the diameter of your pipe inches?");// ask the question for the diameter of the pipe
var radius = diameter / 2; // formula to find the radius of a circle
var pie = 3.14; // the representation for pie // pie is a repeating number but for the computers sake we are just using 3.14
var volume = pie * (radius * radius) * height ; // formuala that will give us the volume of a cylinder
alert("The volume of your piece of pipe is " + volume + " inches");// alert box that tells us the volume of our peice of pipe
alert("Great job! Now get back to work."); //Just being Wacky

