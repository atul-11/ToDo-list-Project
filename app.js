const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo); // Changed from "click" to "change"

// Function to add a new todo
function addTodo(event) {
    event.preventDefault(); // Prevent form submission

    // Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create new todo item (li)
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Create completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append todo div to todo list
    todoList.appendChild(todoDiv);

    // Clear todo input value
    todoInput.value = "";
}

// Function to delete or mark todo as completed
function deleteCheck(e) {
    const item = e.target;
    const todo = item.parentElement;

    // Delete todo
    if (item.classList.contains("trash-btn")) {
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    // Mark todo as completed
    if (item.classList.contains("complete-btn")) {
        todo.classList.toggle("completed");
    }
}

// Function to filter todos
function filterTodo() {
    const todos = todoList.childNodes;

    todos.forEach(function(todo) {
        if (todo.nodeType === Node.ELEMENT_NODE) {
            switch (filterOption.value) {
                case "all":
                    todo.style.display = 'flex';
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "UnCompleted":
                    if (!todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        }
    });
}
