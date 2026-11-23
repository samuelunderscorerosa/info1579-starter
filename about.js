import { displayJoke } from "./api.js";

const aboutMeObject = {
  name: "Samuel Rosa",
  major: "Information Technology",
  currentJob: "Humana",
  hobbies: ["Gaming", "Reading", "Hiking"],
  skills: ["JavaScript", "HTML", "CSS", "C#", "Object-Oriented Programming"]
};

document.getElementById("aboutName").innerHTML = aboutMeObject.name;
document.getElementById("aboutMajor").innerHTML = aboutMeObject.major;
document.getElementById("aboutJob").innerHTML = aboutMeObject.currentJob;
document.getElementById("aboutHobbies").innerHTML = aboutMeObject.hobbies
  .map((hobby) => `<li>${hobby}</li>`)
  .join("");
document.getElementById("aboutSkills").innerHTML = aboutMeObject.skills
  .map((skill) => `<li>${skill}</li>`)
  .join("");

displayJoke();
