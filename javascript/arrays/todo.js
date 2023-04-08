// const todos = ["Fix the Computer", "Clean the Room" , "Send an email", "Contact mailman", "Relax"];

// console.log(`You have ${todos.length} todos`);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length-2]}`);



/*
    Delete the 3rd item
    Add a new item into end
    Remove the first item from the list
*/
// console.log("Todos: " + todos);

// console.log(todos.splice(2,1));
// todos.push("Exercise");
// console.log(todos.shift());

// console.log("Todos: " + todos);



/*
    Looping over the todos
*/

// todos.forEach( function (item, index) {
//     console.log(`${index + 1}. ${item}`);
// });

// for(let count = 0; count < todos.length ; count++) {
//     console.log(`${count + 1}. ${todos[count]}`);
// }




/*
    Convert array to array of objects
    create function to remove todo by text value
*/

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

const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });
    if(index >= 0){
        todos.splice(index,1);
    }
};
// console.log(todos);
// deleteTodo(todos, "clean the room");
// console.log(todos);


/* 
    Create getThingsTodo
*/
const getThingsTodo = function(todos) {
    return todos.filter( function(todos) {
        return !todos.completed;
    });
};

// console.log(getThingsTodo(todos));

const findTodo = function(todos, query) {
    return todos.filter( function (todo) {
        return todo.text.toLowerCase().includes(query.toLowerCase());
    })
}

// console.log(findTodo(todos, "ma"));


/*
    Create sorting function for todos 
*/

const sortTodos = function(todos) {
    todos.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1;
        } else if(a.completed && !b.completed){
            return 1;
        } else {
            return 0;
        }
    });
};

console.log(todos);
sortTodos(todos);
console.log(todos);