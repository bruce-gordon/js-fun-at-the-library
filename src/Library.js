function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
      }
  }
}

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book);
  } else if (book.genre === 'nonFiction') {
    library.shelves.nonFiction.push(book);
  } else if (book.genre === 'fiction') {
    library.shelves.fiction.push(book);
  }
}

function checkoutBook(library, bookTitle) {
  library.shelves.fiction.shift();
  return 'You have now checked out ' + bookTitle + ' from the ' + library.name;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
