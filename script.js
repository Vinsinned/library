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
let appendButtons = document.querySelector('#buttons');
let bookDisplay = document.querySelector('#book-display');
let selectButtons = document.querySelectorAll('#index-number');

let myLibrary = [];
let titleParagraph = null;
let authorParagraph = null;
let pagesParagraph = null;
let statusParagraph = null;
let selectStatus = null;
let tableButtons = null;

////////////////////////////////////////

let ulysses = new book('Ulysses', 'James Joyce', '542', 'not read');
let crimeAndPunishment = new book('Crime and Punishment', 'Fyodor Dostoevsky', '576', 'not read');
let firegirl = new book('Firegirl', 'Tony Abott', '90', 'read');
myLibrary.push(ulysses);
myLibrary.push(crimeAndPunishment);
myLibrary.push(firegirl);
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
    selectButtons.innerHTML = '';
    appendTitle.innerHTML = '';
    appendAuthor.innerHTML = '';
    appendPages.innerHTML = '';
    appendStatus.innerHTML = '';
    appendButtons.innerHTML = '';
    let selectStatus = null;
    let selectRemoveButton = null;
    for (let objs of myLibrary) {
        titleParagraph = document.createElement('p');
        authorParagraph = document.createElement('p');
        pagesParagraph = document.createElement('p');
        statusParagraph = document.createElement('p');
        tableButtons = document.createElement('button');
        tableButtons.id = 'index-number';
        titleParagraph.textContent = objs.title
        appendTitle.appendChild(titleParagraph);
        authorParagraph.textContent = objs.author;
        appendAuthor.appendChild(authorParagraph);
        pagesParagraph.textContent = objs.pages;
        appendPages.appendChild(pagesParagraph);
        statusParagraph.textContent = objs.status;
        appendStatus.appendChild(statusParagraph);
        statusParagraph.setAttribute('data-index', myLibrary.indexOf(objs));
        tableButtons.setAttribute('data-index', myLibrary.indexOf(objs));
        appendButtons.appendChild(tableButtons);
        selectStatus = statusParagraph;
        selectRemoveButton = tableButtons;
    }
    selectButtons = document.querySelectorAll('button');
        selectButtons.forEach((button) => {
            button.addEventListener('click', () => {
            console.log(button.getAttribute('data-index'));
            if (selectStatus.getAttribute('data-index') == selectRemoveButton.getAttribute('index') && selectRemoveButton.getAttribute('index') != 0) {
                let logIndex = selectRemoveButton.dataset.index;
                myLibrary.splice(`${selectRemoveButton.dataset.index}`, 1);
                bookLoop();
            }
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
    appendTitle.innerHTML = '';
    appendAuthor.innerHTML = '';
    appendPages.innerHTML = '';
    appendStatus.innerHTML = '';
    bookLoop();
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
});