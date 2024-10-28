# 📚 Books of the Day

A simple web app that presents a different book each day of the year, designed to inspire, inform, and entertain readers with selections across various genres including philosophy, science, business, personal growth, and more. The project leverages **HTML**, **Tailwind CSS**, and **JavaScript**, using a **JSON file** containing 365 books for daily rotation.

## 🎉 Features

- **Daily Book Recommendation**: Automatically displays a different book each day based on the day of the year (1 to 365).
- **Data from JSON**: Book information, including title, author, category, and description, is stored in a JSON file for easy modification and scalability.
- **Simple and Responsive Design**: Tailwind CSS is used to create a clean, responsive design that adapts to various screen sizes.
- **Easy to Deploy and Customize**: Simple file-based structure makes it easy to deploy on GitHub Pages or other static site hosts.

## 📁 Project Structure

```
books-of-the-day/
├── index.html           # Main HTML file with Tailwind CSS and container for book display
├── script.js            # JavaScript file to calculate the book of the day and render it
├── books.json           # JSON file containing an array of 365 books
├── README.md            # Project documentation
```

## 📖 How It Works

1. **Calculate Day of the Year**: The JavaScript code calculates the current day of the year (1–365).
2. **Match Book to Day**: Each book in `books.json` has an `id` from 1 to 365. Based on the day of the year, the script selects and displays the book with the matching `id`.
3. **Display Book Details**: The book's title, author, category, and description are displayed on the page.

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- Git for cloning the repository (or download directly from GitHub)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/halimbahae/books-of-the-day.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd books-of-the-day
   ```

3. **Open `index.html` in Your Browser**

   You can open `index.html` directly in a web browser to see the app in action, or use a local server for development.

### Deployment

To deploy on GitHub Pages:

1. Commit and push all files to the `main` branch on GitHub.
2. Go to your repository settings on GitHub.
3. Under **Pages**, set the branch to `main` and the folder to `/root`.
4. Your site will be live at `https://halimbahae.github.io/books-of-the-day`.

## 📚 Adding or Updating Books

To modify the list of books:

1. Open `books.json`.
2. Add or update entries in JSON format. Each book should have a unique `id` corresponding to a day of the year.
   ```json
   {
       "id": 1,
       "title": "The Power of Now",
       "author": "Eckhart Tolle",
       "category": "Philosophy",
       "description": "A guide to spiritual enlightenment through living in the present."
   }
   ```
3. Save changes. The application will automatically show updated information based on the day.

## 🛠 Technologies Used

- **HTML**: Provides the structure of the webpage.
- **Tailwind CSS**: Simple, responsive styling framework for modern, consistent design.
- **JavaScript**: Implements date-based logic to dynamically load each day's book.
- **JSON**: Stores book data in an accessible, easily updated format.

## 💡 Customization Ideas

- **Add More Details**: Include more details for each book, like publication year, ISBN, or a link to purchase.
- **Random Book Option**: Add a button to display a random book rather than just the daily selection.
- **Genre Filters**: Add a feature to let users filter books by category.

## 📜 License

This project is open-source and available under the MIT License. Feel free to fork, modify, and share it!
