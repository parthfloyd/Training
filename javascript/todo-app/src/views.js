import {getTodos, toggleTodo, saveTodos, removeTodo} from './todos';
import {getFilters} from './filters';

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todos = getTodos();
    const {searchText, hideCompleted} = getFilters();
    const todosEl = document.querySelector('#todos');
    const filteredTodos  = todos.filter((todo)  =>  {
        const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase());
        const hideCompleteMatch = !hideCompleted || !todo.completed;
        return searchTextMatch && hideCompleteMatch;
    });

   
    todosEl.innerHTML = "";

    const incompleteTodos = filteredTodos.filter((todo)  => !todo.completed);

    todosEl.appendChild(generateSummaryDOM(incompleteTodos));
    if(filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todosEl.appendChild(generateTodoDOM(todo));
        });    
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = "No to-dos to show";
        emptyMessage.classList.add('empty-message');
        todosEl.append(emptyMessage);
    }
    
};
// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) =>  {
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const todoCheck = document.createElement('input');
    const todoText = document.createElement('span');
    const button = document.createElement('button');


    //setup content of elements
        //button
        button.textContent = 'remove';
        button.classList.add('button','button--text');

        //checkbox
        todoCheck.setAttribute('type','checkbox')  // todoCheck.type = 'checkbox';
        todoCheck.checked = todo.completed;

        //text
        todoText.textContent = todo.text;
    

        //container
        todoEl.classList.add('list-item');
        containerEl.classList.add('list-item__container');
        
    //appending elements to the div
    containerEl.appendChild(todoCheck);
    containerEl.appendChild(todoText);
    todoEl.appendChild(containerEl);
    todoEl.appendChild(button);

    //adding event listeners

        //Button
        button.addEventListener('click' , function(){
            removeTodo(todo.id); //removing the todo from the todos
            saveTodos(); // saving that todo to local storage
            renderTodos(); //rendering the page to show current todos list
        })

        //Checkbox
        todoCheck.addEventListener('change', function(){
            toggleTodo(todo.id);
            saveTodos();
            renderTodos();
        })
        

    return todoEl;
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (incompleteTodos)  => {
    const summary = document.createElement('h2');
    summary.classList.add('list-title');
    const todoGrammar = incompleteTodos.length !== 1 ? 'todos' : 'todo' ;
    summary.textContent = `You have ${incompleteTodos.length} ${todoGrammar} left.`;
    return summary;
};
// Make sure to set up the exports
export {renderTodos, generateSummaryDOM, generateTodoDOM};