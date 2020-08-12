'use strict';

//getSavedNotes()   | Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');

    try {
        return notesJSON !== null ? JSON.parse(notesJSON) : [];
    } catch(e) {
        return [];
    }

};

//saveNotes(notes) | Save notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

//remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note)  => note.id === id);

    if(noteIndex> -1) {
        notes.splice(noteIndex,1);
    }
}

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



//sort notes
const sortNotes = (notes, sortBy) => {
    if(sortBy === "byEdited"){
        return notes.sort( (a,b) =>  {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        });
    } else if (sortBy === "byCreated") {
        return notes.sort( (a, b)  => {
            if(a.createdAt > b.createdAt){
                return -1;
            } else if(a.createdAt < b.createdAt){
                return 1;
            } else {
                return 0;
            }
        });
    } else {
        return notes.sort( (a,b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1;
            } else {
                return 0;
            }
        });
    }
};

//renderNotes(notes, filters) | Render Application note
const renderNotes = (notes, filters)  => {
    const notesEl = document.querySelector('#notes');
    notes = sortNotes(notes, filters.sortBy);
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
const editInfo = () => {
    editedInfoElement.innerHTML = `Last edited ${moment(note.updatedAt).fromNow()}`;
}
