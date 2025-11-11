document.addEventListener('DOMContentLoaded', () => {
    let taskInput = document.querySelector('#tasks'); // input field
    let addButton = document.querySelector('#taskBtn'); // add button
    let taskList = document.querySelector('.task-list'); // UL or DIV for tasks
    let taskComplete = document.querySelector('.task-text');

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert("Please add a task!");
            return;
        }

        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type='checkbox' class="check-box">
            <span class="task-text"><p>${taskText}</p></span>
            <button class="delete-button">❌</button>
        `;
        taskList.appendChild(listItem);

        listItem.querySelector('.delete-button').addEventListener('click', () => {
            taskList.removeChild(listItem);
        })
        taskInput.value = '';
    }
});
