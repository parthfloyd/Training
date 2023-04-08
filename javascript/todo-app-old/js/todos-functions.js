'use strict';
//getSavedTodos() | Fetch Existing todos from localStorage
const getSavedTodos =  ()  => {
    const todosJSON = localStorage.getItem('todos');
    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        return [];
    }
};


//saveTodos() | save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos',JSON.stringify(todos));
};


//renderTodos | Render Application based on filters.
const renderTodos = (todos, filters) => {
    const todosEl = document.querySelector('#todos');
    const filteredTodos  = todos.filter((todo)  =>  {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompleteMatch = !filters.hideCompleted || !todo.completed;
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

//removeTodo(id) | remove todo from the todos list
const removeTodo = (id) =>  {
    const todoIndex  = todos.findIndex( (todo)  => todo.id  === id);

    if(todoIndex > -1) {
        todos.splice(todoIndex,1);
    }
};

//toggleTodo | change completed status of the given todo
const toggleTodo = (id)  => {
    const todo = todos.find( (todo) => todo.id === id);

    if(todo !== undefined){
        todo.completed = !todo.completed;
    }
};

//generateTodoDOM(todo) | Get the DOM elements for an individual note
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
            saveTodos(todos); // saving that todo to local storage
            renderTodos(todos, filters); //rendering the page to show current todos list
        })

        //Checkbox
        todoCheck.addEventListener('change', function(){
            toggleTodo(todo.id);
            saveTodos(todos);
            renderTodos(todos,filters);
        })
        

    return todoEl;
}

//generateSummaryDOM | Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos)  => {
    const summary = document.createElement('h2');
    summary.classList.add('list-title');
    const todoGrammar = incompleteTodos.length !== 1 ? 'todos' : 'todo' ;
    summary.textContent = `You have ${incompleteTodos.length} ${todoGrammar} left.`;
    return summary;
};
