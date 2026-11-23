/*
    Name: Samuel Rosa
    Assignment: Final Project
    Instructor: Lisa
*/

"use strict";

import { courseModules, careerPaths } from "./data.js";
import {
  calculateCompletePercent,
  calculateStudyHours,
  getCourseGrade,
  getCourseProgress,
  getStudyPlan
} from "./calculations.js";
import { validateInputs, runUnitTests } from "./validators.js";
import {
  resetDashboard,
  displayRemainingModules,
  applyDashboardColor,
  displayDashboard
} from "./dashboard.js";
import { displayQuote } from "./api.js";

const studentNameInput = document.getElementById("studentName");
const completedModulesInput = document.getElementById("completedModules");
const studyDayInput = document.getElementById("studyDay");
const careerInput = document.getElementById("career");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");

careerInput.selectedIndex = -1;

const careerNames = careerPaths.map((careerPath) => careerPath.name);
console.log("Career Path Names: ", careerNames);

const careersWithManyResources = careerPaths.filter(
  (careerPath) => careerPath.resources.length > 4
);
console.log("Career Paths With More Than 4 Resources: ", careersWithManyResources);

const totalSkills = careerPaths.reduce(
  (total, careerPath) => total + careerPath.skills.length,
  0
);
console.log("Total Skills Across All Career Paths: ", totalSkills);

const generateDashboard = () => {
  try {
    const studentName = studentNameInput.value;
    const completedModules = Number(completedModulesInput.value) || 0;
    const studyDay = studyDayInput.value;
    const career = careerInput.value;

    validateInputs(studentName, completedModules, studyDay, career);

    const totalStudyHours = calculateStudyHours(courseModules.length, 6);
    const percentComplete = calculateCompletePercent(
      completedModules,
      courseModules.length
    );
    const percentRemaining = 100 - percentComplete;

    const grade = getCourseGrade(percentComplete);
    const progress = getCourseProgress(percentRemaining);
    const studyPlan = getStudyPlan(studyDay);

    const moduleNames = courseModules.map((module) => module.moduleName);
    const remainingModules = courseModules.filter(
      (module, index) => index >= completedModules
    );
    const remainingHours = remainingModules.reduce(
      (total, module) => total + module.hoursRequired,
      0
    );

    console.log("Student Name: ", studentName);
    console.log("Career Path: ", career);
    console.log("Completed Modules: ", completedModules);
    console.log("Study Day: ", studyDay);
    console.log("Percent Complete: ", percentComplete);
    console.log("Grade: ", grade);
    console.log("Progress: ", progress);
    console.log("Module Names: ", moduleNames);

    displayDashboard(
      output,
      studentName,
      completedModules,
      totalStudyHours,
      remainingHours,
      percentComplete,
      percentRemaining,
      grade,
      progress,
      studyDay,
      studyPlan,
      career
    );
    displayRemainingModules(remainingModules);
    applyDashboardColor(percentComplete, output);

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

generateButton.addEventListener("click", generateDashboard);
resetButton.addEventListener("click", () =>
  resetDashboard(
    studentNameInput,
    completedModulesInput,
    studyDayInput,
    careerInput,
    output
  )
);

displayQuote();
