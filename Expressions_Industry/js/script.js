//ClistonPayne 03/13/14 Expressions_Industry Sec 02

//Rounds Collected on average per day during 5 month training cycle
var roundsCollectedDuringOneWeek = [246, 95, 354, 222]; // Each number represents 1 Day of Round Collecting
var totalRoundsPerMonth = roundsCollectedDuringOneWeek[0] + roundsCollectedDuringOneWeek[1] + roundsCollectedDuringOneWeek[2] + roundsCollectedDuringOneWeek[3];
var trainingWeeksPerMonth = 4
var trainingDaysPerWeek = 4
var monthsInTrainingCycle = 5 
var totalRoundsPerDay = (roundsCollectedDuringOneWeek[0] + roundsCollectedDuringOneWeek[1] + roundsCollectedDuringOneWeek[2] + roundsCollectedDuringOneWeek[3]) / trainingDaysPerWeek;
var totalTrainingDaysPerMonth = trainingDaysPerWeek * trainingWeeksPerMonth;
var daysCollectingRoundsPerTrainingCycle = monthsInTrainingCycle * totalTrainingDaysPerMonth;
var averageRoundsCollectedPerMonth = totalRoundsPerDay * trainingDaysPerWeek * trainingWeeksPerMonth;
var roundsCollectedPerDayOnAverageDuringTrainingCycle = (averageRoundsCollectedPerMonth * monthsInTrainingCycle) / daysCollectingRoundsPerTrainingCycle;
console.log(roundsCollectedPerDayOnAverageDuringTrainingCycle)