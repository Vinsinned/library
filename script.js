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
let bookDisplay = document.querySelector('#book-display');

let myLibrary = [];
let titleParagraph = null;
let authorParagraph = null;
let pagesParagraph = null;
let statusParagraph = null;
let selectStatus = null;
let tableButtons = null;
let selectToggleButtons = null;
let selectRemoveButtons = null;
////////////////////////////////////////

class book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status; 
    }
    toggleBookRead() {
        myLibrary[number].status = 'not read'
    }
    toggleBookNotRead() {
        myLibrary[number].status = 'read';
    }
}

let ulysses = new book('Ulysses', 'James Joyce', '542', 'not read');
let crimeAndPunishment = new book('Crime and Punishment', 'Fyodor Dostoevsky', '576', 'not read');
let firegirl = new book('Firegirl', 'Tony Abott', '90', 'read');
myLibrary.push(ulysses);
myLibrary.push(crimeAndPunishment);
myLibrary.push(firegirl);
bookLoop();
console.log(myLibrary);

function addBookToLibrary() {
    let newBook = new book('title', 'author', 'pages', 'status');
    myLibrary.push(newBook.info());
}

//Loops through myLibrary and shows books in a table
let number = null;
function bookLoop() {
    let selectDOMS = document.querySelector('#book-display');
    let createHeaders = document.createElement('tr');
    selectDOMS.innerHTML = '';
    let createDataTitle = document.createElement('th');
    let createDataAuthor = document.createElement('th');
    let createDataPages = document.createElement('th');
    let createDataStatus = document.createElement('th');
    createDataTitle.textContent = 'Title';
    createDataAuthor.textContent = 'Author';
    createDataPages.textContent = 'Pages';
    createDataStatus.textContent = 'Status';
    createHeaders.appendChild(createDataTitle);
    createHeaders.appendChild(createDataAuthor);
    createHeaders.appendChild(createDataPages);
    createHeaders.appendChild(createDataStatus);
    selectDOMS.appendChild(createHeaders)
    let checkSimilarity = null;
    let selectToggle = null;
    let selectRemoveButton = null;
    for (let objs of myLibrary) {
        let createRow = document.createElement('tr');
        createRow.className = 'books';
        let createDataTitle = document.createElement('td');
        let createDataAuthor = document.createElement('td');
        let createDataPages = document.createElement('td');
        let createDataStatus = document.createElement('td');
        let toggleRead = document.createElement('button');
        let tableButtons = document.createElement('button');
        createDataTitle.textContent = objs.title;
        createDataAuthor.textContent = objs.author;
        createDataPages.textContent = objs.pages;
        createDataStatus.textContent = objs.status;
        toggleRead.textContent = 'Toggle'
        tableButtons.textContent = 'Remove'
        toggleRead.setAttribute('data-index', myLibrary.indexOf(objs));
        tableButtons.setAttribute('data-index', myLibrary.indexOf(objs));
        createDataTitle.setAttribute('data-index', myLibrary.indexOf(objs));
        toggleRead.className = 'toggle';
        tableButtons.className = 'remove';
        toggleRead.style.cssText = 'position: relative; margin-left: 20px;';
        tableButtons.style.cssText = 'margin-left: 10px;'
        createRow.appendChild(createDataTitle);
        createRow.appendChild(createDataAuthor);
        createRow.appendChild(createDataPages);
        createRow.appendChild(createDataStatus);
        createRow.appendChild(tableButtons);
        createRow.appendChild(toggleRead);
        selectDOMS.appendChild(createRow);
        checkSimilarity = createDataTitle.getAttribute('data-index');
        selectToggle = toggleRead.getAttribute('data-index');
        selectRemoveButton = tableButtons.getAttribute('data-index');
    }
    let bookToggle = document.querySelectorAll('.toggle');
    let bookRemove = document.querySelectorAll('.remove');
    bookToggle.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            if (myLibrary[toggle.getAttribute('data-index')].status == 'read') {
                number = toggle.getAttribute('data-index');
                myLibrary[selectToggle].toggleBookRead();
                bookLoop();
            } else if (myLibrary[toggle.getAttribute('data-index')].status == 'not read') {
                number = toggle.getAttribute('data-index');
                myLibrary[selectToggle].toggleBookNotRead();
                bookLoop();
            }
        });
    });
    bookRemove.forEach((remove) => {
        remove.addEventListener('click', () => {
            if (selectRemoveButton == checkSimilarity && selectRemoveButton != 0) {
                myLibrary.splice(`${remove.getAttribute('data-index')}`, 1);
                bookLoop();
            }
        })
    })
}

//Prompt for adding a new book
let titlePrompt = document.createElement('p');
let authorPrompt = document.createElement('p');
let pagesPrompt = document.createElement('p');
let statusPrompt = document.createElement('p');
addBook.addEventListener('click', () => {
    addBookUI.style.cssText = `background-color: gray; position: absolute; 
    width: 500px; height: 500px; display: flex; 
    flex-direction: column;align-items: center;
    margin-left: auto; margin-right: auto; top: 10%;
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

let classForToggle = null;
submit.addEventListener('click', () => {
    addBookUI.style.cssText = '';
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let status = (bookStatus.value);
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
