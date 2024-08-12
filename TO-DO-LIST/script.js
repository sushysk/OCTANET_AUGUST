document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskInput.value}</span>
            <div class="task-buttons">
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </div>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';

        taskItem.querySelector('.deleteBtn').addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskItem.querySelector('.editBtn').addEventListener('click', function() {
            const newTask = prompt('Edit your task:', taskItem.querySelector('span').textContent);
            if (newTask !== null && newTask.trim() !== '') {
                taskItem.querySelector('span').textContent = newTask;
            }
        });

        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });
    }
}
