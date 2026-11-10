import { courseModules } from "./data.js";

export const resetDashboard = (
  studentNameInput,
  completedModulesInput,
  studyDayInput,
  output
) => {
  console.log("Student Name: ", studentNameInput.value);
  console.log("Completed Modules: ", completedModulesInput.value);
  console.log("Study Day: ", studyDayInput.value);

  studentNameInput.value = "";
  studyDayInput.selectedIndex = 0;
  completedModulesInput.value = 0;
  output.innerHTML = "";
  output.style.backgroundColor = "";
};

export let displayModules = (modules) => {
  const list = document.createElement("ul");
  for (let i = 0; i < modules.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = modules[i].moduleName;
    list.appendChild(listItem);
  }
  return list;
};

export const displayRemainingModules = (remainingModules) => {
  document.getElementById("remainingModulesList").appendChild(displayModules(remainingModules));
};

export const applyDashboardColor = (percentComplete, output) => {
  if (percentComplete >= 75) {
    output.style.backgroundColor = "#d4edda";
  } else if (percentComplete >= 25) {
    output.style.backgroundColor = "#fff3cd";
  } else {
    output.style.backgroundColor = "#f8d7da";
  }
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
  studyPlan
) => {
  output.innerHTML = `
        <div class="dashboard-card">

            <h2>My Study Dashboard</h2>

            <p><strong>Name:</strong> ${studentName}</p>

            <p><strong>Total Modules:</strong> ${courseModules.length}</p>

            <p><strong>Completed Modules:</strong> ${completedModules}</p>

            <p><strong>Total Study Hours:</strong> ${totalStudyHours}</p>

            <p><strong>Remaining Study Hours:</strong> ${remainingHours}</p>

            <p><strong>Percent Complete:</strong>${percentComplete.toFixed(0)}%</p>

            <p><strong>Percent Remaining:</strong>${percentRemaining.toFixed(0)}%</p>

            <p><strong>Current Grade:</strong> ${grade}</p>

            <p><strong>Progress Status:</strong>${progress}</p>

            <p><strong>Study Day:</strong>${studyDay}</p>

            <p><strong>Today's Plan:</strong>${studyPlan}</p>

            <p><strong>Remaining Modules</strong><div id="remainingModulesList"></div></p>

        </div>`;
};
