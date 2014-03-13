//ClistonPayne 03/13/14 Expressions_Industry Sec 02

//Rounds Collected on average per day during 5 month training cycle
var roundsCollectedDuringOneWeek = [365, 789, 65, 125]; // Each number represents 1 week of Round Collecting
var totalRoundsPerMonth = roundsCollectedDuringOneWeek[0] + roundsCollectedDuringOneWeek[1] + roundsCollectedDuringOneWeek[2] + roundsCollectedDuringOneWeek[3];// Calculate how many rounds are collected per month
var trainingWeeksPerMonth = 4 //Number of weeks per training month
var trainingDaysPerWeek = 7 //days per training week 
var monthsInTrainingCycle = 6 // the number of weeks you are in the training cycle
var totalRoundsPerDay = (roundsCollectedDuringOneWeek[0] + roundsCollectedDuringOneWeek[1] + roundsCollectedDuringOneWeek[2] + roundsCollectedDuringOneWeek[3]) / trainingDaysPerWeek;// total rounds per day collected
var totalTrainingDaysPerMonth = trainingDaysPerWeek * trainingWeeksPerMonth; // gives the total training days per month
var daysCollectingRoundsPerTrainingCycle = monthsInTrainingCycle * totalTrainingDaysPerMonth; //gives the days you spend collecting rounds at range
var averageRoundsCollectedPerMonth = totalRoundsPerDay * trainingDaysPerWeek * trainingWeeksPerMonth;// gives the rounds collected per month
var roundsCollectedPerDayOnAverageDuringTrainingCycle = (averageRoundsCollectedPerMonth * monthsInTrainingCycle) / daysCollectingRoundsPerTrainingCycle;// gives the user the amount of rounds collected per day during a training cycle
console.log(roundsCollectedPerDayOnAverageDuringTrainingCycle)// shows the user in the console the results of there equation