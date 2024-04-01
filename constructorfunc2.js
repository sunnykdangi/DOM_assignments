// Author constructor function
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

// Book constructor function
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author; // An Author object
    this.genre = genre;
    this.price = price;
}

// Method to get book information
Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log('---');
};

// Create instances of Author
const author1 = new Author('J.K. Rowling', 1965, 'British');
const author2 = new Author('George Orwell', 1903, 'English');

// Create instances of Book
const book1 = new Book('Harry Potter and the Sorcerer\'s Stone', author1, 'Fantasy', 19.99);
const book2 = new Book('1984', author2, 'Dystopian', 14.99);

// Display book details
book1.getBookInfo();
book2.getBookInfo();
