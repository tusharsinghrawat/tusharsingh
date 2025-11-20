// STEP 1 & 3: Select elements + Add button event
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// STEP 4: Add task
addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Create new li
    const li = document.createElement("li");
    li.textContent = taskText;

    // STEP 5: Mark task complete (toggle)
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // STEP 6: Remove Button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent toggle on delete click
        li.remove();
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input
});
