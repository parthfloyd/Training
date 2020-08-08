
//getSavedNotes()   | Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');
    return notesJSON !== null ? JSON.parse(notesJSON) : [];
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

    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button');

    //setup remove note button
    button.textContent = 'x';

    //setup note title text
    if(note.title.length > 0){
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }
    //setting url for textEl
    const noteHash = note.id;
    textEl.setAttribute("href",`edit.html#${noteHash}`);


    //appending elements to div
    noteEl.appendChild(button);
    noteEl.appendChild(textEl);

    //adding event listeners
    button.addEventListener('click',function(){
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    })
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
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    document.querySelector('#notes').innerHTML= "";

    filteredNotes.forEach( (note) =>  {
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
    });
};


//generate last edited message
const editInfo = () => {
    editedInfoElement.innerHTML = `Last edited ${moment(note.updatedAt).fromNow()}`;
}
