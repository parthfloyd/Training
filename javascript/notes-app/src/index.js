import {createNote} from './notes';
import {setFilters} from './filters';
import {renderNotes} from './views';

renderNotes();

document.querySelector('#create-note').addEventListener('click', function(e) {
    const id = createNote();    
    location.assign(`edit.html#${noteId}`);
});

document.querySelector("#search-text").addEventListener('input', function(e){
    setFilters ({
        searchText: e.target.value
    })
    renderNotes();
});

document.querySelector('#filter-by').addEventListener('change', function(e){
    setFilters ({
        sortBy: e.target.value
    })
    renderNotes();
})

window.addEventListener('storage', function(e){
    if(e.key ==="notes"){
        renderNotes();
    }
})

