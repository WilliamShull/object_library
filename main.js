var library = new Library();

library.addShelf('fantasy');
library.addShelf('comedy');
library.addShelf('classics');
library.addBook('fantasy', 1, 'Dune', 'Robert Herbert');
library.addBook('fantasy', 2, 'Game of Thrones', 'George R. R. Martin');
library.addBook('fantasy', 3, 'Cycle of Arawn, The', 'Edward W. Robertson');
library.addBook('comedy', 1, 'Bossypants', 'Tina Fey');
library.addBook('comedy', 2, 'Gumption', 'Nick Offerman');
library.addBook('comedy', 3, 'Dad is Fat', 'Jim Gaffigan');
library.addBook('classics', 1, 'To Kill a Mockingbird', 'Harper Lee');
library.addBook('classics', 2, 'Treasure Island', 'Robert Louis Stevenson');
library.addBook('classics', 3, 'Fahrenheit 451', 'Ray Bradbury');
setBooks('fantasy', library.returnShelfBooks('fantasy'));
setBooks('comedy', library.returnShelfBooks('comedy'));
setBooks('classics', library.returnShelfBooks('classics'));

function nextBookIndex(genre) {
  return Object.keys(library.shelves[genre].books).length + 1;
};

function setBooks(genre, bookList) {
  var $container = $('<div id="' + genre + '-container"</div>').appendTo('#book-container');
  $container.append('<p>Books in ' + genre + ':</p>');
  $('<ul id="'+genre+'"></ul>').appendTo($container);
  if(bookList) {
    for(var i=0; i < bookList.length; i++) {
      $('#' + genre).append('<li>' + bookList[i].title + ' by: ' + bookList[i].author + '</li>');
    }
  }
};

$('#new-book-button').on('click', function() {
  var genre = $('#new-genre').val();
  var title = $('#new-title').val();
  var author = $('#new-author').val();
  var bookIndex = nextBookIndex(genre);
  library.addBook(genre, bookIndex, title, author);
  $('#' + genre).append('<li>' + title + ' by: ' + author + '</li>');
});

$('#remove-button').on('click', function() {
  var genre = $('#genre-filter').val();
  var title = $('#remove-book').val();
  library.removeBook(genre, title);
  $('#'+genre+' li:contains('+title+')').remove();
});

$('#new-shelf-button').on('click', function() {
  var genre = $('#new-shelf').val();
  library.addShelf(genre);
  setBooks(genre);
});

$('#remove-genre-button').on('click', function() {
  var genre = $('#remove-genre').val();
  library.removeShelf(genre);
  $('#' + genre + '-container').remove();
});

