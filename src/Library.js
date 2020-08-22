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
  for (i = 0; i < library.shelves.fiction.length; i++) {
    if (library.shelves.fiction[i].title === bookTitle) {
      library.shelves.fiction.splice(i, 1);
      return 'You have now checked out ' + bookTitle + ' from the ' + library.name;
    }
  }
  for (i = 0; i < library.shelves.fantasy.length; i++) {
    if (library.shelves.fantasy[i].title === bookTitle) {
      library.shelves.fantasy.splice(i, 1);
      return 'You have now checked out ' + bookTitle + ' from the ' + library.name;
    }
  }
  for (i = 0; i < library.shelves.nonFiction.length; i++) {
    if (library.shelves.nonFiction[i].title === bookTitle) {
      library.shelves.nonFiction.splice(i, 1);
      return 'You have now checked out ' + bookTitle + ' from the ' + library.name;
    }
  }

  return "Sorry, there are currently no copies of " + bookTitle + " available at the Denver Public Library"
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
