const btn = document.getElementById('add_btn');
const taskInput = document.getElementById('task');
const taskPriority = document.getElementById('priority');
const todoItems = document.getElementById('todo_Items');


btn.addEventListener("click", () => {
    let taskText = taskInput.value;
    let priorityText = taskPriority.value;

    if(taskText) { // if text is not empty >>>
        getNewTodo(taskText, priorityText);
        taskInput.value = "";
        taskPriority.value = "";
        console.log("Hello");
        
    }
});

// ... function to create a new todo >>>
function getNewTodo(taskText, priorityText){

    // ... creating new todo list >>>
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    todoItem.innerHTML = `
        <span>Name: <strong>${taskText}</strong> - Priority: <strong>${priorityText}</strong> </span>
        <div class = "CrudClass">
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        </div>
    `;
    todoItems.appendChild(todoItem);

    const deleteButton = todoItem.querySelector('.delete-button');
    const editButton = todoItem.querySelector('.edit-button');

    // ... Delete the Todo items >>>
    
    deleteButton.addEventListener('click', function() {
        todoItems.removeChild(todoItem);
    });

    // ... Edit the Todo items >>>
    editButton.addEventListener('click', function() {
        const newName = prompt("Enter New Name: ", taskText);
        const newPriority = prompt("Enter New Priority: ", priorityText);

        if(newName && newPriority) {
            todoItem.querySelector('span').innerHTML = `
                <span>Name: <strong>${newName}</strong> - Priority: <strong>${newPriority}</strong> </span>
            `
        }
        else {
            alert("Please enter both name and priority!");
        }
        
    });
}