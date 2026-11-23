const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const resetDashboard = (
  studentNameInput,
  completedModulesInput,
  studyDayInput,
  careerInput,
  output
) => {
  studentNameInput.value = "";
  completedModulesInput.value = "";
  studyDayInput.selectedIndex = 0;
  careerInput.selectedIndex = -1;
  output.innerHTML = "";
  output.style.backgroundColor = "";
};

export const displayDashboard = (
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
) => {
  output.innerHTML = `
    <div class="dashboard-card">
      <h2>Dashboard for ${escapeHtml(studentName)}</h2>
      <ul>
        <li>Career Path: ${escapeHtml(career)}</li>
        <li>Completed Modules: ${completedModules}</li>
        <li>Total Study Hours: ${totalStudyHours}</li>
        <li>Remaining Study Hours: ${remainingHours}</li>
        <li>Percent Complete: ${percentComplete}%</li>
        <li>Percent Remaining: ${percentRemaining}%</li>
        <li>Grade: ${grade}</li>
        <li>Progress: ${progress}</li>
        <li>Study Day: ${escapeHtml(studyDay)}</li>
        <li>Study Plan: ${studyPlan}</li>
      </ul>
    </div>`;
};

export const displayRemainingModules = (remainingModules) => {
  const output = document.getElementById("output");

  const items =
    remainingModules.length === 0
      ? "<li>All modules complete</li>"
      : remainingModules
          .map((module) => `<li>${module.moduleName}</li>`)
          .join("");

  output.insertAdjacentHTML(
    "beforeend",
    `<div class="dashboard-card">
      <h3>Remaining Modules</h3>
      <ul>${items}</ul>
    </div>`
  );
};

export const applyDashboardColor = (percentComplete, output) => {
  if (percentComplete >= 75) {
    output.style.backgroundColor = "#d4edda";
  } else if (percentComplete >= 40) {
    output.style.backgroundColor = "#fff3cd";
  } else {
    output.style.backgroundColor = "#d6e4f5";
  }
};
