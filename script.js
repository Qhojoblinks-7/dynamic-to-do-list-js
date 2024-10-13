const form = document.addEventListener('DOMContentLoaded', ()=>{

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the function to add tasks
    function addTask(){

        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === ""){
            alert("Please enter a task");
            return;
        }

        // Create a new <li> element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a "Remove" button for each task
        const removeButton = document.createElement('Button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add the "Remove" functionality to the button
        removeButton.onclick = function(){
            taskList.removeChild(listItem);
        }

        // Append the remove button to the task item and the task item to the list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach the click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);


    // Attach the keypress event listener to the task input field to allow adding tasks with the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });


})