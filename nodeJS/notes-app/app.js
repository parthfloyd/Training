const chalk  = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const notes = require('./notes');
const { readNote } = require('./notes');


//Crate add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    title: {
        describe: 'Title of note to be removed',
        demandOption: true,
        type: 'string'
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

//List notes
yargs.command({
    command: 'list',
    describe: 'List Available Notes',
    handler(){
        notes.listNotes();
    }
});

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    title: {
        describe: "Title of the Note you want to read",
        demandOption: true,
        type: 'string'
    },
    handler(argv) {
        readNote(argv.title);
    }
});



yargs.parse();
// console.log(yargs.argv);

// const msg = getNotes();
// console.log(msg);

// console.log(chalk.blue.bold("Success Yay its working!"));

// console.log(process.argv[2]);


// const validator = require('validator');
// console.log(validator.isEmail('god@gmail.com'));
// console.log(validator.isURL('www.google.com'));


////Importing own file
// const add = require('./utils.js');

// console.log(add(43,53));

// //To write in a file
// const fs = require('fs');

// fs.writeFileSync('notes.txt','Hello There! ');
// fs.appendFileSync('notes.txt', 'My Name is Parth Panchal!!');

