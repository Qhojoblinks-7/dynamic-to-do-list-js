const form = document.addEventListener('DOMContentLoaded', ()=>{

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasksFromLocalStorage(){
        const storedTask = localStorage.getItem('tasks');

        if (storedTask){
            const taskArray = JSON.parse(storedTask);
            
            taskArray.forEach(taskText => {
                createTaskElement(taskText);
            });
        }
    }

    // Define the function to add tasks
    function addTask(){

        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === ""){
            alert("Please enter a task");
            return;
        }

        // Add the new task to the list
        createTaskElement(taskText);

        // Save the task to local storage
        saveTaskToLocalStorage(taskText);

        // Clear the input field
        taskInput.value = "";
    }

    function createTaskElement(taskText){
        // Create a new <li> element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a "Remove" button for each task
        const removeButton = document.createElement('Button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add the "Remove" functionality to the button
        removeButton.onclick = function(){
            taskList.removeChild(listItem);
            removeTaskFromLocalStorage(taskText);
        }

        // Append the remove button to the task item and the task item to the list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }


    function saveTaskToLocalStorage(taskText){
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to remove task from local storage
    function removeTaskFromLocalStorage(){
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from local storage when the DOM is fully loaded
    loadTasksFromLocalStorage();

    // Attach the click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);


    // Attach the keypress event listener to the task input field to allow adding tasks with the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });


})