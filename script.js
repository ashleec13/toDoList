let tasks = []; // Array to hold tasks

document.getElementById('taskInput').focus(); // Auto-focus on input

document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        tasks.push(taskInput); // Add task to array
        document.getElementById('taskInput').value = ''; // Clear input field
        displayTasks(); // Update task list display
    }
}

function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing tasks
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.innerHTML = `${task} <button class="btn btn-success btn-sm" onclick="toggleCompleted(this, ${index})">✔</button> <button class="btn btn-danger btn-sm" onclick="removeTask(${index})">✖</button>`;
        taskList.appendChild(li);
    });
    updateCounter();
}

function toggleCompleted(button, index) {
    let li = button.parentElement;
    li.classList.toggle('completed');
}

function removeTask(index){
    tasks.splice(index, 1);
    displayTasks();
}

function updateCounter() {
    document.getElementById('taskCounter').innerText = `Total tasks: ${tasks.length}`;
}

document.getElementById('clearTaskBtn').addEventListener('click', function(){
    tasks = [];
    displayTasks();
});