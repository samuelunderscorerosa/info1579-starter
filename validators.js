import {
  calculateCompletePercent,
  calculateStudyHours,
  getCourseGrade,
  getCourseProgress,
  getStudyPlan
} from "./calculations.js";

export const validateInputs = (studentName, completedModules, studyDay) => {
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

export const runUnitTests = () => {
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
