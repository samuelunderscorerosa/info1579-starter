import { courseModules } from "./data.js";
import {
  calculateCompletePercent,
  calculateStudyHours,
  getCourseGrade
} from "./calculations.js";

export const validateInputs = (
  studentName,
  completedModules,
  studyDay,
  career
) => {
  const errors = [];

  if (studentName.trim() === "") {
    errors.push("Student name is required.");
  }

  if (
    !Number.isInteger(completedModules) ||
    completedModules < 0 ||
    completedModules > courseModules.length
  ) {
    errors.push(
      `Completed modules must be a whole number from 0 to ${courseModules.length}.`
    );
  }

  if (!studyDay) {
    errors.push("Please select a study day.");
  }

  if (!career) {
    errors.push("Please select a career path.");
  }

  if (errors.length > 0) {
    throw new Error(errors.map((message) => `<li>${message}</li>`).join(""));
  }
};

export const runUnitTests = () => {
  console.assert(
    calculateCompletePercent(5, 10) === 50,
    "calculateCompletePercent(5, 10) should be 50"
  );
  console.assert(
    calculateCompletePercent(0, 0) === 0,
    "calculateCompletePercent(0, 0) should be 0"
  );
  console.assert(
    calculateStudyHours(10, 6) === 60,
    "calculateStudyHours(10, 6) should be 60"
  );
  console.assert(getCourseGrade(95) === "A", "getCourseGrade(95) should be A");
  console.assert(getCourseGrade(40) === "F", "getCourseGrade(40) should be F");
};
