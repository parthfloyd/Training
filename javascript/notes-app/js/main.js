//DOM -Document Object Model

let notes  = getSavedNotes();

const filters = {
    searchText : '',
    sortBy: 'byEdited'
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
    
    const noteId = uuidv4();
    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    });
    saveNotes(notes);

    location.assign(`edit.html#${noteId}`);

});

document.querySelector("#search-text").addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});



document.querySelector('#filter-by').addEventListener('change', function(e){
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
})

window.addEventListener('storage', function(e){
    if(e.key ==="notes"){
        notes = JSON.parse(e.newValue);
        renderNotes(notes,filters);
    }
})











/*


practiced and removed content


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




// const user = {
//     name: "Parth",
//     age: 21
// }
// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem('user',userJSON);



// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`); 

// document.querySelector('#remove-all').addEventListener('click', function(){
//     console.log("ALERT DELETE ALL NOTES BUTTON HAS BEEN CLICKED X_X");
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove();
//     });
// });


// document.querySelector("#name-form").addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value = '';
// });


// document.querySelector('#for-fun').addEventListener('change', function(e){
//     console.log(e.target.checked);
// });



//Unix Epoch - January 12st 1970 00:00:00 
// //
// const now = new Date();
// console.log(now);
// const timestamp = now.getTime();

// const myDate = new Date(timestamp);
// // console.log(myDate.getFullYear());
// // console.log(`Year: ${now.getFullYear()} Month: ${now.getMonth()} Day of Month: ${now.getDate()}` );
// // console.log(`Hour: ${now.getHours()} Minutes: ${now.getMinutes()} Seconds: ${now.getSeconds()}`)

// const date1 = new Date('September 9 2001 9:53:00');
// const date2 = new Date('September 27 2007 17:43:00');
// console.log(date1.getTime());
// console.log(date2.getTime());

// if(date1.getTime() < date2.getTime()){
//     console.log(date1);
//     console.log(date1.toTimeString());
// } else {
//     console.log(date2);
// }


// const now = moment();

// now.subtract(1,'year').subtract(20,'days')
// console.log(now.toString());
// //November 3rd, 2003
// console.log(now.format("MMMM Do, YYYY"));
// console.log(now.fromNow());
// const nowTimestamp = now.valueOf();
// console.log(nowTimestamp);

// const bday = moment('1999-06-21 00:20:54');
// console.log(bday.format("MMMM D, YYYY"));

*/