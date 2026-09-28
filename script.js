/*
    Name: Samuel Rosa
    Date: 09/27/2026
    Assignment: Module 2 Applied Programming Activity
    Quarter: 1
    Instructor: Lisa
*/

// TODO: Import "use strict" directive
"use strict";


// DO NOT MODIFY
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW

// Part 0: Arrays
const courseModules = [
  "Module 1",
  "Module 2",
  "Module 3",
  "Module 4",
  "Module 5",
  "Module 6",
  "Module 7",
  "Module 8",
  "Module 9",
  "Module 10",
];
let completedModules = ["Module 1", "Module 2"];

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
let myName = "Samuel Rosa";
let totalModules = courseModules.length;
let isEnrolled = true;
let course = "JavaScript";

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
let hoursPerWeek = 6;
let totalStudyHours = totalModules * hoursPerWeek;

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
let dailyStudyHours = hoursPerWeek / 7;
let dailyStudyMinutes = dailyStudyHours * 60;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
let adjustedDailyHours = hoursPerWeek / 6;
let adjustedDailyMinutes = adjustedDailyHours * 60;

completedModules = Number(
  prompt("Enter the number of completed modules (1-10): ")
);

// TODO: Calculate the course percent complete and the course percent remaining.
// Formula: percent = (part / whole) * 100
let percentCompleted = (completedModules / totalModules) * 100;
let percentRemaining = 100 - percentCompleted;

let courseProgress = "";

if (percentRemaining === 0) {
  courseProgress = "Finished!";
} else if (percentRemaining >= 1 && percentRemaining < 25) {
  courseProgress = "Almost Finished!";
} else if (percentRemaining >= 25 && percentRemaining < 75) {
  courseProgress = "Making Progress";
} else if (percentRemaining >= 75 && percentRemaining <= 100) {
  courseProgress = "Just Getting Started";
} else {
  courseProgress = "Invalid entry.";
}

let courseGrade = "";

if (percentCompleted >= 90) {
  courseGrade = "A";
} else if (percentCompleted >= 80) {
  courseGrade = "B";
} else if (percentCompleted >= 70) {
  courseGrade = "C";
} else if (percentCompleted >= 60) {
  courseGrade = "D";
} else if (percentCompleted < 60) {
  courseGrade = "F";
} else {
  courseGrade = "Invalid entry.";
}

let studyDay = "";
let studyPlan = "";

if (percentRemaining === 0) {
  studyDay = "Complete";
} else {
  studyDay = prompt("Enter a study day example Monday: ");
}

switch (studyDay) {
  case "Monday": //
    studyPlan = `Study for ${dailyStudyMinutes.toFixed(2)} minutes today.`;
    break;
  case "Tuesday":
    studyPlan = `Lab day work for ${adjustedDailyMinutes.toFixed(
      2
    )} minutes.`;
    break;
  case "Wednesday":
    studyPlan = `Applied programming Code for ${adjustedDailyMinutes.toFixed(
      2
    )} minutes today.`;
    break;
  case "Thursday":
    studyPlan = "kahoot/blooket day.";
    break;
  case "Friday":
    studyPlan = "slow day of studyin just review material";
    break;
  case "Saturday": // Rest day
    studyPlan = "Rest day.";
    break;
  case "Sunday":
    studyPlan = "party night.";
    break;
  case "Complete":
    studyPlan = "Course Completed!";
    break;
  default:
    studyPlan = "Invalid day.";
    break;
}

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display("Message", `Welcome to ${course} and to MCC!`);
display("Name", myName);
display("Is Enrolled", isEnrolled);
display("Total Modules", totalModules);
display("Total Study Hours", totalStudyHours.toFixed(2));
display("Daily Study Hours", dailyStudyHours.toFixed(2));
display("Daily Study Minutes", adjustedDailyMinutes.toFixed(2));

// TODO: Display your results with a % sign
display("Percent Completed", `${percentCompleted.toFixed(2)}%`);
display("Percent Remaining", `${percentRemaining.toFixed(2)}%`);
display("Current Progress", courseProgress);
display("Course Grade", courseGrade);
display("Study Day", studyDay);
display("Study Plan", studyPlan);