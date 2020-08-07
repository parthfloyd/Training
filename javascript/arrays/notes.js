// const notes  = ['Note 1', 'Note 2', 'Note 3'];



// console.log(notes.pop());
// notes.push('My New Note');

// console.log(notes.shift());
// console.log(notes.unshift("My First Note"));

// notes.splice(1,1,'This is the new second note');
// notes[2] = 'This is now the new note 3';

//looping over the array
// notes.forEach( function(item, index) {
//     console.log(`index : ${index} item : ${item}`);
// });



// //for loop 
// for (let count = 2; count >= 0; count-- ) {
//     console.log(count);
// }

// for(let count = 0; count < notes.length; count++){
//     console.log(`${count+1}. ${notes[count]}`);
// }

// //reverse 
// for(let count = notes.length - 1; count >= 0; count--){
//     console.log(`${count+1}. ${notes[count]}`);
// }

const notes  = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, eating a bit better'
}, {
    title:'Office modification',
    body: 'Get a new seat'
}]

// const index = notes.findIndex(function (note, index) {
//     console.log(note);
//     return note.title === 'Habbits to work on';
// });

// console.log(index);



const findNote = function(notes, noteTitle){
    return notes.find(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
};

const findNotes = function(notes, query) {
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    });

}



// console.log(findNotes(notes, 'work'));


//Sorting notes
const sortNotes = function(notes){
    notes.sort(function(a,b) {
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });
};

console.log(notes);
sortNotes(notes);
console.log(notes);


// const findNote = function(notes, noteTitle){
//     const index  = notes.findIndex(function (note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//     return notes[index];
// };

// const note = findNote(notes, 'office modification');
// console.log(note);