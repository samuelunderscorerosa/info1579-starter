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

function calculateCompletePercent(completed, total) {
  return (completed / total) * 100;
}

function calculateStudyHours(modules, hoursPerModule) {
  return modules * hoursPerModule;
}

function getCourseProgress(percentRemaining) {
  if (percentRemaining === 0) {
    return "Finished!";
    } else if (percentRemaining >= 1 && percentRemaining < 25) {
        return "Almost Finished!";
    }  else if (percentRemaining >= 25 && percentRemaining < 75) {
        return "Making Progress";
    }  else if (percentRemaining >= 75 && percentRemaining <= 100) {
        return "Just Getting Started";
    }  else {
        return "Invalid entry.";
    }
}

let getCourseGrade = (percentCompleted) => {
  if (percentCompleted >= 90) {
    return "A";
  }   else if (percentCompleted >= 80) {
    return "B";
  }   else if (percentCompleted >= 70) {
    return "C";
  }   else if (percentCompleted >= 60) {
    return "D";
  }   else if (percentCompleted < 60) {
    return "F";
  }   else {
    return "Invalid entry.";
  }
}

let displayModules = (modules) => {
  for (let i = 0; i < modules.length; i++) {
    display(`Module ${i + 1}`, modules[i]);
  }
}

let displayCompletedModules = (...modules) => {
  return modules.join(", ");
};


let completedModules = ["Module 1", "Module 2", "Module 3"];

let completedModulesList = displayCompletedModules(...completedModules);
// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)

let myName = "Samuel Rosa";
let totalModules = courseModules.length;
let isEnrolled = true;
let course = "JavaScript";

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
let totalStudyHours = calculateStudyHours(courseModules.length, 6);

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
let hoursPerWeek = 6;
let dailyStudyHours = hoursPerWeek / 7;
let dailyStudyMinutes = dailyStudyHours * 60;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
let adjustedDailyHours = hoursPerWeek / 6;
let adjustedDailyMinutes = adjustedDailyHours * 60;

// TODO: Calculate the course percent complete and the course percent remaining.
// Formula: percent = (part / whole) * 100
let percentCompleted = calculateCompletePercent(completedModules.length, courseModules.length);
let percentRemaining = 100 - percentCompleted;

let studyDay = "";

if (percentRemaining === 0) {
  studyDay = "Complete";
} else {
  studyDay = prompt("Enter a study day example Monday: ");
}

let getStudyPlan = (studyDay) => {
  let studyPlan = "";
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
  return studyPlan;
}


// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display("Message", `Welcome to ${course} and to MCC!`);
display("Name", myName);
display("Is Enrolled", isEnrolled);
display("Total Modules", totalModules);
display("Completed Modules", completedModulesList);
display("Modules", displayModules(courseModules));
display("Total Study Hours", totalStudyHours.toFixed(2));
display("Daily Study Hours", dailyStudyHours.toFixed(2));
display("Daily Study Minutes", adjustedDailyMinutes.toFixed(2));

// TODO: Display your results with a % sign
display("Percent Completed", `${percentCompleted.toFixed(2)}%`);
display("Percent Remaining", `${percentRemaining.toFixed(2)}%`);
display("Current Progress", getCourseProgress(percentRemaining));
display("Course Grade", getCourseGrade(percentCompleted));
display("Study Day", studyDay);
display("Study Plan", getStudyPlan(studyDay));