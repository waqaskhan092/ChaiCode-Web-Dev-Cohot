/**
 * Write your challenge solution here
 */

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");

// Function to add a new task (shared by both button click and Enter keypress)
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Remove empty message
  const emptyMessage = document.querySelector(".empty-list");
  if (emptyMessage) emptyMessage.remove();

  // Create a new list item with class "task-item"
  const newListItem = document.createElement("li");
  newListItem.classList.add("task-item");

  // Create checkbox with class "complete-checkbox"
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("complete-checkbox");

  // Add event listener to toggle "completed" class
  checkbox.addEventListener("change", function () {
    newListItem.classList.toggle("completed", checkbox.checked);
    updateCheckedCount();
  });

  // Create task text span with class "task-text"
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.classList.add("task-text");

  // Create delete button with class "delete-button"
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  // Add event listener to delete the task
  deleteButton.addEventListener("click", function () {
    newListItem.remove();
    checkEmptyList();
    updateCheckedCount();
  });

  // Append checkbox, text, and button to the task item
  newListItem.appendChild(checkbox);
  newListItem.appendChild(taskSpan);
  newListItem.appendChild(deleteButton);
  taskList.appendChild(newListItem);

  // Clear input field
  taskInput.value = "";

  checkEmptyList();
}

// Add task on button click
addButton.addEventListener("click", addTask);

// Add task on "Enter" keypress inside the task input field
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function checkEmptyList() {
  const totalTAsks = document.querySelectorAll(".task-item").length;

  if (totalTAsks === 0) {
    const emptyList = document.createElement("li");
    emptyList.textContent = "No tasks yet. Add one above!";
    emptyList.classList.add("empty-list");
    taskList.appendChild(emptyList);
    totalTasks.textContent = "Total tasks: 0";
  } else {
    totalTasks.textContent = `Total tasks: ${totalTAsks}`;
  }
}

function updateCheckedCount() {
  const checkedBoxes = document.querySelectorAll(".complete-checkbox:checked");
  document.getElementById("completedTasks").textContent =
    "Completed: " + checkedBoxes.length;
}

// on checkbox changes
document.addEventListener("change", updateCheckedCount);
