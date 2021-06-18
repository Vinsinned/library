//Input text boxes to create a new book
let bookTitle = document.createElement('input');
let bookAuthor = document.createElement('input');
let bookPages = document.createElement('input');
let bookStatus = document.createElement('input');
bookTitle.type = 'text';
bookAuthor.type = 'text';
bookPages.type = 'text';
bookStatus.type = 'text';
//Submit button
let submit = document.createElement('button');
submit.type = 'submit';
//Div selectors
let addBook = document.querySelector('#add-book');
let addBookUI = document.querySelector('#submit-form')
let displayBooks = document.querySelector('#book-display');

let myLibrary = [];

function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    let newBook = new book('title', 'author', 'pages', 'status');
    myLibrary.push(newBook);
}

addBook.addEventListener('click', () => {
    addBookUI.style.cssText = 'background-color: yellow';
    addBookUI.appendChild(bookTitle);
    addBookUI.appendChild(bookAuthor);
    addBookUI.appendChild(bookPages);
    addBookUI.appendChild(bookStatus);
    addBookUI.appendChild(submit);
});

let Ulysses = new book('Ulysses', 'James Joyce', '542', 'not read');
let crimeAndPunishment = new book('Crime and Punishment', 'Fyodor Dostoevsky', '576', 'not read');
let firegirl = new book('Firegirl', 'Tony Abott', '90', 'read');
myLibrary.push(Ulysses);
myLibrary.push(crimeAndPunishment);
myLibrary.push(firegirl);
console.log(myLibrary);