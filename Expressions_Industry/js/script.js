//ClistonPayne 03/13/14 Expressions_Industry Sec 02

//Rounds Collected on average per day during 5 month training cycle
var roundsCollectedDuringOneDay = [246, 95, 354, 222];
var totalRoundsPerDay = roundsCollectedDuringOneDay[0] + roundsCollectedDuringOneDay[1] + roundsCollectedDuringOneDay[2] + roundsCollectedDuringOneDay[3];
var trainingDaysPerWeek = 4
var monthsInTrainingCycle = 5 
var averageRoundsCollectedPerMonth = totalRoundsPerDay * trainingDaysPerWeek * trainingWeeksPerMonth ;
console.log(averageRoundsCollectedPerMonth)