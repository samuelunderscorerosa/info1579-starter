"use strict";

import { courseModules } from "./data.js";

export const initCourseMenu = (completedModulesInput) => {
  const toggleBtn = document.getElementById("toggleCourseMenu");
  const menu = document.getElementById("courseMenu");
  const nameInput = document.getElementById("courseName");
  const hoursInput = document.getElementById("courseHours");
  const addBtn = document.getElementById("addCourseButton");
  const message = document.getElementById("courseMessage");
  const list = document.getElementById("courseList");

  const render = () => {
    list.innerHTML = "";
    courseModules.forEach((module, index) => {
      const li = document.createElement("li");
      li.textContent = `${module.moduleName} (${module.hoursRequired} hrs) `;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        courseModules.splice(index, 1);
        render();
      });

      li.appendChild(removeBtn);
      list.appendChild(li);
    });
    completedModulesInput.max = courseModules.length;
  };

  const addCourse = () => {
    const moduleName = nameInput.value.trim();
    const hoursRequired = Number(hoursInput.value);

    if (!moduleName || !(hoursRequired > 0)) {
      message.textContent = "Enter a course name and hours greater than 0.";
      return;
    }

    courseModules.push({ moduleName, hoursRequired });
    nameInput.value = "";
    hoursInput.value = "";
    message.textContent = `Added "${moduleName}".`;
    render();
  };

  toggleBtn.addEventListener("click", () => {
    menu.hidden = !menu.hidden;
    toggleBtn.textContent = menu.hidden ? "Add Course" : "Close Menu";
  });
  addBtn.addEventListener("click", addCourse);

  render();
};