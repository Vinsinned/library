//Input text boxes to create a new book
let bookTitle = document.createElement('input');
let bookAuthor = document.createElement('input');
let bookPages = document.createElement('input');
let bookStatus = document.createElement('select');
bookTitle.type = 'text';
bookAuthor.type = 'text';
bookPages.type = 'text';
bookStatus.id = 'read-status';
//Add options for dropdown
let bookRead = document.createElement('option');
bookRead.value = 'read';
bookRead.text = 'read';
bookStatus.appendChild(bookRead);
let bookNotRead = document.createElement('option');
bookNotRead.value = 'not-read';
bookNotRead.text = 'not read';
bookStatus.appendChild(bookNotRead);

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
    this.info = () => {
        return (this.title + ' by ' + this.author + ', ' + this.pages + ', ' + this.status);
    }
}

function addBookToLibrary() {
    let newBook = new book('title', 'author', 'pages', 'status');
    myLibrary.push(newBook.info());
}

function bookLoop() {
    for (let objs of myLibrary) {
        let paragraph = document.createElement('p');
        paragraph.textContent = objs
        displayBooks.appendChild(paragraph);
    }
}

addBook.addEventListener('click', () => {
    addBookUI.style.cssText = 'background-color: yellow; position: absolute;';
    addBookUI.appendChild(bookTitle);
    addBookUI.appendChild(bookAuthor);
    addBookUI.appendChild(bookPages);
    addBookUI.appendChild(bookStatus);
    addBookUI.appendChild(submit);
});

submit.addEventListener('click', () => {
    addBookUI.style.cssText = 'background-color: white';
    addBookUI.removeChild(bookTitle);
    addBookUI.removeChild(bookAuthor);
    addBookUI.removeChild(bookPages);
    addBookUI.removeChild(bookStatus);
    addBookUI.removeChild(submit);
});

let Ulysses = new book('Ulysses', 'James Joyce', '542', 'not read');
let crimeAndPunishment = new book('Crime and Punishment', 'Fyodor Dostoevsky', '576', 'not read');
let firegirl = new book('Firegirl', 'Tony Abott', '90', 'read');
myLibrary.push(Ulysses.info());
myLibrary.push(crimeAndPunishment.info());
myLibrary.push(firegirl.info());
bookLoop();
console.log(myLibrary);