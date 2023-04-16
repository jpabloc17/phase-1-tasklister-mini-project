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
  const priorityLevel = parseInt(e.target.priority.value)

  displayTask(task, priorityLevel)
}

function displayTask(task, priorityLevel){
  const taskHoldUl = document.getElementById("tasks")
  const taskHoldLi = document.createElement("li")
  const deleteBtn = document.createElement("button")

  deleteBtn.textContent = "X"
  deleteBtn.addEventListener("click", deleteTask)

  taskHoldLi.textContent = task + " "
  taskHoldLi.style.color = getPriorityColor(priorityLevel)
  taskHoldLi.appendChild(deleteBtn)
  taskHoldUl.appendChild(taskHoldLi)
}

function deleteTask(e){
  e.target.parentNode.remove()
}

function getPriorityColor(priorityLevel){
  if (priorityLevel === 1) {
    return "red"
  } else if (priorityLevel === 2){
    return "blue"
  } else {
    return "purple"
  }
}
