//DOM -Document Object Model

const notes  = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, eating a bit better'
}, {
    title:'Office modification',
    body: 'Get a new seat'
}];

// const p = document.querySelector('p'); //mathes the first p tag
// p.remove();

//Query all and remove

// const ps = document.querySelectorAll('p');

// ps.forEach(function(p){
//     p.textContent = "**********";
//     // console.log(p.textContent);
//     // p.remove();
// })

//Add a new element
// const newParagraph = document.createElement('h1');
// newParagraph.textContent = "This is a new element from JavaScript";
// document.querySelector('body').appendChild(newParagraph);


const filters = {
    searchText : ''
};

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#notes').innerHTML= "";
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    });
};

renderNotes(notes, filters);


document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent=" Button was click :o ";
});

document.querySelector('#remove-all').addEventListener('click', function(){
    console.log("ALERT DELETE ALL NOTES BUTTON HAS BEEN CLICKED X_X");
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    });
});

document.querySelector("#search-text").addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})

