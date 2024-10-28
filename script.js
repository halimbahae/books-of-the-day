document.addEventListener('DOMContentLoaded', () => {
    // Calculate the day of the year (1 to 365)
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Fetch the book data
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            // Find the book of the day using the dayOfYear as an index
            const bookOfTheDay = data.find(book => book.id === dayOfYear);

            // Display the book of the day
            const bookCard = document.getElementById('book-card');
            bookCard.innerHTML = `
                <h2 class="text-2xl font-bold mb-2">${bookOfTheDay.title}</h2>
                <p class="text-gray-700 font-semibold">by ${bookOfTheDay.author}</p>
                <p class="italic text-blue-600">${bookOfTheDay.category}</p>
                <p class="mt-4 text-gray-600">${bookOfTheDay.description}</p>
            `;
        })
        .catch(error => console.error('Error fetching books:', error));
});
