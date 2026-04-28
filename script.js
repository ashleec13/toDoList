let tasks = []; // Array that stores all tasks entered by the user

// Automatically place the cursor inside the input box when the page loads
document.getElementById('taskInput').focus();

// Listen for keyboard input inside the task input box
document.getElementById('taskInput').addEventListener('keydown', function (event) {

    // If the Enter key is pressed, add the task
    if (event.key === 'Enter') {
        addTask();
    }
});

// When the Add Task button is clicked, run addTask()
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Function to add a new task
function addTask() {

    // Get the text entered in the input box
    let taskInput = document.getElementById('taskInput').value;

    // Only add the task if the input is not empty
    if (taskInput) {
        tasks.push(taskInput); // Add the task to the tasks array

        // Clear the input box after adding task
        document.getElementById('taskInput').value = '';

        // Refresh the task list shown on screen
        displayTasks();
    }
}

// Function to display all tasks in the list
function displayTasks() {

    // Get the task list container
    let taskList = document.getElementById('taskList');

    // Clear current list before reloading tasks
    taskList.innerHTML = '';

    // Loop through each task in the array
    tasks.forEach((task, index) => {

        // Create a new list item for each task
        let li = document.createElement('li');

        // Add Bootstrap classes for styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        );

        // Add task text and buttons for complete/delete
        li.innerHTML = `
            ${task}
            <button class="btn btn-success btn-sm" onclick="toggleCompleted(this, ${index})">✔</button>
            <button class="btn btn-danger btn-sm" onclick="removeTask(${index})">✖</button>
        `;

        // Add the task item to the list on the page
        taskList.appendChild(li);
    });

    // Update the task counter
    updateCounter();
}

// Function to mark/unmark a task as completed
function toggleCompleted(button, index) {

    // Get the parent list item of the clicked button
    let li = button.parentElement;

    // Add or remove the "completed" CSS class
    li.classList.toggle('completed');
}

// Function to remove a task from the array
function removeTask(index) {

    // Remove 1 task at the given position
    tasks.splice(index, 1);

    // Refresh the displayed list
    displayTasks();
}

// Function to update the total task counter
function updateCounter() {
    document.getElementById('taskCounter').innerText =
        `Total tasks: ${tasks.length}`;
}

// When Clear Tasks button is clicked
document.getElementById('clearTaskBtn').addEventListener('click', function () {

    // Empty the tasks array
    tasks = [];

    // Refresh the list display
    displayTasks();
});