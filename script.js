//Input text boxes to create a new book
let bookTitle = document.createElement('input');
let bookAuthor = document.createElement('input');
let bookPages = document.createElement('input');
let bookStatus = document.createElement('select');
bookTitle.type = 'text';
bookAuthor.type = 'text';
bookPages.type = 'text';
bookStatus.id = 'read-status';
bookTitle.classList.add('newBook');
bookAuthor.classList.add('newBook');
bookPages.classList.add('newBook');
bookStatus.classList.add('newBook');
//Add options for dropdown
let bookRead = document.createElement('option');
bookRead.value = 'read';
bookRead.text = 'read';
bookStatus.appendChild(bookRead);
let bookNotRead = document.createElement('option');
bookNotRead.value = 'not read';
bookNotRead.text = 'not read';
bookStatus.appendChild(bookNotRead);

//Submit button
let submit = document.createElement('button');
submit.type = 'submit';
submit.textContent = 'Submit';
submit.style.cssText = 'margin-top: 20px;'
//Div selectors
let addBook = document.querySelector('#add-book');
let addBookUI = document.querySelector('#submit-form')
let displayBooks = document.querySelector('#book-prompt');
let appendTitle = document.querySelector('#title');
let appendAuthor = document.querySelector('#author');
let appendPages = document.querySelector('#pages');
let appendStatus = document.querySelector('#status');
let bookDisplay = document.querySelector('#book-display');
let selectButtons = document.querySelectorAll('button');

let myLibrary = [];
let removeTables = null;

////////////////////////////////////////

let ulysses = new book('Ulysses', 'James Joyce', '542', 'not read');
let crimeAndPunishment = new book('Crime and Punishment', 'Fyodor Dostoevsky', '576', 'not read');
let firegirl = new book('Firegirl', 'Tony Abott', '90', 'read');
myLibrary.push(ulysses);
bookLoop();
console.log(myLibrary);

function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    let newBook = new book('title', 'author', 'pages', 'status');
    myLibrary.push(newBook.info());
}

function bookLoop() {
    let titleParagraph = document.createElement('p');
    let authorParagraph = document.createElement('p');
    let pagesParagraph = document.createElement('p');
    let statusParagraph = document.createElement('p');
    let removeButton = document.createElement('button');
    for (let objs of myLibrary) {
        titleParagraph.textContent = objs.title
        appendTitle.appendChild(titleParagraph);
        authorParagraph.textContent = objs.author;
        appendAuthor.appendChild(authorParagraph);
        pagesParagraph.textContent = objs.pages;
        appendPages.appendChild(pagesParagraph);
        statusParagraph.textContent = objs.status;
        appendStatus.appendChild(statusParagraph);
        statusParagraph.setAttribute('index', myLibrary.indexOf(objs));
        removeButton.setAttribute('index', myLibrary.indexOf(objs));
        bookDisplay.appendChild(removeButton);
        removeButton.id = 'index-number';
    }
    selectButtons = document.querySelectorAll('button');
    selectButtons.forEach((button) => {
        removeTables = button.addEventListener('click', () => {
            console.log(button.getAttribute('index'));
        })
    })
    
}

let titlePrompt = document.createElement('p');
let authorPrompt = document.createElement('p');
let pagesPrompt = document.createElement('p');
let statusPrompt = document.createElement('p');
addBook.addEventListener('click', () => {
    addBookUI.style.cssText = `background-color: #629460; position: absolute; 
    width: 500px; height: 500px; display: flex; 
    flex-direction: column;align-items: center;
    margin-left: auto;margin-right: auto;margin-top: 70px;
    left: 0; right: 0; text-align: center;`;
    titlePrompt.textContent = 'Title of Book:';
    addBookUI.appendChild(titlePrompt);
    bookTitle.style.cssText = 'margin: 20px 0px 10px 0px;'
    addBookUI.appendChild(bookTitle);
    authorPrompt.textContent = 'Author of Book:';
    addBookUI.appendChild(authorPrompt);
    bookAuthor.style.cssText = 'margin: 20px 0px 10px 0px;'
    addBookUI.appendChild(bookAuthor);
    pagesPrompt.textContent = 'Pages of Book:';
    addBookUI.appendChild(pagesPrompt);
    bookPages.style.cssText = 'margin: 20px 0px 10px 0px;'
    addBookUI.appendChild(bookPages);
    statusPrompt.textContent = 'Current Book Status:';
    addBookUI.appendChild(statusPrompt);
    bookStatus.style.cssText = 'margin: 20px 0px 10px 0px;'
    addBookUI.appendChild(bookStatus);
    addBookUI.appendChild(submit);
});

submit.addEventListener('click', () => {
    addBookUI.style.cssText = '';
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let status = bookStatus.value;
    addBookUI.removeChild(bookTitle);
    addBookUI.removeChild(bookAuthor);
    addBookUI.removeChild(bookPages);
    addBookUI.removeChild(bookStatus);
    addBookUI.removeChild(submit);
    addBookUI.removeChild(titlePrompt);
    addBookUI.removeChild(authorPrompt);
    addBookUI.removeChild(pagesPrompt);
    addBookUI.removeChild(statusPrompt);
    let createBook = new book(title, author, pages, status);
    myLibrary.push(createBook);
    bookLoop();
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
});

