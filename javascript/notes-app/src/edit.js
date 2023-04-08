import {initializeEditPage, generateLastEdited} from './views';
import {updateNote, removeNote} from './notes';

const titleElement  = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const dateElement  = document.querySelector("#edited-info");
const removeElement = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);

initializeEditPage(noteId);
//Event handler
    //note title
    titleElement.addEventListener('input', function(e) {
        const note = updateNote(noteId, {
            title: e.target.value
        });
        dateElement.textContent = generateLastEdited(note.updatedAt);
    });

    //note body
    bodyElement.addEventListener('input', function(e) {
        const note = updateNote(noteId, {
            body: e.target.value
        });
        dateElement.textContent = generateLastEdited(note.updatedAt);
    });

    //remove button
    removeElement.addEventListener('click',function(e){
        removeNote(note.id);
        location.assign("index.html");
    });


//Global event handlers
window.addEventListener('storage', function(e){
    if(e.key === "notes"){
        initializeEditPage(noteId);
    }    
})

