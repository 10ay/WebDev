const taskName = document.getElementById("task-name");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const taskList = document.getElementById("tasks");


submitButton.addEventListener("click", () => {
  if (taskName.value != ""){
    const task = document.createElement("li");
    task.innerHTML = taskName.value;
    taskList.appendChild(task); 
    
  }
});

clearButton.addEventListener("click", () => {
  taskList.replaceChildren();
  taskName.value = "";
});


taskName.addEventListener("input", () => {
  if (taskName.value == "Tanay") {
    document.getElementById("tasks").style.color = "blueviolet";
    document.getElementById("tasks").style.fontFamily = "fantasy";
  }
});
