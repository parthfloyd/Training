import {renderTodos} from './views';
import {loadTodos, saveTodos, createTodo} from './todos';
import {setFilters} from './filters';


// Render initial todos
renderTodos();
// Set up search text handler
document.querySelector('#search-text').addEventListener('input', function(e){
    setFilters({
        searchText: e.target.value
    })
    renderTodos();
});

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change',function(e){
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos();
})

// Set up form submission handler
document.querySelector('#new-todo-form').addEventListener('submit', function(e){
    e.preventDefault();
    const newTodoText = e.target.elements.newTodo.value.trim();
    if(newTodoText !== ''){
        createTodo(newTodoText);
    } else {
        alert("Please enter a valid todo");
    }
    e.target.elements.newTodo.value = '';
    saveTodos();
    renderTodos();
});

// Bonus: Add a watcher for local storage
window.addEventListener('storage', function(e) {
    if(e.key === 'todos'){
        loadTodos();
        renderTodos();
    }
})