const apiBaseUrl = 'http://localhost:3000/api';

// Function to create a new book
async function createBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    const response = await fetch(`${apiBaseUrl}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, author, publicationYear: year, genre })
    });

    if (response.ok) {
        alert('Book added successfully');
        loadBooks();
    } else {
        alert('Error adding book');
    }
}

// Function to load books
async function loadBooks() {
    const response = await fetch(`${apiBaseUrl}/books`);
    const data = await response.json();

    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = '';
    data.books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.textContent = `${book.title} by ${book.author.name} (${book.publicationYear}) - ${book.genre}`;
        booksDiv.appendChild(bookElement);
    });
}

// Initial load of books
loadBooks();