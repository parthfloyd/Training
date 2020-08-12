const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function(note){
    return note.id === noteId;
});

if(!note){
    location.assign("index.html");
}

//Elements
const titleElement  = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const editedInfoElement  = document.querySelector("#edited-info");

titleElement.value = note.title;
bodyElement.value = note.body;

editInfo();
//Event handler
    //note title
    titleElement.addEventListener('input', function() {
        note.title = titleElement.value;
        note.updatedAt = moment().valueOf();
        editInfo();
        saveNotes(notes);
    });

    //note body
    bodyElement.addEventListener('input', function(e) {
        note.body = bodyElement.value;
        note.updatedAt = moment().valueOf();
        editInfo();
        saveNotes(notes);
    });

    //remove button
    removeElement.addEventListener('click',function(e){
        removeNote(note.id);
        saveNotes(notes);
        location.assign("index.html");
    });


//Global event handlers
window.addEventListener('storage', function(e){
    if(e.key === "notes"){
        notes = JSON.parse(e.newValue);
        note = notes.find(function(note){
            return note.id === noteId;
        });

        if(!note){
            location.assign("index.html");
        }

        titleElement.value = note.title;
        bodyElement.value = note.body;
        editInfo();
    }    
})

