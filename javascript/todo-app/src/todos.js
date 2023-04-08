import uuidv4 from 'uuid/dist/v4';
import moment from 'moment';
// Setup the empty todos array
let todos = []

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos !== null){
        todos = JSON.parse(storedTodos);
    } else {
        todos = [];
    }
};

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos;
// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
    const timestamp = moment().valueOf();
    
    todos.push({
        id: uuidv4(),
        text,
        completed: false,
        createdAt: timestamp,
        updatedAt: timestamp
    });
    
    saveTodos();
}


// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if(todo){
        todos.pop(todo);
        saveTodos();    
    }
} 

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if(todo){
        todo.completed = !todo.completed;
        saveTodos();
    }
    
}
// Make sure to call loadTodos and setup the exports
loadTodos();
export{loadTodos, saveTodos, getTodos, removeTodo, toggleTodo, createTodo};