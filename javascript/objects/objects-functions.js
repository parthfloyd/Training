let myBook = {
    title: '1984',
    author: 'Geroge Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
};

let getSummary = function(book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary:  `${book.title} is ${book.pageCount} pages long`
    }

}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(getSummary(otherBook).summary);

//Challenge 

let tempConverter  = function (f) {
    let c = (f-32)*(5/9);

    return {
        c : c,
        f : f,
        k : c +273.15
    }
}

console.log(tempConverter(32));
console.log(tempConverter(80));