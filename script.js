//TODO: Include your multi-line comment header
/*
    Name: 
    Date: 
    Assignment: 
    Quarter: 
    Instructor: 
*/

// TODO: Import "use strict" directive
"use strict";

// DO NOT MODIFY
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
let myName = 'Samuel Rosa';
let totalModules = 10;
let isEnrolled = true;
let hoursPerWeek = 6
let course = "JavaScript"
// TODO: Use a template literal to output a welcome message. Use at least one ${}.

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
let totalStudyHours = totalModules * hoursPerWeek;
// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
let dailyStudyHours = hoursPerWeek / 7;
// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
dailyStudyHours--;
// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
let percentCompleted = (2 / totalModules) * 100
let percentRemaining = (totalModules - percentCompleted)
// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display(`Welcome to ${course} and to MCC!`);
display(`Name: ${myName}`);
display(`Is Enrolled: ${isEnrolled}`);
display(`Total Modules: ${totalModules}`);
display(`Daily Study Hours: ${dailyStudyHours}`);
display(`Daily Study Minutes: ${dailyStudyHours}`);
display(`Daily Study Hours: (with rest day)`);
display(`Daily Study Minutes: (with rest day)`);

// TODO: Display your results with a % sign
display(`Percent Completed: ${percentCompleted}%`);
display(`Percent Remaining: ${percentRemaining}%`);
