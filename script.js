let tasks = []; // Array to hold tasks

document.getElementById('addTaskBtn').addEventListener('click', function () {
    let taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        tasks.push(taskInput); // Add task to array
        document.getElementById('taskInput').value = ''; // Clear input field
        displayTasks(); // Update task list display
    }
})


function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing tasks
    tasks.forEach((task, index) => {
        let li = document.createElement('li')
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
        )
        li.innerHTML = `${task} <button class="btn btn-success btn-sm" onclick="removeTask(${index})">✔</button>`;
        taskList.appendChild(li);
    });
}


function removeTask(index){
    tasks.splice(index, 1)
    displayTasks()
}

document.getElementById('clearTaskBtn').addEventListener('click', function(){
    tasks = []
    displayTasks()
})