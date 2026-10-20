/*
    Name: Samuel Rosa
    Assignment: Module 5 Applied Programming Activity
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

const validateInputs = (studentName, completedModules, studyDay) => {
  const errors = [];

  if (studentName.trim() === "") {
    errors.push(`<li>Please enter a name.</li>`);
  }

  if (completedModules < 0 || completedModules > 10) {
    errors.push(`<li>Completed modules must be between 0 and 10.</li>`);
  }

  if (studyDay === "") {
    errors.push(`<li>Please select a study day.</li>`);
  }

  if (errors.length > 0) {
    throw new Error(errors.join(""));
  }
};

const generateDashboard = () => {
  try {
    const studentName = studentNameInput.value;
    const completedModules = Number(completedModulesInput.value) || 0;
    const studyDay = studyDayInput.value;

    validateInputs(studentName, completedModules, studyDay);

    const totalStudyHours = calculateStudyHours(courseModules.length, 6);
    const percentComplete = calculateCompletePercent(
      completedModules,
      courseModules.length
    );
    const percentRemaining = 100 - percentComplete;

    const grade = getCourseGrade(percentComplete);
    const progress = getCourseProgress(percentRemaining);
    const studyPlan = getStudyPlan(studyDay);

    console.log("Student Name: ", studentName);
    console.log("Completed Modules: ", completedModules);
    console.log("Study Day: ", studyDay);
    console.log("Percent Complete: ", percentComplete);
    console.log("Grade: ", grade);
    console.log("Progress: ", progress);

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

    runUnitTests();
  } catch (error) {
    output.innerHTML = `
      <div class="dashboard-card">
        <h2>Error</h2>
        <ul>${error.message}</ul>
      </div>`;
    output.style.backgroundColor = "#f8d7da";
  }
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
  console.log("Student Name: ", studentNameInput.value);
  console.log("Completed Modules: ", completedModulesInput.value);
  console.log("Study Day: ", studyDayInput.value);

  studentNameInput.value = "";
  studyDayInput.selectedIndex = 0;
  completedModulesInput.value = 0;
  output.innerHTML = "";
  output.style.backgroundColor = "";
};

generateButton.addEventListener("click", generateDashboard);
resetButton.addEventListener("click", resetDashboard);

const runUnitTests = () => {
  console.assert(getCourseGrade(95) === "A", "Grade A test failed");
  console.assert(getCourseGrade(85) === "B", "Grade B test failed");
  console.assert(getCourseGrade(75) === "C", "Grade C test failed");
  console.assert(getCourseGrade(65) === "D", "Grade D test failed");
  console.assert(getCourseGrade(40) === "F", "Grade F test failed");

  console.assert(
    calculateCompletePercent(5, 10) === 50,
    "Percent complete test failed"
  );
  console.assert(
    calculateStudyHours(10, 6) === 60,
    "Study hours test failed"
  );
  console.assert(
    getCourseProgress(0) === "Finished!",
    "Progress finished test failed"
  );
  console.assert(
    getCourseProgress(100) === "Just Getting Started",
    "Progress just started test failed"
  );
  console.assert(
    getStudyPlan("Saturday") === "Rest day.",
    "Study plan test failed"
  );
};