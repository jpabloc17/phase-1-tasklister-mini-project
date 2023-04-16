document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addingEventListeners()
});

// get the form and add an event listener to the form
function addingEventListeners() {
  document.getElementById("create-task-form").addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e){
  e.preventDefault()
  const task = e.target[0].value
  // console.log(task)

  displayTask(task)
}

function displayTask(task){
  const taskHoldUl = document.getElementById("tasks")
  const taskHoldLi = document.createElement("li")

  taskHoldLi.textContent = task
  taskHoldUl.appendChild(taskHoldLi)
  // console.log(taskHoldLi)
}