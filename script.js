async function fetchBookOfTheDay() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);

    // Fallback list in case of an error
    const fallbackBooks = [
        { id: 1, title: "The Power of Now", author: "Eckhart Tolle", category: "Philosophy", description: "A guide to spiritual enlightenment through living in the present." },
        { id: 2, title: "The Art of War", author: "Sun Tzu", category: "Strategy", description: "An ancient guide on warfare and strategy applicable to business and personal growth." },
        { id: 3, title: "Atomic Habits", author: "James Clear", category: "Self-Improvement", description: "A practical guide on how small changes lead to remarkable results." }
        // Add more fallback books if desired
    ];

    try {
        const response = await fetch("books.json");
        if (!response.ok) throw new Error("Failed to fetch books");
        const books = await response.json();

        // Find today's book based on the day of the year
        const bookOfTheDay = books.find(book => book.id === dayOfYear) || fallbackBooks[Math.floor(Math.random() * fallbackBooks.length)];
        displayBook(bookOfTheDay);

    } catch (error) {
        console.error("Error fetching books:", error);

        // Display a random book from fallback list in case of an error
        const randomBook = fallbackBooks[Math.floor(Math.random() * fallbackBooks.length)];
        displayBook(randomBook);
    }
}

function displayBook(book) {
    const bookCard = document.getElementById("book-card");
    bookCard.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">${book.title}</h2>
        <p class="text-gray-700 mb-2"><strong>Author:</strong> ${book.author}</p>
        <p class="text-gray-700 mb-2"><strong>Category:</strong> ${book.category}</p>
        <p class="text-gray-600">${book.description}</p>
    `;
}

fetchBookOfTheDay();
