/*
    Name: Samuel Rosa
    Assignment: Module 4 Applied Programming Activity
    Instructor: Lisa
*/

"use strict";

const studentNameInput = document.getElementById("studentName");
const completedModulesInput = document.getElementById("completedModules");
const studyDayInput = document.getElementById("studyDay");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");

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
  } else if (percentRemaining >= 25 && percentRemaining < 75) {
    return "Making Progress";
  } else if (percentRemaining >= 75 && percentRemaining <= 100) {
    return "Just Getting Started";
  } else {
    return "Invalid entry.";
  }
}

let getCourseGrade = (percentCompleted) => {
  if (percentCompleted >= 90) {
    return "A";
  } else if (percentCompleted >= 80) {
    return "B";
  } else if (percentCompleted >= 70) {
    return "C";
  } else if (percentCompleted >= 60) {
    return "D";
  } else if (percentCompleted < 60) {
    return "F";
  } else {
    return "Invalid entry.";
  }
};

let displayModules = (modules) => {
  const list = document.createElement("ul");
  for (let i = 0; i < modules.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = modules[i];
    list.appendChild(listItem);
  }
  return list;
};

const displayRemainingModules = (completedModules) => {
  const remainingModules = courseModules.slice(completedModules);
  const remainingModulesList = document.getElementById("remainingModulesList");
  remainingModulesList.appendChild(displayModules(remainingModules));
};

let hoursPerWeek = 6;
let adjustedDailyHours = hoursPerWeek / 6;
let adjustedDailyMinutes = adjustedDailyHours * 60;

let getStudyPlan = (studyDay) => {
  const dailyMinutes = (hoursPerWeek / 7) * 60;
  let studyPlan = "";
  switch (studyDay) {
    case "Monday":
      studyPlan = `Study for ${dailyMinutes.toFixed(2)} minutes today.`;
      break;
    case "Tuesday":
      studyPlan = `Lab day work for ${adjustedDailyMinutes.toFixed(2)} minutes.`;
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
    case "Saturday":
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
};

const generateDashboard = () => {
  const studentName = studentNameInput.value;
  let completedModules = Number(completedModulesInput.value) || 0;
  completedModules = Math.min(Math.max(completedModules, 0), courseModules.length);
  const studyDay = studyDayInput.value;

  const totalStudyHours = calculateStudyHours(courseModules.length, 6);
  const percentComplete = calculateCompletePercent(
    completedModules,
    courseModules.length
  );
  const percentRemaining = 100 - percentComplete;
  const dailyStudyHours = hoursPerWeek / 7;
  const dailyStudyMinutes = dailyStudyHours * 60;

  const grade = getCourseGrade(percentComplete);
  const progress = getCourseProgress(percentRemaining);
  const studyPlan = getStudyPlan(studyDay);

  displayDashboard(
    studentName,
    completedModules,
    totalStudyHours,
    percentComplete,
    percentRemaining,
    grade,
    progress,
    studyDay,
    studyPlan
  );
  displayRemainingModules(completedModules);
  applyDashboardColor(percentComplete);
};

const displayDashboard = (
  studentName,
  completedModules,
  totalStudyHours,
  percentComplete,
  percentRemaining,
  grade,
  progress,
  studyDay,
  studyPlan
) => {
  output.innerHTML = `
        <div class="dashboard-card">

            <h2>My Study Dashboard</h2>

            <p><strong>Name:</strong> ${studentName}</p>

            <p><strong>Total Modules:</strong> ${courseModules.length}</p>

            <p><strong>Completed Modules:</strong> ${completedModules}</p>

            <p><strong>Total Study Hours:</strong> ${totalStudyHours}</p>

            <p><strong>Percent Complete:</strong>${percentComplete.toFixed(0)}%</p>

            <p><strong>Percent Remaining:</strong>${percentRemaining.toFixed(0)}%</p>

            <p><strong>Current Grade:</strong> ${grade}</p>

            <p><strong>Progress Status:</strong>${progress}</p>

            <p><strong>Study Day:</strong>${studyDay}</p>

            <p><strong>Today's Plan:</strong>${studyPlan}</p>

            <p><strong>Remaining Modules</strong><div id="remainingModulesList"></div></p>

        </div>`;
};

const applyDashboardColor = (percentComplete) => {
  if (percentComplete >= 75) {
    output.style.backgroundColor = "#d4edda";
  } else if (percentComplete >= 25) {
    output.style.backgroundColor = "#fff3cd";
  } else {
    output.style.backgroundColor = "#f8d7da";
  }
};

const resetDashboard = () => {
  studentNameInput.value = "";
  studyDayInput.selectedIndex = 0;
  completedModulesInput.value = 0;
  output.innerHTML = "";
  output.style.backgroundColor = "";
};

generateButton.addEventListener("click", generateDashboard);
resetButton.addEventListener("click", resetDashboard);