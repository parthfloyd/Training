import moment from 'moment';
import {getFilters} from './filters';
import {sortNotes, getNotes} from './notes';
//generateNoteDOM(note) | Generate the DOM Structure for a note
const generateNoteDOM = (note) => {

    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const statusEl = document.createElement('p');

    //setup note title text
    if(note.title.length > 0){
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }
    textEl.classList.add('list-item__title')

    //setup the link
    noteEl.setAttribute("href",`edit.html#${note.id}`);
    noteEl.classList.add('list-item')
    //setup the status
    statusEl.textContent = 'Last Edited ' + moment(note.updatedAt).fromNow();
    statusEl.classList.add('list-item__subtitle')
    //appending elements to div
    noteEl.appendChild(textEl);
    noteEl.appendChild(statusEl);
    
    return noteEl;
};



//renderNotes(notes, filters) | Render Application note
const renderNotes = ()  => {
    const notesEl = document.querySelector('#notes');
    const filters = getFilters();
    const notes = sortNotes(filters.sortBy);
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    notesEl.innerHTML= "";

    if(filteredNotes.length > 0 ){
        filteredNotes.forEach( (note) =>  {
            const noteEl = generateNoteDOM(note);
            notesEl.appendChild(noteEl);
        });
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to show';
        emptyMessage.classList.add('empty-message');
        notesEl.appendChild(emptyMessage);
    }
    
};
//generate last edited message
const generateLastEdited = (note) => {
    return `Last edited ${moment(note.updatedAt).fromNow()}`;
}


const initializeEditPage = (noteId) => {
    //Elements
    const titleElement  = document.querySelector("#note-title");
    const bodyElement = document.querySelector("#note-body");
    const dateElement  = document.querySelector("#edited-info");
    const notes = getNotes();
    const note = notes.find(function(note){
        return note.id === noteId;
    });

    if(!note){
        location.assign("index.html");
    }


    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
}

export{generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage}

