//getSavedTodos() | Fetch Existing todos from localStorage
const getSavedTodos =  ()  => {
    const todosJSON = localStorage.getItem('todos');

    if(todosJSON){
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
};


//saveTodos() | save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos',JSON.stringify(todos));
};


//renderTodos | Render Application based on filters.
const renderTodos = (todos, filters) => {
    const filteredTodos  = todos.filter((todo)  =>  {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompleteMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompleteMatch;
    });

   
    document.querySelector('#todos').innerHTML = "";

    const incompleteTodos = filteredTodos.filter((todo)  => !todo.completed);

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
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
    const todoEl = document.createElement('div');
    const todoCheck = document.createElement('input');
    const todoText = document.createElement('span');
    const button = document.createElement('button');


    //setup content of elements
        //button
        button.textContent = 'x';

        //checkbox
        todoCheck.setAttribute('type','checkbox')  // todoCheck.type = 'checkbox';
        todoCheck.checked = todo.completed;

        //text
        todoText.textContent = todo.text;
    
    //appending elements to the div
    todoEl.appendChild(todoCheck);
    todoEl.appendChild(todoText);
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
    summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    return summary;
};
