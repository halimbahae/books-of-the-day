async function fetchBookOfTheDay() {
    try {
        const response = await fetch('book_100.json'); // Ensure the path to your JSON file is correct
        const books = await response.json();

        if (!Array.isArray(books) || books.length === 0) {
            throw new Error('No books available');
        }

        const randomIndex = Math.floor(Math.random() * books.length);
        const bookOfTheDay = books[randomIndex];

        displayBook(bookOfTheDay);
    } catch (error) {
        console.error("Error fetching books:", error);
        displayBook({
            title: "Book Not Found", 
            author: "N/A", 
            country: "N/A",
            language: "N/A",
            pages: "N/A",
            year: "N/A",
            link: "#",
            imageLink: "images/placeholder.jpg",
            description: "No book could be fetched today."
        });
    }
}

function displayBook(book) {
    const bookTitleElement = document.getElementById('book-title');
    const bookAuthorElement = document.getElementById('book-author');
    const bookCountryElement = document.getElementById('book-country');
    const bookLanguageElement = document.getElementById('book-language');
    const bookPagesElement = document.getElementById('book-pages');
    const bookYearElement = document.getElementById('book-year');
    const bookLinkElement = document.getElementById('book-link');
    const bookImageElement = document.getElementById('book-image');

    // Assign values, trimming whitespace and newline characters from link and imageLink fields
    bookTitleElement.textContent = book.title;
    bookAuthorElement.textContent = `Author: ${book.author}`;
    bookCountryElement.textContent = `Country: ${book.country}`;
    bookLanguageElement.textContent = `Language: ${book.language}`;
    bookPagesElement.textContent = `Pages: ${book.pages}`;
    bookYearElement.textContent = `Year: ${book.year}`;
    
    // Trim newline and whitespace characters for link and image URL
    bookLinkElement.href = book.link.trim();
    bookImageElement.src = book.imageLink.trim();

    bookLinkElement.textContent = "Read more";
}

// Fetch the book of the day when the page loads
document.addEventListener("DOMContentLoaded", fetchBookOfTheDay);
