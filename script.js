import checkComplete from "./components/checkComplete.js";
import trashIcon from "./components/deleteIcon.js";
(() => {
  const btn = document.querySelector("[data-form-btn]");
  const createTask = (e) => {
    e.preventDefault();
    const textTask = document.querySelector("[data-form-input]");
    const value = textTask.value;
    const card = document.querySelector("[data-card]");
    const task = document.createElement("li");
    task.classList.add("card");
    textTask.value = "";
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(trashIcon());
    card.appendChild(task);
  };
  btn.addEventListener("click", createTask);
})();
