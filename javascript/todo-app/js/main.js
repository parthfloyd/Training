const todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
};

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#new-todo-form').addEventListener('submit', function(e){
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        text: e.target.elements.newTodo.value,
        completed: false
    });
    e.target.elements.newTodo.value = '';
    saveTodos(todos);
    renderTodos(todos,filters);
});

document.querySelector('#hide-completed').addEventListener('change',function(e){
    if(e.target.checked){
        filters.hideCompleted = true;
    } else {
        filters.hideCompleted = false;
    }
    renderTodos(todos, filters);
})


/*
    DELETED CONTENT

    {
    text:'Fix the Computer',
    completed: true
}, {
    text:"Clean the Room",
    completed: false
}, {
    text:"Send an email",
    completed: true
}, {
    text:"Contact mailman",
    completed: false
}, {
    text:"Relax",
    completed: false
}

// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function(paragraph){
//     if(paragraph.textContent.toLowerCase().includes("the")){
//         paragraph.remove();
//     }
// });




/*
    You have 2 todos left
    add p for each todo text value
*/
//First  and second Task combined
// let notCompletedCount = 0;
// todos.forEach(function (todo){

//     const todoText = document.createElement('h4');
//     todoText.textContent = todo.text;
//     document.querySelector('body').appendChild(todoText);

//     if(!todo.completed){
//         notCompletedCount+=1;
//     }
// });
// const firstMessage = document.createElement('h2');
// firstMessage.textContent = `You have ${notCompletedCount} todos left!`;
// document.querySelector('body').appendChild(firstMessage);


// //todo button event listenerr
// document.querySelector("#add-todo").addEventListener('click',function(e){
//     console.log("Adding some notes!...");
// });