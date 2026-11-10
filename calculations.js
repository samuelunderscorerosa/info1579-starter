export function calculateCompletePercent(completed, total) {
  return (completed / total) * 100;
}

export function calculateStudyHours(modules, hoursPerModule) {
  return modules * hoursPerModule;
}

export function getCourseProgress(percentRemaining) {
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

export let getCourseGrade = (percentCompleted) => {
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

let hoursPerWeek = 6;
let adjustedDailyHours = hoursPerWeek / 6;
let adjustedDailyMinutes = adjustedDailyHours * 60;

export let getStudyPlan = (studyDay) => {
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
