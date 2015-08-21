function Library() {
  this.shelves = {};

  this.addShelf = function(genre) {
    this.shelves[genre] = new Shelf();
  };

  this.removeShelf = function(genre) {
    if (this.shelves.hasOwnProperty(genre)) {
      delete this.shelves[genre];
      console.log(this.shelves);
    } else {
      console.log('That shelf does not exist.');
    }
  };

  this.addBook = function(genre, isbn, title, author) {
    this.shelves[genre].books[isbn] = new Book(title, author);
  };

  this.removeBook = function(genre, book) {
    var obj = this.shelves[genre].books;
    for(prop in obj) {
      if (obj[prop].title === book) {
        delete obj[prop];
        break;
      }
    }
  };

  this.returnShelfBooks = function(genre) {
    var storedBooks = [];
    for(prop in this.shelves[genre].books) {
     storedBooks.push(this.shelves[genre].books[prop]);
    }
    return storedBooks;
  };
};