let myLibrary = [];

function book() {
    book.title = prompt('Name of Book');
    book.author = prompt('Author of Book');
    book.pages = prompt('Book Pages');
    book.status = () => {
        let status = prompt('Did you read the book yet? (yes/no)');
        if (status == 'yes' || status == 'y') {
            return 'read';
        } else if (status == 'no' || status == 'n') {
            return 'not read';
        } else {
            book.status();
        }
    }
    console.log(book.title, book.author, book.pages, book.status());
}

function addBookToLibrary() {
    let addBook = book();
    myLibrary.push(addBook);
}
console.log(myLibrary);