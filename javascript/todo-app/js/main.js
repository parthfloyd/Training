const todos = [{
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
}];

//setup div contain for todos : DONE
//setup filters 
//render todos

const filters = {
    searchText: ''
};

const renderTodos = function(todos, filters){
    const filteredTodos  = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#todos').innerHTML = "";

    filteredTodos.forEach(function(todo){
        const todoText = document.createElement('p');
        todoText.textContent = todo.text;
        document.querySelector('#todos').appendChild(todoText);

    });
};

renderTodos(todos, filters);



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


//todo button event listenerr
document.querySelector("#add-todo").addEventListener('click',function(e){
    console.log("Adding some notes!...");
});

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});