export const calculateStudyHours = (moduleCount, hoursPerModule) =>
  moduleCount * hoursPerModule;

export const calculateCompletePercent = (completedModules, totalModules) => {
  if (totalModules === 0) {
    return 0;
  }

  return Math.round((completedModules / totalModules) * 100);
};

export const getCourseGrade = (percentComplete) => {
  if (percentComplete >= 90) {
    return "A";
  }
  if (percentComplete >= 80) {
    return "B";
  }
  if (percentComplete >= 70) {
    return "C";
  }
  if (percentComplete >= 60) {
    return "D";
  }
  return "F";
};

export const getCourseProgress = (percentRemaining) => {
  if (percentRemaining === 0) {
    return "Course complete";
  }
  if (percentRemaining <= 25) {
    return "Almost there";
  }
  if (percentRemaining <= 50) {
    return "Making steady progress";
  }
  if (percentRemaining < 100) {
    return "Getting started";
  }
  return "Not started";
};

export const getStudyPlan = (studyDay) => {
  const plans = {
    Monday: "Read the next module lesson",
    Tuesday: "Work through the practice exercises",
    Wednesday: "Review notes and key terms",
    Thursday: "Start the module assignment",
    Friday: "Finish and test the assignment",
    Saturday: "Catch up on any missed work",
    Sunday: "Rest and plan the week ahead"
  };

  return plans[studyDay] || "Choose a study day";
};
