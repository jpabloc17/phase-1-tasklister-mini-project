document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addingEventListeners()
});

let taskObjArr = []
// get the form and add an event listener to the form
function addingEventListeners() {
  document.getElementById("create-task-form").addEventListener("submit", handleFormSubmit)
  document.getElementById("sort-tasks").addEventListener("change", sortTasks)
}

function handleFormSubmit(e){
  e.preventDefault()
  const task = e.target[0].value
  const priorityLevel = parseInt(e.target.priority.value)

  const taskObj = {task, priorityLevel}
  taskObjArr.push(taskObj)
  console.log(taskObjArr)

  sortTasks()
  displayTasks()
}

function displayTasks(){
  const taskHoldUl = document.getElementById("tasks")
  taskHoldUl.innerHTML = ""

  taskObjArr.forEach((task) => {
    const taskHoldLi = document.createElement("li")
    const deleteBtn = document.createElement("button")

    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", (e) => deleteTask(e, task))

    taskHoldLi.textContent = task.task + " "
    taskHoldLi.style.color = getPriorityColor(task.priorityLevel)
    taskHoldLi.appendChild(deleteBtn)
    taskHoldUl.appendChild(taskHoldLi)
  })
}

function deleteTask(e, task){
  taskObjArr = taskObjArr.filter((element) => element.task !== task.task)
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

function sortTasks(){
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "high-low"){
    taskObjArr.sort((a, b) => a.priorityLevel - b.priorityLevel)
  } else {
    taskObjArr.sort((a, b) => b.priorityLevel - a.priorityLevel)
  }
  displayTasks()
}