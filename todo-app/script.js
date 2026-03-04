const apiURL = 'http://localhost:3000/todos';
const todoList = document.getElementById('todo-list');
const newTodoForm = document.getElementById('new-todo-form');
const newTodoInput = document.getElementById('new-todo-input');

// Function to fetch and display todos
async function fetchTodos() {
    const response = await fetch(apiURL);
    const todos = await response.json();
    todoList.innerHTML = '';
    todos.forEach(todo => addTodoToDOM(todo));
}

// Function to add a single todo item to the DOM
function addTodoToDOM(todo) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="${todo.completed ? 'completed' : ''}">${todo.task}</span>
        <div class = "button"> 
        <button onclick="deleteTodo('${todo.id}')">Delete</button>
        <button onclick="doneTodo('${todo.id}', ${todo.completed})">Complete</button>
        </div>
  
    `;
    todoList.appendChild(li);
}

// Function to handle new todo form submission (POST request)
newTodoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newTask = newTodoInput.value;
    const newTodo = { task: newTask, completed: false };

    await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    });

    newTodoInput.value = '';
    await fetchTodos(); // Refresh the list
});

//Function to complete the assignment in the db
async function doneTodo(id, completed){
    await fetch(`${apiURL}/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json',
        },
        body: JSON.stringify({completed:!completed}),

    });
    await fetchTodos(); // Refresh the list
}

// Function to delete a todo (DELETE request)
async function deleteTodo(id) {
    await fetch(`${apiURL}/${id}`, {
        method: 'DELETE',
    });
    await fetchTodos(); // Refresh the list
}

// Initial fetch when the page loads
fetchTodos().catch(console.error);


