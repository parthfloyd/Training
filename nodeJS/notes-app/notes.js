const fs = require('fs');
const chalk = require('chalk');

//Function to Add the note
const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote) {
        notes.push({
            title,
            body
        });
    
        saveNotes(notes);
        console.log(chalk.green('New Note Added'));
    } else {
        console.log(chalk.red('Note title taken!'));
    }
    
}

//Function to remove the note
const removeNote = (title) => {
    //Looading notes
    const notes = loadNotes();
    //Finding the note
    const newNotes = notes.filter((note) => note.title !== title);
    if(notes.length !== newNotes.length) {
        saveNotes(newNotes);
        console.log(chalk.bgGreen.black.bold(`Note Removed Successfully with title :${title} `));
    } else {
        console.log(chalk.bold.white.bgRed('No Note found'));
    }
    ////ALTERNATIVE -better if you have more notes
    // const noteIndex = notes.findIndex((note) => note.title === title);
    // //removing note from the notes array if found
    // if(noteIndex>-1) { //using truthy-falsy
    //     notes.splice(noteIndex,1);
    //     //saving the array to the file
    //     saveNotes(notes);
    //     //printing an acknowledgement
    //     console.log(chalk.bgGreen.black.bold(`Note Removed Successfully with title :${title} `);
    // } else {
    //     console.log(chalk.bold.white.bgRed('No Note found'));
    // }
}


//Function to list notes
const listNotes = () => {
    const notes  = loadNotes();

    console.log(chalk.bgBlueBright.white.bold("Your Notes: "));

    if(notes.length > 0){
        notes.forEach((note) => console.log(chalk.bgMagenta.black.bold("Title: " + note.title)));
    } else {
        console.log(chalk.bgRedBright.white.bold('No Notes Found!'));
    }
}

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.green.bold("TITLE: ") + note.title);
        console.log(chalk.green.bold("BODY: ") + note.body);
    } else {
        console.log(chalk.bgRed.bold("Sorry! No note found with the title: " + title));
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes)); //Adding notes to the file, stringifying it first
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer);
    } catch (e) {
        return []
    }
    
}
module.exports = {
    addNote: addNote,
    removeNote,
    listNotes,
    readNote
};

//For Debugging
//node inspect file_name.js ..
//node --inspect-brk filename.js //if the above one throws an error in windows

//in chrome
//chrome://inspect